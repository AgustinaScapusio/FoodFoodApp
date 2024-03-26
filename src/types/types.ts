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

export type RestaurantType = {
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

export type CreateRestaurantType = {
  name: string;
  description: string;
  image: string;
  address: string;
  category: string;
  closingTime: Date;
  openingTime: Date;
  isOpen: boolean;
};

export type OrderType = {
  id: number;
  mealId: number;
  quantity: number;
  date: Date;
  totalPrice: number;
  userId: number;
  isDelivered: boolean;
};

export type CreateOrderType = {
  mealId: number;
  quantity: number;
  totalPrice: number;
  userId: number;
  isDelivered: boolean;
};
