import React,{useEffect} from 'react'
import "../Css/sayfa.css"
import Card from './card'
import Depo from '../Source'



function Sayfa() {
  const liste=[]
  const {rolselectCount,SetrolselectCount} = Depo();

  const rolibarFonk=()=>{
    for (let index = 0; index < 25-rolselectCount; index++) {
      liste.push(<Card></Card>)
        
    }
    return liste
  }

 

  return (
    <div className='SayfaBody'>
        <div  className='ic'>
          {rolibarFonk()}        
        </div>
      
    </div>
  )
}

export default Sayfa
