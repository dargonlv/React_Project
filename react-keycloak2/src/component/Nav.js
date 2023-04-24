import React from "react";
import keycloak from "../Keycloak/keycloak";


const Nav = () => {
 

 return (
   <div>
     <div >
       <section >
         <nav >
           <div style={{backgroundColor:"gray",color:"white"}}>
             
             <ul >
               <li>
                 <a  href="/">
                   Home
                 </a>
               </li>
               <li>
                 <a  href="/secured">
                   Secured Page
                 </a>
               </li>
               <li>
                
                 <a  href="/login">
                   Login
                 </a>
                
               </li>
             </ul>
             <div >
               <div >
                 
               </div>
             </div>
           </div>
         </nav>
       </section>
     </div>
   </div>
 );
};

export default Nav;