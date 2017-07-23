import * as antlr4 from "antlr4"
import {JSXXLexer as Lexer} from "./antlr4/gen/JSXXLexer"
import {JSXXParser as Parser} from "./antlr4/gen/JSXXParser"
import {JSXXParserVisitor as ParserVisitor} from "./antlr4/gen/JSXXParserVisitor"
import {Enum, enumerate} from "./util"

export class NodeType extends Enum {

  @enumerate()
  static HTML_COMMENT

  @enumerate()
  static MULTILINE_COMMENT

  @enumerate()
  static SINGLELINE_COMMENT

  @enumerate()
  static NORMAL_ELEMENT

  @enumerate()
  static VOID_ELEMENT

  @enumerate()
  static ATTR

  @enumerate()
  static ATTR_NAME

  @enumerate()
  static ATTR_NORMAL_VAL

  @enumerate()
  static ATTR_EXPR_VAL

  @enumerate()
  static CHAR_DATA

  @enumerate()
  static HTML_ENTITY

  @enumerate()
  static FOR_STMT

  @enumerate()
  static IF_STMT

  @enumerate()
  static ELSEIF_BRANCH

  @enumerate()
  static MEMBER_INDEX_EXPR

  @enumerate()
  static MEMBER_DOT_EXPR

  @enumerate()
  static FUN_CALL_EXPR

  @enumerate()
  static BINARY_EXPR

  @enumerate()
  static OP

  @enumerate()
  static TERNARY_EXPR

  @enumerate()
  static IDENTIFIER

  @enumerate()
  static NULL_LITERAL

  @enumerate()
  static BOOLEAN_LITERAL

  @enumerate()
  static STRING_LITERAL

  @enumerate()
  static INTEGER_LITERAL

  @enumerate()
  static HEX_INTEGER_LITERAL

  @enumerate()
  static REAL_LITERAL

  @enumerate()
  static PAREN_EXPR

  @enumerate()
  static UNSUPPORTED
}

const voidTags = ["area", "base", "br", "col",
  "embed", "hr", "img", "input", "keygen", "link",
  "menuitem", "meta", "param", "source", "track", "wbr"]

class Node {
  type = NodeType.UNSUPPORTED
  lineNumber = -1
  charIndex = -1

  setSourceInfoFromToken (token) {
    if (token instanceof antlr4.CommonToken) {
      this.lineNumber = token.line
      this.charIndex = token.column
    } else {
      this.lineNumber = token.symbol.line
      this.charIndex = token.symbol.column
    }
  }
}

class NormalElementNode extends Node {
  type = NodeType.NORMAL_ELEMENT
  tagName = ""
  attributes = []
  children = []
}

class AttrNode extends Node {
  type = NodeType.ATTR
}

class AttrNameNode extends Node {
  type = NodeType.ATTR_NAME
  text = ""
}

class AttrNormalValNode extends Node {
  type = NodeType.ATTR_NORMAL_VAL
  text = ""
}

class CharDataNode extends Node {
  type = NodeType.CHAR_DATA
  text = ""
}

class VoidElementNode extends NormalElementNode {

}

class MemberIndexExprNode extends Node {
  type = NodeType.MEMBER_INDEX_EXPR
  left = null
  right = null
}

class MemberDotExprNode extends Node {
  type = NodeType.MEMBER_DOT_EXPR
  left = null
  right = null
}

class IdentifierNode extends Node {
  type = NodeType.IDENTIFIER
  text = ""
}

class FunCallExprNode extends Node {
  type = NodeType.FUN_CALL_EXPR
  name = null
  params = []
}

class BinaryExprNode extends Node {
  type = NodeType.BINARY_EXPR
  op = null
  left = null
  right = null
}

class OpNode extends Node {
  type = NodeType.OP
  text = ""
}

class LiteralNode extends Node {
  text = ""
}

class ParenExprNode extends Node {
  type = NodeType.PAREN_EXPR
  child = null
}

class TernaryExprNode extends Node {
  type = NodeType.TERNARY_EXPR
  condition = null
  trueBranch = null
  falseBranch = null
}

