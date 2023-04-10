import React,{useState} from 'react'
import Depo from '../Sorce'
import { Card, CardHeader, CardBody, CardFooter ,Button,Stack,Heading,Text,Image,SimpleGrid, 
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure} from '@chakra-ui/react'
import "../App.css"
import {Linking} from "react-native-web"

import "react-rating"
import Rating from 'react-rating'
  
  
  
  function Film() {
    const { isOpen, onOpen, onClose } = useDisclosure()
  

    const[aciklama,setaciklama]=useState([]);

  const aciklamatr = Depo((s)=> s.aciklamatr)
  const Setaciklamatr = Depo((s)=> s.Setaciklamatr)

  const filmler = Depo((a)=>a.filmler );
  const Setfilmler = Depo((a)=>a.Setfilmler );

  const filmlerYedek = Depo((a)=>a.filmlerYedek );
  const SetfilmlerYedek = Depo((a)=>a.SetfilmlerYedek);

  

  const filmClick = (e,name)=>{
     
    const k = e.replace(/ /gi,"+")
     
     Linking.openURL(`https://www.google.com/search?q=${k}+film`)
  }

  const aciklamaClick = (e,id)=>{
    setaciklama([]);
    fetch(`http://www.omdbapi.com/?i=${e}&apikey=b920a3bf&page=1&plot=full`).then(s=> s.json()).then(a=>{setaciklama(a)})
    fetch(`https://api.mymemory.translated.net/get?q=${aciklama.Plot}&langpair=en|tr`).then(s=> s.json()).then(a=>{Setaciklamatr(a.responseData.translatedText);console.log(a)})
    onOpen();
  }

  


  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(500px, 2fr))'>
  {filmler? filmler.map(film=>{
    
    
      
  return<Card variant='elevated' bg="#172454" color="white" className='card' style={{display:'flex',flexDirection:'row'}}>
    <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={film.Poster}
    alt='Caffe Latte'
    borderRadius="6px"
    />
    <div style={{display:'flex',flexDirection:'column'}}>
    <CardHeader>
      <Heading size='md'> {film.Title}</Heading>
    </CardHeader>
    <CardBody>
      {/* modal */}
      <>
        <Button _hover={{bg:"#c160e7"}} bg="#5a276e" color="white" onClick={aciklamaClick.bind(this,film.imdbID)}>aciklama</Button>
        
        <Modal size="xl" isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent  bg="#172454" color="white">
            <ModalHeader >{aciklama.Title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <div className='modal'>
                <div className='ic'>
                  <div className='image'>
                    <img src={aciklama.Poster} style={{width:140,height:210,borderRadius:5}} ></img>
                  </div>
                  Konusu : {aciklamatr ? aciklamatr : aciklama.Plot}
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
      {/* /modal */}
      <Text noOfLines={2} ></Text>
    </CardBody>
    <CardFooter>
      <div style={{display:'flex',flexDirection:'row'}}>
        <div className='katagori'>{film.Type}</div>
        <div className='katagori year'>{film.Year}</div>
        <div style={{display:'flex',flexDirection:'row',justifyContent:"flex-end" ,width:"100px"}}>
          <Button color="white" colorScheme='teal' onClick={filmClick.bind(this,film.Title)}>Göster</Button>
        </div>
      </div>
    </CardFooter>
    </div>
  </Card>
  }): Setfilmler(JSON.parse(JSON.stringify(filmlerYedek)))
  }
</SimpleGrid>
  )
}

export default Film
