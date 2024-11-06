import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from '../Redux/Slices/CounterSlice';

const Redux = () => {
    const {counter} =useSelector((states) => states.counter)
    const dispatch = useDispatch()
    const handleIncrement = () => {
        dispatch(increment({num: 1}))
    }
    const handleDecrement = () => {
        dispatch(decrement({num: 1}))
    }
    return (
        <div className="d-flex flex-column align-items-center my-5">
            <div>{counter}</div>
        <button className="my-3 btn btn-success" onClick={handleIncrement}>Increment</button>
        <button className="my-3 btn btn-danger" onClick={handleDecrement}>Decrement</button>
            
        </div>
    );
}

export default Redux;
