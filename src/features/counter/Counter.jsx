import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount, decrementByAmount } from './counterSlice'

export default function Counter() {
  const count = useSelector(state => state.counter.value)
  const dispatch = useDispatch()
  const [input, setInput] = useState();
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => {
            if (count === 100) {
              console.log("Counter limit is 100");
            } else {
              dispatch(increment());
            }
          }}
        >
          Increment
        </button>
        <input
          aria-label="Amount"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        ></input>
        <button onClick={(e) => {
          if (count === 100) {
            console.log("Counter cannot be greater than 100");
          } else {
            dispatch(incrementByAmount(input));
          }
        }
            }>
          Amount Increment
        </button>

        <button onClick={(e) => {
          if (count === 0){
            console.log("Counter cannot be less than 0")
          }
          else{
            dispatch(decrementByAmount(input))
          }          
        }}>
          Amount Decrement
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => {
            if (count == 0) {
              console.log("Counter Minimun limit is 0");
            } else {
              dispatch(decrement());
            }
          }}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}