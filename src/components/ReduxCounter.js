'use client';

import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "@/features/counter/counterSlice";

export default function ReduxCounter() {
    const count = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();

    return(
        <div>
            <h2>Redux Count: {count}</h2>
            <button onClick={() => dispatch(increment())}>+</button>
            <button onClick={() => dispatch(decrement())}>-</button>
        </div>
    );
}