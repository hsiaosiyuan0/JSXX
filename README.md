# About

该模板具有类似 JSX 的语法，不同的是它提供了更为丰富的语句，比如 `for` 和 `if`

与 JSX 类似，该模板引擎并不在运行时进行模板的解析，而是采用编译的方式，将模板内容编译为与之对应的 render function

好像 Vue 的模板也提供了预编译的功能，不过 Vue 模板编译产生的 render function 中会使用 `with` 语句来绑定其中的变量，而在 `strict`
模式下，`with` 语句是不能使用的

所以该模板引擎在编译的过程中，会分析变量的作用域，来决定哪些变量是 "全局" 的，哪些是继承于父级作用域的，对于 "全局" 的变量，会自动的
将其编译为 `__ctx__.variable` 的形式，这样在调用生成的模板函数时，只需将上下文作为参数传入即可

比如有如下的模板：

```html
<h3>{ title }</h3>
```

会生成类似下面的 render function:

```js
function render (__ctx__) {
  return h("h3", [], [__ctx__.title])
}
```

调用方式为:

```js
const vnode = render({
  title: "jsxx"
})
```

这是一个在浏览器中使用该模板的 [例子](http://jsxx.hsiaosiyuan.com/)，它的代码在 [这里](https://github.com/hsiaosiyuan0/JSXX/tree/master/test/browser)
