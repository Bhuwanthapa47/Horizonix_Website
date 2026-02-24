import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rajesh Sharma",
    role: "Chartered Accountant",
    text: "Horizonix delivered our firm's website in just 4 days. The design is clean, professional, and our clients love it.",
  },
  {
    name: "Priya Mehta",
    role: "Startup Founder",
    text: "We needed a landing page fast. Horizonix understood our vision and built something better than we imagined.",
  },
  {
    name: "Amit Patel",
    role: "Tax Consultant",
    text: "Affordable, fast, and they actually listen. My website has helped me get 3 new clients this month alone.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 section-alt">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Testimonials</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <div key={i} className="card-hover bg-card border border-border rounded-2xl p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} size={16} className="fill-accent text-accent" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-6 leading-relaxed italic">"{t.text}"</p>
              <div>
                <p className="font-semibold text-foreground text-sm">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
