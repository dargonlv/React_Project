import React from 'react'
import "../css/Anasayfa.css"
import { motion } from 'framer-motion'

function Anasayfa() {
  return (
    < >
    <motion.div style={{height:"100%"}} animate={{opacity:1,}} transition={{delay:0.25,duration:0.2}}
     initial={{opacity:0}}>
    
    <div style={{position:'relative'}}>
        
          <div className='background' style={{position:'absolute',backgroundColor:"rgb(240, 238, 230)",width:"100%",height:"100vh"}}>

            Backgorund Image
          </div>
        
        </div>
    <div className='anamain' style={{position:"relative"}}>
        <motion.div  animate={{opacity:1,y:0,transform:"scale(1)"}}  transition={{delay:0.40,duration:0.2}}
            initial={{opacity:0,y:-100,transform:"scale(1.2)"}} >
        <div className='anaic'>
            <div className='anaisim'>
                Fatih Meral
            </div>
            <div className='anauzmanlik'>
                Bilişim Uzmanı
            </div>
            <div className='anabilgiler'>
                 <div className='bilgi'>
                    <div style={{borderBottom:"solid orange 2px"}}>
                        Age
                    </div>
                    <div>
                        22
                    </div>                          
                 </div>
                 <div className='bilgi'>
                    <div style={{borderBottom:"solid orange 2px"}}>
                        Address
                    </div>
                    <div>
                        Zonguldak
                    </div>                          
                 </div>
                 <div className='bilgi'>
                    <div style={{borderBottom:"solid orange 2px"}}>
                        E-mail
                    </div>
                    <div>
                        fatihmer0029@gmail.com
                    </div>                          
                 </div>
                 <div className='bilgi'>
                    <div style={{borderBottom:"solid orange 2px"}}>
                        Phone
                    </div>
                    <div>
                        553 103 83 29
                    </div>                          
                 </div>
                 <div className='bilgi'>
                    <div style={{borderBottom:"solid orange 2px"}}>
                        Freelance
                    </div>
                    <div>
                        bilinmiyor
                    </div>                          
                 </div>
                 
            </div>
        </div>
        </motion.div>
    </div>
    </motion.div>
    </>
  )
}

export default Anasayfa
