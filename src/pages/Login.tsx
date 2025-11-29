import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";
import heroImage from "@/assets/waste-hero.png";

const Login = () => {
  const [phone, setPhone] = useState("");
  const [otp, setOtp] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSendOtp = () => {
    if (phone.length !== 10) {
      toast.error("Please enter a valid 10-digit phone number");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowOtp(true);
      toast.success("OTP sent to your phone");
    }, 1000);
  };

  const handleVerifyOtp = () => {
    if (otp.length !== 6) {
      toast.error("Please enter a valid 6-digit OTP");
      return;
    }
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful!");
      navigate("/role-selection");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-background via-background to-primary/5 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="w-full max-w-md space-y-8 animate-fade-in relative z-10">
        <div className="text-center space-y-6">
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center backdrop-blur-sm border border-primary/10 shadow-xl">
                <img src={heroImage} alt="WasteMarket" className="w-20 h-20 object-contain" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center shadow-lg">
                <Trash2 className="w-4 h-4 text-primary-foreground" />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <h1 className="text-4xl font-bold text-foreground tracking-tight">
              WasteMarket
            </h1>
            <p className="text-lg text-muted-foreground font-medium">
              Turn waste into worth
            </p>
          </div>
        </div>

        <div className="bg-card/50 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-border/50 space-y-6">
          <div className="space-y-3">
            <label className="text-sm font-semibold text-foreground">
              Phone Number
            </label>
            <div className="flex gap-3">
              <div className="flex items-center justify-center px-5 bg-muted/50 rounded-xl border border-input shadow-sm">
                <span className="text-foreground font-bold text-lg">+91</span>
              </div>
              <Input
                type="tel"
                placeholder="Enter 10-digit number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="flex-1 text-lg h-14 rounded-xl border-2 focus:border-primary shadow-sm"
                disabled={showOtp}
              />
            </div>
          </div>

          {showOtp && (
            <div className="space-y-3 animate-fade-in">
              <label className="text-sm font-semibold text-foreground">
                Enter OTP
              </label>
              <Input
                type="tel"
                placeholder="6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                className="text-lg text-center tracking-[0.5em] h-14 rounded-xl border-2 focus:border-primary shadow-sm font-bold"
              />
            </div>
          )}

          {!showOtp ? (
            <Button
              onClick={handleSendOtp}
              disabled={isLoading || phone.length !== 10}
              className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg bg-gradient-to-r from-primary to-primary/90 hover:shadow-xl transition-all"
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </Button>
          ) : (
            <div className="space-y-3">
              <Button
                onClick={handleVerifyOtp}
                disabled={isLoading || otp.length !== 6}
                className="w-full h-14 text-lg font-semibold rounded-xl shadow-lg bg-gradient-to-r from-primary to-primary/90 hover:shadow-xl transition-all"
              >
                {isLoading ? "Verifying..." : "Verify & Login"}
              </Button>
              <button
                onClick={() => {
                  setShowOtp(false);
                  setOtp("");
                }}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors font-medium"
              >
                Change phone number
              </button>
            </div>
          )}
        </div>

        <p className="text-center text-xs text-muted-foreground">
          By continuing, you agree to our Terms & Privacy Policy
        </p>
      </div>
    </div>
  );
};

export default Login;
