import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
    return (
      <div>
        <h1>How Are You</h1>
      </div>
    )
}

/*
const reactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}
*/

const anotherElement = (
    <a href="https://google.com" target="_blank">Visit Google</a>
)

const anotherUser = "Hitesh Chaudhary"

const reactElement = React.createElement(
    'a', {href: 'https://google.com', target: '_blank'},
    'Visit Google Now',
    anotherUser
)

createRoot(document.getElementById('root')).render(

    <App / >

)
