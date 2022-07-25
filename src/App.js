import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import Home from './components/Home';
import About from './components/About';
import Faq from './components/Faq';
import Contact from './components/Contact';
import Courses from './components/Courses';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/about" element={<About />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>

    </>
  );
}

export default App;
