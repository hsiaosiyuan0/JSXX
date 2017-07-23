import {parse, NodeType} from "./frontent"
import {generate, characters} from "shortid"
import * as util from "util"

characters("0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$_")

function element (elem) {
  let children = "[]"
  if (elem.children.length) {
    children = elem.children.map(c => {
      switch (c.type) {
        case NodeType.IDENTIFIER:
          return `(${content(c)}) + ""`
        case NodeType.INTEGER_LITERAL:
        case NodeType.HEX_INTEGER_LITERAL:
        case NodeType.REAL_LITERAL:
          return `${content(c)}`
        case NodeType.BINARY_EXPR:
        case NodeType.TERNARY_EXPR:
        case NodeType.MEMBER_DOT_EXPR:
        case NodeType.MEMBER_INDEX_EXPR:
        case NodeType.PAREN_EXPR:
          return `(${content(c)}) + ""`
        default:
          return content(c)
      }
    }).filter(c => c !== null)
    children = `[${children.join(", ")}]`
  }
  return `h("${elem.tagName}", ${attrs(elem.attributes)}, ${children})`
}

function attrs (attrs) {
  return `[${attrs.map(a => attr(a)).join(", ")}]`
}

function attr (attr) {
  return `{key: "${attr.name.text}", val: ${attrVal(attr.val)}}`
}

function attrVal (attrVal) {
  if (!attrVal) return "null"
  if (attrVal.type === NodeType.ATTR_NORMAL_VAL) {
    return `"${attrVal.text}"`
  } else {
    if (attrVal.type !== NodeType.FUN_CALL_EXPR) {
      return content(attrVal)
    } else {
      return `function () { ${content(attrVal)} }`
    }
  }
}

const indentSize = 2
let depth = 2

const regCharDataAllWS = /^\s+$/

let funs = []

class Symtab extends Array {
  constructor (parent = null) {
    super()
    this.parent = parent
  }
}

class SymtabStack extends Array {
  push (symtab = null) {
    if (symtab === null) {
      symtab = new Symtab(this.localSymtab)
    }
    return super.push(symtab)
  }

  get localSymtab () {
    return this.length ? this[this.length - 1] : null
  }

  hasLocal (name) {
    const local = this.localSymtab
    if (local === null) return false
    return local.indexOf(name) !== -1
  }

  enterLocal (name) {
    let local = this.localSymtab
    if (local === null) {
      this.push()
      local = this.localSymtab
    }
    if (local.indexOf(name) === -1) local.push(name)
  }

  has (name) {
    let symtab = this.localSymtab
    while (symtab) {
      if (symtab.indexOf(name) !== -1) return true
      symtab = symtab.parent
    }
    return false
  }
}

const symtabStack = new SymtabStack()

class ActualParamsStack extends Array {
  push (actualParams = null) {
    if (actualParams === null) {
      actualParams = []
    }
    return super.push(actualParams)
  }

  pop () {
    const last = super.pop()
    if (last) {
      last.forEach(n => {
        if (!symtabStack.hasLocal(n)) {
          this.enterLocal(n)
        }
      })
    }
    return last
  }

  get localParams () {
    return this.length ? this[this.length - 1] : null
  }

  enterLocal (name) {
    let local = this.localParams
    if (local === null) {
      this.push()
      local = this.localParams
    }
    if (local.indexOf(name) === -1) local.push(name)
  }
}

const actualParamsStack = new ActualParamsStack()

