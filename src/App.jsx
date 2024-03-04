import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [message, setMessage] = useState("")

  return (
    <>
      <h1>Ben Kerem, Selamlar :)</h1>
      <div className="card">
        <button onClick={() => setMessage("Seni Seviyorum <3")}>
          Yıldız buraya dokunurmusun?
        </button>
        <h3>
          {message}
        </h3>
      </div>
    </>
  )
}

export default App
