import { Mail, Phone, MapPin, Github, Linkedin, Send } from 'lucide-react';
import { Button } from './ui/button';

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'kiranlravi8@gmail.com',
      href: 'mailto:kiranlravi8@gmail.com',
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91 9392701968',
      href: 'tel:+919392701968',
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Mumbai, India',
      href: null,
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/LagisettyRavikiran',
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/lagisetty-ravikiran/',
    },
  ];

  return (
    <section id="contact" className="py-20 md:py-32 relative bg-secondary/20">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="text-primary font-medium text-sm tracking-wider uppercase mb-4 block">
              Get In Touch
            </span>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              I'm always open to discussing new opportunities, collaborations, or just having a chat about AI/ML!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <h3 className="font-heading text-xl font-semibold mb-6">Contact Information</h3>
              
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-4 group">
                  <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    <info.icon size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{info.label}</p>
                    {info.href ? (
                      <a
                        href={info.href}
                        className="text-foreground hover:text-primary transition-colors font-medium"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{info.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Social Links */}
              <div className="pt-6">
                <p className="text-sm text-muted-foreground mb-4">Connect with me</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 rounded-xl bg-secondary border border-border text-muted-foreground hover:text-foreground hover:border-primary hover:bg-primary/10 transition-all duration-300"
                      aria-label={social.label}
                    >
                      <social.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Quick Message CTA */}
            <div className="card-gradient rounded-2xl p-6 md:p-8 border border-border">
              <h3 className="font-heading text-xl font-semibold mb-4">Send a Quick Message</h3>
              <p className="text-muted-foreground mb-6">
                The fastest way to reach me is via email. Click below to start a conversation!
              </p>
              <Button variant="glow" size="lg" className="w-full" asChild>
                <a href="mailto:kiranlravi8@gmail.com">
                  <Send size={18} />
                  Send Email
                </a>
              </Button>

              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-sm text-muted-foreground text-center">
                  Or reach out on LinkedIn for professional inquiries
                </p>
                <Button variant="heroOutline" size="lg" className="w-full mt-4" asChild>
                  <a href="https://www.linkedin.com/in/lagisetty-ravikiran/" target="_blank" rel="noopener noreferrer">
                    <Linkedin size={18} />
                    Connect on LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
