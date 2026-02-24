const Footer = () => {
  return (
    <footer className="hero-section py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-lg font-bold text-hero-foreground">Horizonix</p>
          <p className="text-sm text-hero-muted">© {new Date().getFullYear()} Horizonix. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#services" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Services</a>
            <a href="#pricing" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Pricing</a>
            <a href="#contact" className="text-sm text-hero-muted hover:text-hero-foreground transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
