import { useState } from 'react'
import './App.css'
import { Input } from 'antd';
import { Button } from 'antd';
//import './CallAPIService.tsx'
import { CallAPIPost, FetchData } from './CallAPIService.tsx';

function App() {
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');

  async function login() {
    let data:FetchData = 
    {
      uri : 'api/Account/Login',
      body: {
        'username':Username,
        'password':Password
      },
      headers:[],
    };

    let result = await CallAPIPost(data);
    localStorage.setItem('token',result.e_DATA.token);

    if(localStorage.getItem('token')){
      console.log('Login Success');
    }
    else{
      console.log('Login Fail')
    }
  }

  const handleUsername = (x: any) => {
    setUsername(x.target.value);
  };
  const handlePassword = (x: any) => {
    setPassword(x.target.value);
  };
  return (
    <div style={{ border: "3px solid #E7E7E7", borderRadius: "3px", width: "auto"}}>
      <div className="card" style={{textAlign:"right"}}>
        <label style={{float:"left"}}>Username <span style={{color:"red"}}>*</span></label>
        <Input style={{ width: "200px" }} placeholder='Username' value={Username} onChange={handleUsername}></Input>
      </div>
      <div className="card" style={{textAlign:"right"}}>
        <label style={{float:"left"}}>Password <span style={{color:"red"}}>*</span></label>
        <Input type='Password' style={{ width: "200px"}} placeholder='Password' value={Password} onChange={handlePassword}></Input>
      </div>
      <div className='card'>
        <div>
          <Button className='input-login' onClick={() => login()}>
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
