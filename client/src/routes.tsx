import React from 'react'
import { BrowserRouter, Routes as Routing, Route } from 'react-router-dom'
import { Home, Login } from './pages'
import { PATH_LOGIN, PATH_MAIN } from './constants/routes'
const Routes = (): React.ReactElement => {
  return (
    <BrowserRouter>
      <Routing>
        <Route path={PATH_MAIN} element={<Home />} />
        <Route path={PATH_LOGIN} element={<Login />} />
      </Routing>
    </BrowserRouter>
  )
}

export default Routes
