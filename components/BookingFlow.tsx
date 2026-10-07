// import { useState, useEffect } from 'react';
// import { ArrowLeft, Zap, Bike, Car, Clock, CheckCircle2, QrCode, Share2, Copy } from 'lucide-react';
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import type { ParkingLocation, Booking } from '../App';
// import { motion } from 'framer-motion';

// interface BookingFlowProps {
//   location: ParkingLocation;
//   onBack: () => void;
//   onComplete: (booking: Booking) => void;
// }

// type Step = 'select-slot' | 'confirm' | 'payment' | 'qr';
// type SlotType = 'ev' | 'twoWheeler' | 'fourWheeler';

// export function BookingFlow({ location, onBack, onComplete }: BookingFlowProps) {
//   const [currentStep, setCurrentStep] = useState<Step>('select-slot');
//   const [selectedSlotType, setSelectedSlotType] = useState<SlotType | null>(null);
//   const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
//   const [reservationTimer, setReservationTimer] = useState(600); // 10 minutes
//   const [paymentProcessing, setPaymentProcessing] = useState(false);

//   useEffect(() => {
//     if (currentStep === 'confirm' || currentStep === 'payment') {
//       const interval = setInterval(() => {
//         setReservationTimer((prev) => {
//           if (prev <= 0) {
//             clearInterval(interval);
//             return 0;
//           }
//           return prev - 1;
//         });
//       }, 1000);
//       return () => clearInterval(interval);
//     }
//   }, [currentStep]);

//   const handleSlotTypeSelect = (type: SlotType) => {
//     setSelectedSlotType(type);
//     // Auto-assign available slot
//     const slotNumber = Math.floor(Math.random() * 100) + 1;
//     setSelectedSlot(`S${slotNumber}`);
//     setCurrentStep('confirm');
//   };

//   const handlePayment = () => {
//     setPaymentProcessing(true);
//     setCurrentStep('payment');
    
//     // Simulate payment processing
//     setTimeout(() => {
//       setPaymentProcessing(false);
//       setCurrentStep('qr');
//     }, 2000);
//   };

//   const handleComplete = () => {
//     const booking: Booking = {
//       id: `B${Date.now()}`,
//       locationId: location.id,
//       locationName: location.name,
//       slotId: selectedSlot!,
//       slotType: selectedSlotType === 'ev' ? 'EV Charging' : 
//                 selectedSlotType === 'twoWheeler' ? '2-Wheeler' : '4-Wheeler',
//       status: 'active',
//       startTime: new Date(),
//       price: selectedSlotType === 'ev' ? 40 : selectedSlotType === 'twoWheeler' ? 20 : 30,
//       qrCode: `QR-${Date.now()}-${selectedSlot}`,
//     };
//     onComplete(booking);
//   };

//   const minutes = Math.floor(reservationTimer / 60);
//   const seconds = reservationTimer % 60;

//   const slotTypes = [
//     {
//       id: 'ev' as SlotType,
//       name: 'EV Charging',
//       icon: Zap,
//       available: location.slots.ev,
//       price: '₹40/hr',
//       color: '#00C48C',
//     },
//     {
//       id: 'twoWheeler' as SlotType,
//       name: '2-Wheeler',
//       icon: Bike,
//       available: location.slots.twoWheeler,
//       price: '₹20/hr',
//       color: '#0B6EFD',
//     },
//     {
//       id: 'fourWheeler' as SlotType,
//       name: '4-Wheeler',
//       icon: Car,
//       available: location.slots.fourWheeler,
//       price: '₹30/hr',
//       color: '#0B6EFD',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F3F4F6]">
//       {/* Header */}
//       <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
//         <div className="max-w-2xl mx-auto px-4 py-4">
//           <div className="flex items-center gap-3 mb-4">
//             <Button 
//               variant="ghost" 
//               size="icon"
//               className="rounded-xl"
//               onClick={onBack}
//             >
//               <ArrowLeft className="w-5 h-5" />
//             </Button>
//             <div className="flex-1">
//               <h2 className="text-[#0F1724]">Book Parking</h2>
//               <p className="text-[#9CA3AF]">{location.name}</p>
//             </div>
//           </div>

