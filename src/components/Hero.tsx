import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative h-screen">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80"
          className="w-full h-full object-cover"
          alt="Brisbane cityscape"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex flex-col justify-center h-full pt-20">
          <h1 className="text-4xl md:text-6xl font-bold text-white max-w-3xl">
            Your Trusted Partner in Brisbane Property Investment
          </h1>
          <p className="mt-6 text-xl text-gray-200 max-w-2xl">
            We navigate Brisbane's competitive real estate market to find your perfect property while saving you time, money, and stress.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition md:text-lg"
            >
              Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a
              href="#services"
              className="inline-flex items-center px-8 py-3 border-2 border-white text-base font-medium rounded-lg text-white hover:bg-white hover:text-gray-900 transition md:text-lg"
            >
              Our Services
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}