import { Card, CardStatus, Team } from '../types';

interface FilterOptions {
  status?: CardStatus[];
  teams?: string[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  search?: string;
}

export const filterCards = (cards: Card[], filters: FilterOptions): Card[] => {
  return cards.filter(card => {
    // Status filter
    if (filters.status?.length && !filters.status.includes(card.status)) {
      return false;
    }

    // Team filter
    if (filters.teams?.length && !filters.teams.includes(card.teamId)) {
      return false;
    }

    // Date range filter
    if (filters.dateRange) {
      const cardStart = new Date(card.startDate);
      const cardEnd = new Date(card.endDate);
      if (
        cardEnd < filters.dateRange.start ||
        cardStart > filters.dateRange.end
      ) {
        return false;
      }
    }

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      return (
        card.title.toLowerCase().includes(searchLower) ||
        card.description.toLowerCase().includes(searchLower)
      );
    }

    return true;
  });
};

export const sortCards = (
  cards: Card[],
  sortBy: 'startDate' | 'endDate' | 'status' | 'team',
  sortDirection: 'asc' | 'desc' = 'asc'
): Card[] => {
  return [...cards].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case 'startDate':
        comparison = new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
        break;
      case 'endDate':
        comparison = new Date(a.endDate).getTime() - new Date(b.endDate).getTime();
        break;
      case 'status':
        comparison = a.status.localeCompare(b.status);
        break;
      case 'team':
        comparison = a.teamId.localeCompare(b.teamId);
        break;
    }

    return sortDirection === 'asc' ? comparison : -comparison;
  });
};

export const groupCardsByTeam = (cards: Card[], teams: Team[]): Record<string, Card[]> => {
  const groupedCards: Record<string, Card[]> = {};
  
  teams.forEach(team => {
    groupedCards[team.id] = cards.filter(card => card.teamId === team.id);
  });

  return groupedCards;
};

export const groupCardsByQuarter = (cards: Card[]): Record<string, Card[]> => {
  const grouped: Record<string, Card[]> = {};
  
  cards.forEach(card => {
    const startDate = new Date(card.startDate);
    const quarter = `Q${Math.floor(startDate.getMonth() / 3) + 1} ${startDate.getFullYear()}`;
    
    if (!grouped[quarter]) {
      grouped[quarter] = [];
    }
    
    grouped[quarter].push(card);
  });

  return grouped;
};