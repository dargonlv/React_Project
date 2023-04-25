import React,{useEffect} from 'react'
import keycloak from '../Keycloak/keycloak'

function Kullanici() {
    useEffect(()=>{

        keycloak.loadUserInfo().success((info)=>{
            console.log(info)
        }).error((e)=>{
            console.log("işlem başarısız")
        })
    },[keycloak.authenticated])

    
    
  return (
    <div style={{backgroundColor:"orange",color:"white"}}>
      <p>
        Kullanıcı bölümü , kısıtlı yetkilendirmeye sahipsiniz rolünüz kullanıcı
      </p>
      
      <p>e-Mail : {keycloak.profile.email}</p>
        
    </div>
  )
}

export default Kullanici
