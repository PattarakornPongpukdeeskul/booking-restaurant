import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { useRecoilValue } from 'recoil'

import { Sidebar } from '../components'
import { Header } from '../containers'
import { loginState } from '../recoil/atom'

export const PrivateRoute = () => {
  const auth = useRecoilValue(loginState)

  return auth ? (
    <>
      <Header />
      <Sidebar />
      <Outlet />
    </>
  ) : (
    <Navigate to="/login" />
  )
}
