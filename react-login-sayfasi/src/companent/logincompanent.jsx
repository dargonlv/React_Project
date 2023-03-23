import React from 'react';
import '../App.css';
import Button from './button';
import '../text.css'
import {LoginDepo} from "../source"



 function Login() {

  const Dklnc= LoginDepo((s)=>s.kullanici_dFonk);
  const Dsifre= LoginDepo((s)=>s.sifre_dFonk);

  const klncFonk=(e)=>{
    Dklnc(e.target.value)
  }

  const sifreFonk = (e)=>{

    Dsifre(e.target.value);


  }

  return (
    <div>
      <div className='MainBody'>
        <div className='inBody'>
          <div>
            <h3>Kullanıcı Adı</h3>
          <input type='text' className='text' onChange={klncFonk} placeholder="Kullanıcı Adı"></input>

          </div>
          <div>
            <h3>Şifre</h3>
          <input type='password' className='text' onChange={sifreFonk} placeholder="Şifre"></input>

          </div>
          <div>

                <Button  ></Button>          
          </div>
          
        </div>
      </div>
    </div>
  )
}
export default Login;
