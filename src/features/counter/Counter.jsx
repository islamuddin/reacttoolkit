import React, { useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './counterSlice'

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
            if (count === 100)
            {
              console.log("Counter limit is 100")
            }
            else{
              dispatch(increment())
            }
              
          } }
        >
          Increment
        </button>
        <input
          aria-label="Amount"
          value={input}          
          onChange={(e) => setInput(e.target.value)}
        >          
        </input>
        <button        
          onClick={(e) => dispatch(incrementByAmount(input)) }
        >
          Amount
        </button>
        <span>{count}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  )
}