import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Scale, IndianRupee, Package, Check, Sparkles } from "lucide-react";

const AIResult = () => {
  const navigate = useNavigate();

  const weight = "5.2";
  const price = "78";
  const wasteType = "Mixed Plastic";

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 p-6 flex flex-col relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="flex-1 space-y-6 animate-fade-in relative z-10">
        <div className="text-center space-y-4 pt-6">
          <div className="w-20 h-20 mx-auto rounded-3xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-2xl shadow-primary/30 border-4 border-primary/20">
            <Check className="w-10 h-10 text-primary-foreground" strokeWidth={3} />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-center gap-2">
              <Sparkles className="w-5 h-5 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">
                Analysis Complete
              </h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Here's what we found
            </p>
          </div>
        </div>

        <div className="space-y-4 max-w-md mx-auto">
          <Card className="p-6 hover:shadow-xl transition-shadow border-2 bg-gradient-to-br from-card to-primary/5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Package className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm text-muted-foreground font-medium">Waste Type</p>
                <p className="text-2xl font-bold text-foreground">{wasteType}</p>
              </div>
            </div>
          </Card>

          <Card className="p-6 hover:shadow-xl transition-shadow border-2 bg-gradient-to-br from-card to-primary/5">
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center flex-shrink-0 shadow-lg">
                <Scale className="w-7 h-7 text-primary" />
              </div>
              <div className="flex-1 space-y-1">
                <p className="text-sm text-muted-foreground font-medium">
                  Estimated Weight
                </p>
                <p className="text-2xl font-bold text-foreground">{weight} kg</p>
              </div>
            </div>
          </Card>

          <Card className="p-8 bg-gradient-to-br from-primary/10 via-primary/5 to-transparent border-2 border-primary/30 shadow-2xl shadow-primary/10">
            <div className="flex items-start gap-5">
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-primary/90 flex items-center justify-center flex-shrink-0 shadow-xl shadow-primary/30">
                <IndianRupee className="w-8 h-8 text-primary-foreground" strokeWidth={3} />
              </div>
              <div className="flex-1 space-y-2">
                <p className="text-sm text-muted-foreground font-semibold">
                  You Will Receive
                </p>
                <p className="text-4xl font-bold text-primary">₹{price}</p>
              </div>
            </div>
          </Card>

          <div className="bg-muted/80 backdrop-blur-sm rounded-2xl p-5 border border-border/50">
            <p className="text-sm text-center text-muted-foreground leading-relaxed">
              <span className="font-semibold text-foreground">Collector arriving soon:</span> A verified collector will reach your location within 30-45 minutes
            </p>
          </div>
        </div>
      </div>

      <div className="space-y-3 pt-6 max-w-md mx-auto w-full relative z-10">
        <Button
          onClick={() => navigate("/map-tracker")}
          size="lg"
          className="w-full h-16 text-lg font-bold rounded-2xl shadow-xl shadow-primary/30 bg-gradient-to-r from-primary to-primary/90"
        >
          Post Pickup Request
        </Button>
        <Button
          onClick={() => navigate("/camera-scanner")}
          variant="outline"
          size="lg"
          className="w-full h-14 text-lg font-semibold rounded-2xl border-2"
        >
          Scan Again
        </Button>
      </div>
    </div>
  );
};

export default AIResult;
