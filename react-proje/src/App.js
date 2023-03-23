
import './App.css';
import {useEffect,useState} from "react"
import SearchBox from './companents/SerachBox/search-boxComponents'
import CardList from './companents/card-list/card-list.companent';


function App() {
  const [monsters, SetMonsters]= useState([]);
  const [serachFiled,SetSearchFiled]= useState("");
  
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users').then((res)=>res.json()).then((users)=> SetMonsters(users));
  },[])
 

  const onSearchChange = (e)=>{
    const serachFiledString = e.target.value.toLocaleLowerCase();
    SetSearchFiled(serachFiledString);
    
  }
  
  
  
    const filiterMonster= monsters.filter((monster)=>{
      return monster.name.toLocaleLowerCase().includes(serachFiled);
    });
  
  



  return (
    <div className="App">
      <h1 className='app-title'>Monster Roldex</h1>
      {/* <input type={serachFiled} onChange={onSearchChange}></input> */}
      <SearchBox className="monster-search-box" placeholder="Search Monsters" onChangeHandler={onSearchChange} ></SearchBox>
      <CardList monsters={filiterMonster}></CardList>
    </div>
  );
}

export default App;
