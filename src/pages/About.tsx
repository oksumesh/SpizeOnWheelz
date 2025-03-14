import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function About() {
  return (
    <div className="pt-16">
      <div className="relative h-[400px] bg-cover bg-center" style={{
        backgroundImage: 'url(https://images.unsplash.com/photo-1565123409695-7b5ef63a2efb?auto=format&fit=crop&q=80&w=2070)'
      }}>
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white">Our Story</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Contact Info Row */}
        <div className="flex flex-col md:flex-row justify-between gap-8 mb-12">
          

          <div className="flex items-center space-x-4">
            <Phone className="h-6 w-6 text-indigo-600" />
            <div>
              <h3 className="font-bold">Phone</h3>
              <div className="text-gray-600 space-y-1">
                <p>
                  <a href="tel:0481222229" className="hover:text-indigo-600 hover:underline transition-colors">
                    Riverstone: 0481 222 229
                  </a>
                </p>
                <p>
                  <a href="tel:0466443377" className="hover:text-indigo-600 hover:underline transition-colors">
                    Schofields: 0466 443 377
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Clock className="h-6 w-6 text-indigo-600" />
            <div>
              <h3 className="font-bold">Hours</h3>
              <p className="text-gray-600">
                Monday: 05:00 PM - 10:00 PM<br />
                Tuesday-Sunday: 12:00 PM - 10:00 PM
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Mail className="h-6 w-6 text-indigo-600" />
            <div>
              <h3 className="font-bold">Email</h3>
              <p className="text-gray-600">
                <a href="mailto:Spiceonwheelz@gmail.com" className="hover:text-indigo-600 hover:underline transition-colors">
                  spiceonwheelz@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Locations Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {/* Location 1 */}
          <div>
            <div className="flex items-start space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-bold">Location 1 - Riverstone</h3>
                <p className="text-gray-600">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=45+Garfield+Rd+E,+Riverstone+NSW+2765" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 hover:underline transition-colors"
                  >
                    45 Garfield Rd E, Riverstone NSW 2765
                  </a>
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.5377974862893!2d150.8581563!3d-33.679769!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129c7c89714fdb%3A0x8e66c9f1d8498910!2s45%20Garfield%20Rd%20E%2C%20Riverstone%20NSW%202765%2C%20Australia!5e0!3m2!1sen!2sus!4v1647894687158!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Location 2 */}
          <div>
            <div className="flex items-start space-x-4 mb-4">
              <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
              <div>
                <h3 className="font-bold">Location 2 - Schofields</h3>
                <p className="text-gray-600">
                  <a 
                    href="https://www.google.com/maps/search/?api=1&query=103+Railway+Terrace,+Schofields+NSW+2762" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-indigo-600 hover:underline transition-colors"
                  >
                    103 Railway Terrace, Schofields NSW 2762
                  </a>
                </p>
              </div>
            </div>
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3315.0435878681387!2d150.87238!3d-33.690375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b129c05c7f8be8d%3A0x7f5e4b9c8eb7d9f0!2s103%20Railway%20Terrace%2C%20Schofields%20NSW%202762%2C%20Australia!5e0!3m2!1sen!2sus!4v1647894687158!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        {/* <div className="flex justify-center space-x-6">
          <a 
            href="https://www.instagram.com/spiceonwheelz/" 
            className="text-[#E4405F] hover:opacity-80 transition-opacity"
          >
            <Instagram className="h-8 w-8" />
          </a>
          <a 
            href="https://www.facebook.com/spiceonwheelz" 
            className="text-[#1877F2] hover:opacity-80 transition-opacity"
          >
            <Facebook className="h-8 w-8" />
          </a>
          <a 
            href="https://x.com/spiceonwheelz" 
            className="text-black hover:opacity-80 transition-opacity"
          >
            <Twitter className="h-8 w-8" />
          </a>
        </div> */}
      </div>
    </div>
  );
}