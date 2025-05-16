import React from 'react';
import { PlusCircle, CheckCircle } from 'lucide-react';

interface SymptomItemProps {
  name: string;
  selected?: boolean;
  onToggle: () => void;
}

const SymptomItem: React.FC<SymptomItemProps> = ({ name, selected = false, onToggle }) => {
  return (
    <div 
      className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0"
      onClick={onToggle}
    >
      <span className="text-gray-700">{name}</span>
      {selected ? (
        <CheckCircle size={20} className="text-primary-500" />
      ) : (
        <PlusCircle size={20} className="text-primary-500" />
      )}
    </div>
  );
};

export default SymptomItem;