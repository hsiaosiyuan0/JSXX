import {gen} from "../../src"

const sourceEl = document.getElementById("source")
const ctxEl = document.getElementById("ctx")
const btn = document.getElementById("btn")
const out = document.getElementById("out")

const ctx = {
  classNum: "CS01",
  students: [{
    name: "Tom",
    sex: 1,
    age: 20
  }, {
    name: "Jim",
    sex: 1,
    age: 19
  }, {
    name: "Liza",
    sex: 0,
    age: 18
  }],
  sayHi (name) {
    console.log(`hello ${name}`)
  }
}

ctxEl.value = JSON.stringify(ctx, null, 2)

function run () {
  const source = sourceEl.value

  function h (type, props, children) {
    return {type, props, children}
  }

  console.time("Code generation")
  const res = gen(source)
  console.timeEnd("Code generation")

  // render fun
  console.groupCollapsed("Compiled render function:")
  console.log(res.render.toString())
  console.groupEnd()

  function createElement (vnode) {
    if (typeof vnode === "string") {
      return document.createTextNode(vnode)
    } else if (Array.isArray(vnode)) {
      return vnode.map(createElement)
    } else {
      const node = document.createElement(vnode.type)
      vnode.children.reduce((prev, vnode) => {
        if (Array.isArray(vnode)) {
          prev = prev.concat(createElement(vnode))
        } else {
          prev.push(createElement(vnode))
        }
        return prev
      }, []).forEach(node.appendChild.bind(node))
      vnode.props.filter(prop => /^on[A-Z][a-zA-Z]+/.test(prop.key)).forEach(prop => {
        const cb = prop.val
        const evt = prop.key.slice(2).toLowerCase()
        node.addEventListener(evt, cb)
      })
      return node
    }
  }

  console.time("Render")
  const vnode = res.render(ctx, h)
  console.groupCollapsed("VNode:")
  console.log(JSON.stringify(vnode, null, 2))
  console.groupEnd()

  const node = createElement(vnode)
  console.timeEnd("Render")
  
  out.innerHTML = ""
  out.appendChild(node)
}

btn.addEventListener("click", run)
