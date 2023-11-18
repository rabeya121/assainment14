import FeatureProject from "../component/FeatureProject";
import HeroSection from "../component/HeroSection";
import StateList from "../component/StateList";
import WorkSection from "../component/workSection";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WorkSection />
      <StateList />
      <FeatureProject />
    </div>
  );
};

export default HomePage;
