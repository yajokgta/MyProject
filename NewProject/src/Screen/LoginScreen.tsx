import { useState } from 'react'
import { Input } from 'antd';
import { Button } from 'antd';
import { CallAPIPost, FetchData } from '../Services/CallAPIService';
import './LoginScreen.css'
import Card from 'antd/es/card/Card';

function ValidateToken() {
    if (localStorage.getItem("token")) {
        history.pushState(null, "0", "/Default")
        history.go();
    }
}

function LoginScreen() {
    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');

    ValidateToken();

    async function login() {
        let data: FetchData =
        {
            uri: 'api/Account/Login',
            body: {
                'username': Username,
                'password': Password
            },
            headers: [],
        };

        let result = await CallAPIPost(data);
        localStorage.setItem('token', result.e_DATA.token);
        ValidateToken();
    }

    const handleUsername = (x: any) => {
        setUsername(x.target.value);
    };
    const handlePassword = (x: any) => {
        setPassword(x.target.value);
    };
    return (
        <div className='mainDiv'>
            <div style={{ border: "3px solid #E7E7E7", borderRadius: "10px", width: "auto", backgroundColor: "white", textAlign: "center" }}>
                <Card style={{ border: "0px" }}>
                    <label style={{ float: "left" }}>Username <span style={{ color: "red" }}>*</span></label>
                    <Input style={{ width: "200px", marginLeft: "5px", float: "right" }} placeholder='Username' value={Username} onChange={handleUsername}></Input>
                </Card>
                <Card style={{ border: "0px" }}>
                    <label style={{ float: "left" }}>Password <span style={{ color: "red" }}>*</span></label>
                    <Input style={{ width: "200px", marginLeft: "5px", float: "right" }} type='Password' placeholder='Password' value={Password} onChange={handlePassword}></Input>
                </Card>
                <Card style={{ border: "0px" }}>
                    <Button className='button-login' onClick={() => login()}>
                        Login
                    </Button>
                    <Button className='button-Defalt'>
                        Register
                    </Button>
                </Card>
            </div>
        </div>
    )
}

export default LoginScreen
