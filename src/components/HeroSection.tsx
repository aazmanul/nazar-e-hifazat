import { Eye } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative py-16 md:py-24 text-center">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container max-w-4xl mx-auto px-4">
        {/* Icon */}
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 mb-8 animate-fade-in-up">
          <Eye className="w-10 h-10 text-primary" strokeWidth={1.5} />
        </div>

        {/* Main heading */}
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-relaxed mb-6 animate-fade-in-up animation-delay-100">
          চলুন চোখকে{" "}
          <span className="text-gradient">আল্লাহর সন্তুষ্টির</span>{" "}
          জন্য হেফাজত করি
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto animate-fade-in-up animation-delay-200">
          প্রতিটি মুহূর্ত একটি সুযোগ। আল্লাহর সাহায্যে আমরা পারবো ইনশাআল্লাহ।
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
