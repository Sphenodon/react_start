import React, {useEffect, useState} from "react";

function Counter() {
    const [counter, setCounter] = useState(0);
    const [message, setMessage] = useState(0);

    function increment() {
        setCounter(counter + 1)
    }

    function decrement() {
        setCounter(counter - 1)
    }

    function reset() {
        setCounter(0)
    }

    useEffect(() => {
        setMessage(`Incremented: ${counter}`)
    }, [counter])

    return <div className='counter'>
        <h3>Counter</h3>
        <p>{counter}</p>
        <p className='update'>{message}</p>
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={reset}>Reset</button>
    </div>;
}

export default Counter