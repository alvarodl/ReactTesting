import React, { useState } from 'react';
import './styles.css';
import Count from '../../features/count/Count';
import Image from '../../features/image/Image';
import { observer } from 'mobx-react-lite';

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  } 

  return (
    <div className='App'>
      <header className='App-header'>
        <Image />
        <Count count={count} incrementCount={incrementCount} />
        <p>
          You clicked this button {count} times!
        </p>
      </header>
    </div>
  );
}

export default observer(App);
