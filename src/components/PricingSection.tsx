import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "₹9,999",
    desc: "Perfect for a simple online presence.",
    features: ["Single-page website", "Mobile responsive", "Contact form", "Basic SEO", "1 revision round"],
    popular: false,
  },
  {
    name: "Pro",
    price: "₹19,999",
    desc: "Most popular for growing businesses.",
    features: ["Up to 5 pages", "Custom design", "WhatsApp integration", "Advanced SEO", "3 revision rounds", "1 month support"],
    popular: true,
  },
  {
    name: "Premium",
    price: "₹29,999",
    desc: "Full-featured solution for serious growth.",
    features: ["Up to 10 pages", "Premium design", "Blog / testimonials", "Analytics setup", "Unlimited revisions", "3 months support"],
    popular: false,
  },
];

const PricingSection = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Pricing</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Transparent & Affordable</h2>
          <p className="text-muted-foreground">No hidden fees. Pick a plan or let's customise one for you.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {plans.map((p, i) => (
            <div key={i} className={`card-hover rounded-2xl p-8 border ${p.popular ? "border-accent glow-border bg-card" : "border-border bg-card"} relative`}>
              {p.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 gradient-bg text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="font-display text-xl font-bold text-foreground mb-1">{p.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{p.desc}</p>
              <div className="mb-6">
                <span className="font-display text-4xl font-bold text-foreground">{p.price}</span>
                <span className="text-muted-foreground text-sm ml-1">one-time</span>
              </div>
              <ul className="space-y-3 mb-8">
                {p.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-foreground">
                    <Check size={16} className="text-accent flex-shrink-0" /> {f}
                  </li>
                ))}
              </ul>
              <Button variant={p.popular ? "hero" : "outline"} className="w-full" asChild>
                <a href="#contact">Get Started</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
