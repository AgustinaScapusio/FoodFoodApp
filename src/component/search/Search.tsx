import React, { useState, useEffect } from "react";
import { useAppSelector, useAppDispatch } from "../../../store";
import { Restaurant, Meal } from "../../types/types";
import { fetchRestaurant } from "../../http/RestaurantHttp";
import { fetchMeals } from "../../http/MealFetch";
import { RestaurantCard } from "../restaurant/UI/RestaurantCard";
import { MealCard } from "../meal/UI/MealCard";

export function Search() {
    const { data: restaurantData, loading: restaurantLoading } = useAppSelector((state) => state.restaurants);
    const { data: mealData, loading: mealLoading } = useAppSelector((state) => state.meals);
    const restaurantDispatch = useAppDispatch();
    const mealDispatch = useAppDispatch();
    const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>([]);
    const [filteredMeals, setFilteredMeals] = useState<Meal[]>([]);

    useEffect(() => {
        restaurantDispatch(fetchRestaurant());
        mealDispatch(fetchMeals());
    }, [restaurantDispatch, mealDispatch]);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const search = e.target.value.toLowerCase();
        const filteredRestaurants = restaurantData.filter((restaurant) =>
            restaurant.name.toLowerCase().startsWith(search)
        );
        setFilteredRestaurants(filteredRestaurants);

        const filteredMeals = mealData.filter((meal) =>
            meal.name.toLowerCase().startsWith(search)
        );
        setFilteredMeals(filteredMeals);
    };

    return (
        <>
            <input
                type="text"
                placeholder="Search restaurant or meal..."
                className="w-96 p-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 mt-10 ml-5"
                onChange={handleSearch}
            />
            <div>
                {filteredRestaurants.length <= 0 && filteredMeals.length <= 0 && <p className="text-center mt-10">No result found</p>}
                {restaurantLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                    {filteredRestaurants.length > 0 && <h2 className="mt-10 mb-10 ml-4 mr-4 text-2xl">Restaurants</h2>}
                        <div className="flex gap-4 flex-wrap p-1 ml-2 mr-2">
                            {filteredRestaurants.map((restaurant) => (
                                <RestaurantCard key={restaurant.id} restaurant={restaurant} />
                            ))}
                        </div>
                    </>
                )}
            </div>
            <div>
                {mealLoading ? (
                    <p>Loading...</p>
                ) : (
                    <>
                    {filteredMeals.length > 0 && <h2 className="mt-10 mb-10 ml-4 mr-4 text-2xl">Meals</h2>}
                        <div className="flex gap-2 flex-wrap p-1 ml-2 mr-2">
                            {filteredMeals.map((meal) => (
                                <MealCard key={meal.id} meal={meal} />
                            ))}
                        </div>
                    </>
                )}
            </div>
        </>
    );
}
