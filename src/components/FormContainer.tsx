import React from 'react';
import { Skull } from 'lucide-react';

interface FormContainerProps {
  children: React.ReactNode;
}

export const FormContainer: React.FC<FormContainerProps> = ({ children }) => (
  <div className="relative z-10 w-full max-w-md p-8 mx-4">
    <div className="bg-black/80 backdrop-blur-lg rounded-2xl p-8 shadow-2xl border border-red-900/30">
      <div className="flex justify-center mb-6">
        <Skull className="w-12 h-12 text-red-600 animate-[floatAnimation_3s_ease-in-out_infinite]" />
      </div>
      
      <h2 className="text-3xl font-bold text-center mb-2 text-red-200">
        Join My Coven
      </h2>
      <p className="text-red-400/80 text-center mb-8">
        Subscribe to receive mystical updates and ancient wisdom
      </p>
      {children}
    </div>
  </div>
);