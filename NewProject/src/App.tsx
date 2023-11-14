import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Input } from 'antd';
import { Button } from 'antd';
import React from 'react';

function App() {
  return (
    <div>
      <div className="card">
        <Input style={{width:"200px"}} placeholder='Username'></Input>
      </div>
      <div>
      <Input style={{width:"200px"}} placeholder='Password'></Input>
      </div>
      <div className='card'>
       <Button>
        Login
       </Button>
       <Button>
        Register
       </Button>
      </div>
    </div>
  )
}

export default App
