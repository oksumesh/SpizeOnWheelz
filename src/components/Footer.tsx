import React from 'react';
import { Instagram, Facebook, Twitter, MessageCircle } from 'lucide-react';
import { useLocation } from 'react-router-dom';

export default function Footer() {
  const location = useLocation();
  const isAboutPage = location.pathname === '/about';

  return (
    <footer className="bg-gradient-to-t from-black/50 to-transparent py-4 absolute bottom-0 left-0 right-0 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="flex justify-center sm:hidden">
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
              <a href="https://chat.whatsapp.com/E2s91PUtjwFKPF1I73WsK2" className="text-[#25D366] hover:opacity-80">
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden sm:flex justify-center items-center">
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
            <a href="https://chat.whatsapp.com/E2s91PUtjwFKPF1I73WsK2" className="text-[#25D366] hover:opacity-80">
              <MessageCircle className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
} 