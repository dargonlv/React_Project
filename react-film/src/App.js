import axios from "axios"
import {useEffect,useState} from "react"
import './App.css';

 function App() {
  const [kelime,Setkelime]= useState('');
  const [filmler, Setfilmler]= useState([]);
  let page=1;

  useEffect(()=>{
      fetch(`https://www.omdbapi.com/?S=${kelime}&apikey=b920a3bf&page=${page}&plot=short`).then(s=> s.json()).then(a=>Setfilmler(a.Search))
      console.log(filmler)
  },[kelime,page])
  
  const Search = (e)=>{

      Setkelime(e.target.value)
      page=1;

  }
  
  const sayfagec = ()=>{
    page++
  }

 
  return (
    <div className="App">
      
        <input type={"search"} onChange={Search} ></input>
        <p>{page}</p> <button onClick={sayfagec}>Sonraki Sayfa</button>
        <div className="filmler">
          {filmler?
            filmler.map(s=> {
              return<div className="film">
                <div className="img">
                  <img src={s.Poster} ></img>
                </div>
                <div className="text">
                <p>{s.Title}<br/>{s.Year}<br/>{s.Type}</p>
                
                </div>
                
              </div>
            }):''
          }
        </div>
        
      
    </div>
  );
}

export default App;
