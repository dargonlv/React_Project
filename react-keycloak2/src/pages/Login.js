
import React, { useEffect,useState,useRef, useCallback} from 'react'
import keycloak from "../Keycloak/keycloak.js"
import Logout from "./Logout.js"
import Depo from '../Source.js'
import Yonetim from '../component/Yonetim.js'
import { Navigate, useNavigate } from 'react-router-dom'




function Login() {
    
    const girskontrol = Depo();
    const Setgirskontrol = Depo();
    const isKontrol = useRef();
    const navigate = useNavigate()
    
    
    useEffect(()=>{
        if (isKontrol.current) {
            return
        } 
        isKontrol.current=true
            keycloak.init({ onLoad: 'login-required' }).then((authenticated) => {

              if (authenticated) {
                     {navigate("/UserPage")}  
                  
                  console.log('User is authenticated');
              }
              else {
                  console.log('User is not authenticated');
              }
            }).catch(() => {
                console.log('Failed to initialize Keycloak');
            });

    },[keycloak])
    

    useEffect(()=>{

        console.log(keycloak.subject)
    },[keycloak.authenticated])
    
    
    

  return (
    <div>
        Burası giriş sayfasıdır.
        

    </div>
  )
}

export default Login
