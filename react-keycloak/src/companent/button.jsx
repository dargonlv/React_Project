import React from 'react'
import Depo from '../source'



function Button() {
    const tokenData = Depo((s)=> s.tokenData)
    const client = Depo((s)=> s.client)
    
    const tikla= ()=>{
        console.log(tokenData)
        client.logout({redirectUri:"https://google.com"})
      }

  return (
    <div>
      <button onClick={tikla}>veri çek</button><br/>
      <text>Email : {tokenData.email}</text><br/>
      <text>kullanıcı adi : {tokenData.given_name} ve {tokenData.preferred_username}</text><br/>
      <text>jti : {tokenData.jti}</text><br/>
      {console.log(tokenData.iss)}
      
    </div>  
  )
}

export default Button
