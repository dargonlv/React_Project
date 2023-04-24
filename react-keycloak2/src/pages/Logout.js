import React from 'react'
import keycloak from "../Keycloak/keycloak.js"
import Keycloak from "keycloak-js"
import { useNavigate } from 'react-router-dom'


function Logout() {
    const navigate = useNavigate()
    

    const logoutTikla=()=>{
      try {
        
        keycloak.logout()
      } catch (error) {
        
      }
      navigate("/login")
    }
  return (
    <div>
      <button onClick={logoutTikla}>logout</button>
    </div>
  )
}

export default Logout
