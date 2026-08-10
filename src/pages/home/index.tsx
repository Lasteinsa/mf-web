import Hero from "../../features/home/components/hero";
import Carousel from "../../features/home/components/carousel";
import Features from "../../features/home/components/features";

const Home = () => {
  return (
    <div className="pt-32 pb-24">
      <Hero />
      <Carousel />
      <Features />
    </div>
  );
};

export default Home;
