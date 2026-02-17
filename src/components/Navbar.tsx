import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logoImage from "../assets/logo.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isHomePage = location.pathname === "/";

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav
      className={
        isHomePage
          ? "absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/70 to-transparent"
          : "bg-gray-900 sticky top-0 z-50 shadow-lg"
      }
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Sanyu for the Needy"
              className="h-32 w-auto"
            />
            <span>
              <span className="text-red-600 text-4xl">
                Sanyukako
              </span>
              <span className="text-white text-4xl">
                <br />Foundation
                Uganda
              </span>
            </span>
            
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("mission")}
                  className="text-white hover:text-red-400 transition-colors"
                >
                  Mission
                </button>
                <button
                  onClick={() => scrollToSection("vision")}
                  className="text-white hover:text-red-400 transition-colors"
                >
                  Vision
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white hover:text-red-400 transition-colors"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("impact")}
                  className="text-white hover:text-red-400 transition-colors"
                >
                  Our Impact
                </button>
              </>
            ) : (
              <Link
                to="/"
                className="text-white hover:text-red-400 transition-colors"
              >
                Home
              </Link>
            )}
            <Link
              to="/team"
              className="text-white hover:text-red-400 transition-colors"
            >
              Our Team
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-red-400 transition-colors"
            >
              Blog
            </Link>
            <Link
              to="/events"
              className="text-white hover:text-red-400 transition-colors"
            >
              Events
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-red-400 transition-colors"
            >
              Gallery
            </Link>
            <Link
              to="/volunteering"
              className="text-white hover:text-red-400 transition-colors"
            >
              Volunteer
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-red-400 transition-colors"
            >
              Contact
            </Link>
            <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors">
              Donate
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-white"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-6 flex flex-col gap-4 bg-black/50 p-8">
            {isHomePage ? (
              <>
                <button
                  onClick={() => scrollToSection("mission")}
                  className="text-white hover:text-red-400 transition-colors text-left"
                >
                  Mission
                </button>
                <button
                  onClick={() => scrollToSection("vision")}
                  className="text-white hover:text-red-400 transition-colors text-left"
                >
                  Vision
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-white hover:text-red-400 transition-colors text-left"
                >
                  About Us
                </button>
                <button
                  onClick={() => scrollToSection("impact")}
                  className="text-white hover:text-red-400 transition-colors text-left"
                >
                  Our Impact
                </button>
              </>
            ) : (
              <Link
                to="/"
                className="text-white hover:text-red-400 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Home
              </Link>
            )}
            <Link
              to="/team"
              className="text-white hover:text-red-400 transition-colors text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Our Team
            </Link>
            <Link
              to="/blog"
              className="text-white hover:text-red-400 transition-colors text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </Link>
            <Link
              to="/events"
              className="text-white hover:text-red-400 transition-colors text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              to="/gallery"
              className="text-white hover:text-red-400 transition-colors text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Gallery
            </Link>
            <Link
              to="/volunteering"
              className="text-white hover:text-red-400 transition-colors text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Volunteer
            </Link>
            <Link
              to="/contact"
              className="text-white hover:text-red-400 transition-colors text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <button className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md transition-colors text-left">
              Donate
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}