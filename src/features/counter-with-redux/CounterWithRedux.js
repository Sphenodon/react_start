import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {increment, decrement, incrementByAmount, reset, incrementAsync} from "./CounterSlice";

function CounterWithRedux() {
    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch()
    const [incrementAmount, setIncrementAmount] = useState('2');

    return <div>
        <h3>CounterWithRedux</h3>
        <p>{count}</p>
        <button
            // className={styles.button}
            aria-label="Increment value"
            onClick={() => dispatch(increment())}
        >
            +
        </button>
        <button
            // className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(decrement())}
        >
            -
        </button>
        <input
            // className={styles.textbox}
            aria-label="Set increment amount"
            value={incrementAmount}
            onChange={e => setIncrementAmount(e.target.value)}
        />
        <button
            // className={styles.button}
            onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}
        >
            Add Amount
        </button>
        <button
            // className={styles.asyncButton}
            onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}
        >
            Add Async
        </button>
        <button
            // className={styles.button}
            aria-label="Decrement value"
            onClick={() => dispatch(reset())}
        >
            Reset
        </button>
    </div>;
}

export default CounterWithRedux