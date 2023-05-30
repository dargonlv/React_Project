import logo from './logo.svg';
import './App.css';
import Solmenu from './component/Solmenu';
import {Route,Routes} from "react-router-dom"
import Anasayfa from './component/Anasayfa';
import Hakkimda from './component/Hakkimda';

function App() {
  return (
    <div className="App">
      <div className='sol'>
        <Solmenu></Solmenu>
      </div>
      <div className='sag'>
        
        <div className='sagic' style={{position:'relative'}}>
          

          <Routes>
            <Route path='/' element={<Anasayfa></Anasayfa>}></Route>
            <Route path='/anasayfa' element={<Anasayfa></Anasayfa>}></Route>
            <Route path='/hakkimda' element={<Hakkimda></Hakkimda>}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
