import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TeamProvider } from './context/TeamContext';
import { Header } from './components/common/Header';
import Navigation from './components/common/Navigation';  // Changed from { Navigation }
import LoginForm from './components/common/LoginForm';
import { useAuthContext } from './context/AuthContext';
import DashboardView from './components/views/DashboardView';
import TimelineView from './components/views/TimelineView';
import ImpactView from './components/views/ImpactView';

const AppContent = () => {
  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return <LoginForm />;
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <div className="flex">
        <Navigation />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<DashboardView />} />
            <Route path="/timeline" element={<TimelineView />} />
            <Route path="/impact" element={<ImpactView />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <TeamProvider>
          <AppContent />
        </TeamProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;