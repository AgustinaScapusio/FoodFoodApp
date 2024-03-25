import { Restaurants } from "../component/restaurant/Restaurants";

export function HomePage() {
  return (
    <>
      <p className={"text-4xl font-extralight text-center mt-10"}>
        Welcome to Food App
      </p>
      <p className={"text-2xl font-extralight text-center mt-5 mb-5"}>
        Find your favorite restaurant
      </p>
      <Restaurants />
    </>
  );
}
