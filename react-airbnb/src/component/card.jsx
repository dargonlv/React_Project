import React from 'react'
import "../Css/card.css"


function Card() {
  return (
    <div className='cardbody'>
        <div style={{backgroundColor:"white",width:"100%",height:"290px ",borderRadius:10,objectFit:"cover"}}>
            <img src='https://a0.muscache.com/im/pictures/dd9cf0f0-57e0-42a5-aef6-b15e95ab0d40.jpg?im_w=720' ></img>
        </div>
        <div style={{backgroundColor:"orange",width:"100%",height:"100px "}}>
            yazı kısmı
        </div>
    </div>
  )
}

export default Card