import React from 'react';
import { Search, Bell, Settings, User, Plus } from 'lucide-react';
import { useAuthContext } from '../../context/AuthContext';
import { useTeamContext } from '../../context/TeamContext';
import CardCreate from '../cards/CardCreate';

export const Header = () => {
  const { user, logout } = useAuthContext();
  const { currentTeam } = useTeamContext();

  return (
    <header className="bg-white border-b border-slate-200">
      <div className="flex justify-between items-center px-6 py-4">
        {/* Left side */}
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold text-[#1C57A5]">Roadmap Platform</h1>
          {currentTeam && (
            <span className="text-sm text-slate-500">
              {currentTeam.name}
            </span>
          )}
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <button 
            className="px-4 py-2 bg-[#1C57A5] text-white rounded-lg flex items-center gap-2 hover:bg-[#1C57A5]/90"
            onClick={() => {/* Add card creation logic */}}
          >
            <Plus className="h-4 w-4" />
            Create Card
          </button>

          <div className="relative">
            <Search className="h-5 w-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search..."
              className="pl-10 pr-4 py-2 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1C57A5] focus:border-transparent"
            />
          </div>

          <button className="p-2 hover:bg-slate-50 rounded-lg">
            <Bell className="h-5 w-5 text-slate-600" />
          </button>

          <button className="p-2 hover:bg-slate-50 rounded-lg">
            <Settings className="h-5 w-5 text-slate-600" />
          </button>

          <div className="flex items-center gap-2">
            <div className="bg-[#1C57A5] h-8 w-8 rounded-full flex items-center justify-center">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="text-sm">
              <div className="font-medium">{user?.name}</div>
              <button 
                onClick={logout}
                className="text-slate-500 hover:text-slate-700"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};