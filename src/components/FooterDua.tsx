const FooterDua = () => {
  return (
    <footer className="py-16 bg-gradient-to-b from-transparent to-muted/30">
      <div className="container max-w-4xl mx-auto px-4">
        <div className="card-ceramic rounded-2xl p-8 md:p-12 text-center">
          {/* Decorative element */}
          <div className="w-16 h-1 bg-primary/30 rounded-full mx-auto mb-8" />

          {/* Dua text */}
          <p className="text-lg md:text-xl leading-loose text-foreground/90 font-medium">
            হে আল্লাহ এই চ্যালেঞ্জ আমাকে বাঁচাতে পারবে না যতক্ষণ না তুমি আমাকে সাহায্য কর, কারণ আমি দুর্বল, আমার ইচ্ছাশক্তিও দুর্বল কারণ{" "}
            <span className="text-primary font-bold">লা হাওলা ওয়ালা কুওয়াতা ইল্লা বিল্লাহ!</span>
          </p>

          <p className="text-lg md:text-xl leading-loose text-foreground/90 font-medium mt-6">
            তুমি আমাকে সাহায্য করলেই আমি আমার চোখকে হেফাজত করতে পারবো। হে আল্লাহ তুমি আমাকে সাহায্য করো। অশ্লীলতার এই দৃষ্টি মোকাবেলা, শয়তানের সাথে এ লড়াই তোমার সাহায্য ছাড়া অসম্ভব।
          </p>

          <p className="text-lg md:text-xl leading-loose text-foreground/90 font-medium mt-6">
            শয়তানের সাথে প্রতিনিয়ত যুদ্ধ করে যাচ্ছি! হে আল্লাহ, শয়তানের ডাকে যেন সাড়া না দিয়ে বসি সে জন্য আমি তোমার উপর ভরসা করলাম।
          </p>

          {/* Closing */}
          <div className="mt-10 pt-8 border-t border-border/50">
            <p className="text-primary font-bold text-xl">
              আলহামদুলিল্লাহি রাব্বিল আলামিন
            </p>
            <p className="text-muted-foreground mt-2">
              সাল্লাল্লাহু আলাইহি ওয়াসাল্লাম
            </p>
            <p className="text-2xl mt-4 text-primary/80">
              আমিন
            </p>
          </div>

          {/* Decorative element */}
          <div className="w-16 h-1 bg-primary/30 rounded-full mx-auto mt-8" />
        </div>

        {/* Copyright */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          © {new Date().getFullYear()} — চোখের হেফাজত
        </p>
      </div>
    </footer>
  );
};

export default FooterDua;
