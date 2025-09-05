import React from 'react';
import { PasswordStrength } from '../utils/validation';
import { Shield, ShieldAlert, ShieldCheck } from 'lucide-react';

interface PasswordStrengthIndicatorProps {
  passwordStrength: PasswordStrength;
  password: string;
}

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({
  passwordStrength,
  password
}) => {
  if (!password) return null;

  const getStrengthColor = (strength: string) => {
    switch (strength) {
      case 'weak':
        return 'text-red-600 bg-red-100';
      case 'medium':
        return 'text-yellow-600 bg-yellow-100';
      case 'strong':
        return 'text-green-600 bg-green-100';
      default:
        return 'text-gray-600 bg-gray-100';
    }
  };

  const getStrengthIcon = (strength: string) => {
    switch (strength) {
      case 'weak':
        return <ShieldAlert className="h-4 w-4" />;
      case 'medium':
        return <Shield className="h-4 w-4" />;
      case 'strong':
        return <ShieldCheck className="h-4 w-4" />;
      default:
        return <Shield className="h-4 w-4" />;
    }
  };

  const getProgressWidth = () => {
    return `${(passwordStrength.score / 5) * 100}%`;
  };

  const getProgressColor = () => {
    switch (passwordStrength.strength) {
      case 'weak':
        return 'bg-red-500';
      case 'medium':
        return 'bg-yellow-500';
      case 'strong':
        return 'bg-green-500';
      default:
        return 'bg-gray-300';
    }
  };

  return (
    <div className="mt-2 space-y-2">
      {/* Strength Indicator */}
      <div className="flex items-center justify-between">
        <div className={`flex items-center space-x-2 px-2 py-1 rounded-full text-xs font-medium ${getStrengthColor(passwordStrength.strength)}`}>
          {getStrengthIcon(passwordStrength.strength)}
          <span className="capitalize">{passwordStrength.strength} Password</span>
        </div>
        <span className="text-xs text-gray-500">
          {passwordStrength.score}/5
        </span>
      </div>

      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className={`h-2 rounded-full transition-all duration-300 ${getProgressColor()}`}
          style={{ width: getProgressWidth() }}
        />
      </div>

      {/* Errors */}
      {passwordStrength.errors.length > 0 && (
        <div className="space-y-1">
          {passwordStrength.errors.map((error, index) => (
            <p key={index} className="text-xs text-red-600 flex items-center space-x-1">
              <span className="w-1 h-1 bg-red-600 rounded-full" />
              <span>{error}</span>
            </p>
          ))}
        </div>
      )}

      {/* Suggestions for improvement */}
      {passwordStrength.suggestions.length > 0 && passwordStrength.strength !== 'strong' && (
        <div className="space-y-1">
          <p className="text-xs font-medium text-gray-700">Suggestions:</p>
          {passwordStrength.suggestions.map((suggestion, index) => (
            <p key={index} className="text-xs text-gray-600 flex items-center space-x-1">
              <span className="w-1 h-1 bg-gray-400 rounded-full" />
              <span>{suggestion}</span>
            </p>
          ))}
        </div>
      )}
    </div>
  );
};