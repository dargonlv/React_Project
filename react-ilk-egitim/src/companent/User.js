//rcc diyerek bir sınıf companenti ekledik
import React, { Component } from 'react';


class User extends Component {
  render() {
    const handleSubmit = (e)=>{
        
        e.preventDefault();
        
    };

   

    return (
      <div>
        <form onSubmit={handleSubmit}>
            <input type={Text} ></input>
            <button>Gönder</button>
        </form>
        
      </div>
    )
  }
  
}


export default User;//başka claslarda kullana bilmek için export ettik