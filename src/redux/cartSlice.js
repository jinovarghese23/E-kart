import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: [],
    reducers: {

        //actions are provided inside reducers, Logic to update the state
        addtoCart: (state, action) => {
            state.push(action.payload)
        },
        //to remove item from 
        removeFromCart: (state, action) => {
            return state.filter(item => item.id != action.payload)
        },
        emptyCart: (state) => {
            return state = []
        }

    }
})

export default cartSlice.reducer;
export const { addtoCart, removeFromCart, emptyCart } = cartSlice.actions;