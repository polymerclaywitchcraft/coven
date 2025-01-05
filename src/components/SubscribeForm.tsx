import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const SubscribeForm = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribed:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent 
                   text-red-100 placeholder-red-400/60"
          required
        />
      </div>
      
      <button
        type="submit"
        className="w-full px-6 py-3 bg-gradient-to-r from-red-900 to-red-950 
                 hover:from-red-950 hover:to-black text-white font-medium rounded-lg 
                 flex items-center justify-center space-x-2 transform transition-all 
                 hover:scale-[1.02] active:scale-[0.98] border border-red-900/30"
      >
        <span>Subscribe</span>
        <Send size={18} className="ml-2" />
      </button>
    </form>
  );
};