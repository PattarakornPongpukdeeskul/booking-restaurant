import React from 'react'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { RecoilRoot } from 'recoil'

import { PlaceList, PlaceDetail, Login } from './pages'
import { PrivateRoute } from './components'
import './App.css'

export const App = () => {
  return (
    <React.StrictMode>
      <Router>
        <RecoilRoot>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <PrivateRoute />
                </>
              }>
              <Route path="/" element={<PlaceList />} />
              <Route path="/place-detail" element={<PlaceDetail />} />
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </RecoilRoot>
      </Router>
    </React.StrictMode>
  )
}
