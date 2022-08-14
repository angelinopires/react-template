import * as React from 'react'
import { Route, Routes as ReactRouter } from 'react-router-dom'

// PAGES
import { About, Home } from '../../shared/pages'

const Routes = () => (
  <ReactRouter>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </ReactRouter>
)

export { Routes }
export default Routes
