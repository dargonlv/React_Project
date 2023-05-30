import React from 'react'
import "../css/Solmenu.css"
import foto  from "../foto.png"
import {useNavigate} from "react-router-dom"



function Solmenu() {
    const navigate = new useNavigate();

    function AnasayfaClick(){
        navigate("/anasayfa")
    }

    function HakkimdaClick(){
        navigate("/hakkimda")
    }

  return (
    <div className='main'>
      <div className='imgdiv'>
        <img src={foto} className='img'>
           
        </img>

      </div>
      <div className='site-title-block'>
        <h1 class="site-title">Fatih Meral</h1>
        <div className='alanadi'>Bilişim Uzmanı</div>
      </div>
      <div className='nav'>
        <div className='navs'>
            <div onClick={AnasayfaClick} className='navsic'> Ana Sayfa</div>
            <div onClick={HakkimdaClick} className='navsic'> Hakkımda</div>
            <div onClick={AnasayfaClick} className='navsic'> Kariyer</div>
            <div onClick={AnasayfaClick} className='navsic'> Ana Sayfa</div>
            <div onClick={AnasayfaClick} className='navsic'> Ana Sayfa</div>
            <div onClick={AnasayfaClick} className='navsic'> Ana Sayfa</div>
            
            
        </div>
      </div>
      <div className='solalt'>
        <div className='ic'>

            iconlar 1 2 3
        </div>
      </div>
    </div>
  )
}

export default Solmenu
