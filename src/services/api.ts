import { Card, CardReference, User, Team, Organization } from '../types';

class ApiService {
  private baseUrl: string;
  private token: string | null;

  constructor() {
    this.baseUrl = process.env.REACT_APP_API_URL || 'http://localhost:8080/api';
    this.token = null;
  }

  setToken(token: string) {
    this.token = token;
  }

  private async request<T>(
    endpoint: string, 
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`;
    const headers = {
      'Content-Type': 'application/json',
      ...(this.token ? { Authorization: `Bearer ${this.token}` } : {}),
      ...options.headers,
    };

    const response = await fetch(url, {
      ...options,
      headers,
    });

    if (!response.ok) {
      throw new Error(`API Error: ${response.statusText}`);
    }

    return response.json();
  }

  // Card Endpoints
  async getCards(): Promise<Card[]> {
    return this.request<Card[]>('/cards');
  }

  async getCard(id: string): Promise<Card> {
    return this.request<Card>(`/cards/${id}`);
  }

  async createCard(card: Omit<Card, 'id' | 'createdAt' | 'updatedAt'>): Promise<Card> {
    return this.request<Card>('/cards', {
      method: 'POST',
      body: JSON.stringify(card),
    });
  }

  async updateCard(id: string, updates: Partial<Card>): Promise<Card> {
    return this.request<Card>(`/cards/${id}`, {
      method: 'PUT',
      body: JSON.stringify(updates),
    });
  }

  async deleteCard(id: string): Promise<void> {
    return this.request(`/cards/${id}`, {
      method: 'DELETE',
    });
  }

  // Reference Endpoints
  async createReference(reference: Omit<CardReference, 'id' | 'createdAt'>): Promise<CardReference> {
    return this.request<CardReference>('/references', {
      method: 'POST',
      body: JSON.stringify(reference),
    });
  }

  async deleteReference(id: string): Promise<void> {
    return this.request(`/references/${id}`, {
      method: 'DELETE',
    });
  }

  // Team Endpoints
  async getTeams(): Promise<Team[]> {
    return this.request<Team[]>('/teams');
  }

  async getTeam(id: string): Promise<Team> {
    return this.request<Team>(`/teams/${id}`);
  }

  // Organization Endpoints
  async getOrganizations(): Promise<Organization[]> {
    return this.request<Organization[]>('/organizations');
  }

  async getOrganization(id: string): Promise<Organization> {
    return this.request<Organization>(`/organizations/${id}`);
  }

  // User Endpoints
  async getCurrentUser(): Promise<User> {
    return this.request<User>('/users/me');
  }
}

export const api = new ApiService();