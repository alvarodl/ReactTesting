import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Count from './features/Count';

function App() {
  
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  } 

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <Count count={count} incrementCount={incrementCount} />
        <p>
          You clicked this button {count} times!
        </p>
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className='App-link'
          href='https://reactjs.org'
          target='_blank'
          rel='noopener noreferrer'
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
