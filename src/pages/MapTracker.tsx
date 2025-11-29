import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, User, Navigation, Phone, Clock, Scale } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MapTracker = () => {
  const [eta, setEta] = useState(35);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => Math.max(0, prev - 1));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Enhanced Mock Map */}
      <div className="flex-1 relative bg-gradient-to-br from-muted/30 via-muted/20 to-primary/5 animate-fade-in overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-primary/5 rounded-full blur-2xl" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Grid pattern */}
            <div
              className="absolute inset-0 opacity-[0.07]"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(var(--border)) 1.5px, transparent 1.5px),
                  linear-gradient(90deg, hsl(var(--border)) 1.5px, transparent 1.5px)
                `,
                backgroundSize: "50px 50px",
              }}
            />

            {/* Your location with pulse effect */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale-in">
              <div className="relative">
                <div className="w-5 h-5 rounded-full bg-primary shadow-lg z-10 relative" />
                <div className="absolute inset-0 w-5 h-5 rounded-full bg-primary/40 animate-ping" />
                <div className="absolute inset-0 w-5 h-5 rounded-full bg-primary/20 animate-pulse scale-150" />
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background px-3 py-1.5 rounded-lg text-xs font-bold shadow-xl border border-border">
                Your Location
              </div>
            </div>

            {/* Collector location with enhanced pin */}
            <div className="absolute top-1/4 right-1/3 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-2 bg-destructive/20 rounded-full blur-md" />
                <MapPin className="w-10 h-10 text-destructive drop-shadow-2xl relative z-10" fill="currentColor" />
              </div>
              <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 whitespace-nowrap bg-destructive/10 backdrop-blur-sm px-3 py-1.5 rounded-lg text-xs font-bold shadow-lg border border-destructive/20">
                Collector
              </div>
            </div>

            {/* Animated dashed path */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.3 }} />
                  <stop offset="100%" style={{ stopColor: "hsl(var(--primary))", stopOpacity: 0.8 }} />
                </linearGradient>
              </defs>
              <line
                x1="50%"
                y1="50%"
                x2="66%"
                y2="25%"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                strokeDasharray="10,10"
                className="animate-pulse"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Enhanced bottom card */}
      <div className="p-4 space-y-4 bg-gradient-to-t from-background to-transparent">
        <Card className="p-6 space-y-5 shadow-2xl border-2 bg-gradient-to-br from-card to-primary/5">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center shadow-lg">
                <User className="w-7 h-7 text-primary" />
              </div>
              <div>
                <p className="font-bold text-foreground text-lg">Rajesh Kumar</p>
                <p className="text-sm text-muted-foreground font-medium">Verified Collector</p>
              </div>
            </div>
            <Button size="icon" className="rounded-full w-12 h-12 shadow-lg bg-primary hover:bg-primary/90">
              <Phone className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center gap-3 bg-primary/10 rounded-xl p-4 border border-primary/20">
            <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shadow-lg">
              <Clock className="w-5 h-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs text-muted-foreground font-medium">Estimated Arrival</p>
              <p className="font-bold text-foreground text-lg">{eta} minutes</p>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2 border-t-2 border-border">
            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-1">
                <Navigation className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground font-medium">Distance</p>
              <p className="font-bold text-foreground">2.3 km</p>
            </div>
            <div className="text-center space-y-1">
              <div className="flex items-center justify-center gap-1">
                <Scale className="w-4 h-4 text-primary" />
              </div>
              <p className="text-xs text-muted-foreground font-medium">Weight</p>
              <p className="font-bold text-foreground">5.2 kg</p>
            </div>
            <div className="text-center space-y-1 bg-primary/10 rounded-lg py-2">
              <p className="text-xs text-muted-foreground font-medium">Payment</p>
              <p className="font-bold text-primary text-lg">₹78</p>
            </div>
          </div>
        </Card>

        <Button
          onClick={() => navigate("/role-selection")}
          variant="outline"
          className="w-full h-12 rounded-xl font-semibold border-2"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default MapTracker;
