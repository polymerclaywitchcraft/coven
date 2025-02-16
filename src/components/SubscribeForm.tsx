import React, { useState } from 'react';
import { Send } from 'lucide-react';

export const SubscribeForm = () => {

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) { return; }
    const body = new URLSearchParams();
    body.append('EMAIL', email);
    body.append('cf-turnstile-response', token);
    fetch('https://abe0b1ef.sibforms.com/serve/MUIFADPQXHzfITMyKm5XjT6lKxzSrnc8rdqx9dqMgivAJWLKziMrl-3M6yw3YZJCd8qF-1jgTlbM-EbOqg_3tfYPEujays_di21X4DpwvUyCrVPIgoYh1NPiWwqXri5sqBK2Pdz9jkTPJ7cFpaMX6VE1eoxekQGptDGkgP79dtKLGdeEWdXX1ycBigPPTZlvu44qGAuDqpgwMuj5?isAjax=1', {
      method: 'POST',
      body,
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          setSuccessMessage(data.message);
        } else {
          setErrorMessage(JSON.stringify(data.errors));
        }
      })
      .catch((error) => {
        console.error(error);
        setErrorMessage('Something went wrong. Please try again.');
      });
    setEmail('');
    setToken('');
  };

  return (
    <form
    onSubmit={handleSubmit}
    data-type="subscription"
    className="space-y-4">
      <div className="relative">
        <input
          id="EMAIL"
          autoComplete="off"
          name="EMAIL"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full px-4 py-3 bg-black/50 border border-red-900/30 rounded-lg 
                   focus:outline-none focus:ring-2 focus:ring-red-900 focus:border-transparent 
                   text-red-100 placeholder-red-400/60"
          data-required="true"
          required
        />
      </div>

      {successMessage && (
        <div className="text-green-500">
          {successMessage}
        </div>
      )}

      {!errorMessage && (
        <div className="text-red-500">
          {errorMessage}
        </div>
      )}

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