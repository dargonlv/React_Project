import React from 'react';
import { Link } from 'react-router-dom';
import keycloak from '../Keycloak/keycloak';
import "../App.css"


const Home = () => {
  

 return (
   <div>
     <h1 >Welcome to the Homepage</h1>
     
     {!keycloak.authenticated ? <Link to={"/login"}> Giriş Yap</Link> :""}
     
   </div>
 );
};

export default Home;