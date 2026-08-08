import Hero from "../components/Hero";
import Carousel from "../components/Carousel";
import Features from "../components/Features";

const Home = () => {
  return (
    <div className="pb-24 pt-32">
      <Hero />
      <Carousel />
      <Features />
    </div>
  );
};

export default Home;
