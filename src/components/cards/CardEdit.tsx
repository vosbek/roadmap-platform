import React, { useState } from 'react';
import { Calendar, Users, Network, Flag, Search } from 'lucide-react';

type CardStatus = 
  | 'Not Started'
  | 'In Planning'
  | 'In Progress'
  | 'Testing'
  | 'Completed'
  | 'Blocked'
  | 'On Hold'
  | 'Cancelled';

interface CardEditProps {
  card: {
    id: string;
    title: string;
    description: string;
    startDate: string;
    endDate: string;
    status: CardStatus;
    type: 'application' | 'technology' | 'project';
  };
  onSubmit: (cardId: string, updates: any) => void;
  onCancel: () => void;
  onDelete: (cardId: string) => void;
}

const CardEdit = ({ card, onSubmit, onCancel, onDelete }: CardEditProps) => {
  const [formData, setFormData] = useState({
    title: card.title,
    description: card.description,
    startDate: card.startDate,
    endDate: card.endDate,
    status: card.status,
    type: card.type
  });

  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(card.id, formData);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 max-w-2xl w-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-slate-900">Edit Card</h2>
        <button
          onClick={() => setShowDeleteConfirm(true)}
          className="px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg"
        >
          Delete
        </button>
      </div>
      
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
            Save Changes
          </button>
        </div>
      </form>

      {/* Delete Confirmation Modal */}
      {showDeleteConfirm && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-semibold text-slate-900 mb-4">Delete Card</h3>
            <p className="text-slate-600 mb-6">
              Are you sure you want to delete this card? This action cannot be undone.
            </p>
            <div className="flex justify-end gap-3">
              <button
                onClick={() => setShowDeleteConfirm(false)}
                className="px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg"
              >
                Cancel
              </button>
              <button
                onClick={() => onDelete(card.id)}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CardEdit;