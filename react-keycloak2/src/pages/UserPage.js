import React,{useState} from 'react'
import keycloak from '../Keycloak/keycloak'
import Depo from '../Source'
import Logout from './Logout'
import Yonetim from '../component/Yonetim'


function UserPage() {
    const girskontrol = Depo();
    const[Roles, SetRoles] = useState();

    keycloak.loadUserProfile().success(function(profile) {
        if (keycloak.realmAccess.roles.indexOf("Admin")!==-1) {
           SetRoles(true)
        }else{
            SetRoles(false)
        }
    })

  return (
    <div>
        Kullanıcı bilgileriniz
       <Logout></Logout> 
       {Roles ? <Yonetim></Yonetim> :"oturum sonlandırılmıştır"}
    </div>
  )
}

export default UserPage
