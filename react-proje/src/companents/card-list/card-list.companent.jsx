import { click } from '@testing-library/user-event/dist/click';
import {React} from 'react'
import Card from '../cardcopmanent';
import "./card-list.css"



function CardList({monsters}) {
  
  

    const click = (e)=>{
        console.log(this);
    }

    return (
      <div className='card-list'>
      

      { monsters.map((monster,id) => {
            return (
                 <Card monster={monster} click={()=>click()} ></Card>
            
            )
      })
      }
     
        
    </div>
  )
}
export default CardList;