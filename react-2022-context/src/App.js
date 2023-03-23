import React from "react";

import { useState, useEffect } from "react";
import Footer from "./component/Footer";
import Header from "./component/Header";
import { MainContext } from "./context";




function App() {

  const [logoText , SetLogoText ] = useState();
  const [them , SetThem] = useState('light');//başlangıçta theam light olucak
  useEffect(()=>{
    
    document.body.className= them;

  },[them])//dem her değiştiğinde üstteki işlem  tekraralancak

  const data = {//datamıza stateleirmizi ekledik
    them,
    SetThem,
    logoText,
    SetLogoText
  }

  return (
    <MainContext.Provider value={data}  >{/*sarmal yapısında oluşturduk provider dememiz şart gidecek value değerini data belirledik */}
      <Header   ></Header>
      <Footer  ></Footer>
      
    </MainContext.Provider>
  );
}

export default App;
