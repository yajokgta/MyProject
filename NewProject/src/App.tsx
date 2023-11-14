import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from 'antd';
import { Button } from 'antd';
import React from 'react';

function App() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  function login() {
    console.log(Username, Password)
  }

  const handleUsername = (x: any) => {
    setUsername(x.target.value);
  };
  const handlePassword = (x: any) => {
    setPassword(x.target.value);
  };
  return (
    <div style={{ border: "3px solid #E7E7E7", borderRadius: "3px" }}>
      <div className="card">
        <Input style={{ width: "200px" }} placeholder='Username' value={Username} onChange={handleUsername}></Input>
      </div>
      <div className="card">
        <Input type='Password' style={{ width: "200px" }} placeholder='Password' value={Password} onChange={handlePassword}></Input>
      </div>
      <div className='card'>
        <div>
          <Button className='input' onClick={() => login()}>
            Login
          </Button>
          <Button className='input'>
            Register
          </Button>
        </div>
      </div>
    </div>
  )
}

export default App
