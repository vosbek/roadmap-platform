import React from 'react';
import { Search, Filter, ChevronLeft, ChevronRight } from 'lucide-react';

const TimelineView = () => {
  return (
    <div className="p-6 bg-slate-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Infrastructure Organization</h1>
          <p className="text-slate-500 mt-1">Timeline View • 12 Active Projects</p>
        </div>
        
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg border">
            <Search className="h-5 w-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search projects..."
              className="outline-none"
            />
          </div>
          
          <button className="px-3 py-2 bg-white rounded-lg border flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Timeline Grid */}
      <div className="bg-white rounded-lg border p-4">
        {/* Quarter Selector */}
        <div className="flex justify-between items-center mb-4">
          <button className="p-2 hover:bg-slate-50 rounded-lg">
            <ChevronLeft className="h-5 w-5" />
          </button>
          <div className="flex gap-2">
            {['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'].map((quarter) => (
              <button 
                key={quarter}
                className={`px-3 py-1 rounded-md text-sm 
                  ${quarter === 'Q1 2024' 
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

        {/* Month Headers */}
        <div className="grid grid-cols-12 gap-2 mb-4 pl-32">
          {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'].map((month) => (
            <div key={month} className="text-center">
              <div className="text-sm font-medium text-slate-600">{month}</div>
              <div className="text-xs text-slate-400">2024</div>
            </div>
          ))}
        </div>

        {/* Timeline Content */}
        <div className="relative">
          {/* Linux Team */}
          <div className="mb-8">
            <h2 className="pl-32 mb-2 text-lg font-semibold text-slate-900">Linux Team</h2>
            
            {/* RHEL Upgrade Bar */}
            <div className="relative pl-32 py-2">
              <div className="absolute left-0 top-4 w-28">
                <div className="text-sm font-medium text-slate-800">RHEL Upgrade</div>
              </div>
              <div className="grid grid-cols-12 gap-2 items-center h-16">
                <div className="col-span-12 group">
                  <div className="h-12 w-full bg-[#1C57A5]/10 rounded-lg border border-[#1C57A5]/20 
                              flex items-center px-4 relative cursor-pointer hover:bg-[#1C57A5]/20">
                    <div className="absolute -left-1 top-0 h-full w-2 bg-[#1C57A5] rounded-l-lg" />
                    <div className="absolute -right-1 top-0 h-full w-2 bg-[#1C57A5] rounded-r-lg" />
                    <div className="flex justify-between items-center w-full min-w-0">
                      <div className="flex items-center space-x-2 min-w-0">
                        <span className="text-sm font-medium text-[#1C57A5] truncate">RHEL 8 Upgrade Program</span>
                        <span className="text-xs text-[#1C57A5] whitespace-nowrap">Jan 1 - Dec 31</span>
                      </div>
                      <span className="text-xs bg-[#1C57A5]/10 text-[#1C57A5] px-2 py-1 rounded-full whitespace-nowrap">
                        In Progress
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* SFTP Upgrade Bar */}
            <div className="relative pl-32 py-2">
              <div className="absolute left-0 top-4 w-28">
                <div className="text-sm font-medium text-slate-800">SFTP System</div>
              </div>
              <div className="grid grid-cols-12 gap-2 items-center h-16">
                <div className="col-start-3 col-span-4 group">
                  <div className="h-12 w-full bg-[#1C57A5]/10 rounded-lg border border-[#1C57A5]/20 
                              flex items-center px-4 relative cursor-pointer hover:bg-[#1C57A5]/20">
                    <div className="absolute -left-1 top-0 h-full w-2 bg-[#1C57A5] rounded-l-lg" />
                    <div className="absolute -right-1 top-0 h-full w-2 bg-[#1C57A5] rounded-r-lg" />
                    <div className="flex items-center space-x-2 min-w-0">
                      <span className="text-sm font-medium text-[#1C57A5] truncate">SFTP Upgrade</span>
                      <span className="text-xs text-[#1C57A5] whitespace-nowrap">Mar - Jun</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TimelineView;