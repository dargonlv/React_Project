import React,{useState} from 'react'
import keycloak from '../Keycloak/keycloak'
import Depo from '../Source'
import Logout from './Logout'
import Yonetim from '../component/Yonetim'
import { Navigate } from 'react-router-dom'
import Kullanici from '../component/Kullanici'


function UserPage() {
    const girskontrol = Depo();
    const[Roles, SetRoles] = useState(2);
    
    keycloak.loadUserProfile().success(function(profile) {
        if (keycloak.realmAccess.roles.indexOf("Admin")!==-1) {
           SetRoles(0)
        }else if(keycloak.realmAccess.roles.indexOf("Kullanici")!==-1){
            SetRoles(1)
        }else{
            SetRoles(2)
        }
    }).catch((e)=>{
      console.log("loadUserProfile bulunamadı")
    })
    

  return (
    <div>
        Kullanıcı bilgileriniz
       {keycloak.authenticated ? <Logout></Logout> :"" }
       {Roles==0 ? <Yonetim></Yonetim> :
       Roles==1 ? <Kullanici></Kullanici> : 
       Roles ==2 ? "Unknow":"oturum sonlandırılmıştır"}
       
    </div>
  )
}

export default UserPage
