import React from 'react'
import "../Css/sayfa.css"
import Card from './card'
import Modal_kullanici from './Modal_kullanici'

function Sayfa() {
  return (
    <div className='SayfaBody'>
      
        <div className='ic'>
          <Modal_kullanici></Modal_kullanici>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>
            <Card></Card>

        </div>
      
    </div>
  )
}

export default Sayfa
