import React, { useState } from 'react';
import { Send } from 'lucide-react';
import Turnstile from "react-turnstile";

export const SubscribeForm = () => {

  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !token) { return; }
    const body = new URLSearchParams();
    body.append('EMAIL', email);
    body.append('cf-turnstile-response', token);
    fetch('https://abe0b1ef.sibforms.com/serve/MUIFALtzxdzIHyCqxQrMvsEGS_CNyFqqEFWfyfLjux7T_F3IYowms-3d9q_D7nZ-wuzyW2SjvmL1drRlr02zf6wzEOX1FIizhWZCVZrtU5t-GhNYElE-CpOMGYwzOYoMpccLLgxQbX2OxZlH6CF1y4jacIZ-zSOYwu4pCUyrX83IqaBFah_9PS66SHPpvbxac-kXsvelXCzHrVzZ?isAjax=1', {
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

      <Turnstile sitekey='0x4AAAAAAA4oxLgoYmKUMCF4' onVerify={(tkn) => setToken(tkn)}></Turnstile>

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