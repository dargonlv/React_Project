import React,{useEffect, useState} from 'react'
import Depo from '../Source'
import jwtDecode from 'jwt-decode';
import {useFetcher, useNavigate} from "react-router-dom"
import {MDBBtn} from 'mdb-react-ui-kit';
import "../App.css"

let veri = ""
function KullaniciArayuz() {
    const navigate = new useNavigate()
    const {token,Settoken,
           jwdtoken,
           time,Settime,
           expires_in,Setexpires_in,
           refresh_token,Setrefresh_token,
           refresh_expires_in,Setrefresh_expires_in} = Depo();

    useEffect(()=>{
        try {
            veri=jwtDecode(token);
            
        } catch (error) {
          
        }
    },[token])

    useEffect(()=>{
      // if (time==expires_in) {
      //   Settime(0)
      //   Rfresh_Token()
        
      //   console.log("sıfırladnid")
      //   console.log(expires_in)
      // }
    })

     async function Rfresh_Token(){
      let user_token = {
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
        client_id: 'myClient',
        
        };
      await fetch("http://localhost:8080/realms/react/protocol/openid-connect/token", {
        mode:"cors",
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(user_token),})
        .then((a)=>{a.json()})
        .then((s)=>console.log(s))
    }

    const logout = ()=>{
        Settoken(0);
        Settime(0)
        setTimeout(()=>{

            navigate("/login")
        },700)
        
    }

  return (
    <div className='KullaniciArayuz' >
      <div className='ic' style={{backgroundColor:"mediumpurple"}}> 
        <div className='ust' style={{width:"100%",height:400}}>
            <div className='disCerceve'>
              <div style={{height:22,paddingLeft:5}}>
                Username
              </div>
              <div className='cerceve'>
                <label>{jwdtoken.preferred_username}</label>
              </div>
            </div>
            
            <div className='disCerceve'>
              <div style={{height:22,paddingLeft:5}}>
                E-Mail
              </div>
              <div className='cerceve'>
                <label>{jwdtoken.email}</label>
              </div>
            </div>
            
            
            <div className='disCerceve'>
              <div style={{height:22,paddingLeft:5}}>
                Ad
              </div>
              <div className='cerceve'>
                <label>{jwdtoken.given_name}</label>
              </div>
            </div>
            
            
            <div className='disCerceve'>
              <div style={{height:22,paddingLeft:5}}>
                Soyad
              </div>
              <div className='cerceve'>
                <label>{jwdtoken.family_name}</label>
              </div>
            </div>
            
            <div className='disCerceve'>
              <div style={{height:22,paddingLeft:5}}>
                Roles
              </div>
              <div className='cerceve'>
                <label>{
                  jwdtoken.realm_access.roles.map((role)=>{
                    return (`${role}, `)
                  })
                  
                  }</label>
              </div>
            </div>

            

        </div>
        <MDBBtn  style={{color:'white',backgroundColor:"ThreeDLightShadow"}} color='white' onClick={logout}>Logut</MDBBtn>
      </div>
      
    </div>
  )
}

export default KullaniciArayuz
