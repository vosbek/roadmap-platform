import React from 'react';
import { useCards } from '../../hooks/useCards';

const DashboardView = () => {
  const { cards, loading } = useCards();

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-slate-900">Dashboard</h1>
      </div>
      
      {cards.length === 0 ? (
        <div className="text-center text-slate-500 mt-8">
          No cards yet. Click "Create Card" to get started.
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Cards will be rendered here */}
        </div>
      )}
    </div>
  );
};

export default DashboardView;