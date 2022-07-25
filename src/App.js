import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes } from 'react-router';
import Home from './components/Home';
import Faq from './components/Faq';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/faq" element={<Faq/>} />
      </Routes>

    </>
  );
}

export default App;
