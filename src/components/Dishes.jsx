import DishCard from "./DishCard.jsx";
import { DISHES } from "../assets/constants/index.jsx";

/**
 *
 * @returns {JSX.Element}
 * @constructor
 */
export default function Dishes() {

  return (
    <section id= 'dishes' className='container mx-auto py-16'>
      <h2 className="mb-8 text-center text-3xl tracking-tighter lg:text-4xl">
        Our Dishes
      </h2>
      <div className="grid grid-cols-1 gap-8
        md:grid-cols-2
        lg:grid-cols-4
        xl:grid-cols-5"
      >
        {DISHES.map((project) => (
          <DishCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}