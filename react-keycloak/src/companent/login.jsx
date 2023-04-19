
import {useCallback, useEffect, useRef, useState } from 'react';
import Keycloak from "keycloak-js";
import Depo from "../source";

const client= new Keycloak({
  url: "http://127.0.0.1:8080/",
  realm: "react",
  clientId: "myClient",
})
let bool=true;

export default function Login() {

  const addClient= Depo((s)=> s.addClient);
  const _client = Depo((s)=>s.client);
  const tokenData = Depo((s)=>s.tokenData);
  const addtokenData = Depo((s)=>s.addtokenData);
  
  const isRun = useRef();
  const [isLogin,setLogin]= useState(false);
  // workaround for changes with oidc logout in Keycloak 18.0.0
  // See https://www.keycloak.org/docs/latest/upgrading/index.html#openid-connect-logout
  client.createLogoutUrl = function(options) {
          return client.endpoints.logout()
              + '?id_token_hint=' + client.idToken
              + '&post_logout_redirect_uri=' + encodeURIComponent(window.location.href);
  }

  
  useEffect(()=>{
  if (isRun.current) {
      return
          }   
        isRun.current=true;
        client.init({ onLoad: 'login-required'}).then((res)=>{
          // client.loadUserProfile().success(()=>{
          //   if (client.realmAccess.roles.indexOf("Admin") !== -1) {//rolünü sorluyoruz
          //     console.log("Admin")
          // }
          // });
          setLogin(res)
        });
        
        
  },[client]);
  addClient(client);
  
  
  
  // useCallback(async()=>{ 
  // try {
  //       const response = await client.loadUserInfo();
  //       console.log(response.email);
  //       console.log(response);
  // } catch (error) {
  //     console.log(error.mesaage)
  // }
      
  // },[client])
    
  const parseJwt = (token) => {
      let base64Url = token.split(".")[1];
      let base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
      let jsonPayload = decodeURIComponent(
        atob(base64)
          .split("")
          .map(function (c) {
            return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
          })
          .join("")
      );
    
      
      return JSON.parse(jsonPayload)
    }
    useEffect(()=>{
      if (client.token && bool) {
        bool=false;
        addtokenData(parseJwt(client.token))
        console.log(parseJwt(client.token))
      }
      
    },[client.token])
   
    
    // loadUserInfo();
    
    
    
  return isLogin;
}
  
  
  
