import { Team } from './index';

export type UserRole = 'architect' | 'viewer' | 'admin';

export interface User {
  id: string;
  email: string;
  name: string;
  teamId: string;
  role: UserRole;
  createdAt: Date;
  updatedAt: Date;
}

export interface AuthUser extends User {
  teams: Team[];
  permissions: string[];
}