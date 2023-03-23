import {React,useRef} from 'react'
import useStore from '../sorce';


function Text() {

    const ekle = useStore((s)=> s.addkisiler)
    
    const toggleDarkMode =useStore((s)=> s.toggleDarkMode)
    const inputRef=useRef();
    const ss=useRef();

    const kayit= ()=>{
        ekle(inputRef.current.value);
        inputRef.current.value='';
    }

    const renk=()=>{
        toggleDarkMode();
        
    }

  return (
    <div ref={ss}>
      <input type='text' ref={inputRef}></input>
      <button onClick={kayit}>kaydet</button>
      <button onClick={renk}>Toggle</button>

    </div>
    )
}

export default Text
