import React from 'react'
import Depo from '../source'
import Keycloak,{KeycloakRoles} from 'keycloak-js'




function Button() {
    const tokenData = Depo((s)=> s.tokenData)
    const client = Depo((s)=> s.client)
    
    const tikla= ()=>{
        console.log(tokenData)
        client.logout()
      }
    
    const rol = ()=>{
      client.loadUserProfile().success(function(profile) {
        if (client.realmAccess.roles.indexOf("Admin") !== -1) {
          console.log("Admin")
      }
      })
    }
      
    

  return (
    <div>
      <button onClick={tikla}>Logout</button><br/>
      <button onClick={rol}>Rol</button><br/>
      <text>Email : {tokenData.email}</text><br/>
      <text>kullanıcı adi : {tokenData.given_name} ve {tokenData.preferred_username}</text><br/>
      <text>jti : {tokenData.jti}</text><br/>
      
      

      
    </div>  
  )
}

export default Button
