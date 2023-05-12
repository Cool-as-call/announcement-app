import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Home from './pages/home';
import CreateAnnouncement from './pages/createAnnouncement';
import Navbar from './components/navbar.js';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      <Navbar />
      <Routes>
    
      <Route path="/" element={<Home/>}></Route>
      
      
      <Route path="/CreateAnnouncement" element={<CreateAnnouncement/>}></Route>
      
      
     
    </Routes>
    
    </div>
    </BrowserRouter>
  );
}

export default App;
