import React, { useEffect, useState } from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
}
from 'mdb-react-ui-kit';
import "../Css/loginpage.css";
import jwtDecode from 'jwt-decode';
import Depo from '../Source';
import {useNavigate} from "react-router-dom"


function LoginPage() {
  const navigate= new useNavigate(); 
  

    const [gmail,Setgmail]=useState();
    const [pasword,Setpasword]=useState();
    const {token,Settoken,
           status,Setstatus,
           jwdtoken,Setjwdtoken,
           time,Settime,
           refresh_token,Setrefresh_token,
           expires_in,Setexpires_in,
           refresh_expires_in,Setrefresh_expires_in}= Depo();
    
    let user = {
        username: 'fatihmer0029@gmail.com',
        password: '12345678',
        grant_type: 'password',
        client_id: 'myClient',
    };
  
    async function tikla(){
        
        user.username=gmail;
        user.password=pasword;
        await fetch('http://localhost:8080/realms/react/protocol/openid-connect/token', {
        mode:"cors",
        method: 'POST',
        headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams(user),})
        .then((s)=> {
            console.log(s)
            if (s.status=="401") {
                Settoken("0")
                Setstatus(s.status)
                StatusKontrol()
                
            }
            
            return s.json() 
            

        })
        .then((a)=> {Settoken(a.access_token);
          Setrefresh_token(a.refresh_token);
          Setexpires_in(a.expires_in)
          Setrefresh_expires_in(a.refresh_expires_in)
          console.log(refresh_token)})
          // Rfresh_Token()
        .catch((a)=>{
            console.log("Bir hata oluştu"+" "+status)
        })
        
          
   
    };

    

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
        .then((a)=>a.json()).then((s)=>{console.log(s)})
        
    }

    

    useEffect(()=>{
        try {
           
        } catch (error) {
            console.warn("token çevrilemedi")
            
        } 
        if (token!="0") {
            if (token!=null) {
                console.log("yönlendiriliyorsunuz")
                setTimeout(()=>{
                  Setjwdtoken(jwtDecode(token))
                  
                    navigate("/profile")
                },700)
            }
        }
        
        
    },[token])

    
    function StatusKontrol() {
        if (status=="401") {
            console.warn("Kullanıcı kayıtlı değil"+" "+status)
            return
        }
        
    }

    function git(){
        navigate("/profile")
        console.log("profile")
    }

    const gmailfonk = (e)=>{
        Setgmail(e.target.value)
    }
    const paswordfonk = (e)=>{
        Setpasword(e.target.value)
    }


  return (
    <MDBContainer fluid>

      <MDBRow className='d-flex justify-content-center align-items-center h-100'>
        <MDBCol col='12'>
        
          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{color:'white'}} 
              labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" onChange={gmailfonk}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' style={{color:'white'}} 
              labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" onChange={paswordfonk}/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' style={{color:'white'}} color='white' size='lg' onClick={tikla}>
                Login
              </MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg"/>
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>
                <button onClick={git}>git</button>
              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  );
}

export default LoginPage;