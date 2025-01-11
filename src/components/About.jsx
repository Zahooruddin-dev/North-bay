import { ABOUT } from "../constants";
import about from "../assets/about.jpeg";

const About = () => {
  return (
    <section className="mx-auto container mb-8 " id="about">
      <h3 className="text-3xl text-center lg:text-4xl tracking-tighter mb-8">
        About Us
      </h3>

      <div className="flex flex-wrap">
        <div className="w-full p-4 lg:w-1/2">
          <img
            src={about}
            alt="about-image"
            className="rounded-3xl lg:-rotate-3 lg:w-[80%] lg:translate-x-[90px]"
          />
        </div>
        <div className="w-full px-2 lg:w-1/2">
          <h2 className="text-4xl tracking-tighter lg:text-6xl">
            {ABOUT.header}
          </h2>

          <div className="mb-8 mt-1 h-2 w-36 bg-rose-300 lg:-rotate-3"></div>
          <p className="m-8 text-2xl leading-relaxed tracking-tight lg:max-w-xl">
            {ABOUT.content}
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
