import { useState } from 'react';
import { Search, MapPin, Settings, User, Zap, Bike, Car, DollarSign, Navigation, Map as MapIcon } from 'lucide-react';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { User as UserType, ParkingLocation, Screen } from '../App';
import { mockLocations, getAvailabilityColor, getAvailabilityLabel } from '../lib/mockData';

interface HomeSearchProps {
  user: UserType | null;
  onLocationSelect: (location: ParkingLocation) => void;
  onNavigate: (screen: Screen) => void;
}

export function HomeSearch({ user, onLocationSelect, onNavigate }: HomeSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);

  const filters = [
    { id: 'ev', label: 'EV', icon: Zap },
    { id: '2w', label: '2W', icon: Bike },
    { id: '4w', label: '4W', icon: Car },
    { id: 'price', label: 'Price', icon: DollarSign },
    { id: 'nearest', label: 'Nearest', icon: Navigation },
  ];

  const filteredLocations = mockLocations.filter(loc => 
    loc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <p className="text-[#9CA3AF]">Welcome back</p>
              <h2 className="text-[#0F1724]">{user?.name || 'Guest'}</h2>
            </div>
            <div className="flex gap-2">
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-xl"
                onClick={() => onNavigate('my-bookings')}
              >
                <User className="w-5 h-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="rounded-xl"
                onClick={() => onNavigate('settings')}
              >
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
            <Input 
              placeholder="Search location or address"
              className="pl-12 h-14 rounded-xl border-[#E5E7EB]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Filters */}
          <div className="flex gap-2 overflow-x-auto mt-4 pb-2 scrollbar-hide">
            {filters.map((filter) => {
              const Icon = filter.icon;
              const isActive = activeFilter === filter.id;
              return (
                <Button
                  key={filter.id}
                  variant={isActive ? "default" : "outline"}
                  className={`rounded-xl flex-shrink-0 ${
                    isActive ? 'bg-[#0B6EFD]' : 'border-[#E5E7EB]'
                  }`}
                  onClick={() => setActiveFilter(isActive ? null : filter.id)}
                >
                  <Icon className="w-4 h-4 mr-2" />
                  {filter.label}
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Location Cards */}
      <div className="max-w-2xl mx-auto px-4 py-4 pb-24">
        <div className="space-y-3">
          {filteredLocations.map((location) => (
            <LocationCard 
              key={location.id}
              location={location}
              onClick={() => onLocationSelect(location)}
            />
          ))}
        </div>
      </div>

      {/* Map Preview - Sticky Bottom */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 max-w-2xl mx-auto">
        <Button 
          className="w-full h-14 bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
          onClick={() => setShowMap(!showMap)}
        >
          <MapIcon className="w-5 h-5 mr-2" />
          {showMap ? 'Show List View' : 'Show Map View'}
        </Button>
      </div>
    </div>
  );
}

interface LocationCardProps {
  location: ParkingLocation;
  onClick: () => void;
}

function LocationCard({ location, onClick }: LocationCardProps) {
  const availabilityColor = getAvailabilityColor(location.available, location.totalSlots);
  const availabilityLabel = getAvailabilityLabel(location.available, location.totalSlots);

  return (
    <div 
      className="bg-white rounded-2xl p-4 cursor-pointer hover:shadow-md transition-shadow border border-[#E5E7EB]"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="text-[#0F1724] mb-1">{location.name}</h3>
          <div className="flex items-center gap-2 text-[#9CA3AF]">
            <MapPin className="w-4 h-4" />
            <span>{location.distance}</span>
            <span>•</span>
            <span>{location.eta}</span>
          </div>
        </div>
        <Badge 
          className="rounded-lg"
          style={{ 
            backgroundColor: availabilityColor,
            color: 'white',
            border: 'none'
          }}
        >
          {availabilityLabel}
        </Badge>
      </div>

      <div className="flex items-center justify-between">
        <div className="flex gap-4">
          <div className="text-center">
            <div className="text-[#0F1724]">{location.available}</div>
            <div className="text-[#9CA3AF]">Available</div>
          </div>
          <div className="w-px bg-[#E5E7EB]" />
          <div className="text-center">
            <div className="text-[#0F1724]">{location.price}</div>
            <div className="text-[#9CA3AF]">Base Price</div>
          </div>
        </div>

        <div className="flex gap-2">
          {location.slots.ev > 0 && (
            <div className="w-8 h-8 rounded-lg bg-[#00C48C]/10 flex items-center justify-center">
              <Zap className="w-4 h-4 text-[#00C48C]" />
            </div>
          )}
          {location.slots.twoWheeler > 0 && (
            <div className="w-8 h-8 rounded-lg bg-[#0B6EFD]/10 flex items-center justify-center">
              <Bike className="w-4 h-4 text-[#0B6EFD]" />
            </div>
          )}
          {location.slots.fourWheeler > 0 && (
            <div className="w-8 h-8 rounded-lg bg-[#0B6EFD]/10 flex items-center justify-center">
              <Car className="w-4 h-4 text-[#0B6EFD]" />
            </div>
          )}
        </div>
      </div>

      {/* Amenities */}
      {location.amenities.length > 0 && (
        <div className="flex gap-2 mt-3 pt-3 border-t border-[#E5E7EB]">
          {location.amenities.slice(0, 3).map((amenity) => (
            <Badge 
              key={amenity} 
              variant="outline"
              className="rounded-lg text-[#374151] border-[#E5E7EB]"
            >
              {amenity}
            </Badge>
          ))}
          {location.amenities.length > 3 && (
            <Badge 
              variant="outline"
              className="rounded-lg text-[#374151] border-[#E5E7EB]"
            >
              +{location.amenities.length - 3}
            </Badge>
          )}
        </div>
      )}
    </div>
  );
}
