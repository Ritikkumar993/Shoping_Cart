import React, { useEffect, useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {

    },[count]);
    const increment = () => setCount(count + 1);
    const decrement= () => setCount(count-1);


  return (
    <div>
        <h1>Counter Application</h1>
        <p>Count: {count}</p>
        <div>
            <button onClick={increment}>
                Increment
            </button>
            <button onClick={decrement}>
                Decrement
            </button>
        </div>
    </div>
  )
}

export default Counter