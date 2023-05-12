import './App.css';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import {Navbar} from "./components/Navbar"
import{Home}  from './pages/Home'
import {Authentication} from './pages/authentication'

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      
      
      <Navbar/>
      <Routes>
        
       
        <Route path="/auth" element={<Authentication />} />
        <Route path="/" element={<Home />} />
        
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
