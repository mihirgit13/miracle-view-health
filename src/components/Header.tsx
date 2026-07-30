import { useState, useRef, useEffect } from 'react';
import { Menu, X, ChevronDown, Calendar, ArrowRight, HeartPulse } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [resourcesDropdownOpen, setResourcesDropdownOpen] = useState(false);

  const resourcesRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (resourcesRef.current && !resourcesRef.current.contains(event.target as Node)) {
        setResourcesDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const closeMenus = () => {
    setResourcesDropdownOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <header id="app-header" className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100/80 shadow-sm transition-all duration-300">
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex justify-between items-center h-20">
          
          {/* Logo & Brand Name */}
          <Link 
            id="brand-logo-container"
            to="/"
            className="flex items-center space-x-4 cursor-pointer group"
            onClick={closeMenus}
          >
            <div className="bg-[#1e463c] w-[68px] h-[65px] rounded-xl flex items-center justify-center shadow-md transition-all duration-300 group-hover:bg-[#14322a] flex-shrink-0 overflow-hidden">
              <img 
                src="/logo.png" 
                alt="Miracle View Health Logo" 
                className="w-full h-full object-cover scale-[1.1] translate-y-[12px]" 
              />
            </div>
            <div className="flex flex-col justify-center leading-none">
              <span className="text-xl md:text-2xl font-bold font-display tracking-tight text-[#16382f] group-hover:text-[#1e463c] transition-colors duration-300">
                Miracle View
              </span>
              <span className="text-[10px] md:text-xs font-mono tracking-[0.22em] text-[#c39b3d] uppercase font-bold mt-1.5">
                Health
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav id="desktop-nav" className="hidden lg:flex lg:absolute lg:left-1/2 lg:-translate-x-1/2 items-center space-x-6 lg:space-x-8 xl:space-x-10">
            <NavLink
              id="nav-link-home"
              to="/"
              onClick={closeMenus}
              className={({ isActive }) => `relative py-1.5 text-[15px] lg:text-base font-semibold tracking-wide transition-colors duration-300 hover:text-[#1e463c] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1e463c] after:transition-transform after:duration-300 after:origin-left ${
                isActive ? 'text-[#1e463c] after:scale-x-100' : 'text-gray-600 hover:after:scale-x-100 after:scale-x-0'
              }`}
            >
              Home
            </NavLink>

            <NavLink
              id="nav-link-services"
              to="/services"
              onClick={closeMenus}
              className={({ isActive }) => `relative py-1.5 text-[15px] lg:text-base font-semibold tracking-wide transition-colors duration-300 hover:text-[#1e463c] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1e463c] after:transition-transform after:duration-300 after:origin-left ${
                isActive ? 'text-[#1e463c] after:scale-x-100' : 'text-gray-600 hover:after:scale-x-100 after:scale-x-0'
              }`}
            >
              Services
            </NavLink>

            <NavLink
              id="nav-link-about"
              to="/about"
              onClick={closeMenus}
              className={({ isActive }) => `relative py-1.5 text-[15px] lg:text-base font-semibold tracking-wide transition-colors duration-300 hover:text-[#1e463c] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1e463c] after:transition-transform after:duration-300 after:origin-left ${
                isActive ? 'text-[#1e463c] after:scale-x-100' : 'text-gray-600 hover:after:scale-x-100 after:scale-x-0'
              }`}
            >
              About Us
            </NavLink>

            <NavLink
              id="nav-link-resources"
              to="/resources"
              onClick={closeMenus}
              className={({ isActive }) => `relative py-1.5 text-[15px] lg:text-base font-semibold tracking-wide transition-colors duration-300 hover:text-[#1e463c] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1e463c] after:transition-transform after:duration-300 after:origin-left ${
                isActive ? 'text-[#1e463c] after:scale-x-100' : 'text-gray-600 hover:after:scale-x-100 after:scale-x-0'
              }`}
            >
              Resources
            </NavLink>

            <NavLink
              id="nav-link-careers"
              to="/careers"
              onClick={closeMenus}
              className={({ isActive }) => `relative py-1.5 text-[15px] lg:text-base font-semibold tracking-wide transition-colors duration-300 hover:text-[#1e463c] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1e463c] after:transition-transform after:duration-300 after:origin-left ${
                isActive ? 'text-[#1e463c] after:scale-x-100' : 'text-gray-600 hover:after:scale-x-100 after:scale-x-0'
              }`}
            >
              Careers
            </NavLink>

            <NavLink
              id="nav-link-contact"
              to="/contact"
              onClick={closeMenus}
              className={({ isActive }) => `relative py-1.5 text-[15px] lg:text-base font-semibold tracking-wide transition-colors duration-300 hover:text-[#1e463c] after:absolute after:bottom-0 after:left-0 after:w-full after:h-0.5 after:bg-[#1e463c] after:transition-transform after:duration-300 after:origin-left ${
                isActive ? 'text-[#1e463c] after:scale-x-100' : 'text-gray-600 hover:after:scale-x-100 after:scale-x-0'
              }`}
            >
              Contact
            </NavLink>
          </nav>

          {/* Action Button - Book Consultation */}
          <div className="hidden lg:flex items-center">
            <Link
              id="nav-book-now-button"
              to="/book-appointment"
              onClick={closeMenus}
              className="group flex items-center space-x-2.5 bg-gradient-to-r from-[#c39b3d] to-[#d8b556] text-white hover:from-[#b08b33] hover:to-[#c39b3d] active:scale-95 text-[15px] lg:text-base font-bold tracking-wide py-3.5 px-6 lg:px-7 rounded-full shadow-md shadow-[#c39b3d]/10 hover:shadow-lg hover:shadow-[#c39b3d]/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 border border-[#e5c575]/15"
            >
              <Calendar className="w-5 h-5 text-white/90" />
              <span>Book Appointment</span>
              <ArrowRight className="w-4 h-4 text-white opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              id="mobile-menu-trigger"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-gray-600 hover:bg-gray-100 hover:text-[#1e463c] focus:outline-none"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div id="mobile-nav-panel" className="lg:hidden border-t border-gray-100 bg-white px-4 pt-2 pb-6 space-y-2 shadow-inner">
          <NavLink
            to="/"
            onClick={closeMenus}
            className={({ isActive }) => `block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${
              isActive ? 'bg-[#ecf3f0] text-[#1e463c] font-bold' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Home
          </NavLink>
          
          <NavLink
            to="/services"
            onClick={closeMenus}
            className={({ isActive }) => `block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${
              isActive ? 'bg-[#ecf3f0] text-[#1e463c] font-bold' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Services
          </NavLink>

          <NavLink
            to="/about"
            onClick={closeMenus}
            className={({ isActive }) => `block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${
              isActive ? 'bg-[#ecf3f0] text-[#1e463c] font-bold' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            About Us
          </NavLink>

          <NavLink
            to="/resources"
            onClick={closeMenus}
            className={({ isActive }) => `block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${
              isActive ? 'bg-[#ecf3f0] text-[#1e463c] font-bold' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Resources
          </NavLink>

          <NavLink
            to="/careers"
            onClick={closeMenus}
            className={({ isActive }) => `block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${
              isActive ? 'bg-[#ecf3f0] text-[#1e463c] font-bold' : 'text-gray-700 hover:bg-gray-50'
            }`}
          >
            Careers
          </NavLink>

            <NavLink
            to="/contact"
            onClick={closeMenus}
            className={({ isActive }) => `block w-full text-left px-4 py-3 rounded-xl text-base font-medium ${
              isActive ? 'bg-[#ecf3f0] text-[#1e463c] font-bold' : 'text-gray-700 hover:bg-gray-50'
            }`}
            >
            Contact
            </NavLink>

            <div className="pt-4 px-4">
            <Link
              id="mobile-book-now"
              to="/book-appointment"
              onClick={closeMenus}
              className="w-full flex items-center justify-center space-x-2 bg-[#c39b3d] text-white py-3 rounded-xl font-bold tracking-wide shadow-md"
            >
              <Calendar className="w-5 h-5 text-white" />
              <span>Book Appointment</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
