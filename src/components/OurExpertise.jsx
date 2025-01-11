import { CUSINES } from "../constants";
import Cusines from "./Cusines";

const OurExpertise = () => {
  return (
    <section id="expertise" className="lg:p-10">
      <h1 className="text-3xl lg:text-4xl text-center my-8 tracking-tighter ">
        Our Expertise
      </h1>
      <div className="container mx-auto px-4">
        {CUSINES.map((data, index) => (
          <Cusines key={index} cusine={data} />
        ))}
      </div>
    </section>
  );
};

export default OurExpertise;
