import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import FeaturesSection from "@/components/FeaturesSection";
import MarketSection from "@/components/MarketSection";
import BusinessModelSection from "@/components/BusinessModelSection";
import CompetitiveSection from "@/components/CompetitiveSection";
import PrototypeSection from "@/components/PrototypeSection";
import VisionSection from "@/components/VisionSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <HowItWorksSection />
      <FeaturesSection />
      <MarketSection />
      <BusinessModelSection />
      <CompetitiveSection />
      <PrototypeSection />
      <VisionSection />
      <Footer />
    </div>
  );
};

export default Index;
