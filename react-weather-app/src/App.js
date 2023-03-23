import axios from 'axios';
import React ,{ useState,useEffect } from 'react';
import './App.css';
import City from './City';

function App() {
  const key ='b54e9f27fbc7740ced8359569722facd';
  const [search, setSerach] = useState("");//2. parametre içine bişey aatrken ilk parametre gösterirken
  const [city, setCity] = useState();
  const text= document.querySelector('input');


  useEffect(()=>{
    async function getApi() {
      try {
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${key}&units=metric`);
        // console.log(response);
        setCity(response.data);
      } catch (error) {
        // console.error(error);
      }
    }

    getApi();
  },[search])//her serach reneder edildiğinde getapiyi çalıstıracak
    // console.log(search);
    
  return (
    <div className="App">
      <div>
        <input onChange={(e)=>setSerach(e.target.value)} type='text' className='border-y-2 bg-orange-500'></input>
      </div>
      <City veri={city}></City> 
    </div>
  );
  

}

export default App;
