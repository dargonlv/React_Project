import React from 'react';
import SwitchTheam from "./SwitchTheam";
import { MainContext,useContext } from '../context';


function Footer() {

const {SetLogoText}= useContext(MainContext);
const switchlogotext = ()=>{
    SetLogoText(document.querySelector('input').value);
}

return (
    <div >
      foooter companent <br></br>
      <SwitchTheam></SwitchTheam>
      <input type={'text'} ></input>
      <button onClick={switchlogotext} >Logo Button</button>
    </div>
  )
}
export default Footer;