import { useState, useEffect } from 'react';
import { AuthUser } from '../types';
import { auth } from '../services/auth';
import { api } from '../services/api';

export function useAuth() {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadUser = async () => {
      try {
        if (auth.isAuthenticated()) {
          const currentUser = await api.getCurrentUser();
          setUser(currentUser as AuthUser);
        }
      } catch (err) {
        setError('Failed to load user');
        auth.logout();
      } finally {
        setLoading(false);
      }
    };

    loadUser();
  }, []);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      await auth.login(email, password);
      const currentUser = await api.getCurrentUser();
      setUser(currentUser as AuthUser);
      setError(null);
    } catch (err) {
      setError('Login failed');
      throw err;
    } finally {
      setLoading(false);
    }
  };

  const logout = () => {
    auth.logout();
    setUser(null);
  };

  return {
    user,
    loading,
    error,
    login,
    logout,
    isAuthenticated: auth.isAuthenticated(),
  };
}