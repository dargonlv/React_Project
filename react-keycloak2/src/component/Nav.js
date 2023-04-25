import React from "react";
import keycloak from "../Keycloak/keycloak";
import { Link } from "react-router-dom";
import "../App.css"



const Nav = () => {
 

 return (
   <div className="navbar">
    <div className="sol">

    
    <div className="Button">

    <Link to={"/"}>Home</Link>
    </div>
    <div className="Button">

    <Link to={"/secured"}>Secured</Link>
    </div>
    <div className="Button">

    <Link to={"/login"}>login</Link>
    </div>
    </div>
    <div className="sag">
        <div className="Button">

          <Link to={"/UserPage"}>Kullanıcı bilgileri</Link>
        </div>
    </div>
   </div>
 );
};

export default Nav;