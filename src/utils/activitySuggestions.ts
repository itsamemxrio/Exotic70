import { Activity, ActivityCategory, DayItinerary } from '../types';

interface DestinationData {
  attractions: string[];
  restaurants: string[];
  activities: string[];
  accommodations: string[];
  transport: string[];
  shopping: string[];
}

// Comprehensive destination database
const destinationDatabase: Record<string, DestinationData> = {
  'paris': {
    attractions: ['Eiffel Tower', 'Louvre Museum', 'Notre-Dame Cathedral', 'Arc de Triomphe', 'Sacré-Cœur Basilica', 'Champs-Élysées Walk', 'Montmartre District', 'Seine River Cruise', 'Palace of Versailles', 'Musée d\'Orsay'],
    restaurants: ['Le Jules Verne Restaurant', 'L\'Ambroisie', 'Bistrot Paul Bert', 'L\'As du Fallafel', 'Breizh Café', 'Du Pain et des Idées', 'Pierre Hermé Macarons', 'Café de Flore'],
    activities: ['Seine River Walk', 'Latin Quarter Stroll', 'Luxembourg Gardens Picnic', 'Galeries Lafayette Shopping', 'Paris Wine Tasting Tour', 'French Cooking Class', 'Photography Walk Montmartre'],
    accommodations: ['Hotel Plaza Athénée', 'Le Meurice', 'Hotel des Grands Boulevards', 'Generator Paris'],
    transport: ['Metro Day Pass', 'Vélib\' Bike Rental', 'Airport Transfer', 'Taxi to Versailles'],
    shopping: ['Champs-Élysées Shopping', 'Le Marais Boutiques', 'Flea Market at Clignancourt', 'Galeries Lafayette']
  },
  'tokyo': {
    attractions: ['Tokyo Tower', 'Senso-ji Temple', 'Meiji Shrine', 'Shibuya Crossing', 'Tsukiji Outer Market', 'Imperial Palace East Gardens', 'Harajuku Takeshita Street', 'Akihabara Electric Town', 'Ueno Park', 'Tokyo Skytree'],
    restaurants: ['Sukiyabashi Jiro Sushi', 'Ramen Yokocho Alley', 'Tsukiji Sushi Dai', 'Gonpachi Shibuya', 'Nabezo All-You-Can-Eat', 'Robot Restaurant Show', 'Memory Lane Yakitori'],
    activities: ['Shinjuku Gyoen Cherry Blossoms', 'Ryogoku Sumo Tournament', 'Shibuya Karaoke Night', 'Traditional Tea Ceremony', 'Manga Café Experience', 'Oedo Onsen Monogatari', 'Kabuki-za Theatre'],
    accommodations: ['Park Hyatt Tokyo', 'Aman Tokyo', 'Capsule Hotel', 'Ryokan Experience'],
    transport: ['JR Pass', 'Tokyo Metro Pass', 'Narita Express', 'Taxi Service'],
    shopping: ['Ginza Shopping', 'Harajuku Fashion', 'Don Quijote', 'Tokyo Station Character Street']
  },
  'bali': {
    attractions: ['Tanah Lot Temple', 'Uluwatu Temple', 'Jatiluwih Rice Terraces', 'Mount Batur Sunrise Trek', 'Sekumpul Waterfall', 'Sacred Monkey Forest Sanctuary', 'Besakih Mother Temple', 'Nusa Penida Island Tour'],
    restaurants: ['Locavore Restaurant', 'Mozaic Restaurant Gastronomique', 'Warung Babi Guling Ibu Oka', 'Bebek Bengil Dirty Duck', 'Naughty Nuri\'s Warung', 'Café Organic Ubud'],
    activities: ['Radiantly Alive Yoga Studio', 'Casa Luna Cooking School', 'Karsa Spa Traditional Massage', 'Mount Batur Volcano Hiking', 'Blue Lagoon Snorkeling', 'Campuhan Ridge Walk', 'Nyoman Ada Traditional Art'],
    accommodations: ['COMO Shambhala Estate', 'Hanging Gardens of Bali', 'Komaneka at Bisma', 'Hostel Recommendation'],
    transport: ['Scooter Rental', 'Private Driver', 'Airport Transfer', 'Boat to Nusa Penida'],
    shopping: ['Ubud Traditional Market', 'Seminyak Boutiques', 'Sukawati Art Market', 'Kuta Beach Shopping']
  },
  'new york': {
    attractions: ['Statue of Liberty & Ellis Island', 'Central Park Conservancy', 'Times Square', 'Empire State Building', 'Brooklyn Bridge', '9/11 Memorial & Museum', 'High Line Park', 'One World Observatory', 'Metropolitan Museum of Art'],
    restaurants: ['Eleven Madison Park', 'Peter Luger Steak House', 'Katz\'s Delicatessen', 'Joe\'s Pizza', 'Shake Shack Madison Square', 'The Halal Guys'],
    activities: ['Broadway Theatre Show', 'Yankee Stadium Game', 'Staten Island Ferry Ride', 'Chelsea Market Food Tour', 'Central Park Walking Tour', 'Manhattan Helicopter Tour', 'Blue Note Jazz Club'],
    accommodations: ['The Plaza', 'The Standard', 'Pod Hotels', 'HI New York City Hostel'],
    transport: ['MetroCard', 'Yellow Taxi', 'Uber/Lyft', 'Airport Transfer'],
    shopping: ['Fifth Avenue', 'SoHo Boutiques', 'Brooklyn Flea Market', 'Century 21']
  },
  'london': {
    attractions: ['Big Ben & Houses of Parliament', 'Tower of London', 'British Museum', 'London Eye', 'Buckingham Palace', 'Westminster Abbey', 'Tate Modern', 'Hyde Park', 'Camden Market'],
    restaurants: ['Dishoom Covent Garden', 'Sketch Mayfair', 'Gordon Ramsay Hell\'s Kitchen', 'Borough Market Food Hall', 'Poppies Fish & Chips', 'Fortnum & Mason Afternoon Tea'],
    activities: ['Thames Clipper River Cruise', 'Lion King West End', 'London Pub Crawl', 'Royal Observatory Greenwich', 'Warner Bros Harry Potter Studio', 'Jack the Ripper Ghost Walk', 'Wembley Stadium Tour'],
    accommodations: ['The Savoy', 'Claridge\'s', 'Premier Inn', 'YHA London'],
    transport: ['Oyster Card', 'London Bus Tour', 'Black Cab', 'Heathrow Express'],
    shopping: ['Oxford Street', 'Covent Garden', 'Portobello Road Market', 'Harrods']
  }
};

