import { useState, useEffect } from 'react';
import { ArrowLeft, Zap, Bike, Car, Clock, CheckCircle2, QrCode, Share2, Copy } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { ParkingLocation, Booking } from '../App';
import { motion } from 'framer-motion';

interface BookingFlowProps {
  location: ParkingLocation;
  onBack: () => void;
  onComplete: (booking: Booking) => void;
}

type Step = 'select-slot' | 'confirm' | 'payment' | 'qr';
type SlotType = 'ev' | 'twoWheeler' | 'fourWheeler';

export function BookingFlow({ location, onBack, onComplete }: BookingFlowProps) {
  const [currentStep, setCurrentStep] = useState<Step>('select-slot');
  const [selectedSlotType, setSelectedSlotType] = useState<SlotType | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [reservationTimer, setReservationTimer] = useState(600); // 10 minutes
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  useEffect(() => {
    if (currentStep === 'confirm' || currentStep === 'payment') {
      const interval = setInterval(() => {
        setReservationTimer((prev) => {
          if (prev <= 0) {
            clearInterval(interval);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const handleSlotTypeSelect = (type: SlotType) => {
    setSelectedSlotType(type);
    // Auto-assign available slot
    const slotNumber = Math.floor(Math.random() * 100) + 1;
    setSelectedSlot(`S${slotNumber}`);
    setCurrentStep('confirm');
  };

  const handlePayment = () => {
    setPaymentProcessing(true);
    setCurrentStep('payment');
    
    // Simulate payment processing
    setTimeout(() => {
      setPaymentProcessing(false);
      setCurrentStep('qr');
    }, 2000);
  };

  const handleComplete = () => {
    const booking: Booking = {
      id: `B${Date.now()}`,
      locationId: location.id,
      locationName: location.name,
      slotId: selectedSlot!,
      slotType: selectedSlotType === 'ev' ? 'EV Charging' : 
                selectedSlotType === 'twoWheeler' ? '2-Wheeler' : '4-Wheeler',
      status: 'active',
      startTime: new Date(),
      price: selectedSlotType === 'ev' ? 40 : selectedSlotType === 'twoWheeler' ? 20 : 30,
      qrCode: `QR-${Date.now()}-${selectedSlot}`,
    };
    onComplete(booking);
  };

  const minutes = Math.floor(reservationTimer / 60);
  const seconds = reservationTimer % 60;

  const slotTypes = [
    {
      id: 'ev' as SlotType,
      name: 'EV Charging',
      icon: Zap,
      available: location.slots.ev,
      price: '₹40/hr',
      color: '#00C48C',
    },
    {
      id: 'twoWheeler' as SlotType,
      name: '2-Wheeler',
      icon: Bike,
      available: location.slots.twoWheeler,
      price: '₹20/hr',
      color: '#0B6EFD',
    },
    {
      id: 'fourWheeler' as SlotType,
      name: '4-Wheeler',
      icon: Car,
      available: location.slots.fourWheeler,
      price: '₹30/hr',
      color: '#0B6EFD',
    },
  ];

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
              <h2 className="text-[#0F1724]">Book Parking</h2>
              <p className="text-[#9CA3AF]">{location.name}</p>
            </div>
          </div>

          {/* Stepper */}
          <div className="flex items-center gap-2">
            {['select-slot', 'confirm', 'payment', 'qr'].map((step, index) => (
              <div key={step} className="flex-1">
                <div 
                  className="h-1 rounded-full transition-colors"
                  style={{
                    backgroundColor: 
                      ['select-slot', 'confirm', 'payment', 'qr'].indexOf(currentStep) >= index 
                        ? '#0B6EFD' 
                        : '#E5E7EB'
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-4 pb-32">
        {currentStep === 'select-slot' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-3"
          >
            <h3 className="text-[#0F1724] mb-4">Select Slot Type</h3>
            {slotTypes.map((type) => {
              const Icon = type.icon;
              return (
                <button
                  key={type.id}
                  className="w-full bg-white rounded-2xl p-4 border border-[#E5E7EB] hover:border-[#0B6EFD] transition-colors text-left"
                  onClick={() => handleSlotTypeSelect(type.id)}
                  disabled={type.available === 0}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div 
                        className="w-12 h-12 rounded-xl flex items-center justify-center"
                        style={{ backgroundColor: `${type.color}15` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: type.color }} />
                      </div>
                      <div>
                        <div className="text-[#0F1724] mb-1">{type.name}</div>
                        <div className="text-[#9CA3AF]">
                          {type.available > 0 ? `${type.available} available` : 'Not available'}
                        </div>
                      </div>
                    </div>
                    <div className="text-[#0F1724]">{type.price}</div>
                  </div>
                </button>
              );
            })}
          </motion.div>
        )}

        {currentStep === 'confirm' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Timer */}
            <div className="bg-[#F59E0B]/10 rounded-2xl p-4 border border-[#F59E0B]/20">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-[#F59E0B]" />
                <div>
                  <div className="text-[#0F1724]">Reservation expires in</div>
                  <div className="text-[#F59E0B]">
                    {minutes}:{seconds.toString().padStart(2, '0')}
                  </div>
                </div>
              </div>
            </div>

            {/* Slot Details */}
            <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB]">
              <h3 className="text-[#0F1724] mb-4">Booking Details</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Slot Number</span>
                  <span className="text-[#0F1724]">{selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Slot Type</span>
                  <span className="text-[#0F1724]">
                    {slotTypes.find(t => t.id === selectedSlotType)?.name}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Location</span>
                  <span className="text-[#0F1724]">{location.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Duration</span>
                  <span className="text-[#0F1724]">2 hours (estimated)</span>
                </div>
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB]">
              <h3 className="text-[#0F1724] mb-4">Price Breakdown</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Base Rate (2 hrs)</span>
                  <span className="text-[#0F1724]">
                    ₹{(slotTypes.find(t => t.id === selectedSlotType)?.price.match(/\d+/)?.[0] || 0) * 2}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Platform Fee</span>
                  <span className="text-[#0F1724]">₹5</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#00C48C]">Off-Peak Discount</span>
                  <span className="text-[#00C48C]">-₹10</span>
                </div>
                <div className="border-t border-[#E5E7EB] pt-3 flex justify-between">
                  <span className="text-[#0F1724]">Total</span>
                  <span className="text-[#0F1724]">
                    ₹{(slotTypes.find(t => t.id === selectedSlotType)?.price.match(/\d+/)?.[0] || 0) * 2 + 5 - 10}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {currentStep === 'payment' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col items-center justify-center py-12"
          >
            {paymentProcessing ? (
              <div className="text-center">
                <div className="w-16 h-16 border-4 border-[#0B6EFD] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                <h3 className="text-[#0F1724] mb-2">Processing Payment</h3>
                <p className="text-[#9CA3AF]">Please wait...</p>
              </div>
            ) : (
              <div className="text-center">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", duration: 0.5 }}
                  className="w-24 h-24 bg-[#00C48C] rounded-full flex items-center justify-center mx-auto mb-4"
                >
                  <CheckCircle2 className="w-12 h-12 text-white" />
                </motion.div>
                <h3 className="text-[#0F1724] mb-2">Payment Successful!</h3>
                <p className="text-[#9CA3AF]">Generating your QR code...</p>
              </div>
            )}
          </motion.div>
        )}

        {currentStep === 'qr' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-4"
          >
            {/* Success Message */}
            <div className="bg-[#00C48C]/10 rounded-2xl p-4 border border-[#00C48C]/20 text-center">
              <CheckCircle2 className="w-12 h-12 text-[#00C48C] mx-auto mb-3" />
              <h3 className="text-[#0F1724] mb-1">Booking Confirmed!</h3>
              <p className="text-[#374151]">Slot {selectedSlot} reserved for you</p>
            </div>

            {/* QR Code */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
              <div className="text-center mb-4">
                <h3 className="text-[#0F1724] mb-2">Entry QR Code</h3>
                <p className="text-[#9CA3AF]">Show this at the gate</p>
              </div>
              
              <div className="w-64 h-64 mx-auto bg-[#F3F4F6] rounded-2xl flex items-center justify-center mb-4">
                <QrCode className="w-48 h-48 text-[#0F1724]" />
              </div>

              <div className="bg-[#F3F4F6] rounded-xl p-3 text-center mb-4">
                <div className="text-[#9CA3AF] mb-1">Code</div>
                <div className="text-[#0F1724]">QR-{Date.now()}-{selectedSlot}</div>
              </div>

              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 rounded-xl">
                  <Copy className="w-4 h-4 mr-2" />
                  Copy
                </Button>
                <Button variant="outline" className="flex-1 rounded-xl">
                  <Share2 className="w-4 h-4 mr-2" />
                  Share
                </Button>
              </div>
            </div>

            {/* Booking Details */}
            <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB]">
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Location</span>
                  <span className="text-[#0F1724]">{location.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Slot</span>
                  <span className="text-[#0F1724]">{selectedSlot}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#9CA3AF]">Valid Until</span>
                  <span className="text-[#0F1724]">
                    {new Date(Date.now() + 2 * 60 * 60 * 1000).toLocaleTimeString([], { 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Bottom CTA */}
      {currentStep === 'confirm' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 max-w-2xl mx-auto">
          <Button 
            className="w-full h-14 bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
            onClick={handlePayment}
          >
            Proceed to Payment
          </Button>
        </div>
      )}

      {currentStep === 'qr' && (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 max-w-2xl mx-auto">
          <Button 
            className="w-full h-14 bg-[#00C48C] hover:bg-[#00C48C]/90 rounded-xl"
            onClick={handleComplete}
          >
            View My Booking
          </Button>
        </div>
      )}
    </div>
  );
}
