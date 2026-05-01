import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import logoImage from "../assets/logo.png";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [aboutMenuOpen, setAboutMenuOpen] = useState(false);
  const [volunteerMenuOpen, setVolunteerMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 sticky top-0 z-50 shadow-lg">
      <div className="w-full ">
        <div className="flex justify-between items-center py-6">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={logoImage}
              alt="Sanyu for the Needy"
              className="navbar-logo w-auto"
            />
            <span className="navbar-text d-flex">
              <span className="text-red-600 sanyukako">
                Sanyukako
              </span>
              <span className="text-white other-text"> Foundation
                Uganda
              </span>

            </span>

          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center desktop-menu-offset">
            <Link
              to="/"
              className="text-white hover:text-red-400 transition-colors"
            >
              Home
            </Link>
            <div
              className="relative"
              onMouseEnter={() => setAboutMenuOpen(true)}
              onMouseLeave={() => setAboutMenuOpen(false)}
            >
              <Link
                to="/about"
                className="text-white hover:text-red-400 transition-colors flex items-center gap-1"
              >
                About Us
                <ChevronDown className="w-4 h-4" />
              </Link>
              {aboutMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-2 border border-gray-700">
                  <Link
                    to="/mission"
                    className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    Mission
                  </Link>
                  <Link
                    to="/vision"
                    className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    Vision
                  </Link>
                  <Link
                    to="/team"
                    className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    Our Team
                  </Link>
                  <Link
                    to="/impact"
                    className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    Our Impact
                  </Link>
                </div>
              )}
            </div>
            <div
              className="relative"
              onMouseEnter={() => setVolunteerMenuOpen(true)}
              onMouseLeave={() => setVolunteerMenuOpen(false)}
            >
              <Link
                to="/volunteering"
                className="text-white hover:text-red-400 transition-colors flex items-center gap-1"
              >
                Volunteer
                <ChevronDown className="w-4 h-4" />
              </Link>
              {volunteerMenuOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 bg-gray-900 rounded-md shadow-lg py-2 border border-gray-700">
                  <Link
                    to="/volunteering"
                    className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    Volunteer Info
                  </Link>
                  <Link
                    to="/partners"
                    className="block px-4 py-2 text-white hover:bg-gray-800 transition-colors"
                  >
                    Partners
                  </Link>
                </div>
              )}
            </div>
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
          <div className="md:hidden pb-6 flex flex-col gap-4 bg-gray-900 p-8">
            <Link
              to="/"
              className="text-white hover:text-red-400 transition-colors text-left"
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <span className="text-gray-400 text-sm">About Us</span>
            <div className="pl-4 flex flex-col gap-2">
              <Link
                to="/about"
                className="text-white hover:text-red-400 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                About Us
              </Link>
              <Link
                to="/mission"
                className="text-white hover:text-red-400 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Mission
              </Link>
              <Link
                to="/vision"
                className="text-white hover:text-red-400 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Vision
              </Link>
              <Link
                to="/team"
                className="text-white hover:text-red-400 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Team
              </Link>
              <Link
                to="/impact"
                className="text-white hover:text-red-400 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Our Impact
              </Link>
            </div>
            <span className="text-gray-400 text-sm">Volunteer</span>
            <div className="pl-4 flex flex-col gap-2">
              <Link
                to="/volunteering"
                className="text-white hover:text-red-400 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Volunteer Info
              </Link>
              <Link
                to="/partners"
                className="text-white hover:text-red-400 transition-colors text-left"
                onClick={() => setMobileMenuOpen(false)}
              >
                Partners
              </Link>
            </div>
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