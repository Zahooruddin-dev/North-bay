import About from "./components/About";
import ContactUs from "./components/ContactUs";
import Dishes from "./components/Dishes";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Mission from "./components/Mission";
import Navbar from "./components/Navbar";
import OurExpertise from "./components/OurExpertise";
import Review from "./components/Review";

function App() {
  return (
    <main className="overflow-y-hidden text-neutral-200 antialiased">
      <HeroSection />
      <Navbar />
      <Dishes />
      <About />
      <Mission />
      <OurExpertise />
      <Review />
      <ContactUs />
      <Footer />
    </main>
  );
}

export default App;
