
import './App.css';
// import User from './companent/User';
import Navbar from './companent/navbar';
import User1 from './companent/User1';
import Users from './companent/Users';
import UserConsumer from './context';

function App() {
  // const s =55;
  
  
  const isAuth = true;
  return (
    <div className="App ">
      <Navbar title='Kullanıcılar' />
      
      {/* {1+1} */}
      <h3 className='container'>{"Fatih".toUpperCase()}</h3>
      {/* <h2>{s}</h2> */}
      
      {/* <div>
        {
          isAuth ? <p>kullanıcı kayıtlı</p> : null
        }
      </div> */}
      {/* <User/>bu companenti kullandık */}
      <Users />
      
    </div>
  );
}

export default App;
