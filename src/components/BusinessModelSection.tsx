import { Smartphone, ShoppingCart, Monitor, Handshake } from "lucide-react";

const BusinessModelSection = () => {
  const models = [
    {
      icon: Smartphone,
      title: "Freemium App",
      description: "Basic features free, premium features for power users",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: ShoppingCart,
      title: "Hardware Sales",
      description: "ChargeSpot dongle for universal compatibility",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Monitor,
      title: "In-App Ads",
      description: "Battery optimization tips and accessory recommendations",
      color: "from-primary/20 to-primary/5"
    },
    {
      icon: Handshake,
      title: "Brand Partnerships",
      description: "Collaborate with mobile shops, telecoms, and phone brands",
      color: "from-primary/20 to-primary/5"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Business Model
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Multiple revenue streams ensure sustainable growth and continuous innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {models.map((model, index) => (
            <div 
              key={index}
              className="relative group animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${model.color} rounded-2xl transform group-hover:scale-105 transition-transform duration-300`} />
              <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl p-8 border border-border group-hover:border-primary transition-all duration-300">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                  <model.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{model.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{model.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessModelSection;
