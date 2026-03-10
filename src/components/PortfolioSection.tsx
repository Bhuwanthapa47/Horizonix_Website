import { Button } from "@/components/ui/button";
import { ExternalLink, Sparkles, Globe, Monitor, BarChart3, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const erpScreenshots = [
  { src: "/erp3.png", label: "Dashboard" },
  { src: "/erp2.png", label: "Attendance" },
  { src: "/horizonix-erp.png", label: "Reports" },
];

const featuredProject = {
  title: "Horizonix ERP",
  category: "Our Product",
  desc: "Our in-house Enterprise Resource Planning solution — built to streamline business operations end-to-end. From inventory & invoicing to HR & analytics, Horizonix ERP is the backbone we integrate into every client project for maximum efficiency.",
  highlights: ["Inventory Management", "Invoicing & Billing", "HR & Payroll", "Real-time Analytics", "Multi-branch Support", "Role-based Access"],
  image: "/horizonix-erp.png",
  url: "https://horizonix-erp.lovable.app/",
};

const projects = [
  {
    title: "CA Firm — Sharma & Associates",
    category: "Business Website",
    desc: "A clean, trust-building website for a Chartered Accountancy firm with service pages, team bios, and contact forms.",
    image: "/casss.png",
    url: "https://699ea6456d417eca953f7e8e--gregarious-pothos-2ebf44.netlify.app/",
    icon: BarChart3,
  },
  {
    title: "CA Firm — CA Associates",
    category: "Business Website",
    desc: "A clean, trust-building website for a Chartered Accountancy firm with service pages, team bios, and contact forms.",
    image: "/cass.png",
    url: "https://699eaa89c59d970457e00fce--gentle-starburst-492496.netlify.app/",
    icon: Globe,
  },
  {
    title: "Portfolio — Landing Page",
    category: "Landing Page",
    desc: "A conversion-focused landing page for an early-stage SaaS startup with hero, features, and pricing sections.",
    image: "/portfolio.png",
    url: "https://bhuwanthapa.netlify.app/",
    icon: Monitor,
  },
];

const PortfolioSection = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % erpScreenshots.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + erpScreenshots.length) % erpScreenshots.length);

  return (
    <section id="portfolio" className="py-24 section-alt overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3 flex items-center justify-center gap-2">
            <Sparkles size={16} className="text-accent" />
            Our Work
            <Sparkles size={16} className="text-accent" />
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-4">
            Projects That <span className="gradient-text">Deliver Results</span>
          </h2>
          <p className="text-muted-foreground text-lg">Real results for real businesses — plus our own flagship product.</p>
        </div>

        {/* Featured Project — Horizonix ERP */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="relative group rounded-3xl overflow-hidden border border-accent/20 bg-card shadow-lg hover:shadow-2xl transition-all duration-500">
            {/* Gradient glow behind the card */}
            <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 via-transparent to-accent/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

            <div className="grid md:grid-cols-2 gap-0">
              {/* Image Side — Carousel */}
              <div className="relative h-64 md:h-auto overflow-hidden bg-[hsl(230,50%,8%)] flex items-center justify-center">
                {/* Screenshots */}
                {erpScreenshots.map((shot, i) => (
                  <img
                    key={i}
                    src={shot.src}
                    alt={`Horizonix ERP — ${shot.label}`}
                    className={`absolute inset-0 w-full h-full object-contain object-center p-4 transition-all duration-500 ${
                      i === activeSlide ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
                  />
                ))}

                {/* Navigation arrows */}
                <button
                  onClick={prevSlide}
                  className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  onClick={nextSlide}
                  className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border border-border flex items-center justify-center text-foreground hover:bg-accent hover:text-white transition-colors"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Dots + Label */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-10 flex items-center gap-3">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border">
                    {erpScreenshots.map((shot, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveSlide(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeSlide ? "w-5 bg-accent" : "w-1.5 bg-muted-foreground/40 hover:bg-muted-foreground"
                        }`}
                      />
                    ))}
                    <span className="text-[10px] font-medium text-muted-foreground ml-2">{erpScreenshots[activeSlide].label}</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 z-10">
                  <span className="inline-flex items-center gap-1.5 px-4 py-1.5 gradient-bg text-white text-xs font-bold rounded-full shadow-lg">
                    <Sparkles size={12} />
                    {featuredProject.category}
                  </span>
                </div>
              </div>

              {/* Content Side */}
              <div className="p-8 md:p-10 flex flex-col justify-center">
                <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">
                  {featuredProject.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {featuredProject.desc}
                </p>

                {/* Feature Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {featuredProject.highlights.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent border border-accent/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <a href={featuredProject.url} target="_blank" rel="noopener noreferrer">
                    <Button className="gradient-bg text-white border-0 shadow-lg hover:shadow-xl transition-shadow">
                      Explore ERP <ExternalLink size={15} className="ml-2" />
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-6xl mx-auto mb-12">
          <div className="flex-1 h-px bg-border" />
          <span className="text-xs font-semibold text-muted-foreground uppercase tracking-widest">Client Projects</span>
          <div className="flex-1 h-px bg-border" />
        </div>

        {/* Client Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {projects.map((p, i) => {
            const Icon = p.icon;
            return (
              <div
                key={i}
                className="group relative bg-card border border-border rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_50px_-15px_hsl(var(--accent)/0.2)] hover:border-accent/30"
              >
                {/* Image */}
                <div className="relative h-40 overflow-hidden bg-[hsl(230,50%,8%)]">
                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-full object-contain object-center p-2 transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-3 left-3">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-semibold text-foreground rounded-full border border-border">
                      <Icon size={12} />
                      {p.category}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-5 leading-relaxed">{p.desc}</p>
                  <a href={p.url} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="group-hover:border-accent group-hover:text-accent transition-colors duration-300">
                      View Project <ExternalLink size={14} className="ml-1.5" />
                    </Button>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <p className="text-muted-foreground mb-2 text-sm">
            Every website we build comes with <span className="font-semibold text-accent">Horizonix ERP integration</span> for seamless business management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
