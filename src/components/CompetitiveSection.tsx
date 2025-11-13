import { Zap, Battery, CheckCircle2, XCircle } from "lucide-react";

const CompetitiveSection = () => {
  const comparisons = [
    {
      solution: "Reverse Charging",
      icon: Zap,
      pros: ["Built into some phones", "No extra hardware"],
      cons: ["Only premium phones", "Limited compatibility", "Slow charging speed"]
    },
    {
      solution: "Power Banks",
      icon: Battery,
      pros: ["Portable power source", "Widely available"],
      cons: ["Must carry extra device", "Needs pre-charging", "Adds weight and bulk"]
    },
    {
      solution: "ChargeSpot",
      icon: CheckCircle2,
      pros: ["Universal compatibility", "App-controlled & safe", "Community-powered", "No extra bulk", "Works everywhere"],
      cons: []
    }
  ];

  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Competitive Advantage
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why ChargeSpot is the future of mobile power sharing
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {comparisons.map((item, index) => (
            <div 
              key={index}
              className={`bg-background rounded-2xl p-8 border-2 transition-all duration-300 animate-fade-in ${
                item.solution === "ChargeSpot" 
                  ? "border-primary shadow-[0_0_30px_rgba(34,197,94,0.3)] scale-105" 
                  : "border-border hover:border-primary/50"
              }`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                item.solution === "ChargeSpot" ? "bg-primary/20" : "bg-muted"
              }`}>
                <item.icon className={`w-8 h-8 ${
                  item.solution === "ChargeSpot" ? "text-primary" : "text-muted-foreground"
                }`} />
              </div>
              
              <h3 className="text-2xl font-semibold mb-6">{item.solution}</h3>
              
              {item.pros.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Advantages</h4>
                  <ul className="space-y-2">
                    {item.pros.map((pro, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <span className="text-sm">{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              
              {item.cons.length > 0 && (
                <div>
                  <h4 className="text-sm font-medium text-muted-foreground mb-3">Limitations</h4>
                  <ul className="space-y-2">
                    {item.cons.map((con, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <XCircle className="w-5 h-5 text-destructive shrink-0 mt-0.5" />
                        <span className="text-sm">{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompetitiveSection;
