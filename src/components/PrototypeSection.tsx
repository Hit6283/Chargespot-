import { Code, Smartphone, Users, TrendingUp } from "lucide-react";
import dongleImage from "@/assets/dongle-product.png";

const PrototypeSection = () => {
  const achievements = [
    { icon: Code, label: "ESP32 Prototype", value: "Built & Tested" },
    { icon: Smartphone, label: "Android App", value: "Fully Functional" },
    { icon: Users, label: "Early Interest", value: "Growing Community" },
    { icon: TrendingUp, label: "Market Validation", value: "Strong Demand" }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Prototype & Traction
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're not just an idea - we have a working prototype and growing community interest
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1">
            <div className="relative">
              <img 
                src={dongleImage} 
                alt="ChargeSpot Dongle Prototype" 
                className="w-full max-w-lg mx-auto rounded-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent rounded-2xl" />
            </div>
          </div>
          
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="bg-card rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 animate-fade-in group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <achievement.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-sm text-muted-foreground mb-1">{achievement.label}</div>
                  <div className="text-lg font-semibold">{achievement.value}</div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-card rounded-xl p-6 border border-primary/30">
              <h3 className="text-lg font-semibold mb-3">Technical Stack</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Arduino/ESP32 hardware development</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Native Android app with Bluetooth integration</span>
                </li>
                <li className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <span>Real-time power monitoring and control</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrototypeSection;
