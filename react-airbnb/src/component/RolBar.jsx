import React,{useEffect, useRef} from "react"
import "../Css/nav.css"
import Depo from "../Source"


function RolBar (){
    const {temel,Settemel}=Depo();
    const use= useRef(null)

    const de=()=>{
        console.log(use.current);
        try {
            temel.current.classList.remove("altfocus")
        } catch (error) {
            console.log(error)
        }
        use.current.classList.add("altfocus")
        Settemel(use)
        
        
    }
    const move=()=>{
        
        try {
            temel.current.classList.remove("altfocus2")
        } catch (error) {
            console.log(error)
        }
        use.current.classList.add("altfocus2")
        Settemel(use)
        
        
    }


    
    return(
        
            <div className='out'>
                <div className='minimenu'  onClick={de} onMouseMove={move}  > 
                    <div className='ic'>
                        <div className='resim'>
                            <img style={{width:24,height:24}} src='https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg'></img>
                        </div>
                        <div className='metin' >
                            toprak arazi
                        </div>
                    </div> 
                    <div className="alt">
                        <div className="altfocus2" ref={use}></div>
                    </div>
                </div>
            </div>
       
    )
}

export default RolBar