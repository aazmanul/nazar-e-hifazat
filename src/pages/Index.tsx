import { useState, useEffect, useCallback } from "react";
import HeroSection from "@/components/HeroSection";
import StartButton from "@/components/StartButton";
import ChallengeGrid from "@/components/ChallengeGrid";
import FooterDua from "@/components/FooterDua";
import ConfirmResetDialog from "@/components/ConfirmResetDialog";
import { 
  getStartTime, 
  setStartTime, 
  clearStartTime, 
  formatElapsedTime 
} from "@/lib/challengeData";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [startTime, setStartTimeState] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<number>(Date.now());
  const [showResetDialog, setShowResetDialog] = useState(false);
  const { toast } = useToast();

  // Load start time from localStorage on mount
  useEffect(() => {
    const stored = getStartTime();
    if (stored) {
      setStartTimeState(stored);
    }
  }, []);

  // Update current time every second for live countdown
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(Date.now());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const handleStart = useCallback(() => {
    const now = Date.now();
    setStartTime(now);
    setStartTimeState(now);
    toast({
      title: "বিসমিল্লাহ!",
      description: "আপনার চ্যালেঞ্জ শুরু হয়েছে। আল্লাহ আপনাকে সাহায্য করুন।",
    });
  }, [toast]);

  const handleResetConfirm = useCallback(() => {
    clearStartTime();
    setStartTimeState(null);
    setShowResetDialog(false);
    toast({
      title: "রিসেট হয়েছে",
      description: "নতুন করে শুরু করুন। আল্লাহর উপর ভরসা রাখুন।",
    });
  }, [toast]);

  const elapsedTime = startTime ? formatElapsedTime(startTime) : "০ মিনিট";

  return (
    <main className="min-h-screen bg-background font-bengali">
      {/* Hero Section */}
      <HeroSection />

      {/* Start Button Section */}
      <section className="py-8 text-center">
        <StartButton
          isStarted={startTime !== null}
          elapsedTime={elapsedTime}
          onStart={handleStart}
          onReset={() => setShowResetDialog(true)}
        />
      </section>

      {/* Challenge Cards Grid */}
      <ChallengeGrid startTime={startTime} currentTime={currentTime} />

      {/* Footer with Dua */}
      <FooterDua />

      {/* Reset Confirmation Dialog */}
      <ConfirmResetDialog
        open={showResetDialog}
        onOpenChange={setShowResetDialog}
        onConfirm={handleResetConfirm}
      />
    </main>
  );
};

export default Index;
