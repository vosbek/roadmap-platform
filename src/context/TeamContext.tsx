import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { Team, Organization } from '../types';
import { api } from '../services/api';

interface TeamContextType {
  currentTeam: Team | null;
  setCurrentTeam: (team: Team) => void;
  teams: Team[];
  organizations: Organization[];
  loading: boolean;
  error: string | null;
  refreshTeams: () => Promise<void>;
}

const TeamContext = createContext<TeamContextType | undefined>(undefined);

export function TeamProvider({ children }: { children: ReactNode }) {
  const [currentTeam, setCurrentTeam] = useState<Team | null>(null);
  const [teams, setTeams] = useState<Team[]>([]);
  const [organizations, setOrganizations] = useState<Organization[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const loadData = async () => {
    try {
      setLoading(true);
      const [fetchedTeams, fetchedOrgs] = await Promise.all([
        api.getTeams(),
        api.getOrganizations()
      ]);
      
      setTeams(fetchedTeams);
      setOrganizations(fetchedOrgs);
      
      // Set first team as current if none selected
      if (!currentTeam && fetchedTeams.length > 0) {
        setCurrentTeam(fetchedTeams[0]);
      }
      
      setError(null);
    } catch (err) {
      setError('Failed to load teams and organizations');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <TeamContext.Provider
      value={{
        currentTeam,
        setCurrentTeam,
        teams,
        organizations,
        loading,
        error,
        refreshTeams: loadData
      }}
    >
      {children}
    </TeamContext.Provider>
  );
}

export function useTeamContext() {
  const context = useContext(TeamContext);
  if (context === undefined) {
    throw new Error('useTeamContext must be used within a TeamProvider');
  }
  return context;
}