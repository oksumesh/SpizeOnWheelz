import React, { useState } from 'react';
import { X, MessageCircle } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { useLocation } from 'react-router-dom';

interface CartPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

type CheckoutStep = 'cart' | 'details' | 'confirmation';

interface CustomerDetails {
  name: string;
  phone: string;
  pickupTime: string;
  pickupDate: string;
}

const formatTime = (time: string) => {
  const [hours, minutes] = time.split(':');
  const ampm = Number(hours) >= 12 ? 'PM' : 'AM';
  const formattedHours = Number(hours) % 12 || 12;
  return `${formattedHours}:${minutes} ${ampm}`;
};

const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-AU', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });
};

const getTodayDate = () => {
  const today = new Date();
  return today.toISOString().split('T')[0];
};

const PHONE_NUMBERS = {
  riverstone: '481222229',
  schofields: '466443377'
};

export default function CartPopup({ isOpen, onClose }: CartPopupProps) {
  const { items, incrementQuantity, decrementQuantity } = useCart();
  const [step, setStep] = useState<CheckoutStep>('cart');
  const [showOrderOptions, setShowOrderOptions] = useState(false);
  const location = useLocation();

  const getCurrentLocation = () => {
    if (location.pathname.includes('/menu/riverstone')) return 'riverstone';
    if (location.pathname.includes('/menu/schofields')) return 'schofields';
    return 'riverstone';
  };

  const [customerDetails, setCustomerDetails] = useState<CustomerDetails>({
    name: '',
    phone: '',
    pickupTime: '',
    pickupDate: getTodayDate()
  });

  if (!isOpen) return null;

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleNext = () => {
    setStep('details');
  };

  const handleWhatsAppOrder = () => {
    const currentLocation = getCurrentLocation();
    const phoneNumber = PHONE_NUMBERS[currentLocation];
    
    const orderDetails = 
`🛍️ *New Order*
------------------
👤 *Customer Details*
Name: ${customerDetails.name}
Phone: +61 ${customerDetails.phone}
Pickup Date: ${formatDate(customerDetails.pickupDate)}
Pickup Time: ${formatTime(customerDetails.pickupTime)}

🍽️ *Order Items*
${items.map(item => (
  `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
)).join('\n')}

💰 *Total Amount: $${total.toFixed(2)}*
------------------`;

    const whatsappUrl = `https://api.whatsapp.com/send?phone=61${phoneNumber}&text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappUrl, '_blank');
    resetForm();
  };

  const handleTextOrder = () => {
    const currentLocation = getCurrentLocation();
    const phoneNumber = `0${PHONE_NUMBERS[currentLocation]}`;
    
    const orderDetails = 
`New Order:
Customer: ${customerDetails.name}
Phone: +61 ${customerDetails.phone}
Pickup: ${formatDate(customerDetails.pickupDate)} at ${formatTime(customerDetails.pickupTime)}
Items:
${items.map(item => `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`).join('\n')}
Total: $${total.toFixed(2)}`;

    const smsUrl = `sms:${phoneNumber}?body=${encodeURIComponent(orderDetails)}`;
    window.location.href = smsUrl;
    resetForm();
  };

  const resetForm = () => {
    setStep('cart');
    setShowOrderOptions(false);
    setCustomerDetails({
      name: '',
      phone: '',
      pickupTime: '',
      pickupDate: getTodayDate()
    });
    onClose();
  };

  const renderCartItems = () => (
    <>
      <div className="overflow-auto h-[calc(100vh-180px)] p-4">
        {items.map((item) => (
          <div key={item.id} className="mb-4 pb-4 border-b last:border-b-0">
            <div className="flex justify-between mb-2">
              <span className="font-medium">{item.name}</span>
              <span className="font-medium">${(item.price * item.quantity).toFixed(2)}</span>
            </div>
            <div className="flex items-center">
              <button
                onClick={() => decrementQuantity(item.id)}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
              >
                -
              </button>
              <span className="w-12 text-center">{item.quantity}</span>
              <button
                onClick={() => incrementQuantity(item.id)}
                className="w-8 h-8 flex items-center justify-center bg-gray-100 rounded-full"
              >
                +
              </button>
              <span className="ml-4 text-gray-500">${item.price.toFixed(2)}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="font-medium">Total</span>
          <span className="font-medium">${total.toFixed(2)}</span>
        </div>
        <button 
          onClick={handleNext}
          className="w-full bg-indigo-600 text-white py-3 rounded-md font-medium hover:bg-indigo-700 transition-colors"
        >
          Next
        </button>
      </div>
    </>
  );

  const renderCustomerDetails = () => (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => setStep('cart')}
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Cart
        </button>
      </div>

      <div className="space-y-4 mb-6">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            id="name"
            value={customerDetails.name}
            onChange={(e) => setCustomerDetails(prev => ({ ...prev, name: e.target.value }))}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your name"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <div className="flex">
            <span className="inline-flex items-center px-3 text-gray-500 bg-gray-50 border border-r-0 border-gray-300 rounded-l-md">
              +61
            </span>
            <input
              type="tel"
              id="phone"
              value={customerDetails.phone}
              onChange={(e) => {
                // Remove any non-digit characters
                const cleaned = e.target.value.replace(/\D/g, '');
                // Limit to 10 digits
                const truncated = cleaned.slice(0, 10);
                setCustomerDetails(prev => ({ ...prev, phone: truncated }));
              }}
              onKeyPress={(e) => {
                // Allow only numbers
                if (!/[0-9]/.test(e.key)) {
                  e.preventDefault();
                }
                // Prevent input if already at 10 digits and not backspace/delete
                if (customerDetails.phone.length >= 10 && e.key !== 'Backspace' && e.key !== 'Delete') {
                  e.preventDefault();
                }
              }}
              className="flex-1 p-2 border border-gray-300 rounded-r-md focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="XXX XXX XXX"
              maxLength={10}
              pattern="[0-9]{10}"
              title="Please enter exactly 10 digits"
              required
            />
          </div>
        </div>
        <div>
          <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Date
          </label>
          <input
            type="date"
            id="pickupDate"
            value={customerDetails.pickupDate}
            min={getTodayDate()}
            onChange={(e) => setCustomerDetails(prev => ({ ...prev, pickupDate: e.target.value }))}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
        <div>
          <label htmlFor="pickupTime" className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Time
          </label>
          <input
            type="time"
            id="pickupTime"
            value={customerDetails.pickupTime}
            onChange={(e) => setCustomerDetails(prev => ({ ...prev, pickupTime: e.target.value }))}
            className="w-full p-2 border border-gray-300 rounded-md"
          />
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t">
        <div className="flex justify-between items-center mb-4">
          <span className="font-medium">Total</span>
          <span className="font-medium">${total.toFixed(2)}</span>
        </div>
        <button 
          onClick={() => setShowOrderOptions(true)}
          className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
          disabled={!customerDetails.name || !customerDetails.phone || !customerDetails.pickupTime || !customerDetails.pickupDate}
        >
          Order Now
        </button>
      </div>
    </div>
  );

  const renderOrderOptions = () => (
    <div className="p-4">
      <div className="flex items-center mb-4">
        <button 
          onClick={() => setShowOrderOptions(false)}
          className="text-gray-600 hover:text-gray-800 flex items-center"
        >
          <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back
        </button>
      </div>

      <h3 className="text-lg font-medium mb-6">Choose Order Method</h3>
      <div className="space-y-4">
        <button
          onClick={handleWhatsAppOrder}
          className="w-full bg-green-500 text-white py-4 rounded-md font-medium hover:bg-green-600 transition-colors flex items-center justify-center"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5 mr-2" fill="currentColor">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Order via WhatsApp
        </button>
        <button
          onClick={handleTextOrder}
          className="w-full bg-blue-500 text-white py-4 rounded-md font-medium hover:bg-blue-600 transition-colors flex items-center justify-center"
        >
          <MessageCircle className="w-5 h-5 mr-2" />
          Order via Text
        </button>
      </div>
    </div>
  );

  return (
    <div className="fixed top-0 right-0 w-[400px] h-screen bg-white shadow-lg z-[1000]">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-medium">Your Cart</h2>
        <button onClick={onClose}>
          <X className="w-5 h-5" />
        </button>
      </div>

      {showOrderOptions 
        ? renderOrderOptions()
        : step === 'cart' 
          ? renderCartItems() 
          : renderCustomerDetails()}
    </div>
  );
} 