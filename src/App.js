// import logo from './logo.svg';
// import logo from './AV-logo.png';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './App.css';
import Layout from './components/Layout';
import Home from './components/Home'
import Jewelery from './components/Jewelery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mensclothing from './components/mensclothing';
import Womensclothing from './components/womensclothing';
import Electronics from './components/electronics';
import Payment from './components/Payment';


function App() {
  return (
  <>
     <div className="App">
      <header>
      <Router>
    <div>

      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
             <Route path='/jewelery' element={<Jewelery/>}/>
             <Route path='/electronic' element={<Electronics/>}/>
             <Route path='/menclothing' element={<Mensclothing/>}/>
             <Route path='/womenclothing' element={<Womensclothing/>}/>
             <Route path='/payment' element={<Payment/>}/>
        </Route>
        </Routes>
        </div>
        </Router> 
      </header>
    
      <footer className="py-3 text-center IndianRed text-white">
        <p>Footer content</p>
      </footer>
    </div>
     </>
  );
}

export default App;
