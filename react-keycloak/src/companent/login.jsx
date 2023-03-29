import React from 'react'
import Keycloak from "keycloak-js";
import {useEffect, useRef, useState } from 'react';

const client= new Keycloak({
  url: "http://127.0.0.1:8080/",
  realm: "react",
  clientId: "myClient",
})

function Login() {
    
    const isRun = useRef();
    const [isLogin,setLogin]= useState(false);

    useEffect(()=>{
        if (isRun.current) {
            return
        }   
        isRun.current=true;
        client.init({ onLoad: 'login-required'}).then((res)=>{setLogin(res)});
    },[])

    console.log(client.token);
    
  return isLogin;
}

export default Login
