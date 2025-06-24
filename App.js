//import React from 'react';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home.js';
import About from './components/About';
import Products from './components/Products.js';
import Contact from './components/Contact.js';
import UserCard from './components/UserCard';
import './App.css';


 function WelcomeMessage(props) {
  return <h1>Hello, {props.name}!</h1>;
}
function App() {
   const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);



  return (
  
    
    
    <Router>
      <div className="App">
        
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/products">Products</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
         <div>
      <WelcomeMessage name="Alice" />
      <WelcomeMessage name="Bob" />
      <WelcomeMessage name="Charlie" />
    </div>
     <div className="app">
      <UserCard 
        name="John Doe" 
        age={28} 
        email="john@example.com" 
      />
      <UserCard
        name="Jane Smith"
        age={32}
        email="jane@example.com"
      />
    </div>
     <div>
      <h1>Counter: {count}</h1>
      {/*<ActionButton onClick={increment} label="Increment" />
      <ActionButton onClick={decrement} label="Decrement" />
      <ActionButton onClick={reset} label="Reset" />*/}
    </div>
       

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/contact" element={<Contact />} />
         {/* <Route path="*" element={<NotFound />} />*/}
        </Routes>
      </div>
    </Router>    

  );
}

export default App;