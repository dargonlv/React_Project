import React from 'react'
import "../css/Hakkimda.css"
import logo from "../clogo.png"


function Hakkimda() {
  return (
    <div className='hakkimdamain'>
      <div className='solimge'>
        <div className='parca'> 

        </div>
        <div style={{alignself: "stretch",marginRight:20,marginLeft:80,marginTop:10,fontSize:20,fontWeight:"bold"}}>

          Hakkimda
        </div>
      
      </div>
      <div className='ara'>

      </div>

      <div className='hakkindabody'>
        <div className='icerik'>
          <div className='icerikic'>
            <div className='baslik'> 
              Ben Bilişim Uzmanıyım
            </div>
            <div className='metin'>
              Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral 
              Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral 
              Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral 
              Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral 
              Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral 
              Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral 
              Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral 
              Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral 
              Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral Ben Fatih Meral 
            </div>
          </div>

        </div>
        <div className='dilbaslik'>
          <div>

            Başlık
          </div>
        </div>

        <div className='diller'>
          <div className='dilleric'>
            <div className='logo' >
              <img src={logo}></img>
            </div>
              <div className='baslik'>C#</div>
            <div className='metin'>
              Bu alanda 4 yıllık bir tecrübem bulunmaktadır bir çok proje gelişiminde katkıda bulundum
            </div>

          </div>
          <div className='dilleric'>
          </div>
          <div className='dilleric'>
          </div>
          <div className='dilleric'>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Hakkimda
