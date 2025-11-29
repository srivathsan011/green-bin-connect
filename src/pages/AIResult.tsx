import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scale, IndianRupee, Package, Check } from "lucide-react";

const AIResult = () => {
  const navigate = useNavigate();

  // Mock AI results
  const weight = "5.2";
  const price = "78";
  const wasteType = "Mixed Plastic";

  return (
    <div className="min-h-screen bg-background p-6 flex flex-col">
      <div className="flex-1 space-y-6 animate-fade-in">
        <div className="text-center space-y-2 pt-4">
          <div className="w-16 h-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center">
            <Check className="w-8 h-8 text-primary" />
          </div>
          <h1 className="text-2xl font-bold text-foreground">
            Analysis Complete
          </h1>
          <p className="text-muted-foreground">
            Review the details below
          </p>
        </div>

        <div className="space-y-4">
          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Package className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">Waste Type</p>
                <p className="text-xl font-bold text-foreground">{wasteType}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Scale className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">
                  Estimated Weight
                </p>
                <p className="text-xl font-bold text-foreground">{weight} kg</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 bg-primary/5 border-primary/20">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                <IndianRupee className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <p className="text-sm text-muted-foreground mb-1">
                  You Will Receive
                </p>
                <p className="text-3xl font-bold text-primary">₹{price}</p>
              </div>
            </div>
          </Card>

          <div className="bg-muted/50 rounded-lg p-4">
            <p className="text-sm text-muted-foreground text-center">
              A collector will arrive within 30-45 minutes to pick up your waste
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-6">
        <Button
          onClick={() => navigate("/map-tracker")}
          size="lg"
          className="w-full h-16 text-lg font-medium"
        >
          Post Pickup Request
        </Button>
        <Button
          onClick={() => navigate("/camera-scanner")}
          variant="outline"
          size="lg"
          className="w-full h-14 text-lg font-medium"
        >
          Scan Again
        </Button>
      </div>
    </div>
  );
};

export default AIResult;
