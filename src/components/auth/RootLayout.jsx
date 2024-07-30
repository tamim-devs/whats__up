import React from 'react'
import Sidebar from '../sidebar/Sidebar'
import { Outlet } from 'react-router-dom'

function RootLayout() {
  return (
    <>
      <Sidebar/>
      <Outlet/>
    </>
  )
}

export default RootLayout