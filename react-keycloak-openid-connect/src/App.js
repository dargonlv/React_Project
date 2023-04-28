import './App.css';
import React,{useEffect} from 'react';
import { Route,Navigate,BrowserRouter,Routes} from 'react-router-dom';
import Login from './pages/login';
import LoginPage from './pages/LoginPage';
import KullaniciArayuz from './pages/KullaniciArayuz';
import Depo from './Source';



function App() {
  const {time,Settime,
         dead_time,Setdead_time,
         token}=Depo();

  
  useEffect(()=>{
    const a =setInterval(()=>{
      
      
      if (token!="0") {
        if (token!=null) {
          Settime(time+1)
          Setdead_time(dead_time+1)
          console.log(time,"genel süre :",dead_time)
          if (time=="120") {
            Settime(0)
            console.log("sıfırladnid")
          }
        }
      }
        
      
    },1000)
    return ()=>{
      clearInterval(a)
    }
    
  })
  
 
    return (
      <div className="App">
        
        <BrowserRouter>
        <Routes>

        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
       
        <Route path='/profile' element={<KullaniciArayuz></KullaniciArayuz>}></Route>
        </Routes>
        
        </BrowserRouter>
        
      </div>
    );
}

export default App;
