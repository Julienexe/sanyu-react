import { Mail, MapPin, Phone } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import logoImage from 'figma:asset/57b855ed8a5d3add1b5bed5792f6f0076a9c5393.png';

export function Footer() {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Donate CTA Banner */}
        <div className="bg-red-600 rounded-lg p-8 mb-12 text-center">
          <h3 className="mb-4 text-white">Support Our Mission</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            Your donation helps provide essential needs to single mothers and vulnerable children in Uganda. Every contribution makes a difference.
          </p>
          <button className="px-8 py-3 bg-white text-red-600 hover:bg-gray-100 rounded-md transition-colors">
            Donate Now
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src={logoImage} alt="Sanyu for the Needy" className="h-10 w-auto" />
              <span className="text-lg">Sanyu for the Needy</span>
            </div>
            <p className="text-gray-400 text-sm">
              Bringing happiness and hope to single mothers and vulnerable children in Uganda. Sanyu means happiness in Luganda.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {isHomePage ? (
                <>
                  <li>
                    <button onClick={() => scrollToSection('mission')} className="text-gray-400 hover:text-white transition-colors">
                      Mission
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('vision')} className="text-gray-400 hover:text-white transition-colors">
                      Vision
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('about')} className="text-gray-400 hover:text-white transition-colors">
                      About Us
                    </button>
                  </li>
                  <li>
                    <button onClick={() => scrollToSection('impact')} className="text-gray-400 hover:text-white transition-colors">
                      Our Impact
                    </button>
                  </li>
                </>
              ) : (
                <li>
                  <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
              )}
              <li>
                <Link to="/team" className="text-gray-400 hover:text-white transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-gray-400 hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/events" className="text-gray-400 hover:text-white transition-colors">
                  Events
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/volunteering" className="text-gray-400 hover:text-white transition-colors">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Springville Building, Next to St. Savio Junior Kikuusa Campus Namulanda</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 flex-shrink-0" />
                <span>info@sanyufoundation.org</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+13107437406</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 flex-shrink-0" />
                <span>+256785087314</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Sanyu for the Needy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}