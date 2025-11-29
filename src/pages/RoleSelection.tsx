import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { Trash2, Truck } from "lucide-react";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <h1 className="text-2xl font-bold text-foreground">I am a...</h1>
          <p className="text-muted-foreground">Choose your role to continue</p>
        </div>

        <div className="space-y-4">
          <Card
            onClick={() => navigate("/camera-scanner")}
            className="p-8 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border-2 hover:border-primary"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Trash2 className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">
                  Waste Seller
                </h2>
                <p className="text-sm text-muted-foreground">
                  I want to sell my waste for cash
                </p>
              </div>
            </div>
          </Card>

          <Card
            onClick={() => navigate("/collector-dashboard")}
            className="p-8 cursor-pointer hover:shadow-lg hover:scale-[1.02] transition-all duration-200 border-2 hover:border-primary"
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                <Truck className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-foreground mb-1">
                  Waste Collector
                </h2>
                <p className="text-sm text-muted-foreground">
                  I collect waste from sellers
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
