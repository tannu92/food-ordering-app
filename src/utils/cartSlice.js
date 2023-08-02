import {createSlice} from '@reduxjs/toolkit'

// Reducer
const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
    },
    reducers: {
        addItem: (state,action)=>{                        //  action addItem calls the reducer funtion which then update the state
            // older redux => DON'T MUTATE THE STATE DIRECTLY AND returning was mandatory
            // const newState= [..state]
            // newState.items.push(action.payload)
            // return newState

            // Redux Toolkit uses immer library BTS
            //in Redux toolkit we have to mutate the state and no need to return the state
             state.items.push(action.payload)
        },
        removeItem: (state)=>{
            state.items.pop()
        },
        clearCart: (state)=>{
            // either mutate the state or return new state
            state.items.length = 0
            // state=[]  won't work
            // return {items: []} will work
        }
    }
})
export const {addItem,removeItem,clearCart} = cartSlice.actions
export default cartSlice.reducer