import { useMemo } from 'react';
import { Card } from '../types';
import { getMonthsArray, getQuarterFromDate } from '../utils/date';

interface TimelineItem extends Card {
  gridColumn: string;
  duration: number;
}

export function useTimeline(cards: Card[], startDate: Date, endDate: Date) {
  const months = useMemo(() => 
    getMonthsArray(startDate, endDate),
    [startDate, endDate]
  );

  const timelineItems = useMemo(() => 
    cards.map(card => {
      const cardStart = new Date(card.startDate);
      const cardEnd = new Date(card.endDate);
      
      // Calculate grid position
      const startMonth = cardStart.getMonth();
      const endMonth = cardEnd.getMonth();
      const duration = endMonth - startMonth + 1;
      
      return {
        ...card,
        gridColumn: `span ${duration}`,
        duration,
      };
    }),
    [cards]
  );

  const quarters = useMemo(() => {
    const uniqueQuarters = new Set(
      months.map(month => {
        const date = new Date(month);
        return getQuarterFromDate(date);
      })
    );
    return Array.from(uniqueQuarters);
  }, [months]);

  return {
    months,
    quarters,
    timelineItems,
  };
}