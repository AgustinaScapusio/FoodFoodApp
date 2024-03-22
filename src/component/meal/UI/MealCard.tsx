import { useNavigate } from "react-router-dom";
import { Meal } from "../../../types/types";

export function MealCard({meal}: {meal: Meal}) {
    const navigate= useNavigate();

    const handlerClick = () => {
        navigate(`/meals/${meal.id}`);
    }

    return (
        <div onClick={handlerClick} className={
              "max-w-96 box shadow flex flex-col justify-between gap-2 cursor-pointer"
            }>
            <img src={meal.mealImage} alt={meal.name} className={"object-cover h-[240px]"}/>
            <div className={"p-2"}>
            <p className={"text-4xl font-extralight"}>{meal.name}</p>
            <p className={"text-xl font-light"}>{meal.category}</p>
            </div>
        </div>
    );
}
