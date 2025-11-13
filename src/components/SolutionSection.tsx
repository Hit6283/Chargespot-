import { Smartphone, Shield, Zap, Users } from "lucide-react";
import dongleImage from "@/assets/dongle-product.png";

const SolutionSection = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Universal Compatibility",
      description: "Works across all devices with our smart dongle"
    },
    {
      icon: Shield,
      title: "App-Controlled",
      description: "Safe, secure, and fully manageable from your phone"
    },
    {
      icon: Zap,
      title: "Smart Sharing",
      description: "Set limits, track usage, and optimize power flow"
    },
    {
      icon: Users,
      title: "Community Powered",
      description: "Join millions helping each other stay connected"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The Solution
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ChargeSpot App + Dongle enables universal power sharing across all devices. 
            It's like a mobile hotspot, but for battery power.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <div className="flex-1">
            <img 
              src={dongleImage} 
              alt="ChargeSpot Dongle" 
              className="w-full max-w-md mx-auto rounded-2xl"
            />
          </div>
          
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-card rounded-xl p-6 border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
