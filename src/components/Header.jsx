import { useContext } from 'react';
import logo from '../assets/logo.jpg';
import Button from './UI/Button.jsx';
import CartContext from "../store/CartContext.jsx";
import { use } from 'react';
import UserProgressContext from '../store/UserProgressContext.jsx';

export default function Header() {
	const cartContext = useContext(CartContext);
	const userProgressCtx = useContext (UserProgressContext);
	const totalItems = cartContext.items.reduce((total, item) => total + item.quantity, 0);

	function handleShowCart() {
		userProgressCtx.showCart();
	}

	return (
		<header id="main-header">
			<div id ="title">
				<img src={logo} alt="Logo" />
				<h1>Delicious Food</h1>
			</div>
			<nav>
				<Button textOnly onClick={handleShowCart}>Cart({totalItems})</Button>
			</nav>
		</header>
	);
}