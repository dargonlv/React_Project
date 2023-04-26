import jwtDecode from 'jwt-decode';
import React from 'react'
import Depo from '../Source';




function Login() {
    const {token,Settoken}= Depo();
    let response=""
    let user = {
        username: 'fatihmer0029@gmail.com',
        password: '12345678',
        grant_type: 'password',
        client_id: 'myClient',
    };
  
    async function tikla(){
    response = await fetch('http://localhost:8080/realms/react/protocol/openid-connect/token', {
        mode:"cors",
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(user),
        
        
        }).then((s)=> s.json()).then((s)=> Settoken(s.access_token))
        
        console.log(jwtDecode(token))
        
    }

    
    
  
  return (
    <div>
      <button onClick={tikla}>veri cek</button>
    </div>
  )
}

export default Login
