import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CA Firm — Professional Website",
    category: "Business Website",
    desc: "A clean, trust-building website for a Chartered Accountancy practice with service pages, team bios, and contact forms.",
    gradient: "from-primary to-accent",
  },
  {
    title: "StartupFlow — Landing Page",
    category: "Landing Page",
    desc: "A conversion-focused landing page for an early-stage SaaS startup with hero, features, and pricing sections.",
    gradient: "from-accent to-purple-600",
  },
];

const PortfolioSection = () => {
  return (
    <section id="portfolio" className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Our Work</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
          <p className="text-muted-foreground">Real results for real businesses. Here's a glimpse of what we build.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <div key={i} className="card-hover bg-card border border-border rounded-2xl overflow-hidden group">
              <div className={`h-48 bg-gradient-to-br ${p.gradient} flex items-center justify-center`}>
                <span className="font-display text-white/80 text-lg font-semibold tracking-wide">{p.category}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <Button variant="outline" size="sm">
                  View Project <ExternalLink size={14} className="ml-1" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
