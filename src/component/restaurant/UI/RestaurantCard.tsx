import { Restaurant } from "../../../types/types";

export function RestaurantCard({restaurant} : {restaurant: Restaurant}) {
    return (
        <div className={
              " max-w-96 box shadow flex flex-col justify-between gap-2"
            }>
            <img src={restaurant.image} alt={restaurant.name} className={"object-cover h-[240px]"}/>
            <div className={"p-2"}>
            <p className={"text-4xl font-extralight"}>{restaurant.name}</p>
            <p className={"text-xl font-light"}>{restaurant.category}</p>
            </div>
        </div>
    );
}
