
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="font-heading font-bold text-xl gradient-text">
            RK
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Ravikiran Lagisetty. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
