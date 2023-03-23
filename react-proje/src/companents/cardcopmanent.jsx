import React from 'react'
import  './card-list/card-list.css';
import {Link} from "react-router-dom"//link yonledirme için kullandım





 function Card({monster}) {
    
    const {name,id,email}=monster;

    function handleClick (e){
       return 
    }
    
    

return (
    
    <Link to={`https://robohash.org/${id}R9.png?set=set2&size=300x300`} >
        <div className='card' onClick={handleClick}>
            <img src={`https://robohash.org/${id}R9.png?set=set2&size=300x300`} alt="" />
                <div className='bilgi'>
                <h4>Nick Name = {name} </h4> 
                <h4>E-mail = {email} </h4> 
                </div>
        </div>
    </Link>
    
  )
}

export default Card;