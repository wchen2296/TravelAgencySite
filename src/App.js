import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home'
import Services from './components/Services';
import Products from './components/Products';
import AboutUs from './components/AboutUs';



function App() {
  return (
    <>
    <Router>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/aboutus' element={<AboutUs/>}/>
    </Routes>
    </Router>
      
    </>
  );
}

export default App;
