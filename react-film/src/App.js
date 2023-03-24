import axios from "axios"
import {useEffect,useRef} from "react"
import './App.css';
import Depo from "./storge";
import {Linking} from "react-native"


let  page=1;
 function App() {
  const sayi = Depo((state)=> state.sayi)
  const setsayi = Depo((state)=> state.setsayi)
  
  const kelime = Depo((state)=> state.kelime)
  const Setkelime = Depo((state)=> state.Setkelime)
  
  const filmler = Depo((a)=>a.filmler );
  const Setfilmler = Depo((a)=>a.Setfilmler);

  const filmusref= useRef();
  
  
  

  useEffect(()=>{
      fetch(`https://www.omdbapi.com/?S=${kelime}&apikey=b920a3bf&page=${page}&plot=short`).then(s=> s.json()).then(a=>Setfilmler(a.Search))
      // console.log(filmler)
  },[kelime,sayi])
  
  const Search = (e)=>{

      Setkelime(e.target.value)
      page=1;
      setsayi(page);
      

  }
  
  const sayfagec = (e)=>{
    page++
    setsayi(page);
    window.scrollY=0;
    
  }
  const sayfageri = ()=>{
    if (page > 1) {
      page--
      setsayi(page)
    }
  }

  const filmClick = (e,name)=>{
     
    const k = e.replace(/ /gi,"+")
     
     Linking.openURL(`https://www.google.com/search?q=${k}+film`)
  }

 
  return (
    <div className="App">
      <div className="banner">
        <div className="banner-text">Filmler.com</div>
      </div>
      
        <input type={"search"} className="search" onChange={Search} ></input>
          <div className="filmler">
            {filmler?
              filmler.map(s=> {
                return<div className="film"  onClick={filmClick.bind(this,s.Title)}>
                  <div className="img">
                    <img src={s.Poster} ></img>
                  </div>
                  <div className="text">
                  <p><div className="Title" >{s.Title}</div>{s.Year}<br/>{s.Type}</p>
                
                  </div>
                
                </div>
              }):''
            }
         </div>
        
            <p>{sayi}</p> 
            <br/>

            <div >
              <button className="Button" onClick={sayfageri} style={{marginBottom:30}}>Önceki Syafa</button>
              <button className="Button" onClick={sayfagec} style={{marginLeft:15}}>Sonraki Sayfa</button>
            </div>
            
      
    </div>
  );
}

export default App;
