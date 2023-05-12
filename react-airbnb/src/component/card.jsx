import React, { useEffect, useRef, useState } from 'react'
import "../Css/card.css"

let kontrol =false
let _imglist=[]
function Card() {
  const usefoto = useRef()
  const usesol = useRef()
  const usesag = useRef()
  const usebutons = useRef()
  const [yedek,Setyedek]= useState(0)
  const [analist,Setanalist] = useState(0);
  const imglist = {
    0:<img className='foto' src='https://a0.muscache.com/im/pictures/dd9cf0f0-57e0-42a5-aef6-b15e95ab0d40.jpg?im_w=720' ></img>,
    1:<img className='foto' src='https://a0.muscache.com/im/pictures/ac7256f8-a4b4-4456-9704-51b9ecf2e083.jpg?im_w=720' ></img>,
    2:<img className='foto' src='https://a0.muscache.com/im/pictures/8da388d1-627d-4412-ab2c-5e2d40c9fcaa.jpg?im_w=720' ></img>,
    3:<img className='foto' src='https://a0.muscache.com/im/pictures/dd9cf0f0-57e0-42a5-aef6-b15e95ab0d40.jpg?im_w=720' ></img>,
  }
  
  const sol = (e)=>{
    usefoto.current.scrollLeft -=300;
    e.stopPropagation();
    setTimeout(() => {
      
      Setyedek(usefoto.current.scrollLeft)
      
    }, 320);
  }
  
  const sag = (e)=>{
    usefoto.current.scrollLeft +=300;
    e.stopPropagation();
    setTimeout(() => {
      
      Setyedek(usefoto.current.scrollLeft)

    }, 320);

  }
  
  const cardOver = ()=>{
      usebutons.current.style.opacity="1"
      kontrol=true
      
  }

  const cardOut = ()=>{
    kontrol=false
    usebutons.current.style.opacity="0"
    
  }

  const begeni = (e)=>{
    e.stopPropagation();
    console.log("like")
  }

  function imgSpwan(){ 
    _imglist=[];
    for (let index = 0; index < 4; index++) {
      _imglist.push(imglist[random(0,4)])
      
    }
    Setanalist(_imglist)
    
  }

  function random(min, max) {
    // 👇️ get number between min (inclusive) and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(()=>{
    // console.log("scrollWidth",usefoto.current.scrollWidth)//toplam foto boyutu
    // console.log("scrollLeft",usefoto.current.scrollLeft)
    // console.log("offsetWidth: ",usefoto.current.offsetWidth)//bir foto foto uzunluğu
    imgSpwan()
    usesol.current.style.visibility="hidden"
  },[])

  useEffect(()=>{
    // console.log("yedek",yedek)

    if (yedek==0) {
      usesol.current.style.visibility="hidden"
      // console.log("usesol",usesol)
    }else if(yedek>=usefoto.current.scrollWidth-usefoto.current.offsetWidth){
      usesag.current.style.visibility="hidden"
    }else if(kontrol) {
      usesol.current.style.visibility="visible"
      usesag.current.style.visibility="visible"
    }
  },[yedek])

  

  return (
    <div className='cardbody' onMouseOver={cardOver} onClick={(e)=>{console.log("card :","basildi")}} onMouseOut={cardOut}>
        <div className='rolfotolar' ref={usefoto}>
            {analist}
        </div>
        <div style={{position:'absolute ',width:0,}}>
            <button className='begeni' onClick={begeni} style={{position:"relative",left:110,top:-170}} >
              <svg  xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-heart-fill" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
              </svg>
            </button>
        </div>
        <div ref={usebutons} style={{transition:"opacity 0.15s",opacity:"0",position:'absolute',width:0}}>
          <div style={{position:"relative",right:145,width:0,bottom:45}}>
              <div className='buttondis left'>
                <button className='buttonic ' style={{visibility:"hidden"}} ref={usesol} onClick={sol.bind(this)} >{"<"}</button> 
              </div>
          </div>
          <div style={{position:"relative",left:145,width:0,bottom:77}}>
              <div className='buttondis'>
                <button className='buttonic' ref={usesag} onClick={sag.bind(this)}>{">"} </button>
              </div>
          </div>
          
        </div>
        
        <div className='cardalt' >
            <div className='yazi' style={{display:"flex",justifyContent:"space-between"}}>
              <div className='kalinyazi'>
                Cameron, Arizona, ABD
              </div>  
              <div className='yildiz' >
                <div>
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                  </svg>
                </div>
                <div>
                  4,91
                </div>
              </div>
            </div>
            <div className='yazi'>11.230 kilometre uzakta</div>
            <div className='yazi'>29 May – 3 Haz</div>
            <div className='yazi' >
              <div className='kalinyazi' >
              2.992 ₺
              </div> 
                gece
            </div>
            
        </div>
    </div>
  )
}

export default Card