import React from 'react';

const Logo: React.FC<{ size?: 'sm' | 'md' | 'lg', className?: string }> = ({ 
  size = 'md', 
  className = ''
}) => {
  const sizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  return (
    <div className={`relative ${sizes[size]} ${className}`}>
      <div className="absolute inset-0 rounded-full bg-black">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 100 100" 
          className="w-full h-full p-2"
        >
          <circle cx="50" cy="50" r="45" fill="none" stroke="#00C170" strokeWidth="2" />
          <path 
            d="M25,50 L40,50 L45,35 L55,65 L60,50 L75,50" 
            fill="none" 
            stroke="#00C170" 
            strokeWidth="4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="50"
            y="80"
            textAnchor="middle"
            fill="#00C170"
            fontSize="8"
            fontWeight="bold"
            fontFamily="sans-serif"
          >
            HEALTHSPHERE
          </text>
        </svg>
      </div>
    </div>
  );
};

export default Logo;