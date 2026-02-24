import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="hero-section min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Subtle grid overlay */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px"
      }} />
      
      {/* Glow orb */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-accent/10 blur-[120px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 px-4 py-1.5 rounded-full border border-white/15 text-xs font-medium text-hero-muted tracking-wide animate-fade-up" style={{ animationDelay: "0.1s" }}>
            Web Design Agency — Built for Growing Businesses
          </div>

          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-hero-foreground leading-[1.1] mb-6 animate-fade-up" style={{ animationDelay: "0.2s" }}>
            Modern Websites for{" "}
            <span className="gradient-text">Growing Businesses</span>
          </h1>

          <p className="text-lg md:text-xl text-hero-muted max-w-xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.35s" }}>
            We design stunning, conversion-focused websites for CA firms, startups, and local businesses — delivered in 3–5 days.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up" style={{ animationDelay: "0.5s" }}>
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">
                Get Free Consultation <ArrowRight className="ml-1" size={18} />
              </a>
            </Button>
            <Button variant="heroOutline" size="lg" asChild>
              <a href="#portfolio">
                <Play size={16} className="mr-1" /> View Demo
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div className="mt-16 flex flex-wrap items-center justify-center gap-6 text-hero-muted text-sm opacity-60 animate-fade-up" style={{ animationDelay: "0.65s" }}>
            <span>✓ 3–5 Day Delivery</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Mobile-First Design</span>
            <span className="hidden sm:inline">•</span>
            <span>✓ Affordable Pricing</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
