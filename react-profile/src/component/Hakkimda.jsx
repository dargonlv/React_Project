import React from 'react'
import "../css/Hakkimda.css"
import logo from "../clogo.png"
import {Text} from "@chakra-ui/react"
import { motion } from 'framer-motion'


function Hakkimda() {
  return (
    <motion.div  animate={{opacity:1,x:0}}  transition={{delay:0.25,duration:0.2,ease:'easeInOut'}}
            initial={{opacity:0,x:-20}} >
    <div className='hakkimdamain'>
      <div className='solimge'>
        <div className='parca'> 

        </div>
        <div style={{alignself: "stretch",marginRight:20,marginLeft:80,marginTop:10,fontSize:20,fontWeight:"bold"}}>

          Hakkimda
        </div>

        <div style={{position:'relative'}}>
          <div className='ust' >
            Yazılım, Eğlence, Müzik, IT, Developer 
          </div>
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
            <div className='metin1'>
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
              <img src={logo} style={{width:78,height:78,objectFit:'cover'}}></img>
            </div>
              <div className='baslik2'>C#</div>
            <div className='metin'>
              

              Bu alanda 4 yıllık bir tecrübem bulunmaktadır bir çok proje gelişiminde katkıda bulundum dsdsadsdads ds da sdsad as dasds d
              
            </div>
          </div>
          
          <div className='dilleric'>
            <div className='logo' >
              <img src={logo} style={{width:78,height:78,objectFit:'cover'}}></img>
            </div>
              <div className='baslik2'>C#</div>
            <div className='metin'>
              Bu alanda 4 yıllık bir tecrübem bulunmaktadır bir çok proje gelişiminde katkıda bulundum
            </div>
          </div>
          
          <div className='dilleric'>
            <div className='logo' >
              <img src={logo} style={{width:78,height:78,objectFit:'cover'}}></img>
            </div>
              <div className='baslik2'>C#</div>
            <div className='metin'>
              Bu alanda 4 yıllık bir tecrübem bulunmaktadır bir çok proje gelişiminde katkıda bulundum
            </div>
          </div>
          
          <div className='dilleric'>
            <div className='logo' >
              <img src={logo} style={{width:78,height:78,objectFit:'cover'}}></img>
            </div>
              <div className='baslik2'>C#</div>
            <div className='metin'>
              Bu alanda 4 yıllık bir tecrübem bulunmaktadır bir çok proje gelişiminde katkıda bulundum
            </div>
          </div>
          
        </div>

      </div>

    </div>
      </motion.div>
  )
}

export default Hakkimda
