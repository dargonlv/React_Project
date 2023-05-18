import React,{useEffect, useState} from 'react'
import Depo from '../Source'
import jwtDecode from 'jwt-decode';
import {useFetcher, useNavigate} from "react-router-dom"
import {MDBBtn} from 'mdb-react-ui-kit';
import "../App.css"
import Admin from '../component/admin';
import Kullanici from '../component/kullanici';
import Rolequest from '../component/Rolequest';

let veri = ""
function KullaniciArayuz() {
    const navigate = new useNavigate()
    const [Rolkontorl,SetRolkontrol]=useState(2)
    const {token,Settoken,
           jwdtoken,Setjwdtoken,
           time,Settime,
           dead_time,Setdead_time,
           expires_in,Setexpires_in,
           refresh_token,Setrefresh_token,
           refresh_expires_in,Setrefresh_expires_in} = Depo();

    useEffect(()=>{
        try {
            Setjwdtoken(jwtDecode(token));
            console.log(jwdtoken)
            Rolkontrolmetot() 

        } catch (error) {
          
        }
    },[token])

    function Rolkontrolmetot(){
      if (jwdtoken.realm_access.roles.indexOf("Admin")!==-1) {
        SetRolkontrol(0)
      }else if(jwdtoken.realm_access.roles.indexOf("Kullanici")!==-1){
        SetRolkontrol(1)
      }else{
        SetRolkontrol(2)
      }
      
     
    }

    useEffect(()=>{
      if (time==expires_in-1 && dead_time!=refresh_expires_in-2) {
        Rfresh_Token()
        Settime(0)
        
        console.log("sıfırladnid expires_in ile")
        console.log(expires_in)
        console.log(dead_time,"olmasi : ",refresh_expires_in)
      }
      if (dead_time==refresh_expires_in-2) {
        console.log("Çıkış")
        alert("otutum süresi doldu")
        logout()
      }
    },[time])

     async function Rfresh_Token(){
      let user_token = {
        grant_type: 'refresh_token',
        refresh_token: refresh_token,
        client_id: 'myClient',
        
        };
        console.log({user_token})
      await fetch("http://localhost:8080/realms/react/protocol/openid-connect/token", {
        mode:"cors",
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(user_token),}).then((a)=>a.json())
        .then((s)=>{
          Settoken(s.access_token)
          console.log("yeni access_token eklendi")}).catch((e)=>{console.log("refresh token hatası")})
    }

    const logout = ()=>{
        Settoken(0);
        Settime(0);
        Setdead_time(0)
        Setrefresh_token(0)
        setTimeout(()=>{

            navigate("/login")
        },700)
        
    }

  return (
    <div className='KullaniciArayuz' >
      <div className='bosdiv'>
      {
        Rolkontorl==0 ? <div><Admin></Admin></div>:""
      }
      </div>

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
      <div className='bosdiv'>
      {Rolkontorl==1 ?<div><Kullanici></Kullanici></div>:""}
      </div>
    </div>
  )
}

export default KullaniciArayuz
