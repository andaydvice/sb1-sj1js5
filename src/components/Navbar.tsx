import { Menu, X, Home, Phone } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Home className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Brisbane Buyers Co.</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#about" className="text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition">Testimonials</a>
            <a href="#contact" className="flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              <Phone className="h-4 w-4 mr-2" />
              Contact Us
            </a>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-700">
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
            <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Services</a>
            <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">About</a>
            <a href="#testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition">Testimonials</a>
            <a href="#contact" className="block px-3 py-2 text-blue-600 font-medium">Contact Us</a>
          </div>
        </div>
      )}
    </nav>
  );
}