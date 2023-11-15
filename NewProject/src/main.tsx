import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
import App from './App.tsx'
import Home from './DefaultScreen.tsx'
import { BrowserRouter, Routes, Route } from "react-router-dom";
=======
import LoginScreen from './Screen/LoginScreen.tsx'
import DefaltScreen from './Screen/DefaltScreen.tsx'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
>>>>>>> revert

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
<<<<<<< HEAD
        <Route path='/login' element={<App />} />
        <Route path="/home" element={<Home />} />
=======
        <Route path='/' element={CheckLogin()} />
        <Route path='/Login' element={<LoginScreen />} />
        <Route path="/Defalt" element={<DefaltScreen />} />
>>>>>>> revert
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)

export function CheckLogin() {
  if (!localStorage.getItem("token")) {
    return (
      <LoginScreen />
    );
  }
  else {
    return (
      <DefaltScreen />
    )
  }
}
