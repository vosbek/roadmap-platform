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

export interface CardReference {
  id: string;
  sourceCardId: string;
  targetCardId: string;
  referenceType: 'impacts' | 'depends_on' | 'relates_to';
  createdBy: string;
  createdAt: Date;
}

export interface CardHistory {
  id: string;
  cardId: string;
  fieldName: string;
  oldValue: string;
  newValue: string;
  changedBy: string;
  changedAt: Date;
}

export interface CardFlag {
  id: string;
  cardId: string;
  flagDefinitionId: string;
  value: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface FlagDefinition {
  id: string;
  orgId: string;
  name: string;
  description?: string;
  createdAt: Date;
}