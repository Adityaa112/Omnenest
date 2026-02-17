import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Dashboard/header';
import MainContent from './Dashboard/Dashboard';
import Footer from './Dashboard/Footer';  

import Dashboard from './Dashboard/Dashboard';
import Auth from './Dashboard/Auth';
import Portfolio from './Dashboard/Portfolio';

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/Portfolio" element={<Portfolio />} />
      </Routes>
   
   </BrowserRouter>
 
  )
}


export default App
