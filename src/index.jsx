import { BrowserRouter } from 'react-router-dom'
import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

// CORE
import { App } from './core/index'

// STYLES
import './shared/scss/main.scss'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
)
