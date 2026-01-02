import { ArrowLeft, Navigation, X, QrCode, Clock, MapPin, Star } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { User, Booking, Screen } from '../App';
import { useState } from 'react';

interface MyBookingsProps {
  user: User | null;
  currentBooking: Booking | null;
  onBack: () => void;
  onNavigate: (screen: Screen) => void;
}

export function MyBookings({ user, currentBooking, onBack, onNavigate }: MyBookingsProps) {
  const [showQR, setShowQR] = useState(false);

  // Mock booking history
  const bookingHistory: Booking[] = [
    {
      id: 'B002',
      locationId: 'L002',
      locationName: 'City Center Plaza',
      slotId: 'S45',
      slotType: '2-Wheeler',
      status: 'completed',
      startTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
      endTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000),
      price: 60,
    },
    {
      id: 'B003',
      locationId: 'L001',
      locationName: 'Green Mall Parking',
      slotId: 'S78',
      slotType: '4-Wheeler',
      status: 'completed',
      startTime: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
      endTime: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000),
      price: 60,
    },
  ];

  const handleCancelBooking = () => {
    // Handle booking cancellation
    onBack();
  };

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-xl"
              onClick={onBack}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1">
              <h2 className="text-[#0F1724]">My Bookings</h2>
              <p className="text-[#9CA3AF]">{user?.name}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-4 space-y-4">
        {/* Active Booking */}
        {currentBooking && currentBooking.status === 'active' && (
          <div className="bg-white rounded-2xl p-4 border-2 border-[#0B6EFD]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[#0F1724]">Active Booking</h3>
              <Badge className="bg-[#00C48C] rounded-lg">Active</Badge>
            </div>

            <div className="space-y-3 mb-4">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-[#9CA3AF]" />
                <div className="flex-1">
                  <div className="text-[#0F1724]">{currentBooking.locationName}</div>
                  <div className="text-[#9CA3AF]">Slot {currentBooking.slotId}</div>
                </div>
              </div>

              <div className="bg-[#F3F4F6] rounded-xl p-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#9CA3AF]">Started</span>
                  <span className="text-[#0F1724]">
                    {currentBooking.startTime.toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-[#9CA3AF]">Duration</span>
                  <span className="text-[#0F1724]">
                    {Math.floor((Date.now() - currentBooking.startTime.getTime()) / (60 * 1000))} mins
                  </span>
                </div>
              </div>

              {currentBooking.expiresInMins && (
                <div className="bg-[#F59E0B]/10 rounded-xl p-3 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#F59E0B]" />
                  <div>
                    <div className="text-[#F59E0B]">
                      {currentBooking.expiresInMins} minutes remaining
                    </div>
                    <div className="text-[#374151]">to reach the location</div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button 
                className="flex-1 bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
                onClick={() => {/* Navigate to location */}}
              >
                <Navigation className="w-4 h-4 mr-2" />
                Navigate
              </Button>
              <Button 
                variant="outline"
                className="flex-1 rounded-xl"
                onClick={() => setShowQR(true)}
              >
                <QrCode className="w-4 h-4 mr-2" />
                Show QR
              </Button>
              <Button 
                variant="ghost"
                size="icon"
                className="rounded-xl text-[#EF4444]"
                onClick={handleCancelBooking}
              >
                <X className="w-5 h-5" />
              </Button>
            </div>
          </div>
        )}

        {/* QR Code Modal */}
        {showQR && currentBooking && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-6 max-w-sm w-full">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-[#0F1724]">Entry QR Code</h3>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setShowQR(false)}
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>

              <div className="w-full aspect-square bg-[#F3F4F6] rounded-2xl flex items-center justify-center mb-4">
                <QrCode className="w-2/3 h-2/3 text-[#0F1724]" />
              </div>

              <div className="bg-[#F3F4F6] rounded-xl p-3 text-center">
                <div className="text-[#9CA3AF] mb-1">Code</div>
                <div className="text-[#0F1724]">{currentBooking.qrCode}</div>
              </div>
            </div>
          </div>
        )}

        {/* Booking History */}
        <div>
          <h3 className="text-[#0F1724] mb-3 px-1">History</h3>
          <div className="space-y-3">
            {bookingHistory.map((booking) => (
              <div 
                key={booking.id}
                className="bg-white rounded-2xl p-4 border border-[#E5E7EB]"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="text-[#0F1724] mb-1">{booking.locationName}</div>
                    <div className="text-[#9CA3AF]">
                      {booking.startTime.toLocaleDateString([], { 
                        month: 'short', 
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </div>
                  </div>
                  <Badge 
                    variant="outline"
                    className="rounded-lg text-[#374151] border-[#E5E7EB]"
                  >
                    Completed
                  </Badge>
                </div>

                <div className="grid grid-cols-3 gap-3 text-center text-sm mb-3">
                  <div>
                    <div className="text-[#9CA3AF]">Slot</div>
                    <div className="text-[#0F1724]">{booking.slotId}</div>
                  </div>
                  <div>
                    <div className="text-[#9CA3AF]">Duration</div>
                    <div className="text-[#0F1724]">
                      {booking.endTime 
                        ? `${Math.floor((booking.endTime.getTime() - booking.startTime.getTime()) / (60 * 60 * 1000))}h`
                        : '-'}
                    </div>
                  </div>
                  <div>
                    <div className="text-[#9CA3AF]">Total</div>
                    <div className="text-[#0F1724]">₹{booking.price}</div>
                  </div>
                </div>

                <div className="flex gap-2 pt-3 border-t border-[#E5E7EB]">
                  <Button 
                    variant="outline"
                    className="flex-1 rounded-xl"
                  >
                    View Receipt
                  </Button>
                  <Button 
                    variant="outline"
                    className="flex-1 rounded-xl"
                  >
                    <Star className="w-4 h-4 mr-2" />
                    Rate
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {!currentBooking && bookingHistory.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 rounded-full bg-[#F3F4F6] flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-[#9CA3AF]" />
            </div>
            <h3 className="text-[#0F1724] mb-2">No Bookings Yet</h3>
            <p className="text-[#9CA3AF] mb-6">Start by finding parking near you</p>
            <Button 
              className="bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
              onClick={onBack}
            >
              Find Parking
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
