import { useNavigate } from "react-router-dom";
import { Card } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import sellerImage from "@/assets/seller-illustration.png";
import collectorImage from "@/assets/collector-illustration.png";

const RoleSelection = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="w-full max-w-md space-y-8 animate-fade-in relative z-10">
        <div className="text-center space-y-3">
          <h1 className="text-3xl font-bold text-foreground">Choose Your Role</h1>
          <p className="text-muted-foreground text-lg">How would you like to participate?</p>
        </div>

        <div className="space-y-5">
          <Card
            onClick={() => navigate("/camera-scanner")}
            className="relative overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-primary/5 group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative p-8 flex items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-lg border border-primary/10">
                <img src={sellerImage} alt="Seller" className="w-20 h-20 object-contain" />
              </div>
              
              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  Waste Seller
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Sell your recyclable waste and earn instant cash
                </p>
              </div>
            </div>
            
            <div className="h-1.5 bg-gradient-to-r from-primary/20 to-transparent" />
          </Card>

          <Card
            onClick={() => navigate("/collector-dashboard")}
            className="relative overflow-hidden cursor-pointer hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 border-2 hover:border-primary/50 bg-gradient-to-br from-card to-primary/5 group"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors" />
            
            <div className="relative p-8 flex items-center gap-6">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center flex-shrink-0 shadow-lg border border-primary/10">
                <img src={collectorImage} alt="Collector" className="w-20 h-20 object-contain" />
              </div>
              
              <div className="flex-1 space-y-2">
                <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
                  Waste Collector
                  <ArrowRight className="w-5 h-5 text-primary group-hover:translate-x-1 transition-transform" />
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Collect waste from sellers and grow your business
                </p>
              </div>
            </div>
            
            <div className="h-1.5 bg-gradient-to-r from-primary/20 to-transparent" />
          </Card>
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => navigate("/")}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
          >
            ← Back to login
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoleSelection;
