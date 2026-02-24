import { Zap, IndianRupee, Smartphone, Heart, Target, Headphones } from "lucide-react";

const reasons = [
  { icon: Zap, title: "Fast Delivery", desc: "Your website ready in 3–5 business days. No delays." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Premium quality at prices built for small businesses." },
  { icon: Target, title: "Niche Expertise", desc: "Designs tailored specifically for CA firms and professionals." },
  { icon: Smartphone, title: "Mobile-First", desc: "Every site is fully responsive and optimised for mobile." },
  { icon: Headphones, title: "Personal Support", desc: "Direct communication — no tickets, no waiting." },
  { icon: Heart, title: "Built with Care", desc: "We treat every project like our own brand." },
];

const WhyChooseSection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Why Horizonix</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Why Businesses Choose Us</h2>
          <p className="text-muted-foreground">We're not just another web agency — we're your growth partner.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <div key={i} className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <r.icon className="text-accent" size={20} />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">{r.title}</h3>
                <p className="text-sm text-muted-foreground">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
