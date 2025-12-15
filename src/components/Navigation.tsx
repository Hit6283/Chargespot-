import { Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-primary/20">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3 group cursor-pointer">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/40 rounded-xl blur-lg group-hover:blur-xl transition-all duration-300" />
              <div className="relative w-11 h-11 bg-gradient-to-br from-primary via-primary/80 to-electric-green rounded-xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:shadow-primary/50 transition-all duration-300 group-hover:scale-105">
                <Zap className="w-6 h-6 text-primary-foreground drop-shadow-lg" fill="currentColor" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold bg-gradient-to-r from-foreground via-primary to-electric-green bg-clip-text text-transparent">
                ChargeSpot
              </span>
              <span className="text-[10px] text-muted-foreground tracking-widest uppercase -mt-1">
                Power Sharing
              </span>
            </div>
          </div>
          
          <Button variant="hero" size="sm" className="shadow-lg shadow-primary/30 hover:shadow-primary/50 transition-shadow">
            <Zap className="w-4 h-4 mr-1" />
            Join Waitlist
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
