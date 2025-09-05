import React, { useState, useEffect } from 'react';
import { Compass, Menu, User, ChevronDown, MapPin, Plane, Mountain, Camera, Car, Heart, Sparkles, FileText, Globe, LogOut } from 'lucide-react';

interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  avatar?: string;
}

interface HeaderProps {
  onMenuClick?: () => void;
  onLoginClick?: () => void;
  onSignupClick?: () => void;
  user?: User | null;
  onLogout?: () => void;
  onHomeClick?: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  onMenuClick, 
  onLoginClick, 
  onSignupClick, 
  user, 
  onLogout, 
  onHomeClick 
}) => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const toggleDropdown = (dropdownName: string) => {
    setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => {
    setActiveDropdown(null);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('.dropdown-wrapper')) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const getUserInitials = (user: User): string => {
    return `${user.firstName.charAt(0)}${user.lastName.charAt(0)}`.toUpperCase();
  };
  return (
    <header className="bg-white bg-opacity-95 backdrop-blur-lg shadow-2xl border border-white border-opacity-80 sticky top-0 z-50">
      <div className="w-full px-2">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 pl-2">
            <button 
              onClick={onHomeClick}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Compass className="h-8 w-8 text-orange-500" />
              <span className="text-2xl font-bold text-gray-900 font-heading tracking-wide">Exotic70</span>
            </button>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-4">
            {/* Domestic Dropdown */}
            <div className="relative dropdown-wrapper">
              <button 
                onClick={() => toggleDropdown('domestic')}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
                <span>Domestic</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'domestic' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Mountain className="h-4 w-4 mr-2 text-orange-500" />
                          Popular Destinations
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Goa</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Kerala</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Rajasthan</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Himachal Pradesh</a>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                          By Region
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">North India</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">South India</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">East India</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">West India</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* International Dropdown */}
            <div className="relative dropdown-wrapper">
              <button 
                onClick={() => toggleDropdown('international')}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
                <span>International</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'international' && (
                <div className="absolute top-full left-0 mt-2 w-72 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="p-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Globe className="h-4 w-4 mr-2 text-orange-500" />
                          Asia
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Thailand</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Japan</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Singapore</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Malaysia</a>
                        </div>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Plane className="h-4 w-4 mr-2 text-orange-500" />
                          Europe
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">France</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Italy</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Spain</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Switzerland</a>
                        </div>
                      </div>
                    </div>
                    <div className="border-t border-gray-100 pt-3 mt-3">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 mb-2">Americas</h3>
                          <div className="space-y-1">
                            <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">USA</a>
                            <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Canada</a>
                          </div>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-gray-900 mb-2">Oceania</h3>
                          <div className="space-y-1">
                            <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Australia</a>
                            <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">New Zealand</a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Activities Dropdown */}
            <div className="relative dropdown-wrapper">
              <button 
                onClick={() => toggleDropdown('activities')}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
                <span>Activities</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'activities' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Mountain className="h-4 w-4 mr-2 text-orange-500" />
                          Adventure
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Trekking</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Water Sports</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Rock Climbing</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Paragliding</a>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Camera className="h-4 w-4 mr-2 text-orange-500" />
                          Experiences
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Photography Tours</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Cultural Immersion</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Food Tours</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Wildlife Safari</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Travel Dropdown */}
            <div className="relative dropdown-wrapper">
              <button 
                onClick={() => toggleDropdown('travel')}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
                <span>Travel</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'travel' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Plane className="h-4 w-4 mr-2 text-orange-500" />
                          Flights
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Domestic Flights</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">International Flights</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Flight Deals</a>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Car className="h-4 w-4 mr-2 text-orange-500" />
                          Ground Transport
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Car Rentals</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Bus Tickets</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Train Bookings</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Wedding Dropdown */}
            <div className="relative dropdown-wrapper">
              <button 
                onClick={() => toggleDropdown('wedding')}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
                <span>Wedding</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'wedding' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Heart className="h-4 w-4 mr-2 text-pink-500" />
                          Destination Weddings
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Beach Weddings</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Mountain Weddings</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Palace Weddings</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">International Venues</a>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Services</h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Wedding Planning</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Guest Accommodation</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Photography</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Honeymoon Dropdown */}
            <div className="relative dropdown-wrapper">
              <button 
                onClick={() => toggleDropdown('honeymoon')}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
                <span>Honeymoon</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'honeymoon' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Heart className="h-4 w-4 mr-2 text-pink-500" />
                          Romantic Destinations
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Maldives</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Santorini</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Bali</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Paris</a>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Packages</h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Luxury Packages</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Budget Friendly</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">All Inclusive</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Trip Planner Dropdown */}
            <div className="relative dropdown-wrapper">
              <button 
                onClick={() => toggleDropdown('trip-planner')}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
                <span>Trip Planner</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'trip-planner' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Compass className="h-4 w-4 mr-2 text-orange-500" />
                          Planning Tools
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Create Itinerary</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Budget Calculator</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Packing Checklist</a>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Resources</h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Travel Guides</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Weather Info</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Currency Converter</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* AI Dropdown */}
            <div className="relative dropdown-wrapper">
              <button 
                onClick={() => toggleDropdown('ai')}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
                <span>AI</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'ai' && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <Sparkles className="h-4 w-4 mr-2 text-purple-500" />
                          AI-Powered Tools
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Smart Recommendations</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Auto Itinerary</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Travel Assistant</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Price Predictor</a>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Personalization</h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Travel Preferences</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Custom Suggestions</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Visa Dropdown */}
            <div className="relative dropdown-wrapper">
              <button 
                onClick={() => toggleDropdown('visa')}
                className="flex items-center space-x-1 text-gray-700 hover:text-orange-500 transition-colors font-medium whitespace-nowrap">
                <span>Visa</span>
                <ChevronDown className="h-4 w-4" />
              </button>
              {activeDropdown === 'visa' && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-xl shadow-2xl border border-gray-100 z-50">
                  <div className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2 flex items-center">
                          <FileText className="h-4 w-4 mr-2 text-blue-500" />
                          Visa Services
                        </h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Visa Requirements</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Application Assistance</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Document Checklist</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Processing Status</a>
                        </div>
                      </div>
                      <div className="border-t border-gray-100 pt-3">
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">Popular Visas</h3>
                        <div className="space-y-1">
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">Schengen Visa</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">US Tourist Visa</a>
                          <a href="#" onClick={closeDropdown} className="block px-3 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors">UK Visa</a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-4 pr-2">
            {user ? (
              <div className="flex items-center space-x-3">
                {/* User Profile */}
                <div className="flex items-center space-x-2">
                  {user.avatar ? (
                    <img
                      src={user.avatar}
                      alt={`${user.firstName} ${user.lastName}`}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                  ) : (
                    <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-pink-500 rounded-full flex items-center justify-center text-white text-sm font-semibold">
                      {getUserInitials(user)}
                    </div>
                  )}
                  <span className="text-gray-700 font-medium">
                    {user.firstName}
                  </span>
                </div>
                
                {/* Logout Button */}
                <button
                  onClick={onLogout}
                  className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors px-3 py-2 rounded-lg hover:bg-gray-100"
                >
                  <LogOut className="h-4 w-4" />
                  <span className="text-sm">Logout</span>
                </button>
              </div>
            ) : (
              <>
                <button 
                  onClick={onLoginClick}
                  className="flex items-center space-x-2 text-gray-700 hover:text-orange-500 transition-colors">
                  <User className="h-5 w-5" />
                  <span>Log in</span>
                </button>
                
                <button 
                  onClick={onSignupClick}
                  className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 text-white px-4 py-2 rounded-full font-medium transition-all shadow-lg transform hover:scale-105">
                  Sign up
                </button>
              </>
            )}

            <button
              onClick={onMenuClick}
              className="lg:hidden text-gray-600 hover:text-orange-500 ml-2"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};