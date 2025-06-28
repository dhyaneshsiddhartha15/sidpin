
import { Link } from "react-router-dom";
import { Facebook, Instagram, Linkedin, Mail, Twitter } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-gradient">SIDPIN</h3>
            <p className="text-sm text-muted-foreground">
              A marketing agency dedicated to helping businesses grow in the digital age.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-foreground/70 hover:text-primary" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-foreground/70 hover:text-primary" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Technology & Development
                </Link>
              </li>
              <li>
                <Link to="/marketing" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Media & Marketing
                </Link>
              </li>
              <li>
                <Link to="/content" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Content & PR
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Company
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Aim
                </a>
              </li>
              <li>
                <a href="#services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-sm text-muted-foreground">
                <Mail size={14} />
                <span>info@sidpin.com</span>
              </li>
            </ul>
            <div className="pt-2 flex items-center gap-4">
              <span className="text-xs text-muted-foreground">Theme:</span>
              <ThemeToggle />
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border">
          <p className="text-center text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} SIDPIN Marketing Agency. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
