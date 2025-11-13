import { Shield, AlertCircle, Trophy, Users, Smartphone } from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: Shield,
      title: "App-Controlled Permissions",
      description: "Full control over who can access your power and how much they can take"
    },
    {
      icon: AlertCircle,
      title: "Emergency SOS Requests",
      description: "Priority mode for critical situations when battery is desperately needed"
    },
    {
      icon: Trophy,
      title: "Gamification & Rewards",
      description: "Earn points for sharing power, unlock achievements, and get recognized in the community"
    },
    {
      icon: Users,
      title: "Public Mode",
      description: "Share power at events, concerts, and travel destinations with ease"
    },
    {
      icon: Smartphone,
      title: "Universal Compatibility",
      description: "Works on all devices - no need for premium phones with reverse charging"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Unique Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            ChargeSpot isn't just about sharing power - it's about building a community 
            where everyone can help each other stay connected.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-fade-in group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
