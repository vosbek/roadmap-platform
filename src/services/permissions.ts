import { User, Card } from '../types';

export class PermissionsService {
  canCreateCard(user: User, teamId: string): boolean {
    return user.role === 'admin' || user.teamId === teamId;
  }

  canEditCard(user: User, card: Card): boolean {
    return user.role === 'admin' || user.teamId === card.teamId;
  }

  canDeleteCard(user: User, card: Card): boolean {
    return user.role === 'admin' || user.teamId === card.teamId;
  }

  canViewCard(): boolean {
    // All authenticated users can view cards
    return true;
  }

  canManageTeam(user: User, teamId: string): boolean {
    return user.role === 'admin' || user.teamId === teamId;
  }

  canCreateReference(user: User): boolean {
    // Any authenticated user can create references
    return true;
  }

  canAccessAdminFeatures(user: User): boolean {
    return user.role === 'admin';
  }
}

export const permissions = new PermissionsService();