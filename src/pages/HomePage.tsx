import { Carousel } from "antd";
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
      <Carousel autoplay>
        <div>
          <img
            src="https://source.unsplash.com/random/800x400"
            alt="restaurant"
            className={"w-full h-96 object-cover"}
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/800x401"
            alt="restaurant"
            className={"w-full h-96 object-cover"}
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/800x402"
            alt="restaurant"
            className={"w-full h-96 object-cover"}
          />
        </div>
        <div>
          <img
            src="https://source.unsplash.com/random/800x403"
            alt="restaurant"
            className={"w-full h-96 object-cover"}
          />
        </div>
      </Carousel>
      <Restaurants />
    </>
  );
}
