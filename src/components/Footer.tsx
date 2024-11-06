import { Home, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center">
              <Home className="h-8 w-8 text-blue-500" />
              <span className="ml-2 text-xl font-bold text-white">Brisbane Buyers Co.</span>
            </div>
            <p className="mt-4 text-gray-400">
              Your trusted partner in navigating Brisbane's property market. We help you find and secure your dream property with confidence.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">Quick Links</h3>
            <ul className="mt-4 space-y-2">
              <li><a href="#services" className="hover:text-blue-500 transition">Services</a></li>
              <li><a href="#about" className="hover:text-blue-500 transition">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-blue-500 transition">Testimonials</a></li>
              <li><a href="#contact" className="hover:text-blue-500 transition">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold text-white">Connect</h3>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="hover:text-blue-500 transition">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="#" className="hover:text-blue-500 transition">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© {new Date().getFullYear()} Brisbane Buyers Co. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}