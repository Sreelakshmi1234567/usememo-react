

import React, { useMemo,useState } from 'react'

function Usememo() {
    const [Count, setCount] = useState(0);
    const [inputValue, setInputValue] = useState('');

   
    const factorial = (n) => {
        if (n === 0 || n === 1) return 1;
        let result = 1;
        for (let i = 2; i <= n; i++) {
            result *= i;
        }
        return result;
    };

   
    const expensiveCalculation = useMemo(() => {
        console.log('Calculating factorial...');
        return factorial(Count);
    }, [Count]);
  return (
    <div>
    <h1>useMemo - Factorial </h1>
    <p>Count: {Count}</p>
    <button onClick={() => setCount(Count + 1)}>Increment</button>
    
    <p>Factorial  {Count}: {expensiveCalculation}</p>
    <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
    />
</div>
);
}
  

export default Usememo