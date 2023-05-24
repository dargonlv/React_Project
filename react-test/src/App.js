import React,{useRef,useState} from "react"
import './App.css';
import Card from "./component/card";

function App() {
  const usecolor = new useRef()
  const [bool,Setbool]= useState(true);



  function renkconvert(){
    
    if(bool){
      usecolor.current.style.backgroundColor="red";
    }else{
      usecolor.current.style.backgroundColor="black";
    }
    Setbool(!bool)
    
  }

  return (
    <div className="App">
      <h2>Selamlar</h2>
      <input placeholder='isminiz'>
      
      </input>  
      <button className='button' onClick={renkconvert}>Tıkla</button>
      <button className='button2'>gonder</button>
      <button className='button3'>gonder</button>
      <div className="renkdiv" style={{width:250,height:200,backgroundColor:"black"}} ref={usecolor}></div>
      <div className="cardlar" style={{paddingTop:15,display:"flex",justifyContent:"center",flexDirection:"row",flexWrap:"wrap",gap:35}}>
        <Card></Card>
        <Card></Card>
        <Card></Card>
        <Card></Card>
      </div>
    </div>
  );
}

export default App;
