// import { ArrowLeft, Navigation, X, QrCode, Clock, MapPin, Star } from 'lucide-react';
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import type { User, Booking, Screen } from '../App';

// interface MyBookingsProps {
//   user: User | null;
//   currentBooking: Booking | null;
//   onBack: () => void;
//   onNavigate: (screen: Screen) => void;
// }

// export function MyBookings({ user, currentBooking, onBack, onNavigate }: MyBookingsProps) {
//   const [showQR, setShowQR] = useState(false);

//   // Mock booking history
//   const bookingHistory: Booking[] = [
//     {
//       id: 'B002',
//       locationId: 'L002',
//       locationName: 'City Center Plaza',
//       slotId: 'S45',
//       slotType: '2-Wheeler',
//       status: 'completed',
//       startTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000),
//       endTime: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000 + 3 * 60 * 60 * 1000),
//       price: 60,
//     },
//     {
//       id: 'B003',
//       locationId: 'L001',
//       locationName: 'Green Mall Parking',
//       slotId: 'S78',
//       slotType: '4-Wheeler',
//       status: 'completed',
//       startTime: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
//       endTime: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000 + 2 * 60 * 60 * 1000),
//       price: 60,
//     },
//   ];

//   const handleCancelBooking = () => {
//     // Handle booking cancellation
//     onBack();
//   };

//   return (
//     <div className="min-h-screen bg-[#F3F4F6]">
//       {/* Header */}
//       <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
//         <div className="max-w-2xl mx-auto px-4 py-4">
//           <div className="flex items-center gap-3">
//             <Button 
//               variant="ghost" 
//               size="icon"
//               className="rounded-xl"
//               onClick={onBack}
//             >
//               <ArrowLeft className="w-5 h-5" />
//             </Button>
//             <div className="flex-1">
//               <h2 className="text-[#0F1724]">My Bookings</h2>
//               <p className="text-[#9CA3AF]">{user?.name}</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-2xl mx-auto px-4 py-4 space-y-4">
//         {/* Active Booking */}
//         {currentBooking && currentBooking.status === 'active' && (
//           <div className="bg-white rounded-2xl p-4 border-2 border-[#0B6EFD]">
//             <div className="flex items-center justify-between mb-4">
//               <h3 className="text-[#0F1724]">Active Booking</h3>
//               <Badge className="bg-[#00C48C] rounded-lg">Active</Badge>
//             </div>

//             <div className="space-y-3 mb-4">
//               <div className="flex items-center gap-3">
//                 <MapPin className="w-5 h-5 text-[#9CA3AF]" />
//                 <div className="flex-1">
//                   <div className="text-[#0F1724]">{currentBooking.locationName}</div>
//                   <div className="text-[#9CA3AF]">Slot {currentBooking.slotId}</div>
//                 </div>
//               </div>

//               <div className="bg-[#F3F4F6] rounded-xl p-3">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-[#9CA3AF]">Started</span>
//                   <span className="text-[#0F1724]">
//                     {currentBooking.startTime.toLocaleTimeString([], { 
//                       hour: '2-digit', 
//                       minute: '2-digit' 
//                     })}
//                   </span>
//                 </div>
//                 <div className="flex items-center justify-between">
//                   <span className="text-[#9CA3AF]">Duration</span>
//                   <span className="text-[#0F1724]">
//                     {Math.floor((Date.now() - currentBooking.startTime.getTime()) / (60 * 1000))} mins
//                   </span>
//                 </div>
//               </div>

//               {currentBooking.expiresInMins && (
//                 <div className="bg-[#F59E0B]/10 rounded-xl p-3 flex items-center gap-2">
//                   <Clock className="w-5 h-5 text-[#F59E0B]" />
//                   <div>
//                     <div className="text-[#F59E0B]">
//                       {currentBooking.expiresInMins} minutes remaining
//                     </div>
//                     <div className="text-[#374151]">to reach the location</div>
//                   </div>
//                 </div>
//               )}
//             </div>

