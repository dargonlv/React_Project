import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import keycloak from '../Keycloak/keycloak';
import "../App.css"


const Home = () => {
   const [token,Settoken]= useState()

   useEffect(()=>{
    Settoken(keycloak.token)
   },[keycloak])

 return (
   <div>
     <h1 >Welcome to the Homepage</h1>
     
     {!keycloak.authenticated ? <Link to={"/login"}> Giriş Yap</Link> :""}
     {token}
     
   </div>
 );
};

export default Home;