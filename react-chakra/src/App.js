import './App.css';
import MenuBar from './companent/Menu';
import {useEffect} from "react"
import Film from './companent/Film';
import Hakkinda from './companent/page/hakkında/hakkinda';
import Konum from './companent/page/hakkında/konum';
import Istatistik from './companent/page/hakkında/istatistik';
import Hakkinda_layout from './companent/page/hakkında/hakkinda-layout';

import {Icon, SearchIcon} from "@chakra-ui/icons"
import {Button, Center, Flex, Input, flexbox} from "@chakra-ui/react"
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

const searchFocus = (e)=>{
  console.log("girdi",e.target)
  
  document.querySelector(".searchdis").style="margin-left:335px ; transform:scale(1.2);background-Color:#ffffff20  ";
  document.querySelector(".searchic").style="background-Color:#0e1b50";
  
}

const searchBlur = (e)=>{
  console.log("ayrıldı",e)
  document.querySelector(".searchdis").style="margin-left:`` ; transform:scale(0.98)";
  document.querySelector(".searchic").style="background-Color:#0B1437";
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

        <nav className='navbar' style={{color:'white'}}>
          <div className='link'>
            <NavLink to="/hakkinda">Hakkında</NavLink>
          </div>
          <div className="link">
            <NavLink to="/">Fİlmler</NavLink>
          </div>
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
            <div className='searchdis' onFocus={searchFocus.bind(this)} onBlur={searchBlur.bind(this)}>
              <div className='searchic' >
                <Icon as={SearchIcon} color="white" />
                <Input variant='unstyled' placeholder='Search' color="white" htmlSize={26} width='auto' 
                onChange={search}   onClick={searchClick}/>
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
    <div style={{display:"flex",alignItems:'flex-end',justifyContent:'right' ,marginRight:20}}>
    <div className='App '  style={{
    height:"100%",width:1024,justifyContent:Center, gap:20}}>
          <Button onClick={Geri}>Geri</Button>
          <Button onClick={ileri}>ileri</Button>
    </div>
    </div>
    <footer className='App '  style={{color:'black',display:'flex',backgroundColor:"#b90a44",
    height:70,justifyContent:Center, gap:20}}>
          
    </footer>
  </>
  );
}

export default App;
