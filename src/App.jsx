import { useState } from 'react'
import logo from "./assets/images/logo.png"
function App() {
  const [message, setMessage] = useState("")

  return (
    <div align="center">
      <img style={{ "height": "50rem" }} src={logo}></img>
      <div style={{"marginTop":"-100px"}}>
        <h1 className="mie-textcolorwhite">MadeIntElegance</h1>
        <h3 className="mie-textcolorwhite">made with intelligence for elegance</h3>
      </div>
    </div>
  )
}

export default App
