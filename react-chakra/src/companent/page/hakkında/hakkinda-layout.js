import React from 'react'
import { Link } from 'react-router-dom'

function HakkindaLayout() {
  return (
    <div>
      <ul>
        <li>
          <Link to="konum">Konum Page</Link>
        </li>
        <li>
          <Link to="istatistik">İstatistik Page</Link>
        </li>
      </ul>
      
    </div>
  )
}

export default HakkindaLayout
