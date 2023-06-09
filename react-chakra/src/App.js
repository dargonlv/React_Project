import './App.css';
import {motion} from "framer-motion"

import {useEffect} from "react"
import Film from './companent/Film';
import Hakkinda from './companent/page/hakkında/hakkinda';
import Konum from './companent/page/hakkında/konum';
import Istatistik from './companent/page/hakkında/istatistik';
import HakkindaLayout from './companent/page/hakkında/hakkinda-layout';

import {Icon, SearchIcon} from "@chakra-ui/icons"
import {Button, Center, Input} from "@chakra-ui/react"
import Depo from './Sorce';
import { Routes,Route,NavLink, useNavigate, Navigate} from "react-router-dom"
import UrlPage from './companent/page/hakkında/UrlPage';
import ImageGallery from './companent/ImageGallery';



let deger = "0";

function App() {
  const navigate= useNavigate();
  
  const totalpage = Depo((s)=> s.totalpage)
  const Settotalpage = Depo((s)=> s.Settotalpage)

  let page= Depo((state)=> state.page)
  const Setpage= Depo((state)=> state.Setpage)

  const sayi = Depo((state)=> state.sayi)

  
  const kelime = Depo((state)=> state.kelime)
  const Setkelime = Depo((state)=> state.Setkelime)
  
  const filmler = Depo((a)=>a.filmler );
  const Setfilmler = Depo((a)=>a.Setfilmler);


  const SetfilmlerYedek = Depo((a)=>a.SetfilmlerYedek);

 

  useEffect(()=>{
   
    fetch(`https://www.omdbapi.com/?S=${kelime}&apikey=b920a3bf&page=${page}&plot=full`).then(s=> s.json()).then(a=>{Setfilmler(a.Search);Settotalpage(a.totalResults)})
    // console.log(filmler)
    // fetch(`https://imdb-api.projects.thetuhin.com/title/tt0316654`).then(s=> s.json()).then(a=>{console.log(a)})
    navigate(`/${page}`)
    
  /*eslint-disable-next-line */
  },[kelime,sayi,page])

  
  
  
const search = (e)=>{
  Setkelime(e.target.value)
  deger=0
  
}

const searchClick = ()=>{
  Setpage(1)
  navigate("/")
  
  
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
          <div>
          
          </div>
          <div className='link'>
            <NavLink to="/hakkinda">Hakkında</NavLink>
          </div>
          <div className="link">
            <NavLink to="/">Fİlmler</NavLink>
          </div>
        </nav>
        
    <div className="App">
      <div className='hepsi'>
        <motion.div animate={{opacity:1}} transition={{delay:1,duration:0.1}} initial={{opacity:0}} className='disSol' >
          <div className='solust'>
            <div className='solust2'>

            <Button className='solbutton' color="white" size="sm" backgroundColor={"#ad6800"} onClick={yedekle} >yedekle</Button>
            <ImageGallery></ImageGallery>
            
            </div>
          </div>
          <div className='solalt'>

          </div>
          
        </motion.div>

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
              <Route path='*' element={<Navigate to="/"></Navigate>}></Route>
              <Route path='/' element={<Film></Film>}>
                <Route path=':page' element={<App></App>} ></Route>
              </Route>                
              <Route path='/hakkinda' element={<Hakkinda></Hakkinda>}>
                <Route index={true} element={<HakkindaLayout></HakkindaLayout>}></Route>{/*hakkinda sayfas ile ilgili bilgiler burda olucak 
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
    <div style={{display:"flex",alignItems:'flex-end',justifyContent:'center' ,marginLeft:270}}>
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
