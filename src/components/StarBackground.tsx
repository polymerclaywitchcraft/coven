import React from 'react';
import { Sparkles } from 'lucide-react';

export const StarBackground = () => (
  <div className="absolute inset-0 opacity-50">
    {[...Array(50)].map((_, i) => (
      <div
        key={i}
        className="absolute animate-twinkle"
        style={{
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animation: `twinkle ${2 + Math.random() * 3}s ease-in-out infinite`,
          animationDelay: `${Math.random() * 2}s`
        }}
      >
        <Sparkles size={4} className="text-red-200" />
      </div>
    ))}
  </div>
);