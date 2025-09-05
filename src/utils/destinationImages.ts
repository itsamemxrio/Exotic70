// Destination-specific thumbnail images from Pexels
export const getDestinationThumbnail = (activityTitle: string, destination: string): string => {
  const destinationKey = destination.toLowerCase().split(',')[0].trim();
  
  // Activity-specific images based on title keywords
  const activityKeywords = activityTitle.toLowerCase();
  
  // Paris-specific images
  if (destinationKey.includes('paris')) {
    if (activityKeywords.includes('eiffel')) {
      return 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('louvre')) {
      return 'https://images.pexels.com/photos/2675266/pexels-photo-2675266.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('notre-dame') || activityKeywords.includes('cathedral')) {
      return 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('arc de triomphe')) {
      return 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('versailles') || activityKeywords.includes('palace')) {
      return 'https://images.pexels.com/photos/2901209/pexels-photo-2901209.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('sacré-cœur') || activityKeywords.includes('sacre')) {
      return 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('champs-élysées') || activityKeywords.includes('champs')) {
      return 'https://images.pexels.com/photos/1530259/pexels-photo-1530259.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('montmartre')) {
      return 'https://images.pexels.com/photos/1461974/pexels-photo-1461974.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('musée d\'orsay') || activityKeywords.includes('orsay')) {
      return 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('seine') || activityKeywords.includes('river')) {
      return 'https://images.pexels.com/photos/1850619/pexels-photo-1850619.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('restaurant') || activityKeywords.includes('bistrot')) {
      return 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    // Default Paris image
    return 'https://images.pexels.com/photos/338515/pexels-photo-338515.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
  }
  
  // Tokyo-specific images
  if (destinationKey.includes('tokyo')) {
    if (activityKeywords.includes('tower')) {
      return 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('temple') || activityKeywords.includes('shrine')) {
      return 'https://images.pexels.com/photos/161251/senso-ji-temple-japan-kyoto-landmark-161251.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('shibuya') || activityKeywords.includes('crossing')) {
      return 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('sushi') || activityKeywords.includes('ramen')) {
      return 'https://images.pexels.com/photos/357756/pexels-photo-357756.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    // Default Tokyo image
    return 'https://images.pexels.com/photos/2506923/pexels-photo-2506923.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
  }
  
  // Bali-specific images
  if (destinationKey.includes('bali')) {
    if (activityKeywords.includes('temple')) {
      return 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('rice') || activityKeywords.includes('terrace')) {
      return 'https://images.pexels.com/photos/2166553/pexels-photo-2166553.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('volcano') || activityKeywords.includes('mount')) {
      return 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('yoga') || activityKeywords.includes('spa')) {
      return 'https://images.pexels.com/photos/1051838/pexels-photo-1051838.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    // Default Bali image
    return 'https://images.pexels.com/photos/2166559/pexels-photo-2166559.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
  }
  
  // New York-specific images
  if (destinationKey.includes('new york')) {
    if (activityKeywords.includes('statue of liberty')) {
      return 'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('central park')) {
      return 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('times square')) {
      return 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('empire state')) {
      return 'https://images.pexels.com/photos/64271/queen-of-liberty-statue-of-liberty-new-york-liberty-statue-64271.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    // Default New York image
    return 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
  }
  
  // London-specific images
  if (destinationKey.includes('london')) {
    if (activityKeywords.includes('big ben')) {
      return 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('tower of london')) {
      return 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('london eye')) {
      return 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    if (activityKeywords.includes('buckingham')) {
      return 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
    }
    // Default London image
    return 'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
  }
  
  // Generic activity-based images
  if (activityKeywords.includes('restaurant') || activityKeywords.includes('food') || activityKeywords.includes('dining')) {
    return 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
  }
  
  if (activityKeywords.includes('museum') || activityKeywords.includes('gallery')) {
    return 'https://images.pexels.com/photos/1707820/pexels-photo-1707820.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
  }
  
  if (activityKeywords.includes('park') || activityKeywords.includes('garden')) {
    return 'https://images.pexels.com/photos/378570/pexels-photo-378570.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
  }
  
  if (activityKeywords.includes('shopping') || activityKeywords.includes('market')) {
    return 'https://images.pexels.com/photos/264636/pexels-photo-264636.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
  }
  
  if (activityKeywords.includes('hotel') || activityKeywords.includes('accommodation')) {
    return 'https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
  }
  
  // Default generic travel image
  return 'https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=300&h=200';
};

// Get contact phone numbers for attractions
export const getActivityPhoneNumber = (activityTitle: string, destination: string): string | undefined => {
  const destinationKey = destination.toLowerCase().split(',')[0].trim();
  const activityKeywords = activityTitle.toLowerCase();
  
  // Paris phone numbers
  if (destinationKey.includes('paris')) {
    if (activityKeywords.includes('eiffel')) {
      return '+33 8 92 70 12 39';
    }
    if (activityKeywords.includes('louvre')) {
      return '+33 1 40 20 50 50';
    }
    if (activityKeywords.includes('notre-dame') || activityKeywords.includes('cathedral')) {
      return '+33 1 42 34 56 10';
    }
    if (activityKeywords.includes('arc de triomphe')) {
      return '+33 1 55 37 73 77';
    }
    if (activityKeywords.includes('versailles')) {
      return '+33 1 30 83 78 00';
    }
    if (activityKeywords.includes('sacré-cœur')) {
      return '+33 1 53 41 89 00';
    }
    if (activityKeywords.includes('musée d\'orsay')) {
      return '+33 1 40 49 48 14';
    }
  }
  
  // Tokyo phone numbers
  if (destinationKey.includes('tokyo')) {
    if (activityKeywords.includes('tokyo tower')) {
      return '+81 3-3433-5111';
    }
    if (activityKeywords.includes('senso-ji')) {
      return '+81 3-3842-0181';
    }
    if (activityKeywords.includes('meiji shrine')) {
      return '+81 3-3379-5511';
    }
    if (activityKeywords.includes('imperial palace')) {
      return '+81 3-3213-1111';
    }
    if (activityKeywords.includes('tokyo skytree')) {
      return '+81 570-55-0634';
    }
  }
  
  // Bali phone numbers
  if (destinationKey.includes('bali')) {
    if (activityKeywords.includes('tanah lot')) {
      return '+62 361-812345';
    }
    if (activityKeywords.includes('uluwatu')) {
      return '+62 361-703982';
    }
    if (activityKeywords.includes('besakih')) {
      return '+62 366-23640';
    }
  }
  
  // New York phone numbers
  if (destinationKey.includes('new york')) {
    if (activityKeywords.includes('statue of liberty')) {
      return '+1 212-363-3200';
    }
    if (activityKeywords.includes('empire state')) {
      return '+1 212-736-3100';
    }
    if (activityKeywords.includes('9/11 memorial')) {
      return '+1 212-312-8800';
    }
    if (activityKeywords.includes('metropolitan')) {
      return '+1 212-535-7710';
    }
  }
  
  // London phone numbers
  if (destinationKey.includes('london')) {
    if (activityKeywords.includes('tower of london')) {
      return '+44 20 3166 6000';
    }
    if (activityKeywords.includes('british museum')) {
      return '+44 20 7323 8299';
    }
    if (activityKeywords.includes('london eye')) {
      return '+44 871 781 3000';
    }
    if (activityKeywords.includes('westminster abbey')) {
      return '+44 20 7222 5152';
    }
  }
  
  return undefined;
};

// Get precise addresses for activities
export const getActivityAddress = (activityTitle: string, destination: string): string => {
  const destinationKey = destination.toLowerCase().split(',')[0].trim();
  const activityKeywords = activityTitle.toLowerCase();
  
  // Paris addresses
  if (destinationKey.includes('paris')) {
    if (activityKeywords.includes('eiffel')) {
      return 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France';
    }
    if (activityKeywords.includes('louvre')) {
      return 'Rue de Rivoli, 75001 Paris, France';
    }
    if (activityKeywords.includes('notre-dame') || activityKeywords.includes('cathedral')) {
      return '6 Parvis Notre-Dame - Pl. Jean-Paul II, 75004 Paris, France';
    }
    if (activityKeywords.includes('arc de triomphe')) {
      return 'Place Charles de Gaulle, 75008 Paris, France';
    }
    if (activityKeywords.includes('sacré-cœur')) {
      return '35 Rue du Chevalier de la Barre, 75018 Paris, France';
    }
    if (activityKeywords.includes('champs-élysées')) {
      return 'Avenue des Champs-Élysées, 75008 Paris, France';
    }
    if (activityKeywords.includes('montmartre')) {
      return 'Montmartre, 75018 Paris, France';
    }
    if (activityKeywords.includes('versailles')) {
      return 'Place d\'Armes, 78000 Versailles, France';
    }
    if (activityKeywords.includes('musée d\'orsay')) {
      return '1 Rue de la Légion d\'Honneur, 75007 Paris, France';
    }
    if (activityKeywords.includes('jules verne')) {
      return 'Eiffel Tower, Avenue Gustave Eiffel, 75007 Paris, France';
    }
    if (activityKeywords.includes('bistrot paul bert')) {
      return '18 Rue Paul Bert, 75011 Paris, France';
    }
    if (activityKeywords.includes('latin quarter')) {
      return 'Latin Quarter, 75005 Paris, France';
    }
    if (activityKeywords.includes('luxembourg')) {
      return 'Luxembourg Gardens, 75006 Paris, France';
    }
    // Default Paris location
    return 'Paris, France';
  }
  
  // Tokyo addresses
  if (destinationKey.includes('tokyo')) {
    if (activityKeywords.includes('tokyo tower')) {
      return '4 Chome-2-8 Shibakoen, Minato City, Tokyo 105-0011, Japan';
    }
    if (activityKeywords.includes('senso-ji')) {
      return '2 Chome-3-1 Asakusa, Taito City, Tokyo 111-0032, Japan';
    }
    if (activityKeywords.includes('meiji shrine')) {
      return '1-1 Yoyogikamizonocho, Shibuya City, Tokyo 151-8557, Japan';
    }
    if (activityKeywords.includes('shibuya crossing')) {
      return 'Shibuya Crossing, Shibuya City, Tokyo, Japan';
    }
    if (activityKeywords.includes('tsukiji')) {
      return 'Tsukiji, Chuo City, Tokyo, Japan';
    }
    if (activityKeywords.includes('imperial palace')) {
      return '1-1 Chiyoda, Chiyoda City, Tokyo 100-8111, Japan';
    }
    if (activityKeywords.includes('harajuku')) {
      return 'Harajuku, Shibuya City, Tokyo, Japan';
    }
    if (activityKeywords.includes('akihabara')) {
      return 'Akihabara, Taito City, Tokyo, Japan';
    }
    if (activityKeywords.includes('ueno park')) {
      return 'Uenokoen, Taito City, Tokyo 110-0007, Japan';
    }
    if (activityKeywords.includes('tokyo skytree')) {
      return '1 Chome-1-2 Oshiage, Sumida City, Tokyo 131-8634, Japan';
    }
    // Default Tokyo location
    return 'Tokyo, Japan';
  }
  
  // Bali addresses
  if (destinationKey.includes('bali')) {
    if (activityKeywords.includes('tanah lot')) {
      return 'Tanah Lot Temple, Tabanan Regency, Bali, Indonesia';
    }
    if (activityKeywords.includes('uluwatu')) {
      return 'Uluwatu Temple, Pecatu, South Kuta, Badung Regency, Bali, Indonesia';
    }
    if (activityKeywords.includes('jatiluwih')) {
      return 'Jatiluwih Rice Terraces, Penebel, Tabanan Regency, Bali, Indonesia';
    }
    if (activityKeywords.includes('mount batur')) {
      return 'Mount Batur, Kintamani, Bangli Regency, Bali, Indonesia';
    }
    if (activityKeywords.includes('sekumpul')) {
      return 'Sekumpul Waterfall, Sawan, Buleleng Regency, Bali, Indonesia';
    }
    if (activityKeywords.includes('ubud')) {
      return 'Ubud, Gianyar Regency, Bali, Indonesia';
    }
    if (activityKeywords.includes('besakih')) {
      return 'Besakih Temple, Rendang, Karangasem Regency, Bali, Indonesia';
    }
    if (activityKeywords.includes('nusa penida')) {
      return 'Nusa Penida, Klungkung Regency, Bali, Indonesia';
    }
    // Default Bali location
    return 'Bali, Indonesia';
  }
  
  // New York addresses
  if (destinationKey.includes('new york')) {
    if (activityKeywords.includes('statue of liberty')) {
      return 'Liberty Island, New York, NY 10004, USA';
    }
    if (activityKeywords.includes('central park')) {
      return 'Central Park, New York, NY, USA';
    }
    if (activityKeywords.includes('times square')) {
      return 'Times Square, New York, NY 10036, USA';
    }
    if (activityKeywords.includes('empire state')) {
      return '20 W 34th St, New York, NY 10001, USA';
    }
    if (activityKeywords.includes('brooklyn bridge')) {
      return 'Brooklyn Bridge, New York, NY, USA';
    }
    if (activityKeywords.includes('9/11 memorial')) {
      return '180 Greenwich St, New York, NY 10007, USA';
    }
    if (activityKeywords.includes('high line')) {
      return 'High Line, New York, NY, USA';
    }
    if (activityKeywords.includes('one world')) {
      return '285 Fulton St, New York, NY 10007, USA';
    }
    if (activityKeywords.includes('metropolitan')) {
      return '1000 5th Ave, New York, NY 10028, USA';
    }
    // Default New York location
    return 'New York, NY, USA';
  }
  
  // London addresses
  if (destinationKey.includes('london')) {
    if (activityKeywords.includes('big ben')) {
      return 'Westminster, London SW1A 0AA, UK';
    }
    if (activityKeywords.includes('tower of london')) {
      return 'St Katharine\'s & Wapping, London EC3N 4AB, UK';
    }
    if (activityKeywords.includes('british museum')) {
      return 'Great Russell St, Bloomsbury, London WC1B 3DG, UK';
    }
    if (activityKeywords.includes('london eye')) {
      return 'Riverside Building, County Hall, London SE1 7PB, UK';
    }
    if (activityKeywords.includes('buckingham palace')) {
      return 'Buckingham Palace, London SW1A 1AA, UK';
    }
    if (activityKeywords.includes('westminster abbey')) {
      return '20 Deans Yd, Westminster, London SW1P 3PA, UK';
    }
    if (activityKeywords.includes('tate modern')) {
      return 'Bankside, London SE1 9TG, UK';
    }
    if (activityKeywords.includes('hyde park')) {
      return 'Hyde Park, London, UK';
    }
    if (activityKeywords.includes('camden market')) {
      return 'Camden Lock Pl, Camden Town, London NW1 8AF, UK';
    }
    // Default London location
    return 'London, UK';
  }
  
  // Default to destination
  return destination;
};