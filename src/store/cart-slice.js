import { createSlice } from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [] || [ {id: 1, price: 10, quantity: 1, totalPrice: 10, name: 'test'} ],
        totalQuantity: 0,
        showCart: false,
         changed: false
    },
    reducers: {
        replaceData(state,action){
            state.totalQuantity = action.payload.totalQuantity;
            state.items = action.payload.items
        },
        addItem(state, action) {
             state.changed = true
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }else{
                state.items.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                state.totalQuantity++;
            }
        },
        removeItem(state, action) {
             state.changed = true
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            
            if (existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id)
                state.totalQuantity--;
            } else {
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
                
            }
            
        },
        setShowCart(state){
            state.showCart = !state.showCart;
        },
        clearCart(state){
            state.items = []
            state.totalQuantity = 0;
        }
    }
})


export const cartActions = cartSlice.actions

export default cartSlice
