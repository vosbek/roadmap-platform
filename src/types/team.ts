export interface Organization {
    id: string;
    name: string;
    createdAt: Date;
    updatedAt: Date;
  }
  
  export interface Team {
    id: string;
    orgId: string;
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
  
  export interface ViewAnalytics {
    id: string;
    viewId: string;
    userId: string;
    accessedAt: Date;
  }