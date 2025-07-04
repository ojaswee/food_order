import { createContext, useReducer } from 'react';

const CartContext = createContext({
	items: [],
	totalAmount: 0,
	addItem: () => { },
	removeItem: () => { },
	clearCart: () => { }
});

function cartReducer(state, action) {
	switch (action.type) {
		case 'ADD_ITEM': {
			const existingItemIndex = state.items.findIndex(item => item.id === action.item.id);
			let updatedItems;

			if (existingItemIndex !== -1) {
				// Item exists, increase quantity
				updatedItems = state.items.map((item, idx) =>
					idx === existingItemIndex
						? { ...item, quantity: item.quantity + 1 }
						: item
				);
			} else {
				// New item, add with quantity 1
				updatedItems = [...state.items, { ...action.item, quantity: 1 }];
			}

			return {
				...state,
				items: updatedItems,
				totalAmount: state.totalAmount + Number(action.price)
			};
		}
		case 'REMOVE_ITEM': {
			const existingItemIndex = state.items.findIndex(item => item.id === action.id);
			if (existingItemIndex === -1) return state;

			const existingItem = state.items[existingItemIndex];
			let updatedItems;

			if (existingItem.quantity > 1) {
				updatedItems = state.items.map((item, idx) =>
					idx === existingItemIndex
						? { ...item, quantity: item.quantity - 1 }
						: item
				);
			} else {
				updatedItems = state.items.filter(item => item.id !== action.id);
			}

			return {
				...state,
				items: updatedItems,
				totalAmount: state.totalAmount - Number(existingItem.price)
			};
		}
		case 'CLEAR_CART':
			return {
				items: [],
				totalAmount: 0
			};
		default:
			return state;
	}
}

export function CartProvider({ children }) {
	const [cartState, dispatch] = useReducer(cartReducer, {
		items: [],
		totalAmount: 0
	});

	const addItem = (item) => dispatch({ type: 'ADD_ITEM', item });
	const removeItem = (id) => dispatch({ type: 'REMOVE_ITEM', id });
	const clearCart = () => dispatch({ type: 'CLEAR_CART' });

	const contextValue = {
		items: cartState.items,
		totalAmount: cartState.totalAmount,
		addItem,
		removeItem,
		clearCart
	};

	return (
		<CartContext.Provider value={contextValue}>
			{children}
		</CartContext.Provider>
	);
}

export default CartContext;