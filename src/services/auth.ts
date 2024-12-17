import { User, AuthUser } from '../types';
import { api } from './api';

class AuthService {
  private tokenKey = 'auth_token';

  async login(email: string, password: string): Promise<void> {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error('Login failed');
      }

      const { token } = await response.json();
      this.setToken(token);
      api.setToken(token);
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  }

  async loginWithLDAP(): Promise<void> {
    // Implementation for LDAP login
    // This will be implemented when moving to production
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    api.setToken('');
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  private setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  isAuthenticated(): boolean {
    return !!this.getToken();
  }
}

export const auth = new AuthService();