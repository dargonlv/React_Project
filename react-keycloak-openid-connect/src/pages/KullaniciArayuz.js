import React,{useEffect} from 'react'
import Depo from '../Source'
import jwtDecode from 'jwt-decode';
import {useNavigate} from "react-router-dom"

function KullaniciArayuz() {
    const navigate = new useNavigate()
    const {token,Settoken} = Depo();
    const veri = ""

    useEffect(()=>{
        try {
            
            console.log(jwtDecode(token))
        } catch (error) {
            
        }
    },[token])

    const logout = ()=>{
        Settoken(0);
        setTimeout(()=>{

            navigate("/login")
        },700)
        
    }

  return (
    <div>
      <button onClick={logout}></button>
    </div>
  )
}

export default KullaniciArayuz
