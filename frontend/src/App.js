<<<<<<< HEAD
=======

>>>>>>> 2c6ab9418c410c602f57f60f158e83cdeea13339
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import CreateAnnouncement from './pages/createAnnouncement';
import Navbar from './components/navbar.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
<<<<<<< HEAD
      
      <Navbar />
      <Routes>
    
      <Route path="/" element={<Home/>}></Route>
      
      
      <Route path="/CreateAnnouncement" element={<CreateAnnouncement/>}></Route>
      
      
     
    </Routes>
=======
>>>>>>> 2c6ab9418c410c602f57f60f158e83cdeea13339
    
    </div>
    </BrowserRouter>
  );
}

export default App;
