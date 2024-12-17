import React from 'react';

interface TimelineBarProps {
  title: string;
  label: string;
  startMonth: number;
  duration: number;
  status: string;
  onClick?: () => void;
}

const TimelineBar: React.FC<TimelineBarProps> = ({ 
  title, 
  label, 
  startMonth, 
  duration, 
  status, 
  onClick 
}) => {
  return (
    <div className="relative pl-32 py-2">
      <div className="absolute left-0 top-4 w-28">
        <div className="text-sm font-medium text-slate-800">{label}</div>
      </div>
      <div className="grid grid-cols-12 gap-2 items-center h-16">
        <div className={`col-start-${startMonth + 1} col-span-${duration} group`}>
          <div className="h-12 w-full bg-[#1C57A5]/10 rounded-lg border border-[#1C57A5]/20 
                      flex items-center px-4 relative cursor-pointer hover:bg-[#1C57A5]/20">
            <div className="absolute -left-1 top-0 h-full w-2 bg-[#1C57A5] rounded-l-lg" />
            <div className="absolute -right-1 top-0 h-full w-2 bg-[#1C57A5] rounded-r-lg" />
            <div className="flex justify-between items-center w-full min-w-0">
              <div className="flex items-center space-x-2 min-w-0">
                <span className="text-sm font-medium text-[#1C57A5] truncate">{title}</span>
              </div>
              <span className="text-xs bg-[#1C57A5]/10 text-[#1C57A5] px-2 py-1 rounded-full whitespace-nowrap">
                {status}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineBar;