import { useNavigate } from "react-router-dom";
import { Restaurant } from "../../../types/types";

export function RestaurantCard({ restaurant }: { restaurant: Restaurant }) {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(`/restaurants/${restaurant.id}`);
  };

  return (
    <div
      onClick={handlerClick}
      className={
        " max-w-88 min-w-88 box shadow flex flex-col justify-between gap-2 cursor-pointer md:max-w-96 md:min-w-96 md:box md:shadow md:flex md:flex-col md:justify-between md:gap-2 rounded-lg"
      }
    >
      <img
        src={restaurant.image}
        alt={restaurant.name}
        className={"object-cover h-[200px]"}
      />
      <div className={"p-2"}>
        <p className={"text-4xl font-extralight"}>{restaurant.name}</p>
        <p className={"text-xl font-light"}>{restaurant.category}</p>
      </div>
    </div>
  );
}
