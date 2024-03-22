import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../store";
import { fetchRestaurantById } from "../http/RestaurantHttp";
import { useEffect } from "react";

export function RestaurantById() {
        const { data, loading } = useAppSelector((state) => state.restaurants);
        const { id } = useParams<{ id: string | undefined }>();
        const restaurantId = id? parseInt(id) : 0;
        const restaurant = data.find((restaurant) => restaurant.id === restaurantId);
        const restaurantDispatch = useAppDispatch();

        useEffect(() => {
            restaurantDispatch(fetchRestaurantById(restaurantId));
        }, [restaurantDispatch, restaurantId]);


        return (
            <div>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <div>
                        <p>{restaurant?.name}</p>
                        <p>{restaurant?.description}</p>
                        <p>{restaurant?.address}</p>
                        <p>{restaurant?.category}</p>
                        

                    </div>
                )}
            </div>
        );
}
