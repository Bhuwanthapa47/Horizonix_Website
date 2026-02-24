import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-24 hero-section relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-accent/10 blur-[100px] pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h2 className="font-display text-3xl md:text-5xl font-bold text-hero-foreground mb-6">
          Ready to Build Your<br />
          <span className="gradient-text">Dream Website?</span>
        </h2>
        <p className="text-lg text-hero-muted max-w-lg mx-auto mb-10">
          Let's discuss your project over a free consultation. No commitments, no pressure.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="hero" size="lg" asChild>
            <a href="#contact">Book Free Consultation <ArrowRight size={18} className="ml-1" /></a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="https://wa.me/919855738747" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
