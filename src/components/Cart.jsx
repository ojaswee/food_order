import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import CartItem from "./CartItem.jsx";
import { currencyFormatter } from "../util/formatting.js";
import UserProgressContext from "../store/UserProgressContext.jsx";
import Button from "./UI/Button.jsx";

export default function Cart() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const totalAmount = cartCtx.items.reduce((total, item) => total + (item.price * item.quantity), 0);
	return (
		<Modal className="cart" open={userProgressCtx.progress === 'cart'}>
			<h2>Your Cart</h2>
			<ul>
				{cartCtx.items.map(item => (
					<CartItem key={item.id} item={item} />
				))}
			</ul>
			<p className="cart-total">
				Total: {currencyFormatter(totalAmount)}
			</p>
			<p className="modal-actions">
				<Button textOnly onClick={() => userProgressCtx.hideCart()}>Close</Button>
				<Button onClick={() => userProgressCtx.hideCart()}>Checkout</Button>
			</p>
		</Modal>
	);
}