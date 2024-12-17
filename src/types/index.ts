export type CardStatus = 
  | 'Not Started'
  | 'In Planning'
  | 'In Progress'
  | 'Testing'
  | 'Completed'
  | 'Blocked'
  | 'On Hold'
  | 'Cancelled';

export type CardType = 
  | 'application'
  | 'technology'
  | 'project';

export interface Card {
  id: string;
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  status: CardStatus;
  type: CardType;
  teamId: string;
  ownerId: string;
  lineOfBusinessId?: string;
  fundingStatus?: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

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

export interface Team {
  id: string;
  orgId: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Organization {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface LineOfBusiness {
  id: string;
  name: string;
  orgId: string;
  createdAt: Date;
}

export interface CardReference {
  id: string;
  sourceCardId: string;
  targetCardId: string;
  referenceType: string;
}

export interface SavedView {
  id: string;
  name: string;
  ownerId: string;
  orgId: string;
  filters: Record<string, unknown>;
  sortOrder: Record<string, unknown>;
  isPublic: boolean;
  createdAt: Date;
  updatedAt: Date;
}