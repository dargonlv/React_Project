import React from 'react';
import '../button.css';
import LoginSrc,{LoginDepo} from '../source';


function Button() {

  const Useklnc= LoginSrc((s)=>s.kullanici);
  const Usesifre= LoginSrc((s)=>s.sifre);
  const Dklnc= LoginDepo((s)=>s.kullanici_d);
  const Dsifre= LoginDepo((s)=>s.sifre_d);
  
    

  const Dogrula = ()=>{
    if (Useklnc==Dklnc && Usesifre==Dsifre) {
        window.location.href='https://javascript30.com/'
        // alert("Giriş başarılı");
        

  };
    
  }
    
  return (
    <div>
      <button className='button' onClick={Dogrula}>Giriş</button>
    </div>
  )
}

export default Button;