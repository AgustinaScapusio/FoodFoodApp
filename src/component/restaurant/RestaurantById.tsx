import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../store";
import { fetchRestaurantById } from "../../http/RestaurantHttp.tsx";
import { useEffect } from "react";
import { fetchMealsByRestaurant } from "../../http/MealFetch.tsx";

export function RestaurantById() {
  const { data: dataRest, loading: loadingRest } = useAppSelector(
    (state) => state.restaurants,
  );
  const restaurantDispatch = useAppDispatch();

  const { data: dataMeal, loading: loadingMeal } = useAppSelector(
    (state) => state.meals,
  );
  const mealDispatch = useAppDispatch();

  const { id } = useParams<{ id: string | undefined }>();
  const restaurantId = id ? parseInt(id) : 0;
  const restaurant = dataRest.find(
    (restaurant) => restaurant.id === restaurantId,
  );

  useEffect(() => {
    restaurantDispatch(fetchRestaurantById(restaurantId));
    mealDispatch(fetchMealsByRestaurant(restaurantId));
  }, [mealDispatch, restaurantDispatch, restaurantId]);

  return (
    <div>
      {loadingRest ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{restaurant?.name}</p>
          <p>{restaurant?.description}</p>
          <p>{restaurant?.address}</p>
          <p>{restaurant?.category}</p>
        </div>
      )}
      {loadingMeal ? (
        <p>Loading meals</p>
      ) : (
        <div>
          {dataMeal.map((meal) => (
            <div key={meal.id}>
              <p>{meal.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
