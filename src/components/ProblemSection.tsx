import { WifiOff, Battery, MapPin, AlertTriangle } from "lucide-react";

const ProblemSection = () => {
  const problems = [
    {
      icon: MapPin,
      title: "Travel",
      description: "Away from outlets, low battery anxiety ruins your journey"
    },
    {
      icon: AlertTriangle,
      title: "Events",
      description: "Concerts, festivals - your phone dies when you need it most"
    },
    {
      icon: WifiOff,
      title: "Rural Areas",
      description: "Limited charging infrastructure in remote locations"
    },
    {
      icon: Battery,
      title: "Emergencies",
      description: "Critical moments when you desperately need power"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            The Problem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We can share internet easily with mobile hotspots, but when your battery is dying, 
            you're completely out of options. Until now.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-background rounded-2xl p-6 border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                <problem.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-2">{problem.title}</h3>
              <p className="text-muted-foreground">{problem.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
