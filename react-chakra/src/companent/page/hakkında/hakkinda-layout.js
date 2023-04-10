import React from 'react'
import { Link } from 'react-router-dom'

function Hakkinda_layout() {
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

export default Hakkinda_layout
