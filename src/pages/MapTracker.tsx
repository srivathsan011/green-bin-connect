import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, User, Navigation, Phone } from "lucide-react";
import { useNavigate } from "react-router-dom";

const MapTracker = () => {
  const [eta, setEta] = useState(35);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setEta((prev) => Math.max(0, prev - 1));
    }, 60000); // Decrease every minute
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-screen flex flex-col bg-background">
      {/* Mock Map Area */}
      <div className="flex-1 relative bg-muted/30 animate-fade-in">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Grid pattern for map effect */}
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage: `
                  linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                  linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
                `,
                backgroundSize: "40px 40px",
              }}
            />

            {/* Your location pin */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-scale-in">
              <div className="relative">
                <div className="w-4 h-4 rounded-full bg-primary animate-pulse" />
                <div className="absolute inset-0 w-4 h-4 rounded-full bg-primary/30 animate-ping" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background px-2 py-1 rounded text-xs font-medium shadow-sm">
                You
              </div>
            </div>

            {/* Collector location pin */}
            <div className="absolute top-1/4 right-1/3 animate-fade-in">
              <div className="relative">
                <MapPin className="w-8 h-8 text-destructive drop-shadow-lg" />
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap bg-background px-2 py-1 rounded text-xs font-medium shadow-sm">
                Collector
              </div>
            </div>

            {/* Path line */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none">
              <line
                x1="50%"
                y1="50%"
                x2="66%"
                y2="25%"
                stroke="hsl(var(--primary))"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0.5"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Bottom info card */}
      <div className="p-4 space-y-4 animate-slide-in-right">
        <Card className="p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center">
                <User className="w-6 h-6 text-muted-foreground" />
              </div>
              <div>
                <p className="font-bold text-foreground">Rajesh Kumar</p>
                <p className="text-sm text-muted-foreground">Collector</p>
              </div>
            </div>
            <Button size="icon" variant="outline" className="rounded-full">
              <Phone className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Navigation className="w-4 h-4 text-primary" />
            <span className="font-medium text-foreground">
              Arriving in {eta} minutes
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-2 border-t border-border">
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Distance</p>
              <p className="font-bold text-foreground">2.3 km</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Weight</p>
              <p className="font-bold text-foreground">5.2 kg</p>
            </div>
            <div className="text-center">
              <p className="text-xs text-muted-foreground mb-1">Payment</p>
              <p className="font-bold text-primary">₹78</p>
            </div>
          </div>
        </Card>

        <Button
          onClick={() => navigate("/role-selection")}
          variant="outline"
          className="w-full"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
};

export default MapTracker;
