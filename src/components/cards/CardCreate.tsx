import React, { useState } from 'react';
import { Calendar, Clock, Users, Tag, Flag } from 'lucide-react';

type CardStatus = 
  | 'Not Started'
  | 'In Planning'
  | 'In Progress'
  | 'Testing'
  | 'Completed'
  | 'Blocked'
  | 'On Hold'
  | 'Cancelled';

interface CreateCardProps {
  onSubmit: (card: {
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    status: CardStatus;
    type: 'application' | 'technology' | 'project';
  }) => void;
  onCancel: () => void;
}

const CardCreate = ({ onSubmit, onCancel }: CreateCardProps) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    startDate: '',
    endDate: '',
    status: 'Not Started' as CardStatus,
    type: 'project' as 'application' | 'technology' | 'project'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
      <h2 className="text-xl font-semibold text-slate-900 mb-6">Create New Card</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C57A5] focus:border-transparent"
            placeholder="Enter card title"
            required
          />
        </div>

        {/* Description */}
        <div>
          <label className="block text-sm font-medium text-slate-700 mb-2">
            Description
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData(prev => ({ ...prev, description: e.target.value }))}
            className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C57A5] focus:border-transparent"
            rows={4}
            placeholder="Enter description"
            required
          />
        </div>

        {/* Dates */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Start Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="date"
                value={formData.startDate}
                onChange={(e) => setFormData(prev => ({ ...prev, startDate: e.target.value }))}
                className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C57A5] focus:border-transparent"
                required
              />
            </div>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              End Date
            </label>
            <div className="relative">
              <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
              <input
                type="date"
                value={formData.endDate}
                onChange={(e) => setFormData(prev => ({ ...prev, endDate: e.target.value }))}
                className="w-full pl-10 pr-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C57A5] focus:border-transparent"
                required
              />
            </div>
          </div>
        </div>

        {/* Status and Type */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Status
            </label>
            <select
              value={formData.status}
              onChange={(e) => setFormData(prev => ({ ...prev, status: e.target.value as CardStatus }))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C57A5] focus:border-transparent"
            >
              <option value="Not Started">Not Started</option>
              <option value="In Planning">In Planning</option>
              <option value="In Progress">In Progress</option>
              <option value="Testing">Testing</option>
              <option value="Completed">Completed</option>
              <option value="Blocked">Blocked</option>
              <option value="On Hold">On Hold</option>
              <option value="Cancelled">Cancelled</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 mb-2">
              Type
            </label>
            <select
              value={formData.type}
              onChange={(e) => setFormData(prev => ({ ...prev, type: e.target.value as 'application' | 'technology' | 'project' }))}
              className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#1C57A5] focus:border-transparent"
            >
              <option value="project">Project</option>
              <option value="application">Application</option>
              <option value="technology">Technology</option>
            </select>
          </div>
        </div>

        {/* Actions */}
        <div className="flex justify-end gap-3 pt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-[#1C57A5] text-white rounded-lg hover:bg-[#1C57A5]/90"
          >
            Create Card
          </button>
        </div>
      </form>
    </div>
  );
};

export default CardCreate;