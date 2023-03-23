import React from 'react';
import { MainContext,useContext } from '../context'//constextimizi ekledik usecontexle beraber onu da im
/*port eetimiziçin buradan erişim sağlaya bildik*/

function Header() {//parametreyi stati ala bilmek için süslü parantez şart

  
  const {them,logoText} = useContext(MainContext);//use contexi kullanrarak maincontexteki istedğimiz veriyi çektik burada sadece them e ihtiyac var
  return (
    <div>
      <h3>{logoText}</h3>
      Current time : {them}
    </div>
  )
}
export default Header