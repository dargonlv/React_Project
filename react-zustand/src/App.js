import './App.css';
import Kisiler from './companent/kisiler';
import Text from './companent/text';
import React,{useEffect, useState} from "react"
import useStore from './sorce';


function App() {

  const dark= useStore((dark)=>dark.dark)
    const body=document.querySelector('body');
    useEffect(()=>{
      if (dark) {
        body.classList.add('toggle');
        
      }else if(!dark){

        body.classList.remove('toggle');
      }
    },[dark])
  
  return (
    <div className='App'>
      <Text></Text>
      <Kisiler></Kisiler>      
    </div>  
  );
}

export default App;
