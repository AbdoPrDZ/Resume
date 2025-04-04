
import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Github } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavLinkClick = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={cn(
      "fixed top-0 left-0 w-full z-50 transition-all duration-300",
      scrolled ? "bg-background/95 backdrop-blur-sm shadow-sm" : "bg-transparent"
    )}>
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between py-4">
        <a href="#" className="text-2xl font-bold text-primary">
          AbdoPrDZ
        </a>
        
        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-foreground"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href}
              className="text-foreground/80 hover:text-primary transition-colors"
              onClick={handleNavLinkClick}
            >
              {link.name}
            </a>
          ))}
          <a 
            href="https://github.com/AbdoPrDZ" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-1 text-foreground/80 hover:text-primary transition-colors"
          >
            <Github size={20} />
            <span>GitHub</span>
          </a>
        </nav>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-sm shadow-md py-4 animate-fade-in">
            <nav className="flex flex-col space-y-4 px-6">
              {navLinks.map((link) => (
                <a 
                  key={link.name}
                  href={link.href}
                  className="text-foreground/80 hover:text-primary transition-colors"
                  onClick={handleNavLinkClick}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="https://github.com/AbdoPrDZ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-1 text-foreground/80 hover:text-primary transition-colors"
              >
                <Github size={20} />
                <span>GitHub</span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
