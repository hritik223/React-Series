import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


function MyApp() {
  return (
    <div>
      <h1>My React App</h1>
      <p>This is a simple React application.</p>
    </div>
  )
}

// const reactElement = {
//     type: 'a',
//     props: {
//         href: "https://www.google.com",
//         target: "_blank",
//     },
//     children: 'Click me to visit Google'
// }


const anotherElement = (
  <a href="https://www.google.com" target="_blank">Visit google</a>
)

const anotherUser = "chai aur code"

const reactElement = React.createElement(
  'a',
  {href: "https://www.google.com", target: "_blank"},
  'Click me to visit Google'
)

ReactDom.createRoot(document.getElementById('root'))
.render(

  // reactElement
  <App/>

)
// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )
