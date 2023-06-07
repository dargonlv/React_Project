import React from 'react'
import "../css/kariyer.css"
import KariyerCard from './KariyerCard';
import { motion } from 'framer-motion';
import Yetenekbar from './Yetenekbar';


function Kariyer() {
  return (
    <motion.div   animate={{opacity:1,y:0}}  transition={{delay:0.25,duration:0.2,ease:'easeInOut'}}
            initial={{opacity:0,y:-60}} >
    <div className='kariyermain '>
      <div className='solimge'>
        <div className='parca'> 

        </div>
        <div style={{alignself: "stretch",marginRight:20,marginLeft:80,marginTop:10,fontSize:20,fontWeight:"bold"}}>

          Kariyer
        </div>

        <div style={{position:'relative'}}>
          <div className='ust' >
            2 Yıllık tecrübe
          </div>
        </div>

      </div>
      <div className='ara'>
        
      </div>

      <div className='kariyerbody'>
        <div className='egitim ortakconf'>
            <div className='baslik'>
                <div>

                    Eğitim
                </div>
            </div>
            <KariyerCard solimge_baslik={2010} baslik={"Baslık"} altbaslik={"Alt Baslık"}>
                Bu bir örnektir, bu kısmılara ilgili alan hakkında eğitim biligilerinizi yazınız
            </KariyerCard>
            <KariyerCard solimge_baslik={2010} baslik={"Baslık"} altbaslik={"Alt Baslık"}>
                Bu bir örnektir, bu kısmılara ilgili alan hakkında eğitim biligilerinizi yazınız
            </KariyerCard>
            <KariyerCard solimge_baslik={2010} baslik={"Baslık"} altbaslik={"Alt Baslık"}>
                Bu bir örnektir, bu kısmılara ilgili alan hakkında eğitim biligilerinizi yazınız
            </KariyerCard>
            
        </div>
        
        <div className='deneyim ortakconf'>
            <div className='baslik'>
                <div>

                    Deneyim
                </div>
            </div>
            <KariyerCard solimge_baslik={2010} baslik={"Baslık"} altbaslik={"Alt Baslık"}>
                Bu bir örnektir, bu kısmılara ilgili alan hakkında eğitim biligilerinizi yazınız
            </KariyerCard>
            <KariyerCard solimge_baslik={2010} baslik={"Baslık"} altbaslik={"Alt Baslık"}>
                Bu bir örnektir, bu kısmılara ilgili alan hakkında eğitim biligilerinizi yazınız
            </KariyerCard>
        </div>
        
        <div className='beceriler ortakconf'>

            <div className='tasarım ortakconf'>
                <div className='baslik'>
                    <div>

                        Tasarım Becerileri
                    </div>
                </div>
                <Yetenekbar children={"Figma"} _value={62}></Yetenekbar>
                <Yetenekbar children={"Figma"} _value={62}></Yetenekbar>
              
                
            </div>

            <div className='kodlama ortakconf'>
                <div className='baslik'>
                    <div>

                        Kodlama Becerileri
                    </div>
                </div>
                <Yetenekbar children={"React"} _value={88}></Yetenekbar>
                <Yetenekbar children={"React"} _value={88}></Yetenekbar>
                <Yetenekbar children={"React"} _value={88}></Yetenekbar>

            </div>
        </div>
      </div>

    </div>
    </motion.div>
  )
}

export default Kariyer
