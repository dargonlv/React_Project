import React,{useEffect} from 'react'
import keycloak from '../Keycloak/keycloak'

function Yonetim() {
    useEffect(()=>{

        keycloak.loadUserInfo().success((info)=>{
            console.log(info)
        }).error((e)=>{
            console.log("işlem başarısız")
        })
    },[keycloak.authenticated])

    
  return (
    <div style={{backgroundColor:"green",color:"white",padding:"10px 10px 10px 10px"}}>
      <p>
        Burada yetkili kullanıcıların işlemi olucaktır rolleri Admindir
        </p>
      
        
        <p>e-mail : {keycloak.profile.email}</p>
        <p>Ad: {keycloak.profile.firstName}</p>
        <p>Soy Ad: {keycloak.profile.lastName}</p>
        <p>id: {keycloak.profile.id}</p>
        <p>userid: {keycloak.tokenParsed.sub}</p>
        <p>username: {keycloak.tokenParsed.preferred_username}</p>
        
        
    </div>
  )
}

export default Yonetim
