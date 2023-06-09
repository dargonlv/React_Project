import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Nav from "./component/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import keycloak from "./Keycloak/keycloak";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";
import Foundpage from "./pages/404foundpage";




function App() {
  
  keycloak.onTokenExpired = () => {
    // Refresh the token and update the local storage.
    keycloak.updateToken(5).then((refreshed) => {
      if (refreshed) {
        localStorage.setItem('keycloak-token', keycloak.token);
        localStorage.setItem('keycloak-refresh-token', keycloak.refreshToken);
        localStorage.setItem('keycloak-token-expiration', keycloak.tokenParsed.exp);
        console.log("kayıt1")
      }
    }).catch(() => {
      console.error('Failed to refresh token');
    });
  };
  
  keycloak.onAuthSuccess = () => {
    // Save the session data to local storage.
    localStorage.setItem('keycloak-token', keycloak.token);
    localStorage.setItem('keycloak-refresh-token', keycloak.refreshToken);
    localStorage.setItem('keycloak-token-expiration', keycloak.tokenParsed.exp);
    console.log("kayıt2")
    

  };

  useEffect(()=>{
        // Sayfa yenilendiğinde token kontrol ediliyor
      if (localStorage.getItem('keycloak-token')) {
        keycloak.token = localStorage.getItem('keycloak-token');
        console.log(keycloak.token)
        keycloak.updateToken(5).success(function(refreshed) {
          if (refreshed) {
            localStorage.setItem('keycloak-token', keycloak.token);
            console.log("Token refreshed");
          } else {
            console.log("Token not refreshed, valid for " +
                Math.round(keycloak.tokenParsed.exp + keycloak.timeSkew - new Date().getTime() / 1000) + " seconds");
          }
        }).error(function(e) {
          console.log('Failed to refresh token');
          console.log(e);
        });
      }
  },[])

  
  
  
 return (
   <div>
    

     <BrowserRouter>
     
      <Nav></Nav>
       <Routes>
         <Route exact path="/" element={<WelcomePage />} />
         <Route exact path="/login" element={<Login />} />
         <Route path="/secured" element={<SecuredPage />}/>
         <Route path="/UserPage" element={<UserPage />}/>
         <Route path="*" element={<Foundpage/>}/>
       </Routes>
    
     </BrowserRouter>
    
   </div>
 );
}

export default App;