//             <div className="flex gap-2">
//               <Button 
//                 className="flex-1 bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
//                 onClick={() => {/* Navigate to location */}}
//               >
//                 <Navigation className="w-4 h-4 mr-2" />
//                 Navigate
//               </Button>
//               <Button 
//                 variant="outline"
//                 className="flex-1 rounded-xl"
//                 onClick={() => setShowQR(true)}
//               >
//                 <QrCode className="w-4 h-4 mr-2" />
//                 Show QR
//               </Button>
//               <Button 
//                 variant="ghost"
//                 size="icon"
//                 className="rounded-xl text-[#EF4444]"
//                 onClick={handleCancelBooking}
//               >
//                 <X className="w-5 h-5" />
//               </Button>
//             </div>
//           </div>
//         )}

//         {/* QR Code Modal */}
//         {showQR && currentBooking && (
//           <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
//             <div className="bg-white rounded-3xl p-6 max-w-sm w-full">
//               <div className="flex items-center justify-between mb-4">
//                 <h3 className="text-[#0F1724]">Entry QR Code</h3>
//                 <Button 
//                   variant="ghost" 
//                   size="icon"
//                   onClick={() => setShowQR(false)}
//                 >
//                   <X className="w-5 h-5" />
//                 </Button>
//               </div>

//               <div className="w-full aspect-square bg-[#F3F4F6] rounded-2xl flex items-center justify-center mb-4">
//                 <QrCode className="w-2/3 h-2/3 text-[#0F1724]" />
//               </div>

//               <div className="bg-[#F3F4F6] rounded-xl p-3 text-center">
//                 <div className="text-[#9CA3AF] mb-1">Code</div>
//                 <div className="text-[#0F1724]">{currentBooking.qrCode}</div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Booking History */}
//         <div>
//           <h3 className="text-[#0F1724] mb-3 px-1">History</h3>
//           <div className="space-y-3">
//             {bookingHistory.map((booking) => (
//               <div 
//                 key={booking.id}
//                 className="bg-white rounded-2xl p-4 border border-[#E5E7EB]"
//               >
//                 <div className="flex items-start justify-between mb-3">
//                   <div className="flex-1">
//                     <div className="text-[#0F1724] mb-1">{booking.locationName}</div>
//                     <div className="text-[#9CA3AF]">
//                       {booking.startTime.toLocaleDateString([], { 
//                         month: 'short', 
//                         day: 'numeric',
//                         year: 'numeric'
//                       })}
//                     </div>
//                   </div>
//                   <Badge 
//                     variant="outline"
//                     className="rounded-lg text-[#374151] border-[#E5E7EB]"
//                   >
//                     Completed
//                   </Badge>
//                 </div>

//                 <div className="grid grid-cols-3 gap-3 text-center text-sm mb-3">
//                   <div>
//                     <div className="text-[#9CA3AF]">Slot</div>
//                     <div className="text-[#0F1724]">{booking.slotId}</div>
//                   </div>
//                   <div>
//                     <div className="text-[#9CA3AF]">Duration</div>
//                     <div className="text-[#0F1724]">
//                       {booking.endTime 
//                         ? `${Math.floor((booking.endTime.getTime() - booking.startTime.getTime()) / (60 * 60 * 1000))}h`
//                         : '-'}
//                     </div>
//                   </div>
//                   <div>
//                     <div className="text-[#9CA3AF]">Total</div>
//                     <div className="text-[#0F1724]">₹{booking.price}</div>
//                   </div>
//                 </div>

//                 <div className="flex gap-2 pt-3 border-t border-[#E5E7EB]">
//                   <Button 
//                     variant="outline"
//                     className="flex-1 rounded-xl"
//                   >
//                     View Receipt
//                   </Button>
//                   <Button 
//                     variant="outline"
//                     className="flex-1 rounded-xl"
//                   >
//                     <Star className="w-4 h-4 mr-2" />
//                     Rate
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Empty State */}
//         {!currentBooking && bookingHistory.length === 0 && (
//           <div className="text-center py-12">
//             <div className="w-16 h-16 rounded-full bg-[#F3F4F6] flex items-center justify-center mx-auto mb-4">
//               <Clock className="w-8 h-8 text-[#9CA3AF]" />
//             </div>
//             <h3 className="text-[#0F1724] mb-2">No Bookings Yet</h3>
//             <p className="text-[#9CA3AF] mb-6">Start by finding parking near you</p>
//             <Button 
//               className="bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
//               onClick={onBack}
//             >
//               Find Parking
//             </Button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
// ─── MyBookings.tsx ───────────────────────────────────────────────────────────
import { ArrowLeft, Navigation, X, QrCode, Clock, MapPin, Star, ChevronRight } from 'lucide-react';
import type { User, Booking, Screen } from '../App';
import { useState } from 'react';

