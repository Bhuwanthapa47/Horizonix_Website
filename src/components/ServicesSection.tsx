import { Globe, Layout, Rocket, RefreshCw } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Business Websites",
    desc: "Professional websites that build trust and attract clients for your practice or business.",
  },
  {
    icon: Layout,
    title: "Portfolio Sites",
    desc: "Showcase your work with beautifully designed portfolio pages that leave a lasting impression.",
  },
  {
    icon: Rocket,
    title: "Landing Pages",
    desc: "High-converting landing pages designed to capture leads and drive action fast.",
  },
  {
    icon: RefreshCw,
    title: "Website Redesigns",
    desc: "Transform your outdated website into a modern, mobile-friendly experience.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">What We Do</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Services That Deliver Results</h2>
          <p className="text-muted-foreground">We build fast, beautiful websites tailored for businesses ready to grow their online presence.</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div key={i} className="card-hover bg-card border border-border rounded-xl p-6 group">
              <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-5">
                <s.icon className="text-white" size={22} />
              </div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
