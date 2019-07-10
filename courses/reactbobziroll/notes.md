# https://scrimba.com/p/p7P5Hd/cBv8ruL

virtual dom - fast
reusable components

import React from "react"
import ReactDOM from "react-dom"

ReactDOM.render(what do i want to render, where do i want to render it)

JSX

Can't render two JSX elements next to each other - wrap in singular element

fucntional components

function MyApp() {
  return (
  <ul>
  <li>
  Line
  </li>
  </ul>
  )
  }
  
  ReactDOM.render(<MyApp />, document.querySelector('#root'))
