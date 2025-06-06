import { use } from "react";
import { useState, useEffect } from "react";

export default function Meals() {
	const [loadMeals, setMeals] = useState([]);
	useEffect(() => {

		async function fetchMeals() {
			const response = await fetch('http://localhost:3000/meals');

			// Handle the response and update state as needed
			if (!response.ok) {
				console.error('Failed to fetch meals:', response.statusText);
				return [];
			}
			const meals = await response.json();
			setMeals(meals);
		}
		fetchMeals();
	}, []);

	return (
		<ul id="meals">
			{loadMeals.map((meal) => (
				<li key={meal.id}>
					<img src={meal.image} alt={meal.name} />
					<p>{meal.description}</p>
					<p>Price: ${meal.price}</p>
				</li>))}
		</ul>
	);
}