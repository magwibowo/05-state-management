'use client'

import useCounterStore from "../stores/counterStore";

export default function Counter() {
    const { count, increment, decrement, reset } = useCounterStore();

    return (
        <div>
            <h2>Count: {count}</h2>
            <button onClick={increment}>+</button>
            <button onClick={decrement}>-</button>
            <button onClick={reset}>Reset</button>
        </div>
    );
}