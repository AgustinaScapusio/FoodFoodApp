export type Meal = {
  id: number;
  name: string;
  description: string;
  category: string;
  mealImage: string;
  price: number;
  restaurantId: number;
  allergens: string;
};

type MealRes = Meal[];

export async function mealFetch(): Promise<MealRes> {
  const res = await fetch("https://feedfood.azurewebsites.net/Meal", {
    headers: {
      Accept: "application/json",
    },
  });
  return await res.json();
}
