import { useNavigate } from "react-router-dom";
import { RestaurantType } from "../../../util/types";
import { Card } from "antd";

export function RestaurantCard({ restaurant }: { restaurant: RestaurantType }) {
  const navigate = useNavigate();

  const handlerClick = () => {
    navigate(`/restaurants/${restaurant.id}`);
  };

  return (
    <Card
      hoverable
      onClick={handlerClick}
      className={
        "max-w-96 shadow flex flex-col justify-between  cursor-pointer bg-white rounded-md m-0 p-0"
      }
      cover={
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className={"object-cover h-[200px]"}
        />
      }
    >
      <div className={"p-0 m-0"}>
        <p className={"text-4xl font-extralight"}>{restaurant.name}</p>
        <p className={"text-xl font-light"}>{restaurant.category}</p>
      </div>
    </Card>
  );
}
