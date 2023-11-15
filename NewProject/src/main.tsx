import React from 'react'
import ReactDOM from 'react-dom/client'
import LoginScreen from './Screen/LoginScreen.tsx'
import DefaltScreen from './Screen/DefaltScreen.tsx'
import './index.css'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={CheckLogin()} />
        <Route path='/Login' element={<LoginScreen />} />
        <Route path="/Defalt" element={<DefaltScreen />} />
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
