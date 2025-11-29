import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Camera, X } from "lucide-react";
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
    // Simulate AI processing
    setTimeout(() => {
      stopCamera();
      navigate("/ai-result");
    }, 2000);
  };

  return (
    <div className="relative h-screen w-full bg-black">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Overlay guide */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="relative w-4/5 aspect-square max-w-md">
          <div className="absolute inset-0 border-4 border-primary rounded-lg opacity-60" />
          <div className="absolute -top-16 left-0 right-0 text-center">
            <div className="inline-block bg-black/70 px-4 py-2 rounded-full">
              <p className="text-white text-sm font-medium">
                Place a coin next to the waste pile
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Processing overlay */}
      {isProcessing && (
        <div className="absolute inset-0 bg-black/80 flex items-center justify-center animate-fade-in">
          <div className="text-center space-y-4">
            <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto" />
            <p className="text-white text-lg font-medium">
              Analyzing waste...
            </p>
          </div>
        </div>
      )}

      {/* Controls */}
      <div className="absolute bottom-0 left-0 right-0 p-6 space-y-4">
        <Button
          onClick={captureImage}
          disabled={isProcessing}
          size="lg"
          className="w-full h-16 text-lg font-medium bg-primary hover:bg-primary/90"
        >
          <Camera className="w-6 h-6 mr-2" />
          Capture Image
        </Button>

        <Button
          onClick={() => {
            stopCamera();
            navigate("/role-selection");
          }}
          variant="outline"
          size="lg"
          className="w-full h-14 text-lg font-medium bg-white/10 hover:bg-white/20 text-white border-white/30"
        >
          <X className="w-5 h-5 mr-2" />
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default CameraScanner;
