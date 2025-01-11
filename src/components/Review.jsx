import { REVIEW } from "../constants";
import xavoiur from "../assets/xaviour.jpeg";
import customer1 from "../assets/customer1.jpeg";
import customer2 from "../assets/customer2.jpeg";
import customer3 from "../assets/customer3.jpeg";
import customer4 from "../assets/customer4.jpeg";

const Review = () => {
  return (
    <section id="review" className="container mx-auto mb-8 mt-12 ">
      <div>
        <p className="mb-10 text-3xl px-4 font-light leading-normal lg:mx-44 lg:mt-40 lg:text-[3.5rem] ">
          {REVIEW.content}
        </p>

        <div className="flex justify-center items-center gap-6">
          <img
            src={xavoiur}
            alt={REVIEW.name}
            width={80}
            height={80}
            className="rounded-full border"
          />

          <div className="tracking-tighter">
            <h6>{REVIEW.name}</h6>
            <p className="text-neutral-500 text-sm">{REVIEW.profession}</p>
          </div>
        </div>
      </div>
      <div className="mt-14 flex flex-col md:flex-row items-center justify-center gap-6">
        {[customer1, customer2, customer3, customer4].map((customer, index) => (
          <img
            key={index}
            src={customer}
            alt={`customer` + index}
            className="h-[300px] w-[200px] rounded-br-3xl rounded-tl-3xl object-cover"
          />
        ))}
      </div>
    </section>
  );
};

export default Review;
