import React from 'react';
import { Search, Filter, Users, Calendar } from 'lucide-react';

const ProjectView = () => {
  return (
    <div className="p-6 bg-slate-50">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">RHEL 8 Upgrade Program</h1>
          <p className="text-slate-500 mt-1">Linux Team • Infrastructure Organization</p>
        </div>
        
        <div className="flex gap-2">
          <div className="flex items-center gap-2 bg-white p-2 rounded-lg border">
            <Search className="h-5 w-5 text-slate-400" />
            <input 
              type="text"
              placeholder="Search related items..."
              className="outline-none"
            />
          </div>
          
          <button className="px-3 py-2 bg-white rounded-lg border flex items-center gap-2">
            <Filter className="h-5 w-5" />
            Filter
          </button>
        </div>
      </div>

      {/* Project Overview */}
      <div className="bg-white rounded-lg border p-6 mb-6">
        <div className="grid grid-cols-3 gap-6 mb-6">
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="text-sm font-medium text-slate-600">Timeline</h3>
            <p className="text-lg font-semibold text-slate-900 mt-1">Jan - Dec 2024</p>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="text-sm font-medium text-slate-600">Related Teams</h3>
            <p className="text-lg font-semibold text-slate-900 mt-1">4 Teams</p>
          </div>
          
          <div className="p-4 bg-slate-50 rounded-lg">
            <h3 className="text-sm font-medium text-slate-600">Status</h3>
            <p className="text-lg font-semibold text-[#1C57A5] mt-1">In Progress</p>
          </div>
        </div>

        <div className="prose max-w-none">
          <p className="text-slate-600">
            Major upgrade program for RHEL infrastructure across all teams. 
            This includes version upgrades, security patches, and system optimization.
          </p>
        </div>
      </div>

      {/* Related Items */}
      <div className="space-y-6">
        <h2 className="text-lg font-semibold text-slate-900">Related Team Work</h2>
        
        {/* Build Team Items */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-900">Build Team</h3>
            <span className="px-2 py-1 bg-[#1C57A5]/10 text-[#1C57A5] rounded-full text-sm">
              2 Items
            </span>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 border rounded-lg hover:border-[#1C57A5] cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Build Project 1 - RHEL Upgrade</h4>
                  <p className="text-sm text-slate-500 mt-1">Apr 2024 - Jul 2024</p>
                </div>
                <span className="px-2 py-1 bg-[#1C57A5]/10 text-[#1C57A5] text-xs rounded-full">
                  In Progress
                </span>
              </div>
            </div>

            <div className="p-3 border rounded-lg hover:border-[#1C57A5] cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Build Project 2 - RHEL Upgrade</h4>
                  <p className="text-sm text-slate-500 mt-1">May 2024 - Aug 2024</p>
                </div>
                <span className="px-2 py-1 bg-slate-100 text-slate-600 text-xs rounded-full">
                  Planning
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Security Team Items */}
        <div className="bg-white rounded-lg border p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-semibold text-slate-900">Security Team</h3>
            <span className="px-2 py-1 bg-[#1C57A5]/10 text-[#1C57A5] rounded-full text-sm">
              1 Item
            </span>
          </div>
          
          <div className="space-y-3">
            <div className="p-3 border rounded-lg hover:border-[#1C57A5] cursor-pointer">
              <div className="flex justify-between items-start">
                <div>
                  <h4 className="font-medium">Security Compliance Update</h4>
                  <p className="text-sm text-slate-500 mt-1">Jun 2024 - Sep 2024</p>
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
  );
};

export default ProjectView;