import React from 'react'
import "../css/kariyerCard.css"


function KariyerCard({children,solimge_baslik,baslik,altbaslik}) {
  return (
    <div className='kariyercardbody'  >
        <div className='cardsolimge'>
            <div className='cardparca'> 

            </div>
            <div style={{alignself: "stretch",marginTop:-1,marginRight:20,marginLeft:26,fontSize:14}}>

                {solimge_baslik}
            </div>
      </div>
      <div className='cardmetin'>
        <div style={{fontWeight:'bold'}}>
            {baslik}
        </div>
        <div style={{color:'gray',fontSize:11,marginTop:-4}}>
            {altbaslik}
        </div>
            {children}
        </div>
    </div>
  )
}

export default KariyerCard