// Generic activities for destinations not in database
const genericActivities: DestinationData = {
  attractions: ['City Center Tour', 'Historical District Walk', 'Local Museum Visit', 'Scenic Viewpoint', 'Cultural Site', 'Religious Monument', 'Art Gallery'],
  restaurants: ['Local Cuisine Restaurant', 'Street Food Tour', 'Fine Dining Experience', 'Traditional Breakfast', 'Rooftop Restaurant', 'Local Market Food'],
  activities: ['Walking Tour', 'Cultural Experience', 'Local Workshop', 'Photography Tour', 'Sunset Viewing', 'Local Music/Dance Show', 'Nature Walk'],
  accommodations: ['City Center Hotel', 'Boutique Hotel', 'Local Guesthouse', 'Budget Accommodation'],
  transport: ['Local Transport Pass', 'Airport Transfer', 'City Tour Bus', 'Taxi Service'],
  shopping: ['Local Market', 'Souvenir Shopping', 'Traditional Crafts', 'Local Boutiques']
};

export const generateActivitySuggestions = (
  destination: string, 
  tripType: string, 
  dayItineraries: DayItinerary[]
): DayItinerary[] => {
  const destinationKey = destination.toLowerCase().split(',')[0].trim();
  const destinationData = destinationDatabase[destinationKey] || genericActivities;
  
  return dayItineraries.map((day, index) => {
    const activities: Activity[] = [];
    const dayNumber = index + 1;
    
    // Morning activity (9:00-12:00)
    const morningActivity = generateActivity(
      destinationData, 
      'morning', 
      dayNumber, 
      tripType,
      destination
    );
    if (morningActivity) activities.push(morningActivity);
    
    // Lunch (12:00-13:30)
    const lunchActivity = generateActivity(
      destinationData, 
      'lunch', 
      dayNumber, 
      tripType,
      destination
    );
    if (lunchActivity) activities.push(lunchActivity);
    
    // Afternoon activity (14:00-17:00)
    const afternoonActivity = generateActivity(
      destinationData, 
      'afternoon', 
      dayNumber, 
      tripType,
      destination
    );
    if (afternoonActivity) activities.push(afternoonActivity);
    
    // Dinner (19:00-21:00)
    const dinnerActivity = generateActivity(
      destinationData, 
      'dinner', 
      dayNumber, 
      tripType,
      destination
    );
    if (dinnerActivity) activities.push(dinnerActivity);
    
    // Evening activity for some days (21:30-23:00)
    if (dayNumber % 2 === 1 || tripType === 'nightlife') {
      const eveningActivity = generateActivity(
        destinationData, 
        'evening', 
        dayNumber, 
        tripType,
        destination
      );
      if (eveningActivity) activities.push(eveningActivity);
    }
    
    return {
      ...day,
      activities,
      notes: `Day ${dayNumber} in ${destination} - ${getTripTypeDescription(tripType)}`
    };
  });
};

