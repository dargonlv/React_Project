import React,{ useState} from 'react'
import Depo from '../Sorce'
import { 
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Box,Image, background} from '@chakra-ui/react'
import "../App.css"
import "react-rating"
import Rating from 'react-rating'



let toogleButton = false;  


function ModalMulti({film}) {


  const { isOpen, onOpen, onClose } = useDisclosure()
  const[aciklama,setaciklama]=useState([]);
  const[delay,SetDelay]=useState(false);
  const[filmImageCount,SetfilmImagesCount]= useState(0)
 
  const filmImages=Depo((s)=> s.filmImages)
  const SetfilmImages=Depo((s)=> s.SetfilmImages)
  const aciklamatr = Depo((s)=> s.aciklamatr)
  const Setaciklamatr = Depo((s)=> s.Setaciklamatr)
  const SetaciklamatrClear = Depo((s)=> s.SetaciklamatrClear)
  const filmtur=Depo((s)=> s.filmtur)
  const Setfilmtur=Depo((s)=> s.Setfilmtur)


  const aciklamaClick = async (e,id)=>{
    setaciklama([]);
    SetaciklamatrClear();
    await fetch(`http://www.omdbapi.com/?i=${e}&apikey=b920a3bf&page=1&plot=full`).then(s=> s.json()).then(a=>{setaciklama(a)})
    await fetch(`https://imdb-api.projects.thetuhin.com/title/${e}`).then(s=> s.json()).then(a=> {SetfilmImages(a.images);Setfilmtur(a.genre)})
    
    setTimeout(() => {
      SetDelay(true);
      
    }, 250);
    onOpen();
    // setInterval(deylayInt)
  }
  
  
  function ceviri (e){
        toogleButton  = !toogleButton
        const metinler = splitLongSentence(aciklama.Plot);
        if (toogleButton) {
          
          
          metinler.forEach(async (metin) => {
      
            await fetch(`https://api.mymemory.translated.net/get?q=${metin}&langpair=en|tr`).then(s => s.json())
            .then(a => { Setaciklamatr(a.responseData.translatedText)})
            })
            e.target.attributes[0].ownerDocument.activeElement.innerHTML="Eng"
            e.target.attributes[0].ownerDocument.activeElement.style={}
        } else {
          SetaciklamatrClear()
          e.target.attributes[0].ownerDocument.activeElement.innerHTML="Tr"
          
        }
  }
  function splitLongSentence(sentence) {
        const maxLength = 500; // Maksimum cümle uzunluğu
        const words = sentence.split(' '); // Cümleyi kelimelere ayır
    
        let result = [];
        let currentSentence = '';
    
        for (let i = 0; i < words.length; i++) {
            const word = words[i];
            const wordLength = word.length;
    
            if ((currentSentence.length + wordLength) <= maxLength) {
                currentSentence += word + ' ';
            } else {
                result.push(currentSentence.trim());
                currentSentence = word + ' ';
            }
        }
    
        if (currentSentence !== '') {
            result.push(currentSentence.trim());
        }
    
        return result;
  }
  
  function filmImagesOnceki(){
    
    if (filmImageCount>0) {
      SetfilmImagesCount(filmImageCount-1)
    }
    
  }

  function filmImagesSonraki(){
    
    if (filmImageCount < filmImages.length) {
      SetfilmImagesCount(filmImageCount+1)
    }
    else{
      SetfilmImagesCount(0)
    }
    console.log(filmImageCount)
  }

  return (
    <>
    <Button _hover={{bg:"#c160e7"}} bg="#722a8f" color="white" 
    onClick={aciklamaClick.bind(this,film.imdbID)}
     
    >aciklama</Button>

    
    
    <Modal size="xl" isOpen={isOpen} onClose={()=>{ SetDelay(false); setTimeout(onClose,250)}}>
      <ModalOverlay 
      className='modaloverlay'
      />

      <ModalContent  bg="#300531da" color="white"  >
      <Box
          // Modal içeriğini sağ tarafa kaydırmak için pozisyon ve sağ kenar boşluğunu ayarlıyoruz
          className='ModalBox'
          position="absolute"
          marginRight="560px"
          top="10px"
          right="40px"
          
          
          backgroundColor={'#300531da'}
          width="330px"
          opacity={delay ? "1" : "0"}
          bgColor={"white"}
          transition={"all 0.35s "} 

          bg="#31051ada" 
          color="white"
          borderRadius="7"
          >
            <div className='modalSol'>
              <div className='ic'>
                <a href={filmImages[filmImageCount]} target='_blank' placeholder='Yeni Sekmede Aç🪡' className='ic2'>
                <>
                <Image style={{objectFit:"cover",borderRadius:"8px"}}src={filmImages[filmImageCount]} ></Image>
                </>  
                </a>
              </div>
              <div className='icalt'>
                <Button size={'sm'} color="white" colorScheme='teal' 
                  onClick={filmImagesOnceki}>Önceki</Button>
                <Button size={'sm'} color="white" colorScheme='teal' 
                  onClick={filmImagesSonraki}>Sonraki</Button>
              </div>
            </div>
        </Box>
       
        <ModalHeader style={{textShadow:"#a73805 1px 0.9px"}} >
          {aciklama.Title} 
          <div>
            
          </div>
        
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        
          <div className='modal'>
            <div className='ic'>
              <div className='image'>
                <img src={aciklama.Poster} style={{width:140,height:210,borderRadius:5}} ></img>
              </div >
              Konusu : {aciklamatr ? aciklamatr : aciklama.Plot}
              
            </div>
            <div className='ceviriButton'>
              <div style={{display:'flex',flexDirection:'row',gap:"5px"}}>
            {filmtur ? filmtur.map((tur)=>{
              return <div className='katagori' style={{background:"rgba(289, 116, 120, 0.15)"}}>{tur}</div>
            }):""}
            </div>
            <Button  className='button'  onClick={ceviri.bind(this)} variant='outline' >Tr</Button>
            </div>
            <div className='ic'>
               İmdb : {aciklama.imdbRating}
              <div className='Rating' >
              <Rating 
              emptySymbol="bi bi-star bi--lg Ratingilk"
              fullSymbol="bi bi-star-fill bi--lg Ratingson"
              stop={10}
              initialRating={aciklama.imdbRating}
              readonly
              fractions={4}
              onHover=""
              />
            </div>
            <div className='ic alt'>
              Yıl : {aciklama.Year}
            </div>
            <div className='ic alt'>
              Süre : {aciklama.Runtime}
            </div>
            <div className='ic alt '>
              Dil : {aciklama.Language}
            </div>
            <div className='ic alt'>
              Yönetmen : {aciklama.Director}
            </div>
            <div className='ic alt'>
              Yazar : {aciklama.Writer}
            </div>
            <div className='ic alt'>
              Oyuncular : {aciklama.Actors}
            </div>
            <div className='ic alt'>
              Ödüller : {aciklama.Awards}
            </div>
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button _hover={{bg:"#c160e7"}} bg="#5a276e" color="white" mr={3} onClick={()=>{ SetDelay(false); setTimeout(onClose,250)}}>
            Close
          </Button>
          
        </ModalFooter>
       
      </ModalContent>
      
    </Modal>
  </>
  )
}

export default ModalMulti
