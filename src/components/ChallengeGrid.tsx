import { challenges, getElapsedHours } from "@/lib/challengeData";
import ChallengeCard from "./ChallengeCard";

interface ChallengeGridProps {
  startTime: number | null;
  currentTime: number;
}

const ChallengeGrid = ({ startTime, currentTime }: ChallengeGridProps) => {
  const isStarted = startTime !== null;
  const elapsedHours = startTime ? getElapsedHours(startTime) : 0;

  return (
    <section className="py-12">
      <div className="container max-w-6xl mx-auto px-4">
        {/* Section header */}
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            চ্যালেঞ্জ মাইলস্টোন
          </h2>
          <p className="text-muted-foreground">
            প্রতিটি সবুজ কার্ড আপনার বিজয়ের চিহ্ন
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {challenges.map((challenge, index) => {
            const isComplete = isStarted && elapsedHours >= challenge.hours;
            const hoursRemaining = challenge.hours - elapsedHours;

            return (
              <ChallengeCard
                key={challenge.id}
                challenge={challenge}
                isComplete={isComplete}
                isStarted={isStarted}
                hoursRemaining={hoursRemaining > 0 ? hoursRemaining : 0}
                index={index}
              />
            );
          })}
        </div>

        {/* Progress summary */}
        {isStarted && (
          <div className="mt-10 text-center">
            <div className="inline-flex items-center gap-4 card-ceramic rounded-full px-6 py-3">
              <span className="text-muted-foreground">সম্পন্ন:</span>
              <span className="text-2xl font-bold text-primary">
                {challenges.filter(c => elapsedHours >= c.hours).length}
              </span>
              <span className="text-muted-foreground">/ {challenges.length}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ChallengeGrid;
