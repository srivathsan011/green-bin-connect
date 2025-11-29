import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, IndianRupee, Scale, Navigation, Package } from "lucide-react";
import { toast } from "sonner";

interface Order {
  id: string;
  location: string;
  weight: string;
  price: string;
  distance: string;
  wasteType: string;
}

const CollectorDashboard = () => {
  const [orders] = useState<Order[]>([
    {
      id: "1",
      location: "Sector 15, Noida",
      weight: "5.2",
      price: "78",
      distance: "2.3",
      wasteType: "Mixed Plastic",
    },
    {
      id: "2",
      location: "Sector 18, Noida",
      weight: "8.5",
      price: "127",
      distance: "4.1",
      wasteType: "Paper & Cardboard",
    },
    {
      id: "3",
      location: "Sector 22, Noida",
      weight: "3.8",
      price: "57",
      distance: "5.7",
      wasteType: "Mixed Plastic",
    },
  ]);

  const handleAcceptOrder = (order: Order) => {
    toast.success(`Order accepted from ${order.location}`);
  };

  return (
    <div className="h-screen flex flex-col bg-gradient-to-br from-background via-background to-primary/5">
      {/* Enhanced Mock Map */}
      <div className="h-1/3 relative bg-gradient-to-br from-muted/30 via-muted/20 to-primary/5 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

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

            {/* Order pins with staggered animation */}
            <div className="absolute top-1/4 left-1/4 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm" />
                <MapPin className="w-7 h-7 text-primary relative z-10" fill="currentColor" />
              </div>
            </div>
            <div className="absolute top-1/2 right-1/3 animate-fade-in" style={{ animationDelay: "150ms" }}>
              <div className="relative">
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm" />
                <MapPin className="w-7 h-7 text-primary relative z-10" fill="currentColor" />
              </div>
            </div>
            <div className="absolute bottom-1/4 left-1/2 animate-fade-in" style={{ animationDelay: "300ms" }}>
              <div className="relative">
                <div className="absolute -inset-1 bg-primary/20 rounded-full blur-sm" />
                <MapPin className="w-7 h-7 text-primary relative z-10" fill="currentColor" />
              </div>
            </div>

            {/* Your location */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="relative">
                <div className="w-5 h-5 rounded-full bg-destructive shadow-lg z-10 relative" />
                <div className="absolute inset-0 w-5 h-5 rounded-full bg-destructive/40 animate-ping" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Orders List with gradient background */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 relative">
        <div className="flex items-center justify-between mb-3 sticky top-0 bg-background/95 backdrop-blur-lg z-10 py-3 px-1 rounded-2xl border border-border/50">
          <h2 className="text-xl font-bold text-foreground">
            Available Pickups
          </h2>
          <Badge className="text-sm font-semibold px-3 py-1 bg-primary/20 text-primary border-primary/30">
            {orders.length} orders
          </Badge>
        </div>

        {orders.map((order, index) => (
          <Card
            key={order.id}
            className="p-5 space-y-4 hover:shadow-2xl transition-all hover:scale-[1.01] border-2 bg-gradient-to-br from-card to-primary/5 animate-fade-in"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="flex items-start justify-between">
              <div className="space-y-2 flex-1">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/20 flex items-center justify-center shadow-lg">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-bold text-foreground text-base">{order.location}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <Package className="w-3.5 h-3.5 text-muted-foreground" />
                      <p className="text-sm text-muted-foreground font-medium">{order.wasteType}</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2 bg-muted/50 px-3 py-1.5 rounded-full">
                <Navigation className="w-4 h-4 text-primary" />
                <span className="text-sm font-bold text-foreground">{order.distance} km</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-3 border-t-2 border-border">
              <div className="flex gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-muted flex items-center justify-center">
                    <Scale className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Weight</p>
                    <p className="text-sm font-bold text-foreground">{order.weight} kg</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <IndianRupee className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground">Payment</p>
                    <p className="text-sm font-bold text-primary">₹{order.price}</p>
                  </div>
                </div>
              </div>

              <Button
                onClick={() => handleAcceptOrder(order)}
                size="sm"
                className="font-bold px-6 h-10 rounded-xl shadow-lg bg-gradient-to-r from-primary to-primary/90"
              >
                Accept
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default CollectorDashboard;
