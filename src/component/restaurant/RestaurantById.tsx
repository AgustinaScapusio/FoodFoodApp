import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../store";
import { fetchRestaurantById } from "../../http/RestaurantHttp.tsx";
import { useEffect } from "react";
import { Meal } from "../meal/Meal.tsx";

export function RestaurantById() {
  const { data: dataRest, loading: loadingRest } = useAppSelector(
    (state) => state.restaurants,
  );
  const restaurantDispatch = useAppDispatch();

  const { id } = useParams<{ id: string | undefined }>();
  const restaurantId = id ? parseInt(id) : 0;
  const restaurant = dataRest.find(
    (restaurant) => restaurant.id === restaurantId,
  );

  useEffect(() => {
    restaurantDispatch(fetchRestaurantById(restaurantId));
  }, [restaurantDispatch, restaurantId]);

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

      <Meal restaurantId={restaurantId} />
    </div>
  );
}