interface MyBookingsProps {
  user: User | null;
  currentBooking: Booking | null;
  onBack: () => void;
  onNavigate: (screen: Screen) => void;
}

const S = {
  bg: '#F7F8FC', white: '#FFFFFF', navy: '#0F1724', blue: '#0B6EFD',
  green: '#00C48C', amber: '#F59E0B', red: '#EF4444', gray: '#6B7280', border: '#EAECF0',
};

export function MyBookings({ user, currentBooking, onBack, onNavigate }: MyBookingsProps) {
  const [showQR, setShowQR] = useState(false);

  const bookingHistory: Booking[] = [
    { id: 'B002', locationId: 'L002', locationName: 'City Center Plaza', slotId: 'S45', slotType: '2-Wheeler', status: 'completed', startTime: new Date(Date.now() - 2 * 86400000), endTime: new Date(Date.now() - 2 * 86400000 + 3 * 3600000), price: 60 },
    { id: 'B003', locationId: 'L001', locationName: 'Green Mall Parking', slotId: 'S78', slotType: '4-Wheeler', status: 'completed', startTime: new Date(Date.now() - 5 * 86400000), endTime: new Date(Date.now() - 5 * 86400000 + 2 * 3600000), price: 60 },
  ];

  return (
    <div style={{ minHeight: '100vh', background: S.bg, fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ background: S.white, borderBottom: `1px solid ${S.border}`, position: 'sticky', top: 0, zIndex: 20 }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', padding: '0 16px', display: 'flex', alignItems: 'center', gap: '12px', height: '60px' }}>
          <button onClick={onBack} style={{ width: '36px', height: '36px', borderRadius: '10px', border: `1px solid ${S.border}`, background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowLeft style={{ width: '17px', height: '17px', color: S.navy }} />
          </button>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: S.navy }}>My Bookings</div>
            <div style={{ fontSize: '12px', color: S.gray }}>{user?.name}</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '16px' }}>
        {/* Active booking */}
        {currentBooking?.status === 'active' && (
          <div style={{
            background: 'linear-gradient(135deg, #0B6EFD, #0041A8)', borderRadius: '20px',
            padding: '20px', marginBottom: '20px', color: '#fff',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
              <div>
                <div style={{ fontSize: '11px', fontWeight: 700, color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Active Now</div>
                <div style={{ fontSize: '17px', fontWeight: 800 }}>{currentBooking.locationName}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', marginTop: '3px' }}>Slot {currentBooking.slotId} · {currentBooking.slotType}</div>
              </div>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <MapPin style={{ width: '20px', height: '20px' }} />
              </div>
            </div>

            {/* Timer */}
            <div style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '12px', padding: '12px 14px', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Clock style={{ width: '16px', height: '16px', color: 'rgba(255,255,255,0.8)' }} />
              <div>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>Duration so far</div>
                <div style={{ fontSize: '14px', fontWeight: 700 }}>{Math.floor((Date.now() - currentBooking.startTime.getTime()) / 60000)} mins</div>
              </div>
              <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
                <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>Started at</div>
                <div style={{ fontSize: '14px', fontWeight: 700 }}>{currentBooking.startTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <button style={{ flex: 1, height: '42px', borderRadius: '10px', background: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', color: '#fff', fontWeight: 600, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', backdropFilter: 'blur(4px)', fontFamily: 'inherit' }}>
                <Navigation style={{ width: '14px', height: '14px' }} /> Navigate
              </button>
              <button onClick={() => setShowQR(true)} style={{ flex: 1, height: '42px', borderRadius: '10px', background: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', color: '#fff', fontWeight: 600, fontSize: '13px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '6px', backdropFilter: 'blur(4px)', fontFamily: 'inherit' }}>
                <QrCode style={{ width: '14px', height: '14px' }} /> Show QR
              </button>
              <button onClick={onBack} style={{ width: '42px', height: '42px', borderRadius: '10px', background: 'rgba(255,255,255,0.2)', border: 'none', cursor: 'pointer', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', flexShrink: 0 }}>
                <X style={{ width: '16px', height: '16px' }} />
              </button>
            </div>
          </div>
        )}

        {/* QR Modal */}
        {showQR && currentBooking && (
          <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 50, padding: '20px' }}>
            <div style={{ background: S.white, borderRadius: '20px', padding: '24px', maxWidth: '340px', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <span style={{ fontSize: '16px', fontWeight: 700, color: S.navy }}>Entry QR Code</span>
                <button onClick={() => setShowQR(false)} style={{ width: '32px', height: '32px', borderRadius: '8px', border: `1px solid ${S.border}`, background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <X style={{ width: '15px', height: '15px', color: S.gray }} />
                </button>
              </div>
              <div style={{ background: S.bg, borderRadius: '16px', aspectRatio: '1', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px', border: `2px dashed ${S.border}` }}>
                <QrCode style={{ width: '60%', height: '60%', color: S.navy }} />
              </div>
              <div style={{ background: S.bg, borderRadius: '10px', padding: '10px', textAlign: 'center' }}>
                <div style={{ fontSize: '11px', color: S.gray, marginBottom: '2px' }}>Booking Code</div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: S.navy }}>{currentBooking.qrCode}</div>
              </div>
            </div>
          </div>
        )}

        {/* History */}
        <div>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: S.navy, margin: '0 0 12px' }}>Booking History</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {bookingHistory.map(b => (
              <div key={b.id} style={{ background: S.white, borderRadius: '16px', padding: '16px', border: `1px solid ${S.border}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div>
                    <div style={{ fontSize: '15px', fontWeight: 700, color: S.navy, marginBottom: '3px' }}>{b.locationName}</div>
                    <div style={{ fontSize: '12px', color: S.gray }}>{b.startTime.toLocaleDateString([], { month: 'short', day: 'numeric', year: 'numeric' })}</div>
                  </div>
                  <span style={{ fontSize: '11px', fontWeight: 700, color: S.green, background: '#EDFAF5', padding: '4px 10px', borderRadius: '20px' }}>Completed</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: S.border, borderRadius: '10px', overflow: 'hidden', marginBottom: '12px' }}>
                  {[
                    { label: 'Slot', value: b.slotId },
                    { label: 'Duration', value: b.endTime ? `${Math.floor((b.endTime.getTime() - b.startTime.getTime()) / 3600000)}h` : '-' },
                    { label: 'Total', value: `₹${b.price}` },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ background: S.bg, padding: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: S.navy }}>{value}</div>
                      <div style={{ fontSize: '11px', color: S.gray }}>{label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '8px' }}>
                  <button style={{ flex: 1, height: '38px', borderRadius: '10px', border: `1px solid ${S.border}`, background: S.white, cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: S.navy, fontFamily: 'inherit' }}>
                    View Receipt
                  </button>
                  <button style={{ flex: 1, height: '38px', borderRadius: '10px', border: `1px solid ${S.border}`, background: S.white, cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: S.navy, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '5px', fontFamily: 'inherit' }}>
                    <Star style={{ width: '13px', height: '13px', color: S.amber }} /> Rate
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        {!currentBooking && bookingHistory.length === 0 && (
          <div style={{ textAlign: 'center', padding: '60px 20px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: S.bg, border: `1px solid ${S.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
              <Clock style={{ width: '28px', height: '28px', color: S.gray }} />
            </div>
            <h3 style={{ fontSize: '16px', fontWeight: 700, color: S.navy, margin: '0 0 6px' }}>No Bookings Yet</h3>
            <p style={{ fontSize: '13px', color: S.gray, margin: '0 0 20px' }}>Find and book parking spots near you</p>
            <button onClick={onBack} style={{ padding: '12px 28px', borderRadius: '12px', background: S.blue, color: S.white, fontSize: '14px', fontWeight: 700, border: 'none', cursor: 'pointer', boxShadow: '0 4px 14px rgba(11,110,253,0.3)', fontFamily: 'inherit' }}>
              Find Parking
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


