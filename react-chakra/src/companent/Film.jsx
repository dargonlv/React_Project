import React from 'react'
import Depo from '../Sorce'
import { Card, CardHeader, CardBody, CardFooter ,Button,Heading,Text,Image,SimpleGrid, 
  } from '@chakra-ui/react'
import "../App.css"
import {Linking} from "react-native-web"

import "react-rating"
import ModalMulti from './modal'


function Film() {

  const filmler = Depo((a)=>a.filmler );
  const Setfilmler = Depo((a)=>a.Setfilmler );

  const filmlerYedek = Depo((a)=>a.filmlerYedek );
  

  const filmClick = (e,name)=>{
     
    const k = e.replace(/ /gi,"+")
     
     Linking.openURL(`https://www.google.com/search?q=${k}+film`)
     
    
  }

  

  return (
    <SimpleGrid spacing={4} templateColumns='repeat(auto-fill, minmax(500px, 2fr))'>
  {filmler ? filmler.map((film,id)=>{
  
    
      
  return<Card variant='elevated' _hover={{boxShadow:"2px 2px 10px cadetblue" }} transition="all 0.25s "  transitionDelay="200ms" bg="#172454" color="white" className='card' style={{display:'flex',flexDirection:'row' }}>
    <Image
    objectFit='cover'
    maxW={{ base: '100%', sm: '200px' }}
    src={film.Poster}
    alt='Caffe Latte'
    borderRadius="6px"
    />
    <div style={{display:'flex',flexDirection:'column'}}>
    <CardHeader>
      <Heading size='md' style={{textShadow:"#a73805 1px 0.9px"}}> {film.Title}</Heading>
    </CardHeader>
    <CardBody>
      {/* modal */}
     <ModalMulti film={film}></ModalMulti>
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
