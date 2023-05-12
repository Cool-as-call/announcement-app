import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
<<<<<<< HEAD


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
=======
import reportWebVitals from './reportWebVitals';
import Home from './container/Home';
import Home2 from './container/Home2';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
    <Home2 />
  </React.StrictMode>
);
>>>>>>> 2c6ab9418c410c602f57f60f158e83cdeea13339

