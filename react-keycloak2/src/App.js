import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import Nav from "./component/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import keycloak from "./Keycloak/keycloak";
import Login from "./pages/Login";
import UserPage from "./pages/UserPage";



function App() {
  
  
 return (
   <div>
    

     <BrowserRouter>
     
      <Nav></Nav>
       <Routes>
         <Route exact path="/" element={<WelcomePage />} />
         <Route exact path="/login" element={<Login />} />
         <Route path="/secured" element={<SecuredPage />}/>
         <Route path="/UserPage" element={<UserPage />}/>
       </Routes>
    
     </BrowserRouter>
    
   </div>
 );
}

export default App;