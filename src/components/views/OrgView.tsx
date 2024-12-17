import React from 'react';
import { Search, Filter, Download, Plus } from 'lucide-react';

const OrgView = () => {
  return (
    <div className="p-6 bg-slate-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Infrastructure Organization</h1>
          <p className="text-slate-500 mt-1">12 Active Projects • 3 Teams</p>
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
          
          <button className="px-3 py-2 bg-white rounded-lg border flex items-center gap-2">
            <Download className="h-5 w-5" />
            Export
          </button>

          <button className="px-3 py-2 bg-[#1C57A5] text-white rounded-lg flex items-center gap-2">
            <Plus className="h-5 w-5" />
            New Project
          </button>
        </div>
      </div>

      {/* Teams Grid */}
      <div className="grid grid-cols-1 gap-6">
        {/* Linux Team */}
        <div className="bg-white rounded-lg border p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Linux Team</h2>
            <span className="px-2 py-1 bg-[#1C57A5]/10 text-[#1C57A5] rounded-full text-sm">
              4 Active Projects
            </span>
          </div>
          
          <div className="space-y-4">
            {/* Projects */}
            <div className="grid grid-cols-1 gap-4">
              <div className="p-4 border rounded-lg hover:border-[#1C57A5]/50 cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-slate-900">RHEL 8 Upgrade Program</h3>
                    <p className="text-sm text-slate-500 mt-1">Jan 2024 - Dec 2024</p>
                  </div>
                  <span className="px-2 py-1 bg-[#1C57A5]/10 text-[#1C57A5] text-sm rounded-full">
                    In Progress
                  </span>
                </div>
              </div>

              <div className="p-4 border rounded-lg hover:border-[#1C57A5]/50 cursor-pointer">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-medium text-slate-900">SFTP System Upgrade</h3>
                    <p className="text-sm text-slate-500 mt-1">Mar 2024 - Jun 2024</p>
                  </div>
                  <span className="px-2 py-1 bg-slate-100 text-slate-600 text-sm rounded-full">
                    Planning
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Cloud Team */}
        <div className="bg-white rounded-lg border p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Cloud Team</h2>
            <span className="px-2 py-1 bg-[#1C57A5]/10 text-[#1C57A5] rounded-full text-sm">
              3 Active Projects
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 border rounded-lg hover:border-[#1C57A5]/50 cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-slate-900">AWS Pipeline Upgrade</h3>
                  <p className="text-sm text-slate-500 mt-1">Feb 2024 - Jul 2024</p>
                </div>
                <span className="px-2 py-1 bg-[#1C57A5]/10 text-[#1C57A5] text-sm rounded-full">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Team */}
        <div className="bg-white rounded-lg border p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold text-slate-900">Security Team</h2>
            <span className="px-2 py-1 bg-[#1C57A5]/10 text-[#1C57A5] rounded-full text-sm">
              5 Active Projects
            </span>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 border rounded-lg hover:border-[#1C57A5]/50 cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-medium text-slate-900">Security Posture Upgrade</h3>
                  <p className="text-sm text-slate-500 mt-1">Apr 2024 - Aug 2024</p>
                </div>
                <span className="px-2 py-1 bg-[#1C57A5]/10 text-[#1C57A5] text-sm rounded-full">
                  In Progress
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrgView;