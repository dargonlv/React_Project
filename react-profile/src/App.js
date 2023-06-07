import logo from './logo.svg';
import './App.css';
import React,{useEffect} from "react"
import Solmenu from './component/Solmenu';
import {Route,Routes} from "react-router-dom"
import Anasayfa from './component/Anasayfa';
import Hakkimda from './component/Hakkimda';
import Kariyer from './component/Kariyer';
import Depo from './Source';
import Contact from './component/Contact';


function App() {
  const {select,Setselect} = Depo();

  useEffect(()=>{
    let path =window.location.pathname
    if (path=="/anasayfa") {
      Setselect(0);
    }else if (path=="/hakkimda") {
      Setselect(1)
    }else if (path=="/kariyer") {
      Setselect(2)
    }else if (path=="/iletisim") {
      Setselect(3)
    }
  },[window.location.pathname])
  

 
  return (
    <div className="App"  >
      <div className='sol'>
        <Solmenu></Solmenu>
      </div>
      <div className='sag'>
        
        <div className='sagic' style={{position:'relative'}}>
          

          <Routes>
            <Route path='/' element={<Anasayfa></Anasayfa>}></Route>
            <Route path='/anasayfa' element={<Anasayfa></Anasayfa>}></Route>
            <Route path='/hakkimda' element={<Hakkimda></Hakkimda>}></Route>
            <Route path="/kariyer" element={<Kariyer></Kariyer>}></Route>
            <Route path="/iletisim" element={<Contact></Contact>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
