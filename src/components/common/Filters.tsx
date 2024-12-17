import React from 'react';
import { Filter, X } from 'lucide-react';

interface FilterOption {
  id: string;
  label: string;
  value: string;
}

interface FiltersProps {
  activeFilters: { [key: string]: string[] };
  options: {
    status: FilterOption[];
    team: FilterOption[];
    type: FilterOption[];
  };
  onFilterChange: (filterType: string, values: string[]) => void;
  onClearFilter: (filterType: string) => void;
}

const Filters = ({ activeFilters, options, onFilterChange, onClearFilter }: FiltersProps) => {
  return (
    <div className="space-y-4">
      {/* Active Filters Display */}
      {Object.keys(activeFilters).length > 0 && (
        <div className="flex flex-wrap gap-2">
          {Object.entries(activeFilters).map(([filterType, values]) => (
            values.map(value => (
              <span 
                key={`${filterType}-${value}`}
                className="px-3 py-1 bg-[#1C57A5]/10 text-[#1C57A5] rounded-full text-sm flex items-center gap-1"
              >
                {value}
                <button 
                  onClick={() => onClearFilter(filterType)}
                  className="hover:text-[#1C57A5]/70"
                >
                  <X size={14} />
                </button>
              </span>
            ))
          ))}
        </div>
      )}

      {/* Filter Sections */}
      <div className="bg-white rounded-lg border border-slate-200 divide-y">
        {/* Status Filters */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-slate-900 mb-2">Status</h3>
          <div className="space-y-2">
            {options.status.map(option => (
              <label key={option.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={activeFilters.status?.includes(option.value)}
                  onChange={(e) => {
                    const newValues = e.target.checked
                      ? [...(activeFilters.status || []), option.value]
                      : activeFilters.status?.filter(v => v !== option.value) || [];
                    onFilterChange('status', newValues);
                  }}
                  className="rounded border-slate-300 text-[#1C57A5] focus:ring-[#1C57A5]"
                />
                <span className="ml-2 text-sm text-slate-600">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Team Filters */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-slate-900 mb-2">Team</h3>
          <div className="space-y-2">
            {options.team.map(option => (
              <label key={option.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={activeFilters.team?.includes(option.value)}
                  onChange={(e) => {
                    const newValues = e.target.checked
                      ? [...(activeFilters.team || []), option.value]
                      : activeFilters.team?.filter(v => v !== option.value) || [];
                    onFilterChange('team', newValues);
                  }}
                  className="rounded border-slate-300 text-[#1C57A5] focus:ring-[#1C57A5]"
                />
                <span className="ml-2 text-sm text-slate-600">{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Type Filters */}
        <div className="p-4">
          <h3 className="text-sm font-medium text-slate-900 mb-2">Type</h3>
          <div className="space-y-2">
            {options.type.map(option => (
              <label key={option.id} className="flex items-center">
                <input
                  type="checkbox"
                  checked={activeFilters.type?.includes(option.value)}
                  onChange={(e) => {
                    const newValues = e.target.checked
                      ? [...(activeFilters.type || []), option.value]
                      : activeFilters.type?.filter(v => v !== option.value) || [];
                    onFilterChange('type', newValues);
                  }}
                  className="rounded border-slate-300 text-[#1C57A5] focus:ring-[#1C57A5]"
                />
                <span className="ml-2 text-sm text-slate-600">{option.label}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filters;