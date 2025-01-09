import React, { useState } from 'react';
import { X } from 'lucide-react';
import { useCart } from '../context/CartContext';

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

export default function CartPopup({ isOpen, onClose }: CartPopupProps) {
  const { items, incrementQuantity, decrementQuantity } = useCart();
  const [step, setStep] = useState<CheckoutStep>('cart');
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

  const handleSubmit = () => {
    const orderDetails = 
`🛍️ *New Order*
------------------
👤 *Customer Details*
Name: ${customerDetails.name}
Phone: ${customerDetails.phone}
Pickup Date: ${formatDate(customerDetails.pickupDate)}
Pickup Time: ${formatTime(customerDetails.pickupTime)}

🍽️ *Order Items*
${items.map(item => (
  `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
)).join('\n')}

💰 *Total Amount: $${total.toFixed(2)}*
------------------`;

    const whatsappUrl = `https://wa.me/61420333906?text=${encodeURIComponent(orderDetails)}`;
    window.open(whatsappUrl, '_blank');
    
    setStep('cart');
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
          <input
            type="tel"
            id="phone"
            value={customerDetails.phone}
            onChange={(e) => setCustomerDetails(prev => ({ ...prev, phone: e.target.value }))}
            className="w-full p-2 border border-gray-300 rounded-md"
            placeholder="Enter your phone number"
          />
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
          onClick={handleSubmit}
          className="w-full bg-green-600 text-white py-3 rounded-md font-medium hover:bg-green-700 transition-colors"
          disabled={!customerDetails.name || !customerDetails.phone || !customerDetails.pickupTime || !customerDetails.pickupDate}
        >
          Order Now
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

      {step === 'cart' ? renderCartItems() : renderCustomerDetails()}
    </div>
  );
} 