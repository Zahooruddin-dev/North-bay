import { DISHES } from "../constants";
import DishCards from "./DishCards";

const Dishes = () => {
  return (
    <section className="container mx-auto py-16" id="dishes">
      <h2 className="text-3xl lg:text-4xl text-center mb-16 tracking-tighter">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-8 px-10">
        {DISHES.map((card, index) => (
          <DishCards key={index} cards={card} />
        ))}
      </div>
    </section>
  );
};

export default Dishes;