//           {/* Stepper */}
//           <div className="flex items-center gap-2">
//             {['select-slot', 'confirm', 'payment', 'qr'].map((step, index) => (
//               <div key={step} className="flex-1">
//                 <div 
//                   className="h-1 rounded-full transition-colors"
//                   style={{
//                     backgroundColor: 
//                       ['select-slot', 'confirm', 'payment', 'qr'].indexOf(currentStep) >= index 
//                         ? '#0B6EFD' 
//                         : '#E5E7EB'
//                   }}
//                 />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-2xl mx-auto px-4 py-4 pb-32">
//         {currentStep === 'select-slot' && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="space-y-3"
//           >
//             <h3 className="text-[#0F1724] mb-4">Select Slot Type</h3>
//             {slotTypes.map((type) => {
//               const Icon = type.icon;
//               return (
//                 <button
//                   key={type.id}
//                   className="w-full bg-white rounded-2xl p-4 border border-[#E5E7EB] hover:border-[#0B6EFD] transition-colors text-left"
//                   onClick={() => handleSlotTypeSelect(type.id)}
//                   disabled={type.available === 0}
//                 >
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center gap-3">
//                       <div 
//                         className="w-12 h-12 rounded-xl flex items-center justify-center"
//                         style={{ backgroundColor: `${type.color}15` }}
//                       >
//                         <Icon className="w-6 h-6" style={{ color: type.color }} />
//                       </div>
//                       <div>
//                         <div className="text-[#0F1724] mb-1">{type.name}</div>
//                         <div className="text-[#9CA3AF]">
//                           {type.available > 0 ? `${type.available} available` : 'Not available'}
//                         </div>
//                       </div>
//                     </div>
//                     <div className="text-[#0F1724]">{type.price}</div>
//                   </div>
//                 </button>
//               );
//             })}
//           </motion.div>
//         )}

//         {currentStep === 'confirm' && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="space-y-4"
//           >
//             {/* Timer */}
//             <div className="bg-[#F59E0B]/10 rounded-2xl p-4 border border-[#F59E0B]/20">
//               <div className="flex items-center gap-3">
//                 <Clock className="w-5 h-5 text-[#F59E0B]" />
//                 <div>
//                   <div className="text-[#0F1724]">Reservation expires in</div>
//                   <div className="text-[#F59E0B]">
//                     {minutes}:{seconds.toString().padStart(2, '0')}
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* Slot Details */}
//             <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB]">
//               <h3 className="text-[#0F1724] mb-4">Booking Details</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-[#9CA3AF]">Slot Number</span>
//                   <span className="text-[#0F1724]">{selectedSlot}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[#9CA3AF]">Slot Type</span>
//                   <span className="text-[#0F1724]">
//                     {slotTypes.find(t => t.id === selectedSlotType)?.name}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[#9CA3AF]">Location</span>
//                   <span className="text-[#0F1724]">{location.name}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[#9CA3AF]">Duration</span>
//                   <span className="text-[#0F1724]">2 hours (estimated)</span>
//                 </div>
//               </div>
//             </div>

//             {/* Price Breakdown */}
//             <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB]">
//               <h3 className="text-[#0F1724] mb-4">Price Breakdown</h3>
//               <div className="space-y-3">
//                 <div className="flex justify-between">
//                   <span className="text-[#9CA3AF]">Base Rate (2 hrs)</span>
//                   <span className="text-[#0F1724]">
//                     ₹{(slotTypes.find(t => t.id === selectedSlotType)?.price.match(/\d+/)?.[0] || 0) * 2}
//                   </span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[#9CA3AF]">Platform Fee</span>
//                   <span className="text-[#0F1724]">₹5</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[#00C48C]">Off-Peak Discount</span>
//                   <span className="text-[#00C48C]">-₹10</span>
//                 </div>
//                 <div className="border-t border-[#E5E7EB] pt-3 flex justify-between">
//                   <span className="text-[#0F1724]">Total</span>
//                   <span className="text-[#0F1724]">
//                     ₹{(slotTypes.find(t => t.id === selectedSlotType)?.price.match(/\d+/)?.[0] || 0) * 2 + 5 - 10}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}

