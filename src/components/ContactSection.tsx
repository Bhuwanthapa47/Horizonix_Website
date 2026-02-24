import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-accent tracking-wide uppercase mb-3">Get in Touch</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">Let's Start Your Project</h2>
          <p className="text-muted-foreground">Fill in the form or reach out directly — we respond within 24 hours.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-accent/10 rounded-2xl p-8 text-center">
                <p className="font-display text-xl font-bold text-foreground mb-2">Thank you! 🎉</p>
                <p className="text-muted-foreground text-sm">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <Input placeholder="Your Name" required className="bg-secondary border-border" />
                </div>
                <div>
                  <Input type="email" placeholder="Your Email" required className="bg-secondary border-border" />
                </div>
                <div>
                  <Input placeholder="Your Business / Firm Name" className="bg-secondary border-border" />
                </div>
                <div>
                  <Textarea placeholder="Tell us about your project..." rows={4} required className="bg-secondary border-border resize-none" />
                </div>
                <Button variant="hero" size="lg" type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Mail size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Email</p>
                <p className="text-muted-foreground text-sm">hello@horizonix.solutions</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                <p className="text-muted-foreground text-sm">+91 99999 99999</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <MapPin size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">Location</p>
                <p className="text-muted-foreground text-sm">India (Remote Agency)</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
