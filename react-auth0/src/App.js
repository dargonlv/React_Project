import './App.css';
import {useAuth0} from "@auth0/auth0-react"
import { version } from 'react';


function App() {
  const {loginWithRedirect ,logout,isAuthenticated,isLoading,user,getIdTokenClaims} = useAuth0();
  
  if (isAuthenticated) {
    console.log(user)
  }
  

   const token = async()=>{return await getIdTokenClaims()};
  //  console.log(token());
  return (
    <div className="App">
      {
        isAuthenticated ?
        <img src={user.picture} alt={user.name}></img> : ''
        
      }<br></br>
      {isLoading  ? '' :  isAuthenticated ?
        <div>
        <button onClick={logout}>Logout</button>
        <h3>{user.name}</h3>
        <p>{user.email}</p>
        {/* <p>{token}</p> */}
        </div>:
        <button onClick={loginWithRedirect}>Login</button>
      }
    </div>
  );
}

export default App;
