//rfc kısa yolu ile funcionel bir companent ekledik
import React from 'react';
import PropTypes from "prop-types";//props özelliklerine erişim sağladık

function Navbar(e) {//props gonderdik
return (
    <div style={{fontSize:'30px'}}>
      {e.title}{e.nos}
    </div>
  )
}
Navbar.propTypes= {//önemli p si küçük olucak
    title: PropTypes.string.isRequired,//title propsu sadece string bir değer olabilir 
    //isrequired mutlaka gonderilmesi gerikiyo dedik
    nos: PropTypes.string//bir zonluluğu yok eğer gonderilmezse hata vermez
}
Navbar.defaultProps = {//eğer title diye props gelmezse
    title: "Default"
}
export default Navbar;