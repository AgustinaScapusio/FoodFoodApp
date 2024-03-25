export type MealType = {
  id: number;
  name: string;
  description: string;
  category: string;
  mealImage: string;
  price: number;
  restaurantId: number;
  allergens: string;
};

export type Restaurant = {
  id: number;
  name: string;
  description: string;
  image: string;
  address: string;
  category: string;
  closingTime: Date;
  openingTime: Date;
  isOpen: boolean;
};
export type CreateRestaurantProps = {
  name: string;
  description: string;
  image: string;
  address: string;
  category: string;
  closingTime: Date;
  openingTime: Date;
  isOpen: boolean;
};
export type Order = {
  id: number;
  mealId: number;
  quantity: number;
};
export type CreateOrderProps = {
  mealId: number;
  quantity: number;
};
