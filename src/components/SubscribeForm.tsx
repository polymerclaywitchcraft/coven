import React, { useState } from 'react';
import { Send } from 'lucide-react';
import useScript from '../hooks/useScript';

export const SubscribeForm = () => {

  useScript('https://sibforms.com/forms/end-form/build/main.js');
  useScript('https://challenges.cloudflare.com/turnstile/v0/api.js');

  const [email, setEmail] = useState('');

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   console.log('Subscribed:', email);
  //   setEmail('');
  // };

  return (
    <form id="sib-form" method="POST"
    action="https://abe0b1ef.sibforms.com/serve/MUIFALtzxdzIHyCqxQrMvsEGS_CNyFqqEFWfyfLjux7T_F3IYowms-3d9q_D7nZ-wuzyW2SjvmL1drRlr02zf6wzEOX1FIizhWZCVZrtU5t-GhNYElE-CpOMGYwzOYoMpccLLgxQbX2OxZlH6CF1y4jacIZ-zSOYwu4pCUyrX83IqaBFah_9PS66SHPpvbxac-kXsvelXCzHrVzZ" 
    data-type="subscription" className="space-y-4">
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
      
      <div
        className="cf-turnstile g-recaptcha"
        data-sitekey="0x4AAAAAAA4oxLgoYmKUMCF4"
        id="sib-captcha"
        data-callback="handleCaptchaResponse"
        data-language="en">
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