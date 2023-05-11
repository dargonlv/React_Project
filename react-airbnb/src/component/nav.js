import React,{useEffect, useRef,useState,useMemo, useCallback} from 'react'
import "../Css/nav.css"
import RolBar from './RolBar'
import ClickAwayListener from "react-click-away-listener";
import Modal from './Modal';
import Dilbolgesi from './dilbolgesi';
import Parabirimi from './parabirimi';


let roligbar="";
function Nav() {
    const liste =[]
    const [yedek,Setyedek]= useState(0);
    const [scrolsol,Setscrolsol]= useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] =  useState(false);
    const [dilpara, Setdilpara] =  useState(false);
    

    const usemodal= useRef(null)
    

    const rolibarFonk=()=>{
        for (let index = 0; index < 25; index++) {
            if (index==0) {
                liste.push(<RolBar deger={1}></RolBar>)
            }else{
                liste.push(<RolBar></RolBar>)
            }
            
        }
        return liste
    }

    const a =(()=>{
        setTimeout(() => {
            
            roligbar=document.querySelector(".rolingbarici")
            // console.log("sss")
        }, 200);
        roligbar.scrollLeft+=336;//78 'er atrış
        
        
        
        setTimeout(()=>{
            Setscrolsol(roligbar.scrollLeft)
            
        },400)
      
        
    })
    const b =(()=>{
        setTimeout(() => {
            
            roligbar=document.querySelector(".rolingbarici")
            // console.log("sss")
        }, 200);
        roligbar.scrollLeft-=336;//78 'er atrış
        
        
        setTimeout(()=>{
            Setscrolsol(roligbar.scrollLeft)

        },400)
        
    })
    
    useEffect(()=>{
        setTimeout(() => {
            
            roligbar=document.querySelector(".rolingbarici")
            // console.log("bar width :",roligbar.scrollWidth-roligbar.offsetWidth)
            Setyedek(roligbar.scrollWidth-roligbar.offsetWidth)
            // console.log("Toplam width :",yedek)
        }, 200);
        
    },[roligbar.offsetWidth])
    
    //bar kontrol
    // useEffect(()=>{
        
            
    //     console.log("bar konum",roligbar.scrollLeft)
    //     console.log("scrol S0l ::",scrolsol)
    //     console.log("yedek ::",yedek)
        
    // },[roligbar.scrollLeft])


    //#region Modal Açılıp Kapanma Mekanizması
    const handleClickAway = (event) => {

          if (usemodal.current && !usemodal.current.contains(event.target)) {
               setIsOpen(false);
          }
        }

    const toggleModal = () => {
        
        setIsOpen(!isOpen);
    }

    
    //#endregion

    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
        Setdilpara(false)
      };

    const dilfonk = ()=>{
        Setdilpara(false)
    }

    const parafonk = ()=>{
        Setdilpara(true);
    }
  
  return (
    <nav className='nav' >
        {/* Nav üst ksıısm */}
        <div className='main'>
            <div className='orta'>
                <div className='Logo'>
                    <div className='ic'>
                        <img style={{width:100,height:30}} src='https://companieslogo.com/img/orig/ABNB_BIG-9ccc2025.png?t=1633511992'></img>
                    </div>
                </div>
                <div className='Search'>
                    <div className='out'>
                        <div className='buttons'>
                            <button className='minisearch'>
                                <div className='metin'>
                                    Herhangi bir yer
                                </div>
                            </button>
                            <span className='ayirici' ></span>
                            <button className='minisearch'>
                                <div className='metin'>
                                Herhangi bir hafta

                                </div>
                            </button>
                            <span className='ayirici' ></span>
                            <button className='minisearch'>
                                <div className='metin' style={{opacity:"0.8"}}>
                                    Misafir ekleyin
                                </div>
                                <div className='icon'>
                                <i class="gg-search" style={{marginLeft:5,scale:"0.70",color:'white',borderWidth:3}}></i>
                                </div>
                            <div>

                            </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='Account'>
                    <div className='ara'>
                        <a className='link' href='https://www.airbnb.com.tr/host/homes' style={{color:'black',textDecoration:"none"}}>
                            Evinizi Airbnb'ye taşıyın
                        </a>
                        <button className='word' onClick={handleOpenModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-globe-americas" viewBox="0 0 16 16">
                                <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0ZM2.04 4.326c.325 1.329 2.532 2.54 3.717 3.19.48.263.793.434.743.484-.08.08-.162.158-.242.234-.416.396-.787.749-.758 1.266.035.634.618.824 1.214 1.017.577.188 1.168.38 1.286.983.082.417-.075.988-.22 1.52-.215.782-.406 1.48.22 1.48 1.5-.5 3.798-3.186 4-5 .138-1.243-2-2-3.5-2.5-.478-.16-.755.081-.99.284-.172.15-.322.279-.51.216-.445-.148-2.5-2-1.5-2.5.78-.39.952-.171 1.227.182.078.099.163.208.273.318.609.304.662-.132.723-.633.039-.322.081-.671.277-.867.434-.434 1.265-.791 2.028-1.12.712-.306 1.365-.587 1.579-.88A7 7 0 1 1 2.04 4.327Z"/>
                            </svg>
                        </button>
                            <Modal isOpen={isModalOpen} onClose={handleCloseModal} _style={{backgroundColor:"white",width:1000}}>
                                <div className='modal-ic'>
                                    <div className='modal-ust'>
                                        <div className='dil' onClick={dilfonk}>
                                            <div className='ic' >
                                                dil bölgesi
                                            </div>
                                        </div>
                                        <div className='birim' onClick={parafonk}>
                                            <div className='ic' >
                                                para birimi
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{width:"100%",paddingLeft:15,paddingRight:15}}>
                                        {dilpara ? <Parabirimi></Parabirimi> :<Dilbolgesi></Dilbolgesi>}
                                    </div>
                                </div>
                            </Modal>
                        <div className='yanmenu' >
                            
                                <button className='button' onClick={toggleModal}>
                                    <div style={{width:16,height:16}}>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                                            <path style={{color:'gray'}} fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                                        </svg>
                                    </div>
                                    <div style={{width:30,height:30}}>
                                        <svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" role="presentation" focusable="false" style={{color:"gray",display:'block',height:"100%",width:"100%",fill:"currentcolor"}} ><path d="m16 .7c-8.437 0-15.3 6.863-15.3 15.3s6.863 15.3 15.3 15.3 15.3-6.863 15.3-15.3-6.863-15.3-15.3-15.3zm0 28c-4.021 0-7.605-1.884-9.933-4.81a12.425 12.425 0 0 1 6.451-4.4 6.507 6.507 0 0 1 -3.018-5.49c0-3.584 2.916-6.5 6.5-6.5s6.5 2.916 6.5 6.5a6.513 6.513 0 0 1 -3.019 5.491 12.42 12.42 0 0 1 6.452 4.4c-2.328 2.925-5.912 4.809-9.933 4.809z"></path></svg>
                                    </div>
                                </button>

                                {isOpen ? (
                                    <ClickAwayListener onClickAway={handleClickAway}>
                                        <div ref={usemodal} style={{position:"absolute",top:70,right:265,zIndex:1}}>
                                        <div className='modal'>
                                            <div className='modalic' style={{color:'black'}}>
                                                Kaydolun
                                            </div>
                                            <div className='modalic'>
                                                Oturum Açın
                                            </div>
                                            <div className='ayirici2'>                                                
                                            </div>
                                            <div className='modalic'>
                                                Evinizi Airbnb'ye taşıyın
                                            </div>
                                            <div className='modalic'>
                                                Yardım
                                            </div>
                                            
                                        </div>
                                        </div>
                                </ClickAwayListener>
                                ):null}
                               
                        
                        </div>
                    </div>
                    </div>
                    
            </div>
        </div>
        {/* Bar kısmı */}
        <div className='rolingbar'>
            <div className='rolingbarici'>
                {rolibarFonk()}
            </div>
            <div style={{position:"absolute",left:32,width:0}}>
                    {
                        yedek >= `${scrolsol-1}` && `${scrolsol}` !=0 ?(//burdaki -1 bar tolerans payıdır
                        <div className='buttondis left'>
                            <button className='buttonic' onClick={b}>{"<"}</button> 
                        </div>
                        ):""
                    }
                    
                    </div>
                <div style={{position:"relative",right:50,width:0}}>
                    {
                      yedek >= `${scrolsol+1}`  ?  (//bu +1 scrol hata payıdır
                      <div className='buttondis'>
                          <button className='buttonic' onClick={a}>{">"}</button>
                      </div>
                      ) :""
                    }
                </div>
            <div className='filitre'>
                <div className='out'>
                    <button className='button'>
                            <span style={{height:"100%",paddingTop:4}}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-funnel" viewBox="0 0 16 16">
                                    <path d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5v-2zm1 .5v1.308l4.372 4.858A.5.5 0 0 1 7 8.5v5.306l2-.666V8.5a.5.5 0 0 1 .128-.334L13.5 3.308V2h-11z"/>
                                </svg>
                            </span>
                            <div style={{height:"100%",paddingTop:5}}>
                                Filitre
                            </div>
                    </button>
                </div>
            </div>
        </div>
        
    </nav>
  )
}

export default Nav
