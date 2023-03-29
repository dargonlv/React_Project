import Keycloak from 'keycloak-js'; 
import React,{useState,useEffect, useRef} from 'react'

const client= new Keycloak({
    url: "http://127.0.0.1:8080/",
    realm: "react",
    clientId: "myClient",
})

const UseAuth = () => {
    const isRun = useRef();
    const [isLogin,setLogin]= useState(false);
    // const [isLogout,setLogout]= useState(false);
    

    useEffect(()=>{
        if (isRun.current) {
            return
        }   
        isRun.current=true;

        client.init({ onLoad: 'login-required'}).then((res)=> {setLogin(res)});
        
        
    },[])



    

  return  isLogin;
}

export default UseAuth
