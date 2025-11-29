import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trash2 } from "lucide-react";
import { toast } from "sonner";

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
    // Simulate OTP send
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
    // Simulate OTP verification
    setTimeout(() => {
      setIsLoading(false);
      toast.success("Login successful!");
      navigate("/role-selection");
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-background">
      <div className="w-full max-w-md space-y-8 animate-fade-in">
        <div className="text-center space-y-4">
          <div className="flex justify-center">
            <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center">
              <Trash2 className="w-10 h-10 text-primary" />
            </div>
          </div>
          <h1 className="text-3xl font-bold text-foreground">WasteMarket</h1>
          <p className="text-lg text-muted-foreground">
            Sell or collect waste with ease
          </p>
        </div>

        <div className="space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">
              Phone Number
            </label>
            <div className="flex gap-2">
              <div className="flex items-center justify-center px-4 bg-muted rounded-lg border border-input">
                <span className="text-foreground font-medium">+91</span>
              </div>
              <Input
                type="tel"
                placeholder="Enter 10-digit number"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                className="flex-1 text-lg"
                disabled={showOtp}
              />
            </div>
          </div>

          {showOtp && (
            <div className="space-y-2 animate-fade-in">
              <label className="text-sm font-medium text-foreground">
                Enter OTP
              </label>
              <Input
                type="tel"
                placeholder="6-digit OTP"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                className="text-lg text-center tracking-widest"
              />
            </div>
          )}

          {!showOtp ? (
            <Button
              onClick={handleSendOtp}
              disabled={isLoading || phone.length !== 10}
              className="w-full h-14 text-lg font-medium"
            >
              {isLoading ? "Sending..." : "Send OTP"}
            </Button>
          ) : (
            <div className="space-y-3">
              <Button
                onClick={handleVerifyOtp}
                disabled={isLoading || otp.length !== 6}
                className="w-full h-14 text-lg font-medium"
              >
                {isLoading ? "Verifying..." : "Verify & Login"}
              </Button>
              <button
                onClick={() => {
                  setShowOtp(false);
                  setOtp("");
                }}
                className="w-full text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Change phone number
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
