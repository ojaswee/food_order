import { useContext } from "react";

import { currencyFormatter } from "../util/formatting.js";
import Button from "./UI/Button.jsx";
import CartContext from "../store/CartContext.jsx";

export default function MealItem({ meal }) {
	const cartContext = useContext(CartContext);

	function addToCartHandler() {
		cartContext.addItem({
			id: meal.id,
			name: meal.name,
			price: meal.price,
			image: meal.image,
			quantity: 1
		});
	}

	return (
		<li className="meal-item" key={meal.id}>
			<img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
			<div>
				<h3>{meal.name}</h3>
				<p className="meal-item-description">{meal.description}</p>
				<p className="meal-item-price">{currencyFormatter(meal.price)}</p>
			</div>
			<p className="meal-item-action">
				<Button onClick={addToCartHandler}>Add to Cart</Button>
			</p>
		</li>
	);
}