import React, { useState } from 'react';

function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('Guest');
  const [darkMode, setDarkMode] = useState(false);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div className={darkMode ? 'dark-mode' : 'light-mode'}>
      <h1>Welcome to our Home Page</h1>
      <p>Hello, {name}!</p>
      
      <div className="counter">
        <h2>Counter: {count}</h2>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
      </div>
      
      <div className="name-input">
        <input 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          placeholder="Enter your name"
        />
      </div>
      
      <button onClick={toggleDarkMode}>
        Toggle {darkMode ? 'Light' : 'Dark'} Mode
      </button>
    </div>
  );
}

export default Home;