import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import visionBg from "@/assets/vision-bg.png";

const VisionSection = () => {
  return (
    <section className="py-20 bg-card relative overflow-hidden">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url(${visionBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-8">
            <Sparkles className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary font-medium">Our Vision</span>
          </div>
          
          <h2 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
            "We made internet sharing universal.<br />
            <span className="text-primary">Now it's time to make battery sharing universal.</span>"
          </h2>
          
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join us in building a world where no one ever has to worry about a dead battery again. 
            Together, we're creating a more connected, powered future.
          </p>
          
          <Button size="lg" variant="hero" className="text-lg px-12">
            Join the Revolution
          </Button>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default VisionSection;
