import React, { useState } from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from './components/auth/RootLayout';
import Login from './components/auth/Login';
import Regestration from './components/auth/Regestration';
import Sidebar from './components/sidebar/Sidebar';
import Home from './pages/home/Home';

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(

      <Route>
        <Route element={<RootLayout/>}>
        <Route path='/home' element={<Home/>}/>
     </Route>
        <Route path='/' element={<Login/>}/>
        <Route path='/regestraion' element={<Regestration/>}/>
      </Route>
    
    )
  );
  return (
    <RouterProvider
    router={router} />
  )
}

export default App