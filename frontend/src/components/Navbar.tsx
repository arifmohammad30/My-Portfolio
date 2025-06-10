import { useState, useEffect } from "react";
import { scrollToSection } from "@/lib/smoothScroll";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (id: string) => {
    scrollToSection(id);
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ["home", "about", "education", "skills", "projects", "contact"];
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-gray-900/90 backdrop-blur-md shadow-lg" : "bg-transparent"
      } border-b ${scrolled ? "border-gray-800" : "border-transparent"}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* ✅ Fixed Logo Text (Larger and no button box) */}
          <div>
            <a
              href="#home"
              className="text-2xl lg:text-3xl font-extrabold text-primary hover:text-primary/80 transition-colors tracking-wide"
              onClick={(e) => {
                e.preventDefault();
                handleNavClick("home");
              }}
            >
              Mohammad Arif
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center">
            <ul className="flex space-x-10">
              {["home", "about", "education", "skills", "projects", "contact"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item);
                    }}
                    className={`text-lg lg:text-xl font-medium capitalize transition-all relative py-1 ${
                      activeSection === item
                        ? "text-primary"
                        : "text-gray-300 hover:text-primary"
                    }`}
                  >
                    {item}
                    {activeSection === item && (
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-primary rounded-full"></span>
                    )}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMenu}
              aria-label="Toggle menu"
              className="text-gray-300 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800 animate-fade-in">
          <div className="container mx-auto px-4 py-3 space-y-1">
            {["home", "about", "education", "skills", "projects", "contact"].map((item) => (
              <a
                key={item}
                href={`#${item}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(item);
                }}
                className={`block py-3 px-4 rounded-md text-base font-medium capitalize transition-colors ${
                  activeSection === item
                    ? "bg-gray-800 text-primary"
                    : "text-gray-300 hover:bg-gray-800/50 hover:text-primary"
                }`}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
