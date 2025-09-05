export interface Trip {
  id: string;
  title: string;
  destination: string;
  startDate: string;
  endDate: string;
  collaborators: string[];
  createdAt: string;
  updatedAt: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  location: string;
  startTime: string;
  endTime: string;
  category: ActivityCategory;
  notes: string;
  cost?: number;
  bookedStatus: 'not-booked' | 'booked' | 'confirmed';
}

export interface DayItinerary {
  id: string;
  tripId: string;
  date: string;
  activities: Activity[];
  notes: string;
  budget: number;
}

export type ActivityCategory = 
  | 'accommodation'
  | 'transport'
  | 'restaurant'
  | 'attraction'
  | 'activity'
  | 'shopping'
  | 'other';

export interface Collaborator {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'owner' | 'editor' | 'viewer';
}