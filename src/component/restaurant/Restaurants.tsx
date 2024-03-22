import { fetchRestaurant } from "../http/RestaurantHttp";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";
import { RestaurantCard } from "./UI/RestaurantCard";


export function Restaurants() {
	const { data, loading } = useAppSelector((state) => state.restaurants);
	const restaurantDispatch = useAppDispatch();

	useEffect(() => {
		restaurantDispatch(fetchRestaurant());
	}, [restaurantDispatch]);

	return (
		<div className={"flex gap-4 flex-wrap p-1 "}>
			{loading ? (
				<p>Loading...........</p>
			) : (
				data.map((restaurant) => <RestaurantCard key={restaurant.id} restaurant={restaurant} />)
			)}
		</div>
	);
}