class ElseifBranchNode extends Node {
  type = NodeType.ELSEIF_BRANCH
  condition = null
  body = null
}

class IfStmtNode extends ElseifBranchNode {
  type = NodeType.IF_STMT
  elseifBranches = []
  elseBranch = null
}

class ForStmtNode extends Node {
  type = NodeType.FOR_STMT
  tmp = null
  idx = null
  target = null
  body = null
}

class HTMLEntityNode extends Node {
  type = NodeType.HTML_ENTITY
  text = ""
}

class TextRange {
  line = -1
  begin = -1
  end = -1

  static fromToken (token) {
    const ins = new TextRange()
    ins.line = token.symbol.line
    ins.begin = token.symbol.column
    ins.end = ins.begin + token.getText().length
    return ins
  }

  toString () {
    return `${this.line}:${this.begin}:${this.end}`
  }
}

class SyntaxError extends Error {
  sourceStart = null
  sourceStop = null

  constructor (msg, start, stop, id) {
    if (typeof start === "number") {
      id = start
      start = null
    }
    super(msg, id)
    if (start) {
      this.sourceStart = TextRange.fromToken(start)
    }
    if (stop) {
      this.sourceStop = TextRange.fromToken(stop)
    }
  }

  toString () {
    let msg = this.message
    if (this.sourceStart) {
      msg += ` from [${this.sourceStart.toString()}]`
    }
    if (this.sourceStop) {
      msg += ` to [${this.sourceStop.toString()}]`
    }
    return msg
  }
}

class JSXXVisitor extends ParserVisitor {
  visitRoot (ctx) {
    return this.visitElement(ctx.element())
  }

  visitElement (ctx) {
    if (ctx instanceof Parser.NormalElementContext) {
      return this.visitNormalElement(ctx)
    } else if (ctx instanceof Parser.VoidElementContext) {
      return this.visitVoidElement(ctx)
    }
  }

  visitNormalElement (ctx) {
    const open = ctx.TagInsideName(0)
    const close = ctx.TagInsideName(1)

    const node = new NormalElementNode()
    node.tagName = open.getText()

    if (node.tagName !== close.getText()) {
      throw new SyntaxError("unbalance tag", open, close)
    } else if (voidTags.indexOf(node.tagName) !== -1) {
      throw new SyntaxError(`cannot use void tag as normal: ${node.tagName}`, open, close)
    }

    node.setSourceInfoFromToken(open)
    node.attributes = ctx.attribute().map(ctx => this.visitAttribute(ctx))
    node.children = this.visitContent(ctx.content())
    return node
  }

  visitAttribute (ctx) {
    const attrNode = new AttrNode()
    const nameToken = ctx.TagInsideName()
    attrNode.setSourceInfoFromToken(nameToken)

    const nameNode = new AttrNameNode()
    nameNode.setSourceInfoFromToken(nameToken)
    nameNode.text = nameToken.getText()
    attrNode.name = nameNode

    let valNode = null
    if (ctx.AttrVal()) {
      const valToken = ctx.AttrVal()
      valNode = new AttrNormalValNode()
      valNode.setSourceInfoFromToken(valToken)
      valNode.text = valToken.getText()
      valNode.text = valNode.text.slice(1, valNode.text.length - 1)
      valNode.charIndex++
    } else if (ctx.expr()) {
      valNode = this.visitSingleExpr(ctx.expr().singleExpr())
    }

    attrNode.val = valNode
    return attrNode
  }

  visitContent (ctx) {
    if (ctx.children === null) {
      return []
    }
    return ctx.children.map(ctx => {
      if (ctx instanceof Parser.ElementContext) {
        return this.visitElement(ctx)
      } else if (ctx instanceof Parser.CharDataContext) {
        return this.visitCharData(ctx)
      } else if (ctx instanceof Parser.StmtContext) {
        return this.visitStmt(ctx)
      } else if (ctx instanceof Parser.ReferenceContext) {
        const node = new HTMLEntityNode()
        node.setSourceInfoFromToken(ctx.HTMLCharRef())
        node.text = ctx.HTMLCharRef().getText()
        return node
      }
    })
  }