function content (ct) {
  switch (ct.type) {
    case NodeType.NORMAL_ELEMENT: {
      return element(ct)
    }
    case NodeType.IDENTIFIER: {
      return resolveScope(ct.text)
    }
    case NodeType.CHAR_DATA: {
      if (regCharDataAllWS.test(ct.text)) {
        return null
      }
      return `"${escape(ct.text)}"`
    }
    case NodeType.STRING_LITERAL: {
      return `"${ct.text}"`
    }
    case NodeType.INTEGER_LITERAL:
    case NodeType.HEX_INTEGER_LITERAL:
    case NodeType.REAL_LITERAL: {
      return ct.text
    }
    case NodeType.BINARY_EXPR: {
      return `${content(ct.left)} ${ct.op.text} ${content(ct.right)}`
    }
    case NodeType.TERNARY_EXPR: {
      return `${content(ct.condition)} ? ${content(ct.trueBranch)} : ${content(ct.falseBranch)}`
    }
    case NodeType.FUN_CALL_EXPR: {
      const params = ct.params.map(p => content(p)).join(", ")
      return `${content(ct.name)}(${params})`
    }
    case NodeType.MEMBER_DOT_EXPR: {
      return `${content(ct.left)}.${ct.right.text}`
    }
    case NodeType.MEMBER_INDEX_EXPR: {
      return `${content(ct.left)}[${content(ct.right)}]`
    }
    case NodeType.PAREN_EXPR: {
      return `(${content(ct.child)})`
    }
    case NodeType.HTML_ENTITY: {
      return `"${ct.text}"`
    }
    case NodeType.IF_STMT: {
      const outerDepth = depth
      depth = 3

      symtabStack.push()
      actualParamsStack.push()

      const elseifBranches = ct.elseifBranches.map(b => content(b)).join(" ")
      const elseBranch = ct.elseBranch ? `else {
${block(ct.elseBranch)}
  }` : ""

      const funName = `if${generate()}`
      let fun = `function ${funName} (%s) {
  if (${content(ct.condition)}) {
${block(ct.body)}
  } ${elseifBranches}${elseBranch}
}`
      symtabStack.pop()

      let actualParams = actualParamsStack.pop()
      actualParams = actualParams ? actualParams.join(", ") : ""

      fun = util.format(fun, actualParams)
      depth = outerDepth
      funs.push(fun)
      return `${funName}(${actualParams})`
    }
    case NodeType.ELSEIF_BRANCH: {
      return `else if(${content(ct.condition)}) {
${block(ct.body)}
  }`
    }
    case NodeType.FOR_STMT: {
      const outerDepth = depth
      depth = 2

      symtabStack.push()
      symtabStack.enterLocal(ct.tmp.text)
      let idx = ""
      if (ct.idx) {
        idx = `, ${ct.idx.text}`
        symtabStack.enterLocal(ct.idx.text)
      }

      actualParamsStack.push()

      const funName = `for${generate()}`
      let fun = `${pad()}function ${funName} (%s) {
${(depth++, pad())}return __loop__(${content(ct.target)}, function (${ct.tmp.text}${idx}) {
${block(ct.body)}
${pad()}})
${(depth--, pad())}}`
      symtabStack.pop()

      let actualParams = actualParamsStack.pop()
      actualParams = actualParams ? actualParams.join(", ") : ""

      fun = util.format(fun, actualParams)
      depth = outerDepth
      funs.push(fun)
      return `${funName}(${actualParams})`
    }
  }
  return "null"
}

function resolveScope (name) {
  if (symtabStack.hasLocal(name)) {
    return name
  } else if (symtabStack.has(name)) {
    symtabStack.enterLocal(name)
    actualParamsStack.enterLocal(name)
    return name
  }
  return "__ctx__." + name
}

function block (nodes) {
  depth++
  const ret = `${pad()}return [${nodes.map(node => content(node)).filter(c => c !== null).map(c => c).join(", ")}]`
  depth--
  return ret
}

function pad () {
  let len = indentSize * depth
  let ret = ""
  for (let i = 0; i < len; i++) {
    ret += " "
  }
  return ret
}

function escape (str) {
  const ret = []
  for (let i = 0, len = str.length; i < len; i++) {
    const ch = str[i]
    switch (ch) {
      case "\r": {
        ret.push("\\r")
        break
      }
      case "\n": {
        ret.push("\\n")
        break
      }
      case "\t": {
        ret.push("\\t")
        break
      }
      case "\"": {
        ret.push("\\\"")
        break
      }
      case "\'": {
        ret.push("\\'")
        break
      }
      case "\\": {
        ret.push("\\\\")
        break
      }
      case "\b": {
        ret.push("\\b")
        break
      }
      case "\f": {
        ret.push("\\f")
        break
      }
      case "\v": {
        ret.push("\\v")
        break
      }
      default:
        ret.push(ch)
    }
  }
  return ret.join("")
}

export const gen = (source) => {
  const ast = parse(source)
  if (ast === null) return null

  let wrap = `(function () {
  return function (__ctx__, h) {
    function __loop__ (obj, cb) {
      if (Array.isArray(obj)) {
        return obj.reduce(function (prev, e, i) {
          return prev.concat(cb(e, i))
        }, [])
      } else {
        return Object.keys(obj).map(function (prev, key) {
          return prev.concat(cb(obj[key], key))
        }, [])
      }
    }
%s
    return ${element(ast)}
  }
})()`

  wrap = util.format(wrap, funs.join("\n"))
  funs = []
  return {
    render: eval(wrap),
    ast: ast
  }
}
