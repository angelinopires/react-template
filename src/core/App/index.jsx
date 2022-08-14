import React from 'react'
import { Link } from 'react-router-dom'

// STYLES
import './index.scss'

const App = () => (
  <div className="main">
    <h1>Welcome to React Template 😎</h1>

    <h2>This is a routing demo</h2>
    <ul>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/">Home</Link>
      </li>
    </ul>
  </div>
)

export { App }
export default App
