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
          <img
            src={restaurant?.image}
            alt={restaurant?.name}
            className={"object-cover w-full h-[300px] pt-0"}
          />
          <div className={"border-1 border-gray-300 p-2 bg-stone-200 shadow-lg"}>
          <p className={"text-4xl font-light text-center  mb-2"}>{restaurant?.name}</p>
          <p className={"text-xl font-light text-center mb-2"}>{restaurant?.description}</p>
          <p className={"text-xl font-light text-center mb-2"}>{restaurant?.category}</p>
          <p className="text-xl font-light text-center mb-2">
            {restaurant?.address}</p>
          </div>
        </div>
      )}
        <div className="flex gap-4 flex-wrap p-1 justify-center mt-10">
      <Meal restaurantId={restaurantId} />
        </div>
    </div>
  );
}
