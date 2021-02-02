import React from 'react'
import { Login } from '../../components/Login/Login'

export function LoginPage(props) {
    
    return (
        <Login loginData={props.loginData} setLoginData={props.setLoginData}/>
    )
}