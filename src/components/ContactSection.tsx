import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    
    // Replace with your Web3Forms Access Key from https://web3forms.com/
    formData.append("access_key", "90d6882c-b3e8-45fd-8928-524fb3518cb2");
    formData.append("subject", "New Contact Form Submission from Horizonix Website");
    formData.append("from_name", "Horizonix Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        toast({
          title: "Message sent successfully!",
          description: "We'll get back to you within 24 hours.",
        });
      } else {
        throw new Error(data.message || "Something went wrong");
      }
    } catch (error) {
      toast({
        title: "Failed to send message",
        description: "Please try again or contact us directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
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
                {/* Hidden field for your email - where you'll receive messages */}
                <input type="hidden" name="redirect" value="false" />
                <input type="hidden" name="email" value="horizonix.solutions@gmail.com" />
                
                <div>
                  <Input 
                    name="name"
                    placeholder="Your Name" 
                    required 
                    className="bg-secondary border-border" 
                  />
                </div>
                <div>
                  <Input 
                    type="email" 
                    name="customer_email"
                    placeholder="Your Email" 
                    required 
                    className="bg-secondary border-border" 
                  />
                </div>
                <div>
                  <Input 
                    name="business_name"
                    placeholder="Your Business Name" 
                    className="bg-secondary border-border" 
                  />
                </div>
                <div>
                  <Textarea 
                    name="message"
                    placeholder="Tell us about your project..." 
                    rows={4} 
                    required 
                    className="bg-secondary border-border resize-none" 
                  />
                </div>
                <Button 
                  variant="hero" 
                  size="lg" 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
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
                <p className="text-muted-foreground text-sm">horizonix.solutions@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                <Phone size={18} className="text-accent" />
              </div>
              <div>
                <p className="font-semibold text-foreground text-sm">WhatsApp</p>
                <p className="text-muted-foreground text-sm">+91 9855738747</p>
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
