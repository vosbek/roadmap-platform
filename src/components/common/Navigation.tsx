import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutGrid, Calendar, Network, BarChart2 } from 'lucide-react';

const Navigation = () => {
  return (
    <nav className="w-64 border-r border-slate-200 h-screen bg-white p-4">
      <div className="space-y-1">
        <NavLink 
          to="/"
          className={({ isActive }) => `
            flex items-center gap-3 px-4 py-2 rounded-lg w-full
            ${isActive 
              ? 'bg-[#1C57A5] text-white' 
              : 'text-slate-600 hover:bg-slate-50'
            }
          `}
        >
          <LayoutGrid className="h-5 w-5" />
          <span className="font-medium">Dashboard</span>
        </NavLink>

        <NavLink 
          to="/timeline"
          className={({ isActive }) => `
            flex items-center gap-3 px-4 py-2 rounded-lg w-full
            ${isActive 
              ? 'bg-[#1C57A5] text-white' 
              : 'text-slate-600 hover:bg-slate-50'
            }
          `}
        >
          <Calendar className="h-5 w-5" />
          <span className="font-medium">Timeline</span>
        </NavLink>

        <NavLink 
          to="/impact"
          className={({ isActive }) => `
            flex items-center gap-3 px-4 py-2 rounded-lg w-full
            ${isActive 
              ? 'bg-[#1C57A5] text-white' 
              : 'text-slate-600 hover:bg-slate-50'
            }
          `}
        >
          <Network className="h-5 w-5" />
          <span className="font-medium">Impact View</span>
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;