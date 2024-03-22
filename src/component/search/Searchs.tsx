import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../store";
import { decrement, increment } from "../../../store/searchSlice";
import { fetchRestaurant } from "../http/RestaurantHttp";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../store";

export function Search(){

    const count = useSelector((state : RootState) => state.oogabooga.value)
	const dispatch = useDispatch();

    const { data, loading } = useAppSelector((state) => state.restaurants);
	const restaurantDispatch = useAppDispatch();

	useEffect(() => {
		restaurantDispatch(fetchRestaurant());
	}, [restaurantDispatch]);

    

    return <>
            <h1>Søkeresultater</h1>
            <h1>Steder</h1>

            <div>
			{loading ? (
				<p>Loading...........</p>
			) : (
				data.map((restaurant) => <p>{restaurant.name }</p>)
			)}
		    </div>

            <h1>{count}</h1>
            <input />
            <button onClick={() => dispatch(increment())}>plus</button>
            <button onClick={() => dispatch(decrement())}>minus</button>
        </>
}