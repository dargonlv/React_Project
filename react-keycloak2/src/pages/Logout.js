import React, { useEffect, useState } from 'react'
import keycloak from "../Keycloak/keycloak.js"
import Keycloak from "keycloak-js"

function Logout() {
  
    const logoutTikla= ()=>{
      try {
        keycloak.logout({
          redirectUri:"http://localhost:3000"
        })
        
      } catch (error) { }
    }

  return (
    <div>
      <button onClick={logoutTikla}>logout</button>
    </div>
  )
}

export default Logout
