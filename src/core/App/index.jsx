import { Link } from 'react-router-dom'

// ASSETS
import favicon from '../../../public/favicon.ico'
import githubPng from '../../../public/github.png'
import githubSvg from '../../../public/github.svg'
import githubWebp from '../../../public/github.webp'

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

    <section>
      <h2 className="title title--sub">Assets demo</h2>

      <div>
        <h3 className="title title--aux">File loaders</h3>

        <div className="assets">
          <div className="assets__item">
            <p>
              <strong>.png</strong>
            </p>
            <img alt="Github logo" src={githubPng} />
          </div>

          <div className="assets__item">
            <p>
              <strong>.ico</strong>
            </p>
            <img alt="Github logo" src={favicon} />
          </div>

          <div className="assets__item">
            <p>
              <strong>.webp</strong>
            </p>
            <img alt="Github logo" src={githubWebp} />
          </div>

          <div className="assets__item">
            <p>
              <strong>.svg</strong>
            </p>
            <img alt="Github logo" src={githubSvg} />
          </div>
        </div>
      </div>

      <div>
        <h3 className="title title--aux">File loaders using SCSS import</h3>

        <div className="assets">
          <div className="assets__item assets__item--png">
            <p>
              <strong>.png</strong>
            </p>
            <span />
          </div>

          <div className="assets__item assets__item--ico">
            <p>
              <strong>.ico</strong>
            </p>
            <span />
          </div>

          <div className="assets__item assets__item--webp">
            <p>
              <strong>.webp</strong>
            </p>
            <span />
          </div>

          <div className="assets__item assets__item--svg">
            <p>
              <strong>.svg</strong>
            </p>
            <span />
          </div>
        </div>
      </div>
    </section>
  </div>
)

export { App }
export default App
