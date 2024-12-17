import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  placeholder?: string;
  onChange: (value: string) => void;
  value: string;
}

const SearchBar = ({ placeholder = "Search...", onChange, value }: SearchBarProps) => {
  return (
    <div className="relative">
      <Search className="h-5 w-5 text-slate-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="pl-10 pr-4 py-2 bg-slate-50 rounded-lg border border-slate-200 focus:outline-none focus:ring-2 focus:ring-[#1C57A5] focus:border-transparent w-full"
      />
    </div>
  );
};

export default SearchBar;