import React from 'react';

interface HealthTipCardProps {
  title: string;
  content: string;
  image: string;
  onClick?: () => void;
}

const HealthTipCard: React.FC<HealthTipCardProps> = ({ title, content, image, onClick }) => {
  return (
    <div 
      className="card overflow-hidden hover:shadow-card-hover transition-shadow cursor-pointer"
      onClick={onClick}
    >
      <div className="h-40 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover" 
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{title}</h3>
        <p className="text-sm text-gray-600 line-clamp-3">{content}</p>
      </div>
    </div>
  );
};

export default HealthTipCard;