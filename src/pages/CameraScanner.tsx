import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, X, Sparkles } from "lucide-react";
import { toast } from "sonner";

const CameraScanner = () => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    startCamera();
    return () => {
      stopCamera();
    };
  }, []);

  const startCamera = async () => {
    try {
      const mediaStream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: "environment" },
      });
      setStream(mediaStream);
      if (videoRef.current) {
        videoRef.current.srcObject = mediaStream;
      }
    } catch (err) {
      toast.error("Camera access denied. Please enable camera permissions.");
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
    }
  };

  const captureImage = () => {
    setIsProcessing(true);
    setTimeout(() => {
      stopCamera();
      navigate("/ai-result");
    }, 2000);
  };

  return (
    <div className="relative h-screen w-full bg-black overflow-hidden">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Gradient overlay for better UI visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60 pointer-events-none" />

      {/* Camera frame guide */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-4/5 aspect-square max-w-md">
          {/* Corner brackets */}
          <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-primary rounded-tl-2xl" />
          <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-primary rounded-tr-2xl" />
          <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-primary rounded-bl-2xl" />
          <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-primary rounded-br-2xl" />
          
          {/* Center scanning line animation */}
          <div className="absolute inset-x-0 top-1/2 -translate-y-1/2">
            <div className="h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
          </div>

          {/* Instruction card */}
          <div className="absolute -top-20 left-0 right-0">
            <div className="bg-black/70 backdrop-blur-xl px-6 py-4 rounded-2xl border border-primary/20 shadow-2xl mx-4">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-white text-sm font-medium">
                  Place a coin next to the waste for accurate size detection
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Processing overlay */}
      {isProcessing && (
        <div className="absolute inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center animate-fade-in z-20">
          <div className="text-center space-y-6">
            <div className="relative w-24 h-24 mx-auto">
              <div className="absolute inset-0 border-4 border-primary/30 rounded-full" />
              <div className="absolute inset-0 border-4 border-primary border-t-transparent rounded-full animate-spin" />
              <Sparkles className="absolute inset-0 m-auto w-10 h-10 text-primary animate-pulse" />
            </div>
            <div className="space-y-2">
              <p className="text-white text-xl font-bold">Analyzing waste...</p>
              <p className="text-white/60 text-sm">AI is calculating weight and value</p>
            </div>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4 z-10">
        <Button
          onClick={captureImage}
          disabled={isProcessing}
          size="lg"
          className="w-full h-16 text-lg font-bold rounded-2xl bg-primary hover:bg-primary/90 shadow-2xl shadow-primary/50 border-2 border-primary/20"
        >
          <Camera className="w-6 h-6 mr-3" />
          Capture & Analyze
        </Button>

        <Button
          onClick={() => {
            stopCamera();
            navigate("/role-selection");
          }}
          variant="outline"
          size="lg"
          className="w-full h-14 text-lg font-semibold rounded-2xl bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 backdrop-blur-sm"
        >
          <X className="w-5 h-5 mr-2" />
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CameraScanner;
