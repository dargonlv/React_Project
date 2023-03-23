import React from 'react'
import { MainContext,useContext } from '../context'


function SwitchTheam() {
     const {them,SetThem}= useContext(MainContext);

    const switchTheam = ()=>{
        SetThem(them === 'light' ? 'dark' : 'light')
    }
  return (
    <div>
      <button onClick={switchTheam}  >Switch Theam</button>
    </div>
  )
}
export default SwitchTheam;