const generateActivity = (
  destinationData: DestinationData,
  timeSlot: string,
  dayNumber: number,
  tripType: string,
  destination: string
): Activity | null => {
  let category: ActivityCategory;
  let title: string;
  let description: string;
  let startTime: string;
  let endTime: string;
  let location: string;
  let cost: number | undefined;
  
  switch (timeSlot) {
    case 'morning':
      category = 'attraction';
      startTime = '09:00';
      endTime = '12:00';
      
      if (dayNumber === 1) {
        title = getRandomItem(destinationData.attractions);
        description = `Start your ${destination} adventure with this iconic attraction`;
        cost = 25; // Keep cost for attractions
      } else {
        title = getRandomItem(destinationData.activities);
        description = `Morning activity to explore local culture`;
        cost = 15; // Keep cost for activities
      }
      break;
      
    case 'lunch':
      category = 'restaurant';
      startTime = '12:00';
      endTime = '13:30';
      title = getRandomItem(destinationData.restaurants);
      description = `Enjoy authentic local cuisine`;
      cost = undefined; // Remove cost for restaurants
      break;
      
    case 'afternoon':
      category = tripType === 'adventure' ? 'activity' : 'attraction';
      startTime = '14:00';
      endTime = '17:00';
      
      if (tripType === 'adventure') {
        title = getRandomItem(destinationData.activities);
        description = `Exciting adventure activity`;
        cost = 45; // Keep cost for activities
      } else {
        title = getRandomItem(destinationData.attractions);
        description = `Explore more of ${destination}'s highlights`;
        cost = 20; // Keep cost for attractions
      }
      break;
      
    case 'dinner':
      category = 'restaurant';
      startTime = '19:00';
      endTime = '21:00';
      title = getRandomItem(destinationData.restaurants);
      description = `Fine dining experience with local specialties`;
      cost = undefined; // Remove cost for restaurants
      break;
      
    case 'evening':
      category = 'activity';
      startTime = '21:30';
      endTime = '23:00';
      title = getRandomItem(destinationData.activities);
      description = `Evening entertainment and nightlife`;
      cost = 25; // Keep cost for activities
      break;
      
    default:
      return null;
  }
  
  location = `${destination}`;
  
  return {
    id: crypto.randomUUID(),
    title,
    description,
    location,
    startTime,
    endTime,
    category,
    notes: `Suggested activity - feel free to modify or replace`,
    notes: `AI curated for your ${destination} experience`,
    cost,
    bookedStatus: 'not-booked'
  };
};

const getRandomItem = (array: string[]): string => {
  return array[Math.floor(Math.random() * array.length)];
};

const getTripTypeDescription = (tripType: string): string => {
  switch (tripType) {
    case 'adventure':
      return 'Adventure-focused itinerary with exciting activities';
    case 'relaxation':
      return 'Relaxing itinerary with leisure activities';
    case 'cultural':
      return 'Cultural exploration with museums and historical sites';
    case 'food':
      return 'Culinary journey with local food experiences';
    case 'romantic':
      return 'Romantic getaway with intimate experiences';
    case 'family':
      return 'Family-friendly activities for all ages';
    case 'business':
      return 'Business trip with networking opportunities';
    case 'nature':
      return 'Nature-focused with outdoor activities';
    default:
      return 'Balanced itinerary with diverse activities';
  }
};