//         {currentStep === 'payment' && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="flex flex-col items-center justify-center py-12"
//           >
//             {paymentProcessing ? (
//               <div className="text-center">
//                 <div className="w-16 h-16 border-4 border-[#0B6EFD] border-t-transparent rounded-full animate-spin mx-auto mb-4" />
//                 <h3 className="text-[#0F1724] mb-2">Processing Payment</h3>
//                 <p className="text-[#9CA3AF]">Please wait...</p>
//               </div>
//             ) : (
//               <div className="text-center">
//                 <motion.div
//                   initial={{ scale: 0 }}
//                   animate={{ scale: 1 }}
//                   transition={{ type: "spring", duration: 0.5 }}
//                   className="w-24 h-24 bg-[#00C48C] rounded-full flex items-center justify-center mx-auto mb-4"
//                 >
//                   <CheckCircle2 className="w-12 h-12 text-white" />
//                 </motion.div>
//                 <h3 className="text-[#0F1724] mb-2">Payment Successful!</h3>
//                 <p className="text-[#9CA3AF]">Generating your QR code...</p>
//               </div>
//             )}
//           </motion.div>
//         )}

//         {currentStep === 'qr' && (
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="space-y-4"
//           >
//             {/* Success Message */}
//             <div className="bg-[#00C48C]/10 rounded-2xl p-4 border border-[#00C48C]/20 text-center">
//               <CheckCircle2 className="w-12 h-12 text-[#00C48C] mx-auto mb-3" />
//               <h3 className="text-[#0F1724] mb-1">Booking Confirmed!</h3>
//               <p className="text-[#374151]">Slot {selectedSlot} reserved for you</p>
//             </div>

//             {/* QR Code */}
//             <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//               <div className="text-center mb-4">
//                 <h3 className="text-[#0F1724] mb-2">Entry QR Code</h3>
//                 <p className="text-[#9CA3AF]">Show this at the gate</p>
//               </div>
              
//               <div className="w-64 h-64 mx-auto bg-[#F3F4F6] rounded-2xl flex items-center justify-center mb-4">
//                 <QrCode className="w-48 h-48 text-[#0F1724]" />
//               </div>

//               <div className="bg-[#F3F4F6] rounded-xl p-3 text-center mb-4">
//                 <div className="text-[#9CA3AF] mb-1">Code</div>
//                 <div className="text-[#0F1724]">QR-{Date.now()}-{selectedSlot}</div>
//               </div>

//               <div className="flex gap-2">
//                 <Button variant="outline" className="flex-1 rounded-xl">
//                   <Copy className="w-4 h-4 mr-2" />
//                   Copy
//                 </Button>
//                 <Button variant="outline" className="flex-1 rounded-xl">
//                   <Share2 className="w-4 h-4 mr-2" />
//                   Share
//                 </Button>
//               </div>
//             </div>

//             {/* Booking Details */}
//             <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB]">
//               <div className="space-y-2">
//                 <div className="flex justify-between">
//                   <span className="text-[#9CA3AF]">Location</span>
//                   <span className="text-[#0F1724]">{location.name}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[#9CA3AF]">Slot</span>
//                   <span className="text-[#0F1724]">{selectedSlot}</span>
//                 </div>
//                 <div className="flex justify-between">
//                   <span className="text-[#9CA3AF]">Valid Until</span>
//                   <span className="text-[#0F1724]">
//                     {new Date(Date.now() + 2 * 60 * 60 * 1000).toLocaleTimeString([], { 
//                       hour: '2-digit', 
//                       minute: '2-digit' 
//                     })}
//                   </span>
//                 </div>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </div>

//       {/* Bottom CTA */}
//       {currentStep === 'confirm' && (
//         <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 max-w-2xl mx-auto">
//           <Button 
//             className="w-full h-14 bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
//             onClick={handlePayment}
//           >
//             Proceed to Payment
//           </Button>
//         </div>
//       )}

