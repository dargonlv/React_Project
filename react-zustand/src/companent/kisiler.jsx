import React from 'react'
import useStore from '../sorce';

function Kisiler() {
    const kisiler= useStore((s)=> s.kisiler)

  return (
    <div>
      <div>
        <ul>
            {kisiler.map((kisi)=>{
                return <li>{kisi}</li>
             })}
        </ul>
      </div>
    </div>
  )
}

export default Kisiler
