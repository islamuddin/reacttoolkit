import { createSlice } from '@reduxjs/toolkit'


// step 1: create a slice
// todo state update, change, action 
// todo object => property, function
export const counterSlice = createSlice({
    name: "counter",
    initialState: { value: 0 },
    reducers: {
        increment: (state) => {
            state.value += 10            
        },
        decrement: (state) => {
            state.value -= 1
          },
        incrementByAmount: (state, action) => {
            state.value += parseInt(action.payload)
        }
    }

});

// step 2: export the action
// todo explicitly export functions from the slice so that we can use in components
export const { increment, decrement, incrementByAmount } = counterSlice.actions;

// step 3: export the reducer: just for the store to recognize as a reducer
export default counterSlice.reducer;



