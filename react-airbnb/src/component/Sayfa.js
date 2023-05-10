import React,{useState} from 'react'
import "../Css/sayfa.css"
import Card from './card'


function Sayfa() {
  const liste=[]

  const rolibarFonk=()=>{
    for (let index = 0; index < 25; index++) {
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
