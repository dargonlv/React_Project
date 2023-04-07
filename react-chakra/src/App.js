import './App.css';
import MenuBar from './companent/Menu';
import {useEffect} from "react"
import Film from './companent/Film';
import {Icon, SearchIcon} from "@chakra-ui/icons"
import {Button, Input} from "@chakra-ui/react"
import Depo from './Sorce';




function App() {
  const sayi = Depo((state)=> state.sayi)
  const setsayi = Depo((state)=> state.setsayi)
  
  const kelime = Depo((state)=> state.kelime)
  const Setkelime = Depo((state)=> state.Setkelime)
  
  const filmler = Depo((a)=>a.filmler );
  const Setfilmler = Depo((a)=>a.Setfilmler);

  const filmlerYedek = Depo((a)=>a.filmlerYedek );
  const SetfilmlerYedek = Depo((a)=>a.SetfilmlerYedek);

 

  useEffect(()=>{
    fetch(`https://www.omdbapi.com/?S=${kelime}&apikey=b920a3bf&page=1&plot=full`).then(s=> s.json()).then(a=>{Setfilmler(a.Search)})
    // console.log(filmler)
  },[kelime,sayi])
  
const search = (e)=>{
  Setkelime(e.target.value)
  
}


const yedekle = ()=>{
  SetfilmlerYedek(filmler);
  console.log(JSON.stringify(filmler))
  console.log(filmler)
}  

const yeniFetch = ()=>{
  fetch(`http://www.omdbapi.com/?i=tt0944947&apikey=b920a3bf&page=1&plot=full`).then(s=> s.json()).then(a=>console.log(a))

}

return (
    <div className="App">
      <div className='hepsi'>
        <div className='disSol' >
          <div className='solust'>
            <div className='solust2'>

            <Button className='solbutton' onClick={yedekle} style={{}}>yedekle</Button>
            <Button className='solbutton' onClick={yedekle} style={{}}>yedekle</Button>
            
            </div>
          </div>
          <div className='solalt'>

          </div>
          
        </div>

        <div className='disSag'>

          <div className='ust'>
            <text style={{fontSize:24,paddingLeft:10}}>Filmler</text>
            <div className='searchdis'>
              <div className='searchic'>
                <Icon as={SearchIcon} color="white" />
                <Input variant='unstyled' placeholder='Search' color="white" htmlSize={26} width='auto' onChange={search}/>
              </div>
            </div>
          </div>
                <Button className='solbutton' onClick={yeniFetch} style={{}}>Çağır</Button>                
          <div className='sag'>
           <Film></Film>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
