import { Power, Bluetooth, Link, Activity } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Power,
      number: "01",
      title: "Power Hotspot Mode",
      description: "Donor activates power sharing mode in the ChargeSpot app"
    },
    {
      icon: Bluetooth,
      number: "02",
      title: "Bluetooth Request",
      description: "Receiver sends a request via Bluetooth or QR code"
    },
    {
      icon: Link,
      number: "03",
      title: "Connection",
      description: "Secure connection established with permission controls"
    },
    {
      icon: Activity,
      number: "04",
      title: "Live Stats",
      description: "Monitor power flow, set limits, and track battery levels in real-time"
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Sharing power is as simple as sharing WiFi. Four easy steps to never run out of battery.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index}
              className="relative bg-background rounded-2xl p-8 border border-border hover:border-primary transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform">
                {step.number}
              </div>
              
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-primary/30" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
