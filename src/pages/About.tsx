import React from 'react';
import { MapPin, Clock, Phone, Mail, Instagram, Facebook, Twitter } from 'lucide-react';

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">About Spice On Wheelz</h2>
            <div className="prose prose-lg">
              <p>
                Founded in 2020, Spice On Wheelz brings the diverse flavors of India
                right to your neighborhood. Our food truck combines traditional
                recipes with modern culinary techniques to create an unforgettable
                dining experience.
              </p>
              <p>
                What started as a passion project has grown into a beloved mobile
                restaurant, serving both North and South Indian cuisines with equal
                expertise and love.
              </p>
            </div>

            <div className="mt-12 space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="h-6 w-6 text-indigo-600 mt-1" />
                <div>
                  <h3 className="font-medium">Locations</h3>
                  <div className="text-gray-600 space-y-2">
                    <p>45 Garfield Rd E, Riverstone NSW 2765</p>
                    <p>103 Railway Terrace, Schofields NSW 2762</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Clock className="h-6 w-6 text-indigo-600" />
                <div>
                  <h3 className="font-medium">Hours</h3>
                  <p className="text-gray-600">
                    Monday: Closed<br />
                    Tuesday-Sunday: 12:00 PM - 10:00 PM
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Phone className="h-6 w-6 text-indigo-600" />
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <div className="text-gray-600 space-y-1">
                    <p>Riverstone: 0481 222 229</p>
                    <p>Schofields: 0466 443 377</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <Mail className="h-6 w-6 text-indigo-600" />
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-gray-600">Spiceonwheelz@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex space-x-4">
              <a href="https://www.instagram.com/spiceonwheelz/" className="text-gray-400 hover:text-indigo-600">
                <Instagram className="h-6 w-6" />
              </a>
              <a href="https://www.facebook.com/spiceonwheelz" className="text-gray-400 hover:text-indigo-600">
                <Facebook className="h-6 w-6" />
              </a>
              <a href="https://x.com/spiceonwheelz" className="text-gray-400 hover:text-indigo-600">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
          </div>

          <div className="space-y-8">
            <img
              src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&q=80&w=2070"
              alt="Our Food Truck"
              className="rounded-lg shadow-lg w-full h-64 object-cover"
            />
            <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.9916256937595!2d2.2922926156744947!3d48.858370079287466!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sEiffel%20Tower!5e0!3m2!1sen!2sus!4v1647894687158!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}