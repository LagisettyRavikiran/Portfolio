import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] animate-pulse-glow" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent/20 rounded-full blur-[100px] animate-pulse-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[hsl(200,90%,50%)]/10 rounded-full blur-[150px]" />
      </div>

      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border mb-8 animate-fade-in opacity-0" style={{ animationDelay: '0.2s' }}>
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm text-muted-foreground">Open to opportunities</span>
          </div>

          {/* Name */}
          <h1 className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.3s' }}>
            Hi, I'm{' '}
            <span className="gradient-text">Ravikiran</span>
          </h1>

          {/* Role */}
          <h2 className="font-heading text-xl sm:text-2xl md:text-3xl text-muted-foreground mb-6 animate-slide-up opacity-0" style={{ animationDelay: '0.4s' }}>
            AI/ML Engineer & GenAI Specialist
          </h2>

          {/* Description */}
          <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed animate-slide-up opacity-0" style={{ animationDelay: '0.5s' }}>
            Building scalable AI-driven solutions with expertise in Generative AI, 
            Deep Learning, and RAG pipelines. Currently crafting intelligent systems 
            at <span className="text-foreground font-medium">Diebold Nixdorf</span>.
          </p>

          {/* Location */}
          <div className="flex items-center justify-center gap-2 text-muted-foreground mb-10 animate-fade-in opacity-0" style={{ animationDelay: '0.6s' }}>
            <MapPin size={16} className="text-primary" />
            <span className="text-sm">Mumbai, India</span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-slide-up opacity-0" style={{ animationDelay: '0.7s' }}>
            <Button variant="glow" size="xl" asChild>
              <a href="#contact">
                <Mail size={20} />
                Get In Touch
              </a>
            </Button>
            <Button variant="heroOutline" size="xl" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-4 animate-fade-in opacity-0" style={{ animationDelay: '0.8s' }}>
            <a
              href="https://github.com/LagisettyRavikiran"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-secondary transition-all duration-300"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/lagisetty-ravikiran/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-secondary transition-all duration-300"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:kiranlravi8@gmail.com"
              className="p-3 rounded-full bg-secondary/50 border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-secondary transition-all duration-300"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
            <ChevronDown size={28} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
