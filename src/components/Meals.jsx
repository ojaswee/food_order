import { use } from "react";
import { useState, useEffect } from "react";
import MealItem from "./MealItem";

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
				<MealItem key={meal.id} meal={meal} />
			))}
		</ul>
	);
}