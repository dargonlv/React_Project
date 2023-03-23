import React from 'react'
import {BrowserRouter,Route,Routes} from "react-router-dom"
import App from './App'
import Home from './page/Home'


const Routing = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<App/>}></Route>
          <Route path='/Home' element={<Home/>}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default Routing
