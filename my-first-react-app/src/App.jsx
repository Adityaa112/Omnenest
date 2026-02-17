import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ButtonComponent from './myComponends/buttoncomponent.jsx'
import App2 from './myComponends/App2.jsx'
import TOC from './myComponends/TOC.jsx'
import{ BrowserRouter, Routes, Route } from 'react-router-dom'; 




function App() {
  const [count, setCount] = useState(0)
  const name = "Aditya";
  const age = 21;
  const course = "React Development";
  const city = "Mumbai"

  return (
   <BrowserRouter>
   <Routes>
    <Route path ="/" element={
      <div>
        <App2/>
        <ButtonComponent />
      </div>

    }/>
    <Route path="/toc" element={<TOC />} />
   </Routes>
   </BrowserRouter>
  )
}

export default App
