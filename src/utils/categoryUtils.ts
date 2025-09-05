import { 
  Bed, 
  Car, 
  UtensilsCrossed, 
  Camera, 
  Gamepad2, 
  ShoppingBag, 
  MoreHorizontal 
} from 'lucide-react';
import { ActivityCategory } from '../types';

export const getCategoryIcon = (category: ActivityCategory) => {
  switch (category) {
    case 'accommodation':
      return Bed;
    case 'transport':
      return Car;
    case 'restaurant':
      return UtensilsCrossed;
    case 'attraction':
      return Camera;
    case 'activity':
      return Gamepad2;
    case 'shopping':
      return ShoppingBag;
    default:
      return MoreHorizontal;
  }
};

export const getCategoryColor = (category: ActivityCategory) => {
  switch (category) {
    case 'accommodation':
      return 'bg-blue-100 text-blue-800 border-blue-200';
    case 'transport':
      return 'bg-green-100 text-green-800 border-green-200';
    case 'restaurant':
      return 'bg-orange-100 text-orange-800 border-orange-200';
    case 'attraction':
      return 'bg-purple-100 text-purple-800 border-purple-200';
    case 'activity':
      return 'bg-pink-100 text-pink-800 border-pink-200';
    case 'shopping':
      return 'bg-indigo-100 text-indigo-800 border-indigo-200';
    default:
      return 'bg-gray-100 text-gray-800 border-gray-200';
  }
};

export const getCategoryLabel = (category: ActivityCategory): string => {
  switch (category) {
    case 'accommodation':
      return 'Hotel';
    case 'transport':
      return 'Transport';
    case 'restaurant':
      return 'Food';
    case 'attraction':
      return 'Attraction';
    case 'activity':
      return 'Activity';
    case 'shopping':
      return 'Shopping';
    default:
      return 'Other';
  }
};

export const shouldShowPrice = (category: ActivityCategory, title: string): boolean => {
  // Don't show prices for restaurants/food
  if (category === 'restaurant') {
    return false;
  }
  
  // Show prices for attractions and activities that typically charge admission
  if (category === 'attraction' || category === 'activity') {
    return true;
  }
  
  // Show prices for accommodation and transport
  if (category === 'accommodation' || category === 'transport') {
    return true;
  }
  
  return false;
};