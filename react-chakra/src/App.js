import './App.css';
import MenuBar from './companent/Menu';
import {useEffect} from "react"
import Film from './companent/Film';
import Hakkinda from './companent/page/hakkında/hakkinda';
import Konum from './companent/page/hakkında/konum';
import Istatistik from './companent/page/hakkında/istatistik';
import Hakkinda_layout from './companent/page/hakkında/hakkinda-layout';

import {Icon, SearchIcon} from "@chakra-ui/icons"
import {Button, Center, Flex, Input} from "@chakra-ui/react"
import Depo from './Sorce';
import { Routes,Route,Link,NavLink, useParams, useNavigate} from "react-router-dom"
import UrlPage from './companent/page/hakkında/UrlPage';


let deger = "0";

function App() {
  const navigate= useNavigate();
  
  const totalpage = Depo((s)=> s.totalpage)
  const Settotalpage = Depo((s)=> s.Settotalpage)

  let page= Depo((state)=> state.page)
  const Setpage= Depo((state)=> state.Setpage)

  const sayi = Depo((state)=> state.sayi)
  const setsayi = Depo((state)=> state.setsayi)
  
  const kelime = Depo((state)=> state.kelime)
  const Setkelime = Depo((state)=> state.Setkelime)
  
  const filmler = Depo((a)=>a.filmler );
  const Setfilmler = Depo((a)=>a.Setfilmler);

  const filmlerYedek = Depo((a)=>a.filmlerYedek );
  const SetfilmlerYedek = Depo((a)=>a.SetfilmlerYedek);

 

  useEffect(()=>{
   
    fetch(`https://www.omdbapi.com/?S=${kelime}&apikey=b920a3bf&page=${page}&plot=full`).then(s=> s.json()).then(a=>{Setfilmler(a.Search);Settotalpage(a.totalResults)})
    // console.log(filmler)
    navigate(`/${page}`)
    
  },[kelime,sayi,page])

  
  
  
const search = (e)=>{
  Setkelime(e.target.value)
  deger=0
  
}

const searchClick = ()=>{
  Setpage(1)
  navigate("/")
  console.log(page)
  
}


const yedekle = ()=>{
  SetfilmlerYedek(filmler);
  console.log(JSON.stringify(filmler))
  console.log(filmler)
}  

const ileri = ()=>{
  if(kelime && totalpage>10 && totalpage-deger>10){
    Setpage(page+1)
    deger += 10;
    Settotalpage((totalpage-5))
    console.log(totalpage-deger)
  }
}

const  Geri = ()=>{
if(!(page <=1)&&kelime){
  Setpage(page-1)
  deger -= 10;
  
}
}



return (
  <>
        <nav style={{color:'white'}}>

            <Link to="/hakkinda">Hakkında</Link>
            <Link to="/">Fİlmler</Link>
        </nav>
        
    <div className="App">
      <div className='hepsi'>
        <div className='disSol' >
          <div className='solust'>
            <div className='solust2'>

            <Button className='solbutton' onClick={yedekle} >yedekle</Button>
            <Button className='solbutton' onClick={yedekle} >yedekle</Button>
            
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
                <Input variant='unstyled' placeholder='Search' color="white" htmlSize={26} width='auto' 
                onChange={search} onClick={searchClick}/>
              </div>
            </div>
          </div>
                            
          <div className='sag'>
            <Routes>
              <Route path='/' element={<Film></Film>}>
                <Route path=':page' element={<App></App>} ></Route>
              </Route>                
              <Route path='/hakkinda' element={<Hakkinda></Hakkinda>}>
                <Route index={true} element={<Hakkinda_layout></Hakkinda_layout>}></Route>{/*hakkinda sayfas ile ilgili bilgiler burda olucak 
                bunun altındaki sayfalara geçince hakkinda kısmı gözümkesin diye hakkında layout diye bir sayfa oluşturduk*/}
                <Route path='konum' element={<Konum></Konum>}></Route>
                <Route path='istatistik' element={<Istatistik></Istatistik>}></Route>
                <Route path='urlpage/:url' element={<UrlPage></UrlPage>}/>
              </Route>

            </Routes>
           
          </div>
        </div>
      </div>
    </div>
    <footer className='App'  style={{color:'black',display:'flex',backgroundColor:'brown',
    height:"100%",justifyContent:Center}}>
          <Button onClick={Geri}>Geri</Button>
          <Button onClick={ileri}>ileri</Button>
    </footer>
  </>
  );
}

export default App;
