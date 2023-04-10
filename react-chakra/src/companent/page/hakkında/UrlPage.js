import React from 'react'
import {useParams} from "react-router-dom"

function UrlPage() {

    const {value, page} = useParams();
    
  return (
    <div>
      UrlPage
      <br></br>page URL  =  {value+" "+page}
    </div>
  )
}

export default UrlPage
