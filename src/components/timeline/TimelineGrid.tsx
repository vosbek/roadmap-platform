import React, { ReactNode } from 'react';

interface TimelineGridProps {
  months: string[];
  children: ReactNode;
}

const TimelineGrid: React.FC<TimelineGridProps> = ({ months, children }) => {
  return (
    <div className="relative">
      {/* Month Headers */}
      <div className="grid grid-cols-12 gap-2 mb-4 pl-32">
        {months.map((month: string) => (
          <div key={month} className="text-center">
            <div className="text-sm font-medium text-slate-600">{month}</div>
            <div className="text-xs text-slate-400">2024</div>
          </div>
        ))}
      </div>

      {/* Grid Lines */}
      <div className="absolute inset-0 grid grid-cols-12 gap-2 pl-32 pointer-events-none">
        {Array(12).fill(null).map((_, i) => (
          <div key={i} className="border-l border-slate-100 h-full" />
        ))}
      </div>

      {/* Timeline Content */}
      <div className="relative">
        {children}
      </div>
    </div>
  );
};

export default TimelineGrid;