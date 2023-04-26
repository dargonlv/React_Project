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
           status,Setstatus}= Depo();
    
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
            
            if (s.status=="401") {
                Settoken("0")
                Setstatus(s.status)
                StatusKontrol()
                
            }
            
            return s.json() 
            

        })
        .then((a)=> Settoken(a.access_token))
        .catch((a)=>{
            console.log("Bir hata oluştu"+" "+status)
        })
   
    };

    useEffect(()=>{
        try {
            console.log(jwtDecode(token))
        } catch (error) {
            console.warn("token çevrilemedi")
        } 
        if (token!="0") {
            if (token!=null) {
                console.log("yönlendiriliyorsunuz")
                setTimeout(()=>{
                    navigate("/profil")
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
        navigate("/profil")
        console.log("prfil")
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