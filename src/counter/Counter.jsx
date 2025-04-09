import React, { useState } from 'react'


const Counter = () => {

  const [count,setCount] = useState(0);

  const increment = () => {
    setCount(prev => prev +1);
  }

  const decrement = () => {
    setCount(prev => prev > 0 ? prev -1 : 0);
  }

  const reset = () => {
    setCount(0);
  }
  return (
    <div className='container'>
      <h1>Counter App</h1>
      <h3>Count: {count}</h3>;
      <button className='button' onClick={increment}>Increment</button>
      <button className='button' onClick={decrement}>Decrement</button>
      <button className='button' onClick={reset}>Reset</button>

      
    </div>
  )
}

export default Counter
