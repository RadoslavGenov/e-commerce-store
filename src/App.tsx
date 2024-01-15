import React, { useEffect } from 'react'
import logo from './logo.svg'
import './App.css'
import { USER, apiInstance } from './api/api'

function App() {
  useEffect(() => {
    apiInstance.get(`${USER}/65a3e1e04a7f3b08b8c5a510`).then((user) => {
      console.log(user)
    })
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
