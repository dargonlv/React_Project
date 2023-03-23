import React, { Component } from 'react';
import PropTypes from "prop-types";


 class User1 extends Component {
  state={// bu şekildede state olusturulur
    isViable: true
  }
  // constructor(props){//ilk yontem
  //   super(props);

  //   this.state = {
  //     isViable: false
  //   }

  // }

  /*-------- bind işlemini bu şekildede gerçeklşetire biliriz ----- *///dışarda yapttık
  // constructor(props){
  //   super(props)
  //   this.onClickEvent = this.onClickEvent.bind(this);

  // }

  onClickEvent =(e)=>{
    this.setState ({
      isViable: !this.state.isViable //true ise false fals ise true toogle button gibi davranacak
    })
  }

  render() {
    const {name,maas,departman} = this.props;//isimler aynı olmalı
    const {isViable} = this.state
    
    return (
      <div>
        
        <div className='col-md-8 mb-4'>
          <div className='card'>
            <div className='card-header d-flex justify-content-between'>
              <h4 className='d-inline' onClick={this.onClickEvent}>{name}</h4>
              <i class="bi bi-trash3" style={{cursor:'pointer'}}></i>
            </div>

            {isViable ? <div className='card-body text-justify' >
              <p className='card-text'>Maaş : {maas}</p>
              <p className='card-text'>Departman : {departman}</p>
              
            </div> : null
            }
            </div>  
          </div>
      </div>
    )
  }
}
User1.protoTypes = {
  name: PropTypes.string.isRequired,
  maas: PropTypes.string.isRequired,
  departman: PropTypes.string.isRequired

}
User1.defaultProps = {
  name: "bilgi Yok",
  maas: "bilgi Yok",
  departman: "bilgi Yok"
}

export default User1;