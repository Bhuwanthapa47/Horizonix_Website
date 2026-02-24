const steps = [
  { num: "01", title: "Discovery Call", desc: "We discuss your business, goals, and requirements." },
  { num: "02", title: "Homepage Preview", desc: "We create a first draft of your homepage within 48 hours." },
  { num: "03", title: "Revisions", desc: "We refine the design based on your feedback until you're satisfied." },
  { num: "04", title: "Launch & Support", desc: "We deploy your site and provide ongoing support." },
];

const ProcessSection = () => {
  return (
    <section id="process" className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Our Process</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Simple. Transparent. Fast.</h2>
          <p className="text-muted-foreground">From first call to live site in under a week.</p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((s, i) => (
            <div key={i} className="relative text-center">
              <div className="text-5xl font-display font-bold text-accent/15 mb-3">{s.num}</div>
              <h3 className="font-display text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground">{s.desc}</p>
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-8 right-0 translate-x-1/2 w-8 border-t-2 border-dashed border-accent/20" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
