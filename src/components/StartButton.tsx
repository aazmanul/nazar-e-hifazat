import { Play, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/button";

interface StartButtonProps {
  isStarted: boolean;
  elapsedTime: string;
  onStart: () => void;
  onReset: () => void;
}

const StartButton = ({ isStarted, elapsedTime, onStart, onReset }: StartButtonProps) => {
  if (isStarted) {
    return (
      <div className="flex flex-col items-center gap-4 animate-fade-in-up">
        {/* Elapsed time display */}
        <div className="card-ceramic rounded-2xl px-8 py-6 text-center">
          <p className="text-sm text-muted-foreground mb-2">অতিবাহিত সময়</p>
          <p className="text-3xl md:text-4xl font-bold text-primary">{elapsedTime}</p>
        </div>

        {/* Reset button */}
        <Button
          variant="outline"
          size="lg"
          onClick={onReset}
          className="gap-2 text-muted-foreground hover:text-destructive hover:border-destructive/50 transition-colors"
        >
          <RotateCcw className="w-4 h-4" />
          পুনরায় শুরু করুন
        </Button>
      </div>
    );
  }

  return (
    <button
      onClick={onStart}
      className="group relative btn-primary-ceramic rounded-2xl px-10 py-5 text-xl font-semibold transition-all duration-300 hover:scale-105 active:scale-100 animate-fade-in-up"
    >
      <span className="flex items-center gap-3">
        <Play className="w-6 h-6 fill-current" />
        <span>Start Now</span>
      </span>
      <span className="block text-sm font-normal opacity-90 mt-1">
        ( বিসমিল্লাহ )
      </span>

      {/* Pulse effect */}
      <span className="absolute inset-0 rounded-2xl bg-primary/20 animate-ping opacity-20" />
    </button>
  );
};

export default StartButton;
