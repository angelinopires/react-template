import React from 'react'
import { Link } from 'react-router-dom'

// ASSETS
import CaltonGif from '../../shared/assets/giphy.webp'

// CORE
import { Routes } from '../Routes/index'

// STYLES
import './index.scss'

const App = () => (
  <div className="main">
    <h1 className="title title--main">Welcome to React Template 😎</h1>

    <div>
      <h2 className="title title--sub">Routing demo</h2>

      <ul className="navigation">
        <li className="navigation__link">
          <Link to="/">Home</Link>
        </li>
        <li className="navigation__link">
          <Link to="/about">About</Link>
        </li>
      </ul>
      <Routes />
    </div>

    <div>
      <h2 className="title title--sub">Assets demo</h2>

      <img alt="Calton dancing" src={CaltonGif} />
    </div>
  </div>
)

export { App }
export default App
