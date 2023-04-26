import './App.css';
import { Route,Navigate,BrowserRouter,Routes} from 'react-router-dom';
import Login from './pages/login';
import LoginPage from './pages/LoginPage';
import KullaniciArayuz from './pages/KullaniciArayuz';



function App() {
 
    return (
      <div className="App">
        
        <BrowserRouter>
        <Routes>

        <Route path='/login' element={<LoginPage></LoginPage>}></Route>
        <Route path='/' element={<LoginPage></LoginPage>}></Route>
       
        <Route path='/profil' element={<KullaniciArayuz></KullaniciArayuz>}></Route>
        </Routes>
        
        </BrowserRouter>
        
      </div>
    );
}

export default App;
