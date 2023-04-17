import React,{useEffect, useState} from 'react'
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
  background,Box} from '@chakra-ui/react'
import "../App.css"
import "react-rating"
import Rating from 'react-rating'


let toogleButton = false;  

function ModalMulti({film}) {


  const { isOpen, onOpen, onClose } = useDisclosure()
  const[aciklama,setaciklama]=useState([]);
  const[delay,SetDelay]=useState(false)
  const[interval,setInterval]=useState(0)

  const aciklamatr = Depo((s)=> s.aciklamatr)
  const Setaciklamatr = Depo((s)=> s.Setaciklamatr)
  const SetaciklamatrClear = Depo((s)=> s.SetaciklamatrClear)

  const aciklamaClick = async (e,id)=>{
    setaciklama([]);
    SetaciklamatrClear();
    await fetch(`http://www.omdbapi.com/?i=${e}&apikey=b920a3bf&page=1&plot=full`).then(s=> s.json()).then(a=>{setaciklama(a)})
    
    const deylayInt = setInterval(()=>{
      SetDelay(true)
      console.log('sürekimii i')
    },1000)
    onOpen();
    setInterval(deylayInt)
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

      

  return (
    <>
    <Button _hover={{bg:"#c160e7"}} bg="#722a8f" color="white" 
    onClick={aciklamaClick.bind(this,film.imdbID)}
     
    >aciklama</Button>

    
    
    <Modal size="xl" isOpen={isOpen} onClose={()=>{ onClose(); SetDelay(false);clearInterval(interval)}}>
      <ModalOverlay 
      className='modaloverlay'
      />

      <ModalContent  bg="#300531da" color="white"  >
       
        <ModalHeader style={{textShadow:"#a73805 1px 0.9px"}} >
          {aciklama.Title} 
          <div>
            
          </div>
        
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
        <Box
          // Modal içeriğini sağ tarafa kaydırmak için pozisyon ve sağ kenar boşluğunu ayarlıyoruz
          position="fixed"
          right="40px"
          top="50%"
          transform="translateY(-50%)"
          backgroundColor={'#300531da'}
          width="330px"
          opacity={delay ? "1" : "0"}
          bgColor={"white"}
          >
            <div style={{backgroundColor:'white',width:"252px",height:"255px"}}>

            </div>
        </Box>
          <div className='modal'>
            <div className='ic'>
              <div className='image'>
                <img src={aciklama.Poster} style={{width:140,height:210,borderRadius:5}} ></img>
              </div >
              Konusu : {aciklamatr ? aciklamatr : aciklama.Plot}
              
            </div>
            <div className='ceviriButton'>
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
          <Button _hover={{bg:"#c160e7"}} bg="#5a276e" color="white" mr={3} onClick={()=>{ onClose(); SetDelay(false);clearInterval(interval)}}>
            Close
          </Button>
          
        </ModalFooter>
      </ModalContent>
    </Modal>
    {/* 2. Modal */}
    {/* <Modal size="xl" isOpen={isOpen} isCentered={false} onClose={()=>{ onClose(); SetDelay(false);clearInterval(interval)}}>
   
      <ModalOverlay 
      style={{backdropFilter:'none'}}
      />

      <ModalContent  bg="#300531da" color="white">
      <Box
          // Modal içeriğini sağ tarafa kaydırmak için pozisyon ve sağ kenar boşluğunu ayarlıyoruz
          position="fixed"
          right="40px"
          top="50%"
          transform="translateY(-50%)"
          backgroundColor={'#300531da'}
          width="330px"
          opacity={delay ? "1" : "0"}
          
        >
        <ModalHeader style={{textShadow:"#a73805 1px 0.9px"}} >
          
          <div>
            
          </div>
        
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <div>
            deneme yazısıı bir iki

          </div>
        </ModalBody>

        <ModalFooter>
          <Button _hover={{bg:"#c160e7"}} bg="#5a276e" color="white" mr={3} onClick={()=>{ onClose(); SetDelay(false);clearInterval(interval)}}>
            Close
          </Button>
          
        </ModalFooter>
        </Box>
      </ModalContent>
    </Modal> */}
    
  </>
  )
}

export default ModalMulti
