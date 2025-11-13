import { Globe, GraduationCap, Plane, Bike, Home, Heart } from "lucide-react";

const MarketSection = () => {
  const targets = [
    { icon: GraduationCap, label: "Students", description: "Always on campus, always connected" },
    { icon: Plane, label: "Travelers", description: "Explore without battery anxiety" },
    { icon: Bike, label: "Delivery Workers", description: "Keep working without interruption" },
    { icon: Home, label: "Rural Areas", description: "Power access where outlets are scarce" },
    { icon: Heart, label: "Disaster Relief", description: "Critical power in emergency situations" }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6">
            <Globe className="w-5 h-5 text-primary" />
            <span className="text-sm text-primary font-medium">Global Opportunity</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Market Opportunity
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            With 6.8 billion+ smartphone users worldwide, the potential for power sharing is limitless
          </p>
          
          <div className="text-6xl font-bold text-primary mb-4 animate-glow-pulse">
            6.8B+
          </div>
          <p className="text-lg text-muted-foreground">Potential Users Worldwide</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mt-16">
          {targets.map((target, index) => (
            <div 
              key={index}
              className="bg-background rounded-xl p-6 border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <target.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">{target.label}</h3>
              <p className="text-sm text-muted-foreground">{target.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketSection;
