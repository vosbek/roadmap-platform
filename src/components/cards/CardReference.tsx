import React from 'react';
import { Search } from 'lucide-react';

interface CardReferenceProps {
  onSelect: (cardId: string) => void;
}

const CardReference: React.FC<CardReferenceProps> = ({ onSelect }) => {
  return (
    <div className="p-4 bg-white rounded-lg border">
      <div className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border mb-4">
        <Search className="h-5 w-5 text-slate-400" />
        <input 
          type="text"
          placeholder="Search for cards to reference..."
          className="bg-transparent outline-none flex-1"
        />
      </div>
      {/* Reference selection content would go here */}
    </div>
  );
};

export default CardReference;