  visitCharData (ctx) {
    const node = new CharDataNode()
    node.setSourceInfoFromToken(ctx.children[0])
    node.text = ctx.children.map(ctx => ctx.getText()).join("")
    return node
  }

  visitVoidElement (ctx) {
    const nameToken = ctx.TagInsideName()
    const node = new VoidElementNode()
    node.tagName = nameToken.getText()
    node.setSourceInfoFromToken(nameToken)
    if (voidTags.indexOf(node.tagName) === -1) {
      throw new SyntaxError(`cannot use normal tag as void: ${node.tagName}`, nameToken)
    }
    node.attributes = ctx.attribute().map(ctx => this.visitAttribute(ctx))
    return node
  }

  visitStmt (ctx) {
    if (ctx.forStmt()) {
      return this.visitForStmt(ctx.forStmt())
    } else if (ctx.ifStmt()) {
      return this.visitIfStmt(ctx.ifStmt())
    } else if (ctx.expr()) {
      return this.visitExpr(ctx.expr())
    }
  }

  visitIfStmt (ctx) {
    const node = new IfStmtNode()
    node.setSourceInfoFromToken(ctx.start)
    node.condition = this.visitSingleExpr(ctx.ifBegin().singleExpr())
    node.body = this.visitContent(ctx.content())
    const elseifBranchCtxes = ctx.elseif() || []
    node.elseifBranches = elseifBranchCtxes.map(ctx => this.visitElseif(ctx))
    node.elseBranch = ctx.elseBranch() ? this.visitContent(ctx.elseBranch().content()) : null
    return node
  }

  visitElseif (ctx) {
    const node = new ElseifBranchNode()
    node.setSourceInfoFromToken(ctx.start)
    node.condition = this.visitSingleExpr(ctx.singleExpr())
    node.body = this.visitContent(ctx.content())
    return node
  }

  visitForStmt (ctx) {
    const node = new ForStmtNode()
    node.setSourceInfoFromToken(ctx.start)

    const tmpIdx = ctx.forBegin().Identifier()
    const tmpNode = new IdentifierNode()
    tmpNode.setSourceInfoFromToken(tmpIdx[0])
    tmpNode.text = tmpIdx[0].getText()
    node.tmp = tmpNode

    if (tmpIdx[1]) {
      const idxNode = new IdentifierNode()
      idxNode.setSourceInfoFromToken(tmpIdx[1])
      idxNode.text = tmpIdx[1].getText()
      node.idx = idxNode
    }

    node.target = this.visitSingleExpr(ctx.forBegin().singleExpr())
    node.body = this.visitContent(ctx.content())
    return node
  }

  visitExpr (ctx) {
    return this.visitSingleExpr(ctx.singleExpr())
  }

  visitSingleExpr (ctx) {
    if (ctx instanceof Parser.MemberIndexExprContext) {
      return this.visitMemberIndexExpr(ctx)
    } else if (ctx instanceof Parser.MemberDotExprContext) {
      return this.visitMemberDotExpr(ctx)
    } else if (ctx instanceof Parser.FunCallExprContext) {
      return this.visitFunCallExpr(ctx)
    } else if (ctx instanceof Parser.MultiplyExprContext) {
      return this.visitBinaryExpr(ctx)
    } else if (ctx instanceof Parser.AddExprContext) {
      return this.visitBinaryExpr(ctx)
    } else if (ctx instanceof Parser.RelationalExprContext) {
      return this.visitBinaryExpr(ctx)
    } else if (ctx instanceof Parser.EqualityExprContext) {
      return this.visitBinaryExpr(ctx)
    } else if (ctx instanceof Parser.LogicalAndExprContext) {
      return this.visitBinaryExpr(ctx)
    } else if (ctx instanceof Parser.LogicalOrExprContext) {
      return this.visitBinaryExpr(ctx)
    } else if (ctx instanceof Parser.TernaryExprContext) {
      const node = new TernaryExprNode()
      node.setSourceInfoFromToken(ctx.start)
      node.condition = this.visitSingleExpr(ctx.singleExpr(0))
      node.trueBranch = this.visitSingleExpr(ctx.singleExpr(1))
      node.falseBranch = this.visitSingleExpr(ctx.singleExpr(2))
      return node
    } else if (ctx instanceof Parser.IdentifierExprContext) {
      return this.visitIdentifierExpr(ctx)
    } else if (ctx instanceof Parser.LiteralExprContext) {
      return this.visitLiteralExpr(ctx)
    } else if (ctx instanceof Parser.ParenExprContext) {
      const node = new ParenExprNode()
      node.setSourceInfoFromToken(ctx.start)
      node.child = this.visitSingleExpr(ctx.singleExpr())
      return node
    }
  }

