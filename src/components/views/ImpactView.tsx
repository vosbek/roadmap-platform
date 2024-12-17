import React from 'react';
import { Search, Filter } from 'lucide-react';

const ImpactView = () => {
  return (
    <div className="p-6 bg-slate-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Impact View</h1>
          <p className="text-slate-500 mt-1">RHEL 8 Upgrade Program Dependencies</p>
        </div>
        
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg border">
            <Search className="h-5 w-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search dependencies..."
              className="outline-none"
            />
          </div>
          
          <button className="px-3 py-2 bg-white rounded-lg border flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Selected Card */}
      <div className="bg-white rounded-lg border p-6">
        <div className="mb-8 p-4 rounded-xl bg-[#1C57A5] bg-opacity-5 border border-[#1C57A5] border-opacity-20">
          <h3 className="text-lg font-semibold text-[#1C57A5] mb-2">RHEL 8 Upgrade Program</h3>
          <div className="flex gap-4 text-sm text-slate-600">
            <span>Linux Team</span>
            <span>Jan 2024 - Dec 2024</span>
            <span className="px-2 py-1 rounded-full bg-[#1C57A5] bg-opacity-10 text-[#1C57A5] text-xs">
              In Progress
            </span>
          </div>
        </div>

        {/* Dependencies Grid */}
        <div className="grid grid-cols-2 gap-6">
          {/* Incoming */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Dependencies</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg border hover:border-[#1C57A5] cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-slate-900">Security Compliance Update</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#1C57A5] bg-opacity-10 text-[#1C57A5]">
                    Required
                  </span>
                </div>
                <div className="text-sm text-slate-500">Security Team • Q2 2024</div>
              </div>

              <div className="p-4 rounded-lg border hover:border-[#1C57A5] cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-slate-900">Infrastructure Changes</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#1C57A5] bg-opacity-10 text-[#1C57A5]">
                    Dependency
                  </span>
                </div>
                <div className="text-sm text-slate-500">Cloud Team • Q1 2024</div>
              </div>
            </div>
          </div>

          {/* Outgoing */}
          <div>
            <h3 className="text-sm font-semibold text-slate-700 mb-4">Dependent Projects</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-lg border hover:border-[#1C57A5] cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-slate-900">Build Project 1</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#1C57A5] bg-opacity-10 text-[#1C57A5]">
                    Impacted
                  </span>
                </div>
                <div className="text-sm text-slate-500">Build Team • Q2 2024</div>
              </div>

              <div className="p-4 rounded-lg border hover:border-[#1C57A5] cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-slate-900">Build Project 2</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#1C57A5] bg-opacity-10 text-[#1C57A5]">
                    Impacted
                  </span>
                </div>
                <div className="text-sm text-slate-500">Build Team • Q3 2024</div>
              </div>

              <div className="p-4 rounded-lg border hover:border-[#1C57A5] cursor-pointer">
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-slate-900">Application Migration</h4>
                  <span className="text-xs px-2 py-1 rounded-full bg-[#1C57A5] bg-opacity-10 text-[#1C57A5]">
                    Impacted
                  </span>
                </div>
                <div className="text-sm text-slate-500">Web Team • Q2-Q3 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImpactView;