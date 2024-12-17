import { useState, useEffect } from 'react';
import { Card, CardReference, CardStatus } from '../types';
import { api } from '../services/api';
import { filterCards, sortCards } from '../utils/filters';

interface UseCardsOptions {
  teamId?: string;
  status?: CardStatus[];
  dateRange?: {
    start: Date;
    end: Date;
  };
  search?: string;
  sortBy?: 'startDate' | 'endDate' | 'status' | 'team';
  sortDirection?: 'asc' | 'desc';
}

export function useCards(options: UseCardsOptions = {}) {
  const [cards, setCards] = useState<Card[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [references, setReferences] = useState<CardReference[]>([]);

  useEffect(() => {
    loadCards();
  }, [options.teamId]); // Reload when team changes

  const loadCards = async () => {
    try {
      setLoading(true);
      let fetchedCards = await api.getCards();
      
      // Apply filters
      fetchedCards = filterCards(fetchedCards, {
        teams: options.teamId ? [options.teamId] : undefined,
        status: options.status,
        dateRange: options.dateRange,
        search: options.search,
      });

      // Apply sorting
      if (options.sortBy) {
        fetchedCards = sortCards(fetchedCards, options.sortBy, options.sortDirection);
      }

      setCards(fetchedCards);
      setError(null);
    } catch (err) {
      setError('Failed to load cards');
    } finally {
      setLoading(false);
    }
  };

  const createCard = async (cardData: Omit<Card, 'id' | 'createdAt' | 'updatedAt'>) => {
    try {
      const newCard = await api.createCard(cardData);
      setCards(prev => [...prev, newCard]);
      return newCard;
    } catch (err) {
      setError('Failed to create card');
      throw err;
    }
  };

  const updateCard = async (id: string, updates: Partial<Card>) => {
    try {
      const updatedCard = await api.updateCard(id, updates);
      setCards(prev => prev.map(card => 
        card.id === id ? updatedCard : card
      ));
      return updatedCard;
    } catch (err) {
      setError('Failed to update card');
      throw err;
    }
  };

  const deleteCard = async (id: string) => {
    try {
      await api.deleteCard(id);
      setCards(prev => prev.filter(card => card.id !== id));
    } catch (err) {
      setError('Failed to delete card');
      throw err;
    }
  };

  const createReference = async (reference: Omit<CardReference, 'id' | 'createdAt'>) => {
    try {
      const newReference = await api.createReference(reference);
      setReferences(prev => [...prev, newReference]);
      return newReference;
    } catch (err) {
      setError('Failed to create reference');
      throw err;
    }
  };

  return {
    cards,
    loading,
    error,
    createCard,
    updateCard,
    deleteCard,
    createReference,
    references,
    refresh: loadCards,
  };
}