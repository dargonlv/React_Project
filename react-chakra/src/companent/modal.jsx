import React,{useState} from 'react'
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
  useDisclosure} from '@chakra-ui/react'
import "../App.css"
import "react-rating"
import Rating from 'react-rating'


let toogleButton = false;  

function ModalMulti({film}) {

    const OverlayOne = () => (
        <ModalOverlay
          bg='blackAlpha.300'
          backdropFilter='blur(10px) hue-rotate(90deg)'
        />
      )

      const OverlayTwo = () => (
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
      )

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [overlay, setOverlay] = React.useState(<OverlayOne />)
  

    const[aciklama,setaciklama]=useState([]);

    const aciklamatr = Depo((s)=> s.aciklamatr)
  const Setaciklamatr = Depo((s)=> s.Setaciklamatr)
  const SetaciklamatrClear = Depo((s)=> s.SetaciklamatrClear)

    const aciklamaClick = async (e,id)=>{
        setaciklama([]);
        SetaciklamatrClear();
        await fetch(`http://www.omdbapi.com/?i=${e}&apikey=b920a3bf&page=1&plot=full`).then(s=> s.json()).then(a=>{setaciklama(a);console.log(a)})
        
        
        onOpen();
        
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
    
    <Modal size="xl" isOpen={isOpen} onClose={onClose}  >
      <ModalOverlay 
      className='modaloverlay'
      />

      <ModalContent  bg="#300531da" color="white">
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
            <Button  className='button' onClick={ceviri.bind(this)} variant='outline' >Tr</Button>
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
          <Button _hover={{bg:"#c160e7"}} bg="#5a276e" color="white" mr={3} onClick={onClose}>
            Close
          </Button>
          
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
  )
}

export default ModalMulti
