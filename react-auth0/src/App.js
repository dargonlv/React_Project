import './App.css';
import {useAuth0} from "@auth0/auth0-react"


function App() {
  const {loginWithRedirect ,logout,isAuthenticated,isLoading,user} = useAuth0();
  
  if (isAuthenticated) {
    console.log(user)
  }
  
  return (
    <div className="App">
      {isLoading  ? '' :  isAuthenticated ?
     <button onClick={logout}>Logout</button>:
     <button onClick={loginWithRedirect}>Login</button>
      }
    </div>
  );
}

export default App;