//       {currentStep === 'qr' && (
//         <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 max-w-2xl mx-auto">
//           <Button 
//             className="w-full h-14 bg-[#00C48C] hover:bg-[#00C48C]/90 rounded-xl"
//             onClick={handleComplete}
//           >
//             View My Booking
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import { ArrowLeft, Zap, Bike, Car, Clock, CheckCircle2, QrCode, Share2, Copy, ChevronRight } from 'lucide-react';
import type { ParkingLocation, Booking } from '../App';
import { motion } from 'framer-motion';

interface BookingFlowProps {
  location: ParkingLocation;
  onBack: () => void;
  onComplete: (booking: Booking) => void;
}

type Step = 'select-slot' | 'confirm' | 'payment' | 'qr';
type SlotType = 'ev' | 'twoWheeler' | 'fourWheeler';

const S = {
  bg: '#F7F8FC', white: '#FFFFFF', navy: '#0F1724', blue: '#0B6EFD',
  green: '#00C48C', amber: '#F59E0B', red: '#EF4444', gray: '#6B7280', border: '#EAECF0',
};

const STEPS: Step[] = ['select-slot', 'confirm', 'payment', 'qr'];
const STEP_LABELS = ['Choose Slot', 'Review', 'Payment', 'Confirmed'];

export function BookingFlow({ location, onBack, onComplete }: BookingFlowProps) {
  const [currentStep, setCurrentStep] = useState<Step>('select-slot');
  const [selectedSlotType, setSelectedSlotType] = useState<SlotType | null>(null);
  const [selectedSlot, setSelectedSlot] = useState<string | null>(null);
  const [reservationTimer, setReservationTimer] = useState(600);
  const [paymentProcessing, setPaymentProcessing] = useState(false);

  useEffect(() => {
    if (currentStep === 'confirm' || currentStep === 'payment') {
      const interval = setInterval(() => {
        setReservationTimer(p => Math.max(0, p - 1));
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [currentStep]);

  const handleSlotTypeSelect = (type: SlotType) => {
    setSelectedSlotType(type);
    setSelectedSlot(`S${Math.floor(Math.random() * 100) + 1}`);
    setCurrentStep('confirm');
  };

  const handlePayment = () => {
    setPaymentProcessing(true);
    setCurrentStep('payment');
    setTimeout(() => { setPaymentProcessing(false); setCurrentStep('qr'); }, 2000);
  };

  const handleComplete = () => {
    const booking: Booking = {
      id: `B${Date.now()}`,
      locationId: location.id,
      locationName: location.name,
      slotId: selectedSlot!,
      slotType: selectedSlotType === 'ev' ? 'EV Charging' : selectedSlotType === 'twoWheeler' ? '2-Wheeler' : '4-Wheeler',
      status: 'active',
      startTime: new Date(),
      price: selectedSlotType === 'ev' ? 40 : selectedSlotType === 'twoWheeler' ? 20 : 30,
      qrCode: `QR-${Date.now()}-${selectedSlot}`,
    };
    onComplete(booking);
  };

  const mins = Math.floor(reservationTimer / 60);
  const secs = reservationTimer % 60;
  const currentStepIdx = STEPS.indexOf(currentStep);

  const slotTypes = [
    { id: 'ev' as SlotType, name: 'EV Charging', icon: Zap, available: location.slots.ev, price: 40, priceLabel: '₹40/hr', color: S.green, bg: '#EDFAF5' },
    { id: 'twoWheeler' as SlotType, name: '2-Wheeler', icon: Bike, available: location.slots.twoWheeler, price: 20, priceLabel: '₹20/hr', color: S.blue, bg: '#EFF4FF' },
    { id: 'fourWheeler' as SlotType, name: '4-Wheeler', icon: Car, available: location.slots.fourWheeler, price: 30, priceLabel: '₹30/hr', color: '#7C3AED', bg: '#F5F3FF' },
  ];

  const selected = slotTypes.find(t => t.id === selectedSlotType);
  const baseTotal = (selected?.price || 0) * 2 + 5 - 10;

  return (
    <div style={{ minHeight: '100vh', background: S.bg, fontFamily: "'DM Sans', sans-serif", paddingBottom: currentStep === 'confirm' || currentStep === 'qr' ? '90px' : '24px' }}>
      {/* ── HEADER ── */}
      <div style={{ background: S.white, borderBottom: `1px solid ${S.border}`, position: 'sticky', top: 0, zIndex: 20, padding: '0 16px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '14px', paddingBottom: '14px' }}>
            <button
              onClick={onBack}
              style={{
                width: '36px', height: '36px', borderRadius: '10px', border: `1px solid ${S.border}`,
                background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
              }}
            >
              <ArrowLeft style={{ width: '17px', height: '17px', color: S.navy }} />
            </button>
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: '15px', fontWeight: 700, color: S.navy }}>Book Parking</div>
              <div style={{ fontSize: '12px', color: S.gray }}>{location.name}</div>
            </div>
            {(currentStep === 'confirm' || currentStep === 'payment') && (
              <div style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                background: '#FFFBEB', border: '1px solid #F59E0B40', borderRadius: '8px', padding: '5px 10px',
              }}>
                <Clock style={{ width: '13px', height: '13px', color: S.amber }} />
                <span style={{ fontSize: '13px', fontWeight: 700, color: S.amber }}>
                  {mins}:{secs.toString().padStart(2, '0')}
                </span>
              </div>
            )}
          </div>

          {/* Progress stepper */}
          <div style={{ display: 'flex', alignItems: 'center', paddingBottom: '14px', gap: '4px' }}>
            {STEPS.map((step, i) => (
              <div key={step} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px' }}>
                <div style={{
                  height: '3px', width: '100%', borderRadius: '2px',
                  background: i <= currentStepIdx ? S.blue : S.border,
                  transition: 'background 0.3s',
                }} />
                <span style={{
                  fontSize: '9px', fontWeight: i === currentStepIdx ? 700 : 500,
                  color: i <= currentStepIdx ? S.blue : S.gray,
                  letterSpacing: '0.03em', whiteSpace: 'nowrap',
                }}>
                  {STEP_LABELS[i]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '20px 16px' }}>

        {/* STEP 1: Select Slot */}
        {currentStep === 'select-slot' && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ marginBottom: '4px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: S.navy, margin: '0 0 4px', letterSpacing: '-0.3px' }}>Choose your slot type</h2>
              <p style={{ fontSize: '13px', color: S.gray, margin: 0 }}>Select the type that fits your vehicle</p>
            </div>
            {slotTypes.map(({ id, name, icon: Icon, available, priceLabel, color, bg }) => (
              <button
                key={id}
                onClick={() => available > 0 && handleSlotTypeSelect(id)}
                disabled={available === 0}
                style={{
                  width: '100%', background: S.white, borderRadius: '16px', padding: '18px',
                  border: `1.5px solid ${S.border}`, cursor: available > 0 ? 'pointer' : 'not-allowed',
                  opacity: available === 0 ? 0.5 : 1, transition: 'all 0.15s', textAlign: 'left',
                  display: 'flex', alignItems: 'center', gap: '14px',
                }}
                onMouseEnter={e => { if (available > 0) { (e.currentTarget as HTMLElement).style.borderColor = color; (e.currentTarget as HTMLElement).style.boxShadow = `0 4px 16px ${color}20`; } }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = S.border; (e.currentTarget as HTMLElement).style.boxShadow = 'none'; }}
              >
                <div style={{ width: '50px', height: '50px', borderRadius: '14px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon style={{ width: '22px', height: '22px', color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '15px', fontWeight: 700, color: S.navy, marginBottom: '3px' }}>{name}</div>
                  <div style={{ fontSize: '12px', color: S.gray }}>
                    {available > 0 ? <span style={{ color: S.green, fontWeight: 600 }}>{available} spots available</span> : 'No spots available'}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '17px', fontWeight: 800, color: S.navy }}>{priceLabel}</div>
                  <ChevronRight style={{ width: '16px', height: '16px', color: S.gray, marginTop: '2px', marginLeft: 'auto' }} />
                </div>
              </button>
            ))}
          </motion.div>
        )}

        {/* STEP 2: Confirm */}
        {currentStep === 'confirm' && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ marginBottom: '4px' }}>
              <h2 style={{ fontSize: '18px', fontWeight: 800, color: S.navy, margin: '0 0 4px', letterSpacing: '-0.3px' }}>Review your booking</h2>
              <p style={{ fontSize: '13px', color: S.gray, margin: 0 }}>Confirm your slot before payment</p>
            </div>

            {/* Slot highlight card */}
            <div style={{
              background: `linear-gradient(135deg, ${selected?.bg}, ${S.white})`,
              borderRadius: '16px', padding: '20px', border: `1.5px solid ${selected?.color}30`,
              display: 'flex', alignItems: 'center', gap: '16px',
            }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '14px', background: selected?.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {selected && <selected.icon style={{ width: '26px', height: '26px', color: selected?.color }} />}
              </div>
              <div>
                <div style={{ fontSize: '12px', color: S.gray, fontWeight: 500 }}>Assigned Slot</div>
                <div style={{ fontSize: '22px', fontWeight: 800, color: S.navy, letterSpacing: '-0.5px' }}>{selectedSlot}</div>
                <div style={{ fontSize: '13px', color: selected?.color, fontWeight: 600 }}>{selected?.name}</div>
              </div>
              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <div style={{ fontSize: '12px', color: S.gray }}>Rate</div>
                <div style={{ fontSize: '18px', fontWeight: 800, color: S.navy }}>{selected?.priceLabel}</div>
              </div>
            </div>

            {/* Details */}
            <div style={{ background: S.white, borderRadius: '16px', padding: '18px', border: `1px solid ${S.border}` }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, color: S.gray, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>Booking Details</h3>
              {[
                ['Location', location.name],
                ['Duration', '2 hours (estimated)'],
                ['Start Time', new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
                  <span style={{ fontSize: '13px', color: S.gray }}>{k}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: S.navy }}>{v}</span>
                </div>
              ))}
            </div>

            {/* Price breakdown */}
            <div style={{ background: S.white, borderRadius: '16px', padding: '18px', border: `1px solid ${S.border}` }}>
              <h3 style={{ fontSize: '13px', fontWeight: 700, color: S.gray, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>Price Breakdown</h3>
              {[
                { label: 'Base Rate (2 hrs)', value: `₹${(selected?.price || 0) * 2}`, color: S.navy },
                { label: 'Platform Fee', value: '₹5', color: S.navy },
                { label: 'Off-Peak Discount', value: '-₹10', color: S.green },
              ].map(({ label, value, color }) => (
                <div key={label} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
                  <span style={{ fontSize: '13px', color: S.gray }}>{label}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color }}>{value}</span>
                </div>
              ))}
              <div style={{ height: '1px', background: S.border, margin: '12px 0' }} />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '15px', fontWeight: 700, color: S.navy }}>Total</span>
                <span style={{ fontSize: '20px', fontWeight: 800, color: S.blue }}>₹{baseTotal}</span>
              </div>
            </div>
          </motion.div>
        )}

        {/* STEP 3: Payment processing */}
        {currentStep === 'payment' && (
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', textAlign: 'center' }}>
            {paymentProcessing ? (
              <>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%', marginBottom: '24px',
                  background: `conic-gradient(${S.blue} 0%, transparent 60%)`,
                  animation: 'spin 1s linear infinite',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: S.white }} />
                </div>
                <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: S.navy, margin: '0 0 6px' }}>Processing Payment</h3>
                <p style={{ fontSize: '13px', color: S.gray, margin: 0 }}>Please don't close this window…</p>
              </>
            ) : (
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: 'spring', duration: 0.5 }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: S.green, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <CheckCircle2 style={{ width: '40px', height: '40px', color: '#fff' }} />
                </div>
                <h3 style={{ fontSize: '18px', fontWeight: 800, color: S.navy, margin: '0 0 6px' }}>Payment Successful!</h3>
                <p style={{ fontSize: '13px', color: S.gray, margin: 0 }}>Generating your entry QR code…</p>
              </motion.div>
            )}
          </motion.div>
        )}

        {/* STEP 4: QR */}
        {currentStep === 'qr' && (
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {/* Success banner */}
            <div style={{
              background: 'linear-gradient(135deg, #EDFAF5, #F7FFFE)',
              border: `1.5px solid ${S.green}30`, borderRadius: '16px', padding: '18px',
              display: 'flex', alignItems: 'center', gap: '14px',
            }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: S.green, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <CheckCircle2 style={{ width: '22px', height: '22px', color: '#fff' }} />
              </div>
              <div>
                <div style={{ fontSize: '15px', fontWeight: 700, color: S.navy }}>Booking Confirmed!</div>
                <div style={{ fontSize: '12px', color: S.gray }}>Slot {selectedSlot} is reserved for you</div>
              </div>
            </div>

            {/* QR Card */}
            <div style={{ background: S.white, borderRadius: '16px', padding: '24px', border: `1px solid ${S.border}`, textAlign: 'center' }}>
              <h3 style={{ fontSize: '15px', fontWeight: 700, color: S.navy, margin: '0 0 4px' }}>Entry QR Code</h3>
              <p style={{ fontSize: '12px', color: S.gray, margin: '0 0 20px' }}>Show this at the parking gate</p>

              <div style={{
                width: '200px', height: '200px', margin: '0 auto 18px',
                background: 'linear-gradient(135deg, #F7F8FC, #EFF4FF)',
                borderRadius: '16px', border: `2px dashed ${S.border}`,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <QrCode style={{ width: '120px', height: '120px', color: S.navy }} />
              </div>

              <div style={{ background: S.bg, borderRadius: '10px', padding: '10px 16px', marginBottom: '16px' }}>
                <div style={{ fontSize: '10px', color: S.gray, marginBottom: '2px', letterSpacing: '0.06em', textTransform: 'uppercase' }}>Booking Code</div>
                <div style={{ fontSize: '14px', fontWeight: 700, color: S.navy, letterSpacing: '0.05em' }}>QR-{Date.now().toString().slice(-8)}-{selectedSlot}</div>
              </div>

              <div style={{ display: 'flex', gap: '10px' }}>
                <button style={{
                  flex: 1, height: '42px', borderRadius: '10px', border: `1px solid ${S.border}`,
                  background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  fontSize: '13px', fontWeight: 600, color: S.navy,
                }}>
                  <Copy style={{ width: '14px', height: '14px' }} /> Copy
                </button>
                <button style={{
                  flex: 1, height: '42px', borderRadius: '10px', border: `1px solid ${S.border}`,
                  background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px',
                  fontSize: '13px', fontWeight: 600, color: S.navy,
                }}>
                  <Share2 style={{ width: '14px', height: '14px' }} /> Share
                </button>
              </div>
            </div>

            {/* Details */}
            <div style={{ background: S.white, borderRadius: '16px', padding: '18px', border: `1px solid ${S.border}` }}>
              {[
                ['Location', location.name],
                ['Slot', selectedSlot!],
                ['Valid Until', new Date(Date.now() + 2 * 60 * 60 * 1000).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <span style={{ fontSize: '13px', color: S.gray }}>{k}</span>
                  <span style={{ fontSize: '13px', fontWeight: 600, color: S.navy }}>{v}</span>
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </div>

      {/* ── BOTTOM CTA ── */}
      {currentStep === 'confirm' && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: S.white, borderTop: `1px solid ${S.border}`, padding: '12px 16px', zIndex: 20 }}>
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <button
              onClick={handlePayment}
              style={{
                width: '100%', height: '50px', borderRadius: '14px',
                background: 'linear-gradient(135deg, #0B6EFD, #0041A8)',
                color: S.white, fontSize: '15px', fontWeight: 700, border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(11,110,253,0.3)',
              }}
            >
              Pay ₹{baseTotal} · Proceed
            </button>
          </div>
        </div>
      )}

      {currentStep === 'qr' && (
        <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: S.white, borderTop: `1px solid ${S.border}`, padding: '12px 16px', zIndex: 20 }}>
          <div style={{ maxWidth: '560px', margin: '0 auto' }}>
            <button
              onClick={handleComplete}
              style={{
                width: '100%', height: '50px', borderRadius: '14px',
                background: 'linear-gradient(135deg, #00C48C, #009E72)',
                color: S.white, fontSize: '15px', fontWeight: 700, border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 16px rgba(0,196,140,0.3)',
              }}
            >
              View My Booking →
            </button>
          </div>
        </div>
      )}
    </div>
  );
}