import React,{useEffect, useRef} from "react"
import "../Css/nav.css"
import Depo from "../Source"


function RolBar ({deger,data_index}){
    const {temel,Settemel}=Depo();
    const {Mtemel,SetMtemel,
            rolselectCount,SetrolselectCount}=Depo();
    const use= useRef(null)
    const usemin = useRef(null)

    
    const de=()=>{
        try {
            Mtemel.current.style.opacity=0.70
            temel.current.classList.remove("altfocus")
            hoverLeave()
        } catch (error) {
            console.log("error")
        }
        SetrolselectCount(usemin.current.dataset.index)
        usemin.current.style.opacity=1
        use.current.classList.add("altfocus")
        Settemel(use)
        SetMtemel(usemin)
   
    }

    function hoverEnter(){
        if (!use.current.classList.contains("altfocus")) {
            use.current.style.backgroundColor="rgba(94, 94, 94, 0.575)"
        }
    }
    
    function hoverLeave(){
        use.current.style.backgroundColor=""
    }

    useEffect(()=>{
        if (deger==0) {
            de();
        }
    },[use,usemin])
    
    
    return(
        
            <div className='out'>
                <div className='minimenu' ref={usemin} data-index={data_index} onClick={de} onMouseEnter={hoverEnter} onMouseLeave={hoverLeave}   > 
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