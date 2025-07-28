import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Menu, X, Calendar, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/theme-toggle";
import { CTAButton } from "@/components/cta-button";
import { ServiceDropdown } from "@/components/service-dropdown";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services", hasDropdown: true },
  { name: "Our Work", path: "/our-work" },
  { name: "Why Choose Us", path: "/why-choose-us" },
  { name: "About Us", path: "/about-us" },
  { name: "Contact", path: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleBookAppointment = () => {
    navigate("/appointment");
  };

  const handleGetQuote = () => {
    navigate("/get-quote");
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="mx-auto px-4 sm:px-6 lg:px-8 py-4 backdrop-blur-md bg-background/70 border-b border-border">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-x-4 lg:gap-x-8">
            <Link to="/" className="flex items-center gap-2" onClick={closeMobileMenu}>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary font-poppins">
                SIDPIN DIGITAL
              </span>
            </Link>
            
            <div className="hidden lg:flex gap-6 items-center">
              {navLinks.map((link) => (
                <div key={link.path} className="relative">
                  {link.hasDropdown ? (
                    <div 
                      className="relative"
                      onMouseEnter={() => setDropdownOpen(true)}
                      onMouseLeave={() => setDropdownOpen(false)}
                    >
                      <Link
                        to={link.path}
                        className="text-sm font-medium transition-colors hover:text-primary text-foreground/70 font-poppins whitespace-nowrap flex items-center gap-1"
                      >
                        {link.name}
                        <ChevronDown className="h-3 w-3" />
                      </Link>
                      
                      {dropdownOpen && (
                        <div className="absolute top-full left-0 mt-2 z-50">
                          <ServiceDropdown />
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="text-sm font-medium transition-colors hover:text-primary text-foreground/70 font-poppins whitespace-nowrap"
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2 sm:gap-4">
            <ThemeToggle />
            
            <Button
              variant="outline"
              className="hidden sm:flex items-center gap-2 font-poppins text-xs sm:text-sm px-2 sm:px-4"
              onClick={handleBookAppointment}
            >
              <Calendar className="h-4 w-4" />
              <span className="hidden md:inline">Book Appointment</span>
              <span className="md:hidden">Book</span>
            </Button>

            <CTAButton
              variant="primary"
              className="hidden sm:flex text-xs sm:text-sm px-2 sm:px-4"
              onClick={handleGetQuote}
            >
              <span className="hidden md:inline text-white">Get a Quote</span>
              <span className="md:hidden text-white">Quote</span>
            </CTAButton>

            <button
              type="button"
              className="flex lg:hidden p-2"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 space-y-4 absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-20 max-h-[calc(100vh-80px)] overflow-y-auto">
            <div className="px-4 space-y-2">
              {navLinks.map((link) => (
                <div key={link.path}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        onClick={toggleMobileDropdown}
                        className="flex items-center justify-between w-full py-3 text-base font-medium text-foreground/80 hover:text-primary border-b border-border/50"
                      >
                        <span>{link.name}</span>
                        <ChevronDown 
                          className={`h-4 w-4 transition-transform ${
                            mobileDropdownOpen ? 'rotate-180' : ''
                          }`} 
                        />
                      </button>
                      
                      {mobileDropdownOpen && (
                        <div className="mt-2 pl-4 pb-2">
                          <ServiceDropdown 
                            isMobile={true}
                            onItemClick={closeMobileMenu}
                          />
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      to={link.path}
                      className="block py-3 text-base font-medium text-foreground/80 hover:text-primary border-b border-border/50 last:border-b-0"
                      onClick={closeMobileMenu}
                    >
                      {link.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            
            <div className="px-4 pt-4 flex flex-col gap-3 border-t border-border/50">
              <Button
                variant="outline"
                className="w-full flex items-center justify-center gap-2"
                onClick={() => {
                  handleBookAppointment();
                  closeMobileMenu();
                }}
              >
                <Calendar className="h-4 w-4" />
                Book Appointment
              </Button>
              
              <Button
                variant="default"
                className="w-full"
                onClick={() => {
                  handleGetQuote();
                  closeMobileMenu();
                }}
              >
                Get a Quote
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
