import { currencyFormatter } from "../util/formatting.js";

export default function CartItem({ item }) {
	return (
		<li key={item.id} className="cart-item">
			<p>{item.name} {item.quantity} x {currencyFormatter(item.price)}</p>
			<p className="cart-item-actions" >
				<button>-</button>
				<button>{item.quantity}</button>
				<button>+</button>
			</p>
		</li>
	);
}