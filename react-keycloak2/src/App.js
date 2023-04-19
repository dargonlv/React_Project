import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {ReactKeycloakProvider} from "@react-keycloak/web"

import Nav from "./component/Nav";
import WelcomePage from "./pages/Homepage";
import SecuredPage from "./pages/Securedpage";
import keycloak from "./Keycloak/keycloak";


function App() {
 return (
   <div>
     <BrowserRouter>
       <Routes>
         <Route exact path="/" element={<WelcomePage />} />
         <Route
             path="/s"
             element={
               
                 <SecuredPage />
               
             }
           />
       </Routes>
     </BrowserRouter>
   </div>
 );
}

export default App;