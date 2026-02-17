import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import App2 from './myComponends/App2.jsx';
import ButtonComponent from './myComponends/buttoncomponent.jsx';
import TOC from './myComponends/TOC.jsx';
import ObjectExample from './myComponends/ObjectExample.jsx';
import FruitList from './myComponends/FruitList.jsx';
import NameForm from './myComponends/NameForm.jsx';
import BankForm from './myComponends/BankForm.jsx';

function App() {
  const [count, setCount] = useState(0);

  const userData = {
    name: 'Sid',
    age: 28,
    email: 'sid@example.com',
    city: 'Mumbai',
    country: 'India'
  };

   const buttonProps = {
    type: 'button',
    onClick: () => alert('Clicked!'),
    disabled: false
  };

  const extraProps = {
    city: 'Delhi', 
    country: 'India'
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <div>
            <App2 />
            <ButtonComponent {...buttonProps} />
           
            <ObjectExample {...userData} {...extraProps} />
            <FruitList />
            <BankForm />
          </div>
        } />
        <Route path="/toc" element={<TOC />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;