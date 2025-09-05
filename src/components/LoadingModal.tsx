import React from 'react';
import { Sparkles, MapPin, Calendar, Plane } from 'lucide-react';

interface LoadingModalProps {
  destination: string;
  isVisible: boolean;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({ destination, isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex items-center justify-center p-4 z-[100]">
      <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 text-center">
        {/* Animated Icons */}
        <div className="relative mb-6">
          <div className="flex justify-center space-x-4 mb-4">
            <div className="animate-bounce delay-0">
              <MapPin className="h-8 w-8 text-orange-500" />
            </div>
            <div className="animate-bounce delay-150">
              <Calendar className="h-8 w-8 text-blue-500" />
            </div>
            <div className="animate-bounce delay-300">
              <Plane className="h-8 w-8 text-green-500" />
            </div>
          </div>
          
          {/* Central Sparkles Icon */}
          <div className="flex justify-center">
            <div className="animate-spin">
              <Sparkles className="h-12 w-12 text-purple-500" />
            </div>
          </div>
        </div>

        {/* Loading Text */}
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Creating Your Perfect Trip
        </h2>
        
        <div className="space-y-3 text-gray-600">
          <p className="text-lg font-medium text-orange-600">
            Destination: {destination}
          </p>
          
          <div className="space-y-2 text-sm">
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
              <span>Analyzing your preferences...</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse delay-300"></div>
              <span>Finding the best attractions...</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse delay-500"></div>
              <span>Curating local experiences...</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-700"></div>
              <span>Optimizing your itinerary...</span>
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-gradient-to-r from-orange-500 to-purple-500 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
          </div>
          <p className="text-xs text-gray-500 mt-2">This may take a few moments...</p>
        </div>

        {/* Fun Fact */}
        <div className="mt-6 p-4 bg-gradient-to-r from-orange-50 to-purple-50 rounded-lg">
          <p className="text-sm text-gray-700">
            <span className="font-semibold">💡 Did you know?</span> Our AI considers over 50 factors including local weather, cultural events, and traveler preferences to create your personalized itinerary!
          </p>
        </div>
      </div>
    </div>
  );
};