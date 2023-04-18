import React,{useEffect} from 'react'
import Depo from '../Sorce'
import { Img, Radio, RadioGroup, Stack } from '@chakra-ui/react'

function ImageGallery() {
    const filmlerYedek = Depo((s)=> s.filmlerYedek)
    const [sayi, Setsayi]=  React.useState(0)

    React.useEffect(()=>{
        const interval = setInterval(() => {
            Setsayi(sayi=>sayi+1)
            
            
            
        }, 15000);
        return ()=> clearInterval(interval)
    },[])

    useEffect (()=>{
        if (sayi==10) {
            Setsayi(0)
            
        }
    },[sayi])
    
    function barclick(e) {
        Setsayi(parseInt(e.target.dataset.bar))
        console.log(sayi)
        
    }

    
  return (
    <div className='ImageGallery'>
        <div className='ic'>
            
            <Img className='Image' style={{borderRadius:"7px"}} src={filmlerYedek[sayi >=10 ? 0 :sayi].Poster} ></Img>
            
                <div className='minibar'>
                    <RadioGroup value={`${sayi}`}>
                        <Stack spacing={1.5} direction={'row'}>
                            <Radio size="sm" borderColor={"#ffffff7a"} backgroundColor={"#ffffff41"} colorScheme='orange' data-bar='0' className='bar' onClick={barclick.bind(this)} value='0'></Radio>
                            <Radio size="sm" borderColor={"#ffffff7a"} backgroundColor={"#ffffff41"} colorScheme='orange' data-bar='1' className='bar' onClick={barclick.bind(this)} value='1'></Radio>
                            <Radio size="sm" borderColor={"#ffffff7a"} backgroundColor={"#ffffff41"} colorScheme='orange' data-bar='2' className='bar' onClick={barclick.bind(this)} value='2'></Radio>
                            <Radio size="sm" borderColor={"#ffffff7a"} backgroundColor={"#ffffff41"} colorScheme='orange' data-bar='3' className='bar' onClick={barclick.bind(this)} value='3'></Radio>
                            <Radio size="sm" borderColor={"#ffffff7a"} backgroundColor={"#ffffff41"} colorScheme='orange' data-bar='4' className='bar' onClick={barclick.bind(this)} value='4'></Radio>
                            <Radio size="sm" borderColor={"#ffffff7a"} backgroundColor={"#ffffff41"} colorScheme='orange' data-bar='5' className='bar' onClick={barclick.bind(this)} value='5'></Radio>
                            <Radio size="sm" borderColor={"#ffffff7a"} backgroundColor={"#ffffff41"} colorScheme='orange' data-bar='6' className='bar' onClick={barclick.bind(this)} value='6'></Radio>
                            <Radio size="sm" borderColor={"#ffffff7a"} backgroundColor={"#ffffff41"} colorScheme='orange' data-bar='7' className='bar' onClick={barclick.bind(this)} value='7'></Radio>
                            <Radio size="sm" borderColor={"#ffffff7a"} backgroundColor={"#ffffff41"} colorScheme='orange' data-bar='8' className='bar' onClick={barclick.bind(this)} value='8'></Radio>
                            <Radio size="sm" borderColor={"#ffffff7a"} backgroundColor={"#ffffff41"} colorScheme='orange' data-bar='9' className='bar' onClick={barclick.bind(this)} value='9'></Radio>
                        </Stack>
                    </RadioGroup>
                </div>
            

        </div>
    </div>
  )
}

export default ImageGallery