  visitMemberIndexExpr (ctx) {
    const node = new MemberIndexExprNode()
    node.setSourceInfoFromToken(ctx.start)
    node.left = this.visitSingleExpr(ctx.singleExpr(0))
    node.right = this.visitSingleExpr(ctx.singleExpr(1))
    return node
  }

  visitMemberDotExpr (ctx) {
    const node = new MemberDotExprNode()
    node.setSourceInfoFromToken(ctx.start)
    node.left = this.visitSingleExpr(ctx.singleExpr(0))
    node.right = this.visitIdentifier(ctx.Identifier())
    return node
  }

  visitIdentifierExpr (ctx) {
    return this.visitIdentifier(ctx.Identifier())
  }

  visitIdentifier (token) {
    const node = new IdentifierNode()
    node.setSourceInfoFromToken(token)
    node.text = token.getText()
    return node
  }

  visitFunCallExpr (ctx) {
    const node = new FunCallExprNode()
    node.setSourceInfoFromToken(ctx.start)
    node.name = this.visitSingleExpr(ctx.singleExpr())
    const argListCtx = ctx.arguments().argumentList()
    node.params = argListCtx ? this.visitArgumentList(argListCtx) : []
    return node
  }

  visitArgumentList (ctx) {
    return ctx.singleExpr().map(ctx => this.visitSingleExpr(ctx))
  }

  visitBinaryExpr (ctx) {
    const node = new BinaryExprNode()
    node.setSourceInfoFromToken(ctx.start)
    node.left = this.visitSingleExpr(ctx.singleExpr(0))
    node.right = this.visitSingleExpr(ctx.singleExpr(1))

    const opNode = new OpNode()
    opNode.setSourceInfoFromToken(ctx.op)
    opNode.text = ctx.op.text
    node.op = opNode
    return node
  }

  visitLiteralExpr (ctx) {
    return this.visitLiteral(ctx.literal())
  }

  visitLiteral (ctx) {
    const node = new LiteralNode()
    node.setSourceInfoFromToken(ctx.start)
    if (ctx.NullLiteral()) {
      node.type = Node.NULL_LITERAL
      node.text = "null"
    } else if (ctx.UndefinedLiteral()) {
      node.type = NodeType.UndefinedLiteral
      node.text = "undefined"
    } else if (ctx.BooleanLiteral()) {
      node.type = NodeType.BOOLEAN_LITERAL
      node.text = ctx.BooleanLiteral().getText()
    } else if (ctx.numericLiteral()) {
      ctx = ctx.numericLiteral()
      if (ctx.IntegerLiteral()) {
        node.type = NodeType.INTEGER_LITERAL
        node.text = ctx.IntegerLiteral().getText()
      } else if (ctx.HexIntegerLiteral()) {
        node.type = NodeType.HEX_INTEGER_LITERAL
        node.text = ctx.HexIntegerLiteral().getText()
      } else if (ctx.RealLiteral()) {
        node.type = NodeType.REAL_LITERAL
        node.text = ctx.RealLiteral().getText()
      }
    } else if (ctx.StringLiteral()) {
      node.type = NodeType.STRING_LITERAL
      node.text = ctx.StringLiteral().getText()
      node.text = node.text.slice(1, node.text.length - 1)
    }
    return node
  }
}

export const parse = (source) => {
  if (!source) return null
  const input = new antlr4.InputStream(source)
  const lexer = new Lexer(input)
  const tokens = new antlr4.CommonTokenStream(lexer)
  const parser = new Parser(tokens)
  parser.buildParseTrees = true
  return new JSXXVisitor().visitRoot(parser.root())
}
