import { Button } from "@/components/ui/button";
import { Battery, Zap } from "lucide-react";
import heroImage from "@/assets/hero-battery-share.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
      
      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-center lg:text-left animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
              <Zap className="w-5 h-5 text-primary" />
              <span className="text-sm text-primary font-medium">Revolutionary Power Sharing</span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              Share Power Like a{" "}
              <span className="text-primary animate-glow-pulse">Hotspot</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              The world's first universal way to share mobile battery power through an app + dongle. 
              Never let your battery die again.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" variant="hero" className="text-lg px-8">
                <Battery className="w-5 h-5" />
                Join the Waitlist
              </Button>
              <Button size="lg" variant="outline-glow" className="text-lg px-8">
                Watch Demo
              </Button>
            </div>
          </div>
          
          <div className="flex-1 relative animate-float">
            <div className="relative">
              <img 
                src={heroImage} 
                alt="Two phones sharing battery power wirelessly" 
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-primary/20 rounded-2xl animate-glow-pulse" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
