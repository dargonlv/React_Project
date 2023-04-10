import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function Hakkinda() {
  return (
    <div style={{color:'white',width:"100%",height:"900px",backgroundColor:'brown'}}>
      hakkinda page
      
      <Outlet></Outlet>{/*Alt sayfalar olunca outleti eklememiz gerek */}
      <br></br><Link to="/hakkinda">Geri Dön</Link>
    </div>
  )
}

export default Hakkinda
