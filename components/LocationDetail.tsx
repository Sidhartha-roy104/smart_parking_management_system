import { ArrowLeft, MapPin, Star, Zap, Bike, Car, Navigation, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { ParkingLocation } from '../App';
import { getAvailabilityColor, getAvailabilityLabel } from '../lib/mockData';

interface LocationDetailProps {
  location: ParkingLocation;
  onBack: () => void;
  onBook: () => void;
}

export function LocationDetail({ location, onBack, onBook }: LocationDetailProps) {
  const availabilityColor = getAvailabilityColor(location.available, location.totalSlots);
  const availabilityLabel = getAvailabilityLabel(location.available, location.totalSlots);

  // Mock slot grid data
  const slotGrid = Array.from({ length: 24 }, (_, i) => ({
    id: `S${i + 1}`,
    status: i < location.available ? 'available' : i < location.totalSlots - 10 ? 'occupied' : 'reserved',
  }));

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3 mb-4">
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-xl"
              onClick={onBack}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1">
              <h2 className="text-[#0F1724]">{location.name}</h2>
              <div className="flex items-center gap-2 text-[#9CA3AF]">
                <MapPin className="w-4 h-4" />
                <span>{location.distance} away</span>
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
        </div>
      </div>

      {/* Map Thumbnail */}
      <div className="max-w-2xl mx-auto">
        <div className="h-48 bg-gradient-to-br from-[#0B6EFD]/20 to-[#00C48C]/20 relative overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 bg-[#EF4444] rounded-full flex items-center justify-center">
              <MapPin className="w-6 h-6 text-white" />
            </div>
          </div>
          <div className="absolute bottom-4 right-4">
            <Button className="bg-white text-[#0F1724] hover:bg-white/90 rounded-xl shadow-lg">
              <Navigation className="w-4 h-4 mr-2" />
              Directions
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-4 pb-32">
        {/* Quick Stats */}
        <div className="bg-white rounded-2xl p-4 mb-4 border border-[#E5E7EB]">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-[#0F1724] mb-1">{location.available}/{location.totalSlots}</div>
              <div className="text-[#9CA3AF]">Available</div>
            </div>
            <div>
              <div className="flex items-center justify-center gap-1 mb-1">
                <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
                <span className="text-[#0F1724]">{location.rating}</span>
              </div>
              <div className="text-[#9CA3AF]">Rating</div>
            </div>
            <div>
              <div className="text-[#0F1724] mb-1">{location.eta}</div>
              <div className="text-[#9CA3AF]">ETA</div>
            </div>
          </div>
        </div>

        {/* Slot Types */}
        <div className="bg-white rounded-2xl p-4 mb-4 border border-[#E5E7EB]">
          <h3 className="text-[#0F1724] mb-4">Available Slot Types</h3>
          <div className="space-y-3">
            {location.slots.ev > 0 && (
              <div className="flex items-center justify-between p-3 bg-[#00C48C]/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#00C48C]/10 flex items-center justify-center">
                    <Zap className="w-5 h-5 text-[#00C48C]" />
                  </div>
                  <div>
                    <div className="text-[#0F1724]">EV Charging</div>
                    <div className="text-[#9CA3AF]">{location.slots.ev} available</div>
                  </div>
                </div>
                <div className="text-[#0F1724]">₹40/hr</div>
              </div>
            )}
            
            {location.slots.twoWheeler > 0 && (
              <div className="flex items-center justify-between p-3 bg-[#0B6EFD]/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0B6EFD]/10 flex items-center justify-center">
                    <Bike className="w-5 h-5 text-[#0B6EFD]" />
                  </div>
                  <div>
                    <div className="text-[#0F1724]">2-Wheeler</div>
                    <div className="text-[#9CA3AF]">{location.slots.twoWheeler} available</div>
                  </div>
                </div>
                <div className="text-[#0F1724]">₹20/hr</div>
              </div>
            )}
            
            {location.slots.fourWheeler > 0 && (
              <div className="flex items-center justify-between p-3 bg-[#0B6EFD]/5 rounded-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#0B6EFD]/10 flex items-center justify-center">
                    <Car className="w-5 h-5 text-[#0B6EFD]" />
                  </div>
                  <div>
                    <div className="text-[#0F1724]">4-Wheeler</div>
                    <div className="text-[#9CA3AF]">{location.slots.fourWheeler} available</div>
                  </div>
                </div>
                <div className="text-[#0F1724]">{location.price}</div>
              </div>
            )}
          </div>
        </div>

        {/* Slot Grid Preview */}
        <div className="bg-white rounded-2xl p-4 mb-4 border border-[#E5E7EB]">
          <h3 className="text-[#0F1724] mb-4">Live Slot View</h3>
          <div className="grid grid-cols-6 gap-2 mb-4">
            {slotGrid.slice(0, 24).map((slot) => (
              <div
                key={slot.id}
                className="aspect-square rounded-lg flex items-center justify-center text-white"
                style={{
                  backgroundColor:
                    slot.status === 'available' ? '#00C48C' :
                    slot.status === 'reserved' ? '#F59E0B' : '#EF4444'
                }}
              >
                <span className="text-xs">{slot.id}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#00C48C]" />
              <span className="text-[#374151]">Available</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#F59E0B]" />
              <span className="text-[#374151]">Reserved</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 rounded bg-[#EF4444]" />
              <span className="text-[#374151]">Occupied</span>
            </div>
          </div>
        </div>

        {/* Dynamic Pricing Info */}
        <div className="bg-[#0B6EFD]/5 rounded-2xl p-4 mb-4 border border-[#0B6EFD]/20">
          <div className="flex items-start gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#0B6EFD]/10 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-[#0B6EFD]" />
            </div>
            <div>
              <h3 className="text-[#0F1724] mb-1">Off-Peak Pricing Active</h3>
              <p className="text-[#374151]">
                Rates are currently lower due to low demand. Book now to save!
              </p>
            </div>
          </div>
        </div>

        {/* Amenities */}
        <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB]">
          <h3 className="text-[#0F1724] mb-3">Amenities</h3>
          <div className="flex flex-wrap gap-2">
            {location.amenities.map((amenity) => (
              <Badge 
                key={amenity}
                variant="outline"
                className="rounded-lg text-[#374151] border-[#E5E7EB]"
              >
                {amenity}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-3">
          <div>
            <div className="text-[#9CA3AF]">Starting from</div>
            <div className="text-[#0F1724]">{location.price}</div>
          </div>
          <Button 
            className="h-14 px-8 bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
            onClick={onBook}
          >
            Book Now
          </Button>
        </div>
      </div>
    </div>
  );
}
