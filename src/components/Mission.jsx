import mission from "../assets/mission.mp4";
import missionimg from "../assets/mission.jpeg";
import { MISSION } from "../constants";

const Mission = () => {
  return (
    <section id="mission">
      <div className="container mb-8 text-center mx-auto">
        <h1 className="text-3xl lg:text-4xl tracking-tight mb-8">
          Our Mission
        </h1>
        <div className="relative flex justify-center items-center">
          <video
            playsInline
            autoPlay
            muted
            loop
            className="w-[90%]  rounded-3xl"
            poster={missionimg}
          >
            <source src={mission} />
          </video>
          <div className="absolute w-[90%] h-full bg-black/40"></div>
          <p className="absolute lg:max-w-lg w-[90%] px-3 lg:text-3xl">
            {MISSION}
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
