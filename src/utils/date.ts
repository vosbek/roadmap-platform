import { format, isWithinInterval, parseISO } from 'date-fns';

export const formatDate = (date: Date | string): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, 'MMM d, yyyy');
};

export const formatShortDate = (date: Date | string): string => {
  const parsedDate = typeof date === 'string' ? parseISO(date) : date;
  return format(parsedDate, 'MMM yyyy');
};

export const isDateInRange = (
  date: Date,
  startDate: Date,
  endDate: Date
): boolean => {
  return isWithinInterval(date, { start: startDate, end: endDate });
};

export const getQuarterFromDate = (date: Date): string => {
  const month = date.getMonth();
  const quarter = Math.floor(month / 3) + 1;
  return `Q${quarter} ${date.getFullYear()}`;
};

export const getMonthsArray = (startDate: Date, endDate: Date): string[] => {
  const months: string[] = [];
  const currentDate = new Date(startDate);

  while (currentDate <= endDate) {
    months.push(format(currentDate, 'MMM yyyy'));
    currentDate.setMonth(currentDate.getMonth() + 1);
  }

  return months;
};