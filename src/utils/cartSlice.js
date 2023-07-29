import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state,action)=>{                        //  actioin addItem calls the reducer funtion which then update the state
            // mutating the state
            
             state.items.push(action.payload)
        },
        removeItem: (state)=>{
            state.items.pop()
        },
        clearCart: (state)=>{
            state.items.length = 0
        }
    }
})
export const {addItem,removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer