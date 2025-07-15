import { useContext } from "react";
import Modal from "./UI/Modal.jsx";
import CartContext from "../store/CartContext.jsx";
import { currencyFormatter } from "../util/formatting.js";
import Input from "./UI/Input.jsx";
import Button from "./UI/Button.jsx";
import UserProgressContext from "../store/UserProgressContext.jsx";

export default function Checkout() {
	const cartCtx = useContext(CartContext);
	const userProgressCtx = useContext(UserProgressContext);

	const totalAmount = cartCtx.items.reduce((total, item) => total + (item.price * item.quantity), 0);

	function handleClose(){
		userProgressCtx.handleClose();
	}
	return (
		<Modal className="checkout" 
		open={userProgressCtx.progress === 'checkout'}>
			<h2>Checkout</h2>
			<p>Total Amount: {currencyFormatter(totalAmount)}</p>
			<Input label="Name" id="name" type="text" />
			<Input label="Email" id="email" type="email" />
			<Input label="Address" id="address" type="text" />
			<div className="control-row"> 
				<Input label="Postal Code" id="postal-code" type="text" />
				<Input label="City" id="city" type="text" />
			</div>
			<p className="modal-actions">
				<Button type="button" textOnly onClick={handleClose}>Close</Button>
				<Button textOnly >Submit Order</Button>
			</p>
		</Modal>
	);
}