import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, IndianRupee, Scale, Navigation } from "lucide-react";
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
    <div className="h-screen flex flex-col bg-background">
      {/* Mock Map Area */}
      <div className="h-1/3 relative bg-muted/30">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-full h-full">
            {/* Grid pattern */}
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

            {/* Order pins */}
            <div className="absolute top-1/4 left-1/4 animate-fade-in">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute top-1/2 right-1/3 animate-fade-in animation-delay-150">
              <MapPin className="w-6 h-6 text-primary" />
            </div>
            <div className="absolute bottom-1/4 left-1/2 animate-fade-in animation-delay-300">
              <MapPin className="w-6 h-6 text-primary" />
            </div>

            {/* Your location */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="w-4 h-4 rounded-full bg-destructive animate-pulse" />
            </div>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-xl font-bold text-foreground">
            Available Pickups
          </h2>
          <Badge variant="secondary" className="text-sm">
            {orders.length} orders
          </Badge>
        </div>

        {orders.map((order) => (
          <Card
            key={order.id}
            className="p-4 space-y-4 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between">
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <p className="font-medium text-foreground">{order.location}</p>
                </div>
                <p className="text-sm text-muted-foreground pl-6">
                  {order.wasteType}
                </p>
              </div>
              <div className="flex items-center gap-1 text-muted-foreground">
                <Navigation className="w-4 h-4" />
                <span className="text-sm">{order.distance} km</span>
              </div>
            </div>

            <div className="flex items-center justify-between pt-2 border-t border-border">
              <div className="flex gap-6">
                <div className="flex items-center gap-1">
                  <Scale className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium">{order.weight} kg</span>
                </div>
                <div className="flex items-center gap-1">
                  <IndianRupee className="w-4 h-4 text-primary" />
                  <span className="text-sm font-bold text-primary">
                    {order.price}
                  </span>
                </div>
              </div>

              <Button
                onClick={() => handleAcceptOrder(order)}
                size="sm"
                className="font-medium"
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
