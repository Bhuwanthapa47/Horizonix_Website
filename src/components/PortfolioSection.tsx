import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "CA Firm — Sharma & Asociates",
    category: "Business Website",
    desc: "A clean, trust-building website for a Chartered Accountancy practice with service pages, team bios, and contact forms.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    url: "https://699ea6456d417eca953f7e8e--gregarious-pothos-2ebf44.netlify.app/",
  },
  {
    title: "CA Firm — CA Associates",
    category: "Business Website",
    desc: "A clean, trust-building website for a Chartered Accountancy practice with service pages, team bios, and contact forms.",
    image: "https://images.unsplash.com/photo-1551135049-8a33b5883817?w=800&h=600&fit=crop",
    url: "https://699eaa89c59d970457e00fce--gentle-starburst-492496.netlify.app/",
  },
  {
    title: "Portfolio — Landing Page",
    category: "Landing Page",
    desc: "A conversion-focused landing page for an early-stage SaaS startup with hero, features, and pricing sections.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=800&h=600&fit=crop",
    url: "https://bhuwanthapa.netlify.app/",
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

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => (
            <div key={i} className="card-hover bg-card border border-border rounded-2xl overflow-hidden group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={p.image} 
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-3 left-3">
                  <span className="inline-block px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-semibold text-foreground rounded-full border border-border">
                    {p.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{p.desc}</p>
                <a href={p.url} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm">
                    View Project <ExternalLink size={14} className="ml-1" />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
