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
    <div style={{backgroundColor:"green",color:"white"}}>
      <p>
        Burada yetkili kullanıcıların işlemi olucaktır rolleri Admindir
        </p>
      
        <p>İdToken : {keycloak.idToken}</p>
        
    </div>
  )
}

export default Yonetim
