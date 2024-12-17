import React from 'react';
import { Search, Filter, Plus } from 'lucide-react';

const TeamView = () => {
  return (
    <div className="p-6 bg-slate-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Linux Team</h1>
          <p className="text-slate-500 mt-1">Infrastructure Organization • 8 Active Projects</p>
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

          <button className="px-3 py-2 bg-[#1C57A5] text-white rounded-lg flex items-center gap-2">
            <Plus className="h-5 w-5" />
            New Card
          </button>
        </div>
      </div>

      {/* Content Grid */}
      <div className="grid grid-cols-2 gap-6">
        {/* Applications Section */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Applications & Technologies</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg border p-4">
              <h3 className="font-semibold text-slate-900">RHEL Infrastructure</h3>
              <div className="mt-4 space-y-3">
                <div className="p-3 border rounded-lg hover:border-[#1C57A5] cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">RHEL 8 Upgrade</h4>
                      <p className="text-sm text-slate-500 mt-1">Jan 2024 - Dec 2024</p>
                    </div>
                    <span className="px-2 py-1 bg-[#1C57A5]/10 text-[#1C57A5] text-xs rounded-full">
                      In Progress
                    </span>
                  </div>
                </div>
                
                <div className="p-3 border rounded-lg hover:border-[#1C57A5] cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Patch Management</h4>
                      <p className="text-sm text-slate-500 mt-1">Mar 2024 - Jun 2024</p>
                    </div>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                      Planning
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div>
          <h2 className="text-lg font-semibold text-slate-900 mb-4">Projects</h2>
          <div className="space-y-4">
            <div className="bg-white rounded-lg border p-4">
              <div className="space-y-3">
                <div className="p-3 border rounded-lg hover:border-[#1C57A5] cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">SFTP System Upgrade</h4>
                      <p className="text-sm text-slate-500 mt-1">Mar 2024 - Jun 2024</p>
                    </div>
                    <span className="px-2 py-1 bg-[#1C57A5]/10 text-[#1C57A5] text-xs rounded-full">
                      In Progress
                    </span>
                  </div>
                </div>

                <div className="p-3 border rounded-lg hover:border-[#1C57A5] cursor-pointer">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium">Server Migration</h4>
                      <p className="text-sm text-slate-500 mt-1">May 2024 - Aug 2024</p>
                    </div>
                    <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                      Planning
                    </span>
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

export default TeamView;