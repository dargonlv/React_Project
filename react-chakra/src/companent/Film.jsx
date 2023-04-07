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
  
  
  
  function Film() {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const[aciklama,setaciklama]=useState();

  const filmler = Depo((a)=>a.filmler );
  const Setfilmler = Depo((a)=>a.Setfilmler );

  const filmlerYedek = Depo((a)=>a.filmlerYedek );
  const SetfilmlerYedek = Depo((a)=>a.SetfilmlerYedek);

  

  const filmClick = (e,name)=>{
     
    const k = e.replace(/ /gi,"+")
     
     Linking.openURL(`https://www.google.com/search?q=${k}+film`)
  }

  const aciklamaClick = (e,id)=>{
    fetch(`http://www.omdbapi.com/?i=${e}&apikey=b920a3bf&page=1&plot=full`).then(s=> s.json()).then(a=>{setaciklama(a.Plot)})
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
      <>
        <Button color="black" onClick={aciklamaClick.bind(this,film.imdbID)}>aciklama</Button>
        
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent >
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              selamlar
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme='blue' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button variant='ghost'>Secondary Action</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
      <Text noOfLines={2} >{aciklama}</Text>
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
