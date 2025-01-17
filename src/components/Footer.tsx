import React from 'react';
import { Instagram, Facebook, Twitter } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <footer className="bg-gradient-to-t from-black/50 to-transparent py-4 absolute bottom-0 left-0 right-0 backdrop-blur-sm">
      <style jsx>{`
        @keyframes wave {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .wave-text {
          background: linear-gradient(90deg, #4F46E5, #818CF8, #4F46E5);
          background-size: 200% auto;
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: wave 3s linear infinite;
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="flex justify-between sm:hidden">
          <div className="flex flex-col">
            <div className={isAboutPage ? "text-gray-700" : "text-white/90"}>
              &copy; 2025
            </div>
            <div className={isAboutPage ? "text-gray-700" : "text-white/90"}>
              Spice On Wheelz
            </div>
          </div>

          <div className="flex flex-col items-center">
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/spiceonwheelz/" className="text-[#E4405F] hover:opacity-80">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://www.facebook.com/spiceonwheelz" className="text-[#1877F2] hover:opacity-80">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://x.com/spiceonwheelz" className={isAboutPage ? "text-gray-700 hover:opacity-80" : "text-white hover:opacity-80"}>
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div className="flex flex-col items-end">
            <div className={isAboutPage ? "text-gray-700" : "text-white/90"}>
              Built by
            </div>
            <a href="https://quantumsoftwares.co/" className="wave-text font-medium">
              Quantum Softwares
            </a>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex justify-between items-center">
          <div className={isAboutPage ? "text-gray-700" : "text-white/90"}>
            &copy; 2025 Spice On Wheelz
          </div>
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/spiceonwheelz/" className="text-[#E4405F] hover:opacity-80">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/spiceonwheelz" className="text-[#1877F2] hover:opacity-80">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://x.com/spiceonwheelz" className={isAboutPage ? "text-gray-700 hover:opacity-80" : "text-white hover:opacity-80"}>
              <Twitter className="h-5 w-5" />
            </a>
          </div>
          <div>
            <span className={isAboutPage ? "text-gray-700" : "text-white/90"}>Built by</span>
            <span> </span>
            <a href="https://quantumsoftwares.co/" className="wave-text font-medium">
              Quantum Softwares
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 