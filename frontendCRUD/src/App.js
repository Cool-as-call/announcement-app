
import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import CreateAnnouncement from './pages/createAnnouncement';
import Navbar from './components/navbar.js';

function App() {
  return (
    <BrowserRouter>
    <div className="navbar">

      
      <Navbar />
      <Routes>
    
      <Route path="/" element={<Home/>}/>
      <Route path="/CreateAnnouncement"  element={<CreateAnnouncement/>}/>
     
    </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
