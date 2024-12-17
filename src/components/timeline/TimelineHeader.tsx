import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TimelineHeaderProps {
  currentQuarter: string;
  onQuarterChange: (quarter: string) => void;
  quarters: string[];
}

const TimelineHeader: React.FC<TimelineHeaderProps> = ({ 
  currentQuarter, 
  onQuarterChange, 
  quarters 
}) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <button className="p-2 hover:bg-slate-50 rounded-lg">
        <ChevronLeft className="h-5 w-5" />
      </button>
      <div className="flex gap-2">
        {quarters.map((quarter: string) => (
          <button 
            key={quarter}
            onClick={() => onQuarterChange(quarter)}
            className={`px-3 py-1 rounded-md text-sm 
              ${quarter === currentQuarter 
                ? 'bg-[#1C57A5] text-white' 
                : 'text-[#1C57A5] hover:bg-[#1C57A5]/5'}`}
          >
            {quarter}
          </button>
        ))}
      </div>
      <button className="p-2 hover:bg-slate-50 rounded-lg">
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
};

export default TimelineHeader;