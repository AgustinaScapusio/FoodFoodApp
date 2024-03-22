import { fetchRestaurant } from "./fetch/RestaurantFetch";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store";


export function Restaurants() {
	const { data, loading } = useAppSelector((state) => state.restaurants);
	const restaurantDispatch = useAppDispatch();

	useEffect(() => {
		restaurantDispatch(fetchRestaurant());
	}, [restaurantDispatch]);

	return (
		<div>
			{loading ? (
				<p>Loading...........</p>
			) : (
				data.map((restaurant) => <p>{restaurant.name}</p>)
			)}
		</div>
	);
}