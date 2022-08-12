import React from 'react'
import { BrowserRouter } from 'react-router-dom'

export default function App() {
  return (
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  )
}
