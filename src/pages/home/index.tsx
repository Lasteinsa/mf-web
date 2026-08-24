import Hero from "../../features/home/components/hero";
import Features from "../../features/home/components/features";
import CommunityCTA from "../../features/home/components/community-cta";

const Home = () => {
  return (
    <div className="pb-16">
      <Hero />
      <Features />
      <CommunityCTA />
    </div>
  );
};

export default Home;
