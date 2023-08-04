import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import Signup from './components/pages/Signup';
import Services from './components/pages/Services';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import Consulting from './components/pages/Consulting';
import Onehome from './components/pages/Onehome';



function App() {
  return (
    
    <Router>
      <Navbar />
      <Routes>
      <Route>
        <Route path='/' exact Component={Home} />
        <Route path='/signup' exact Component={Signup} />
        <Route path='/services' exact Component={Services} />
        <Route path='/onehome' exact Component={Onehome} />
        
        <Route path='/contact' exact Component={Contact} />
        <Route path='/consulting' exact Component={Consulting} />
      </Route>
      </Routes>
    </Router>
    
  );
}

export default App;
