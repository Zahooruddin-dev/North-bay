import hero from "../assets/hero.mp4";
import herophoto from "../assets/hero.jpg";
import logo from "../assets/logo.png";

const HeroSection = () => {
  return (
    <section className="w-full h-screen relative flex justify-center items-center">
      <div className="absolute inset-0 -z-20 h-full w-full overflow-hidden">
        <video
          src={hero}
          autoPlay
          muted
          loop
          playsInline
          className="h-full w-full object-cover"
          poster={herophoto}
        ></video>
      </div>

      <div className="relative z-20 flex flex-col justify-end h-screen pb-20">
        <img src={logo} alt="restura" className="w-full p-4" />
        <p className="text-white text-xl italic pl-4 ">TASTE OF LUXEMBOURG</p>
      </div>
    </section>
  );
};

export default HeroSection;

// npm i react-icons
