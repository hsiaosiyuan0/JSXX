# About

This is a template engine works similarly with JSX but provides extra syntax elements like `for` and `if`.

This engine also compiles template contents to a render function which returns vdom to represent the structure of template.

Vue.js also compiles it's templates but it uses [with](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/with) in the object code. We know `with` can't be used in [strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode).

This implementation will analyze the scope of variables to find out which are referred from outer scopes, local or global. Global variables will prefixed with `__ctx__.` to be a MemberExpression, `__ctx__` is resolved from the first argument of the render function.

For example, there is a template like below：

```html
<h3>{ title }</h3>
```

will produce render function:

```js
function render (__ctx__) {
  return h("h3", [], [__ctx__.title])
}
```

We see `title` is resolved as global so it's prefixed with `__ctx__.`.

Finally we could use the render function like:

```js
const vnode = render({
  title: "jsxx"
})
```

Another more complex example:

```html
<div>
  <ul>
    { for item in items }
      <li>
        <ul>
          { for child in item.children }
            <li>{ item.name + " " + child.name }</li>
          { end }
        </ul>
      </li>
    { end }
  </ul>
</div>
```

will produce render function:

```js
function render (__ctx__, h) {
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

  function forSkeKYBzzUW (item) {
    return __loop__(item.children, function (child) {
      return [h("li", [], [(item.name + " " + child.name) + ""])]
    })
  }

  function forHJtYSMzIW () {
    return __loop__(__ctx__.items, function (item) {
      return [h("li", [], [h("ul", [], [forSkeKYBzzUW(item)])])]
    })
  }

  return h("div", [], [h("ul", [], [forHJtYSMzIW()])])
}
```

## Demo

Here are the steps to run a local demo:

1. `npm install`
2. `npm run demo`
3. Open browser console to see what are the outputs.
