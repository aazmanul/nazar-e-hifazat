import { Check, Clock } from "lucide-react";
import { Challenge, formatTimeRemaining } from "@/lib/challengeData";
import { cn } from "@/lib/utils";

interface ChallengeCardProps {
  challenge: Challenge;
  isComplete: boolean;
  isStarted: boolean;
  hoursRemaining?: number;
  index: number;
}

const ChallengeCard = ({ 
  challenge, 
  isComplete, 
  isStarted, 
  hoursRemaining = 0,
  index 
}: ChallengeCardProps) => {
  const delayClass = `animation-delay-${(index % 5) * 100}`;

  return (
    <div
      className={cn(
        "relative rounded-xl p-5 transition-all duration-500 animate-fade-in-up",
        isComplete 
          ? "card-complete shadow-lg" 
          : "card-pending",
        !isStarted && "opacity-70",
        isComplete && "card-ceramic-hover"
      )}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      {/* Completion badge */}
      {isComplete && (
        <div className="absolute -top-2 -right-2 w-8 h-8 bg-success-foreground rounded-full flex items-center justify-center shadow-md">
          <Check className="w-5 h-5 text-success" strokeWidth={3} />
        </div>
      )}

      {/* Main content */}
      <div className="text-center">
        {/* Icon */}
        <div className={cn(
          "inline-flex items-center justify-center w-12 h-12 rounded-full mb-3",
          isComplete ? "bg-success-foreground/20" : "bg-background/50"
        )}>
          {isComplete ? (
            <Check className="w-6 h-6" strokeWidth={2} />
          ) : (
            <Clock className="w-6 h-6" strokeWidth={1.5} />
          )}
        </div>

        {/* Duration label */}
        <h3 className={cn(
          "text-xl font-bold mb-1",
          isComplete ? "text-success-foreground" : "text-foreground"
        )}>
          {challenge.labelBn}
        </h3>

        {/* Status text */}
        {isComplete ? (
          <p className="text-sm font-medium text-success-foreground/80">
            আলহামদুলিল্লাহ ❤️
          </p>
        ) : isStarted && hoursRemaining > 0 ? (
          <p className="text-xs text-muted-foreground">
            বাকি: {formatTimeRemaining(hoursRemaining)}
          </p>
        ) : (
          <p className="text-xs text-muted-foreground">
            অপেক্ষমান
          </p>
        )}
      </div>
    </div>
  );
};

export default ChallengeCard;
