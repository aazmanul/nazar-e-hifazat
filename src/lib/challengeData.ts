export interface Challenge {
  id: number;
  hours: number;
  label: string;
  labelBn: string;
}

// Convert days to hours
const daysToHours = (days: number) => days * 24;

export const challenges: Challenge[] = [
  { id: 1, hours: 6, label: "6 Hours", labelBn: "৬ ঘন্টা" },
  { id: 2, hours: 12, label: "12 Hours", labelBn: "১২ ঘন্টা" },
  { id: 3, hours: daysToHours(1), label: "1 Day", labelBn: "১ দিন" },
  { id: 4, hours: daysToHours(3), label: "3 Days", labelBn: "৩ দিন" },
  { id: 5, hours: daysToHours(7), label: "7 Days", labelBn: "৭ দিন" },
  { id: 6, hours: daysToHours(10), label: "10 Days", labelBn: "১০ দিন" },
  { id: 7, hours: daysToHours(15), label: "15 Days", labelBn: "১৫ দিন" },
  { id: 8, hours: daysToHours(30), label: "30 Days", labelBn: "৩০ দিন" },
  { id: 9, hours: daysToHours(40), label: "40 Days", labelBn: "৪০ দিন" },
  { id: 10, hours: daysToHours(50), label: "50 Days", labelBn: "৫০ দিন" },
  { id: 11, hours: daysToHours(75), label: "75 Days", labelBn: "৭৫ দিন" },
  { id: 12, hours: daysToHours(80), label: "80 Days", labelBn: "৮০ দিন" },
  { id: 13, hours: daysToHours(90), label: "90 Days", labelBn: "৯০ দিন" },
  { id: 14, hours: daysToHours(100), label: "100 Days", labelBn: "১০০ দিন" },
  { id: 15, hours: daysToHours(107), label: "107 Days", labelBn: "১০৭ দিন" },
  { id: 16, hours: daysToHours(110), label: "110 Days", labelBn: "১১০ দিন" },
  { id: 17, hours: daysToHours(115), label: "115 Days", labelBn: "১১৫ দিন" },
  { id: 18, hours: daysToHours(130), label: "130 Days", labelBn: "১৩০ দিন" },
  { id: 19, hours: daysToHours(140), label: "140 Days", labelBn: "১৪০ দিন" },
  { id: 20, hours: daysToHours(150), label: "150 Days", labelBn: "১৫০ দিন" },
  { id: 21, hours: daysToHours(175), label: "175 Days", labelBn: "১৭৫ দিন" },
  { id: 22, hours: daysToHours(200), label: "200 Days", labelBn: "২০০ দিন" },
  { id: 23, hours: daysToHours(250), label: "250 Days", labelBn: "২৫০ দিন" },
  { id: 24, hours: daysToHours(300), label: "300 Days", labelBn: "৩০০ দিন" },
  { id: 25, hours: daysToHours(365), label: "365 Days", labelBn: "৩৬৫ দিন" },
];

export const STORAGE_KEY = "gaze_challenge_start_time";

export const getStartTime = (): number | null => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? parseInt(stored, 10) : null;
};

export const setStartTime = (time: number): void => {
  localStorage.setItem(STORAGE_KEY, time.toString());
};

export const clearStartTime = (): void => {
  localStorage.removeItem(STORAGE_KEY);
};

export const getElapsedHours = (startTime: number): number => {
  const now = Date.now();
  const elapsedMs = now - startTime;
  return elapsedMs / (1000 * 60 * 60);
};

export const formatTimeRemaining = (hours: number): string => {
  if (hours < 1) {
    const minutes = Math.floor(hours * 60);
    return `${minutes} মিনিট`;
  }
  if (hours < 24) {
    return `${Math.floor(hours)} ঘন্টা`;
  }
  const days = Math.floor(hours / 24);
  const remainingHours = Math.floor(hours % 24);
  if (remainingHours === 0) {
    return `${days} দিন`;
  }
  return `${days} দিন ${remainingHours} ঘন্টা`;
};

export const formatElapsedTime = (startTime: number): string => {
  const elapsedHours = getElapsedHours(startTime);
  return formatTimeRemaining(elapsedHours);
};
