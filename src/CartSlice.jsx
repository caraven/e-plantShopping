import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
} ,
  reducers: {
    addItem: (state, action) => {
        const { name, image, cost } = action.payload; //Desarma los detalles del prodcuto a partir del action payolad
        // Verifica si el ítem ya existe en el carrito mediante una comparación de nombre
        const existingItem = state.items.find(item => item.name === name);
        if (existingItem) {
            // Si el ítem ya existe en el carrito, incrementa quantity
            existingItem.updateQuantity++;
        }
        else {
            // Si el ítem no existe en el carrito, se agrega al carrito con 1 en quantity
            state.items.push({ name, image, cost, quantity: 1 });
        }
    },
    removeItem: (state, action) => {
        // Elimina el elemento con el nombre que se pase en el dispatch
        state.items = state.items.filter(item => item.name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { name, quantity } = action.payload; // Descarma el product name y la nueva quantity a partir del action payload
        // Encuenta el item en el carrito que coincide con el nombre dado
        const itemToUpdate = state.items.find(item => item.name === name);
        if (itemToUpdate) {
            itemToUpdate.quantity = quantity;  // Si el ítem es encontrado, actualiza su quantity al nuevo valor
        }
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
