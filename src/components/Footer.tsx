import React from 'react';
import { Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <footer className="bg-[#1a1a1a] border-t border-gray-800 py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="sm:hidden">
          <div className="flex flex-col space-y-2">
            {/* Social Icons */}
            <div className="flex justify-center space-x-4">
              <a href="https://www.instagram.com/spiceonwheelz/" className="text-[#E4405F] hover:opacity-80">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://www.facebook.com/spiceonwheelz" className="text-[#1877F2] hover:opacity-80">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="https://x.com/spiceonwheelz" className="text-white hover:opacity-80">
                <Twitter className="h-4 w-4" />
              </a>
              <a href="https://chat.whatsapp.com/E2s91PUtjwFKPF1I73WsK2" className="text-[#25D366] hover:opacity-80">
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
            
            {/* Built By Text */}
            <div className="flex justify-center">
              <a 
                href="https://quantumsoftwares.co/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-xs text-gray-400 hover:text-gray-300"
              >
                Built by Quantum Softwares
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex justify-between items-center">
          {/* Social Icons */}
          <div className="flex space-x-4">
            <a href="https://www.instagram.com/spiceonwheelz/" className="text-[#E4405F] hover:opacity-80">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/spiceonwheelz" className="text-[#1877F2] hover:opacity-80">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://x.com/spiceonwheelz" className="text-white hover:opacity-80">
              <Twitter className="h-5 w-5" />
            </a>
            <a href="https://chat.whatsapp.com/E2s91PUtjwFKPF1I73WsK2" className="text-[#25D366] hover:opacity-80">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
          
          {/* Built By Text */}
          <a 
            href="https://quantumsoftwares.co/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="text-sm text-gray-400 hover:text-gray-300"
          >
            Built by Quantum Softwares
          </a>
        </div>
      </div>
    </footer>
  );
} 