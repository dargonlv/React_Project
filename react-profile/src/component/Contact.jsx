import React from 'react'
import "../css/contact.css"
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';
import CallOutlinedIcon from '@mui/icons-material/CallOutlined';
import CheckCircleOutlinedIcon from '@mui/icons-material/CheckCircleOutlined';
import ChatBubbleOutlinedIcon from '@mui/icons-material/ChatBubbleOutlined';
import { Button, Input,Textarea } from '@chakra-ui/react';
import { motion } from 'framer-motion';



function Contact() {
  return (
    <motion.div   animate={{opacity:1,transform:"scale(1)"}}  transition={{delay:0.25,duration:0.2,ease:'easeInOut'}}
            initial={{opacity:0,transform:"scale(0.92)"}} >
    <div className='contactmain '>
      <div className='solimge'>
        <div className='parca'> 

        </div>
        <div style={{alignself: "stretch",marginRight:20,marginLeft:80,marginTop:10,fontSize:20,fontWeight:"bold"}}>

          İletişim
        </div>

        <div style={{position:'relative'}}>
          <div className='ust' >
            
          </div>
        </div>

      </div>
      <div className='ara'>
        
      </div>

      <div className='contactbody'>
        <div className='iletisimbilgi'>
            <div className='baslik'>
                <div>

                    İletişim Bilgileri
                </div>
            </div>

            <div className='imetin'>
                İleitşim iblgisi burada olacak İleitşim iblgisi burada olacak 
                İleitşim iblgisi burada olacak İleitşim iblgisi burada olacak 
                İleitşim iblgisi burada olacak İleitşim iblgisi burada olacak 
                İleitşim iblgisi burada olacak İleitşim iblgisi burada olacak 
                İleitşim iblgisi burada olacak İleitşim iblgisi burada olacak 
                İleitşim iblgisi burada olacak İleitşim iblgisi burada olacak 
                İleitşim iblgisi burada olacak İleitşim iblgisi burada olacak 
            </div>

            <div className='imgeler'>
                <div className='imge'>
                    <FmdGoodOutlinedIcon style={{width:35,height:35}} ></FmdGoodOutlinedIcon>
                    <div className='metin2'>
                        sadasdsda sdds
                    </div>
                </div>
                <div className='imge'>
                    <MailOutlinedIcon style={{width:35,height:35}}></MailOutlinedIcon>
                    <div className='metin2'>
                        sadasdsda sdds
                    </div>
                </div>
                
                <div className='imge'>
                    <CallOutlinedIcon style={{width:35,height:35}}></CallOutlinedIcon>
                    <div className='metin2'>
                        sadasdsda sdds
                    </div>
                </div>

                <div className='imge'>
                    <CheckCircleOutlinedIcon style={{width:35,height:35}}></CheckCircleOutlinedIcon>
                    <div className='metin2'>
                        sadasdsda sdds
                    </div>
                </div>

            </div>
        </div>

        <div className='iletisimform'>
            <div className='baslik'>
                <div>

                    İletişim Formu
                </div>
            </div>

            <div className='inputlar'>
                <div className='input'>
                    <Input focusBorderColor='orange.400' borderRadius={0} placeholder='Ad Soyad' ></Input>
                    <div className='inputlogo' >
                        <FmdGoodOutlinedIcon ></FmdGoodOutlinedIcon>
                    </div>
                
                </div>
                <div className='input'>
                    <Input focusBorderColor='orange.400' _focusWithin={1} borderRadius={0} placeholder='E-Mail' ></Input>
                    <div className='inputlogo' >
                        <MailOutlinedIcon ></MailOutlinedIcon>
                    </div>
                
                </div>
                <div className='input'>
                    <Textarea focusBorderColor='orange.400' height={120} _focusWithin={1} borderRadius={0} placeholder='Açıklamanızı Giriniz.' ></Textarea>
                    <div className='inputlogo' >
                        <ChatBubbleOutlinedIcon ></ChatBubbleOutlinedIcon>
                    </div>
                
                </div>
                <div className='button'>
                    <Button borderRadius={0} border={"solid 2px "} backgroundColor={"rgb(0,0,0,0)"} size={"lg"} borderColor={"orange.300"} _hover={{background:"orange.300",color:"white"}}>Gönder</Button>
                </div>
            </div>

        </div>
      </div>

    </div>
    </motion.div>
  )
}

export default Contact
