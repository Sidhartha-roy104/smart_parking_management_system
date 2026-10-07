// import { ArrowLeft, MapPin, Star, Zap, Bike, Car, Navigation, Clock } from 'lucide-react';
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import type { ParkingLocation } from '../App';
// import { getAvailabilityColor, getAvailabilityLabel } from '../lib/mockData';

// interface LocationDetailProps {
//   location: ParkingLocation;
//   onBack: () => void;
//   onBook: () => void;
// }

// export function LocationDetail({ location, onBack, onBook }: LocationDetailProps) {
//   const availabilityColor = getAvailabilityColor(location.available, location.totalSlots);
//   const availabilityLabel = getAvailabilityLabel(location.available, location.totalSlots);

//   // Mock slot grid data
//   const slotGrid = Array.from({ length: 24 }, (_, i) => ({
//     id: `S${i + 1}`,
//     status: i < location.available ? 'available' : i < location.totalSlots - 10 ? 'occupied' : 'reserved',
//   }));

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
//               <h2 className="text-[#0F1724]">{location.name}</h2>
//               <div className="flex items-center gap-2 text-[#9CA3AF]">
//                 <MapPin className="w-4 h-4" />
//                 <span>{location.distance} away</span>
//               </div>
//             </div>
//             <Badge 
//               className="rounded-lg"
//               style={{ 
//                 backgroundColor: availabilityColor,
//                 color: 'white',
//                 border: 'none'
//               }}
//             >
//               {availabilityLabel}
//             </Badge>
//           </div>
//         </div>
//       </div>

//       {/* Map Thumbnail */}
//       <div className="max-w-2xl mx-auto">
//         <div className="h-48 bg-gradient-to-br from-[#0B6EFD]/20 to-[#00C48C]/20 relative overflow-hidden">
//           <div className="absolute inset-0 flex items-center justify-center">
//             <div className="w-12 h-12 bg-[#EF4444] rounded-full flex items-center justify-center">
//               <MapPin className="w-6 h-6 text-white" />
//             </div>
//           </div>
//           <div className="absolute bottom-4 right-4">
//             <Button className="bg-white text-[#0F1724] hover:bg-white/90 rounded-xl shadow-lg">
//               <Navigation className="w-4 h-4 mr-2" />
//               Directions
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-2xl mx-auto px-4 py-4 pb-32">
//         {/* Quick Stats */}
//         <div className="bg-white rounded-2xl p-4 mb-4 border border-[#E5E7EB]">
//           <div className="grid grid-cols-3 gap-4 text-center">
//             <div>
//               <div className="text-[#0F1724] mb-1">{location.available}/{location.totalSlots}</div>
//               <div className="text-[#9CA3AF]">Available</div>
//             </div>
//             <div>
//               <div className="flex items-center justify-center gap-1 mb-1">
//                 <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
//                 <span className="text-[#0F1724]">{location.rating}</span>
//               </div>
//               <div className="text-[#9CA3AF]">Rating</div>
//             </div>
//             <div>
//               <div className="text-[#0F1724] mb-1">{location.eta}</div>
//               <div className="text-[#9CA3AF]">ETA</div>
//             </div>
//           </div>
//         </div>

//         {/* Slot Types */}
//         <div className="bg-white rounded-2xl p-4 mb-4 border border-[#E5E7EB]">
//           <h3 className="text-[#0F1724] mb-4">Available Slot Types</h3>
//           <div className="space-y-3">
//             {location.slots.ev > 0 && (
//               <div className="flex items-center justify-between p-3 bg-[#00C48C]/5 rounded-xl">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-lg bg-[#00C48C]/10 flex items-center justify-center">
//                     <Zap className="w-5 h-5 text-[#00C48C]" />
//                   </div>
//                   <div>
//                     <div className="text-[#0F1724]">EV Charging</div>
//                     <div className="text-[#9CA3AF]">{location.slots.ev} available</div>
//                   </div>
//                 </div>
//                 <div className="text-[#0F1724]">₹40/hr</div>
//               </div>
//             )}
            
//             {location.slots.twoWheeler > 0 && (
//               <div className="flex items-center justify-between p-3 bg-[#0B6EFD]/5 rounded-xl">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-lg bg-[#0B6EFD]/10 flex items-center justify-center">
//                     <Bike className="w-5 h-5 text-[#0B6EFD]" />
//                   </div>
//                   <div>
//                     <div className="text-[#0F1724]">2-Wheeler</div>
//                     <div className="text-[#9CA3AF]">{location.slots.twoWheeler} available</div>
//                   </div>
//                 </div>
//                 <div className="text-[#0F1724]">₹20/hr</div>
//               </div>
//             )}
            
//             {location.slots.fourWheeler > 0 && (
//               <div className="flex items-center justify-between p-3 bg-[#0B6EFD]/5 rounded-xl">
//                 <div className="flex items-center gap-3">
//                   <div className="w-10 h-10 rounded-lg bg-[#0B6EFD]/10 flex items-center justify-center">
//                     <Car className="w-5 h-5 text-[#0B6EFD]" />
//                   </div>
//                   <div>
//                     <div className="text-[#0F1724]">4-Wheeler</div>
//                     <div className="text-[#9CA3AF]">{location.slots.fourWheeler} available</div>
//                   </div>
//                 </div>
//                 <div className="text-[#0F1724]">{location.price}</div>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Slot Grid Preview */}
//         <div className="bg-white rounded-2xl p-4 mb-4 border border-[#E5E7EB]">
//           <h3 className="text-[#0F1724] mb-4">Live Slot View</h3>
//           <div className="grid grid-cols-6 gap-2 mb-4">
//             {slotGrid.slice(0, 24).map((slot) => (
//               <div
//                 key={slot.id}
//                 className="aspect-square rounded-lg flex items-center justify-center text-white"
//                 style={{
//                   backgroundColor:
//                     slot.status === 'available' ? '#00C48C' :
//                     slot.status === 'reserved' ? '#F59E0B' : '#EF4444'
//                 }}
//               >
//                 <span className="text-xs">{slot.id}</span>
//               </div>
//             ))}
//           </div>
//           <div className="flex items-center justify-center gap-6 text-sm">
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded bg-[#00C48C]" />
//               <span className="text-[#374151]">Available</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded bg-[#F59E0B]" />
//               <span className="text-[#374151]">Reserved</span>
//             </div>
//             <div className="flex items-center gap-2">
//               <div className="w-4 h-4 rounded bg-[#EF4444]" />
//               <span className="text-[#374151]">Occupied</span>
//             </div>
//           </div>
//         </div>

//         {/* Dynamic Pricing Info */}
//         <div className="bg-[#0B6EFD]/5 rounded-2xl p-4 mb-4 border border-[#0B6EFD]/20">
//           <div className="flex items-start gap-3">
//             <div className="w-10 h-10 rounded-lg bg-[#0B6EFD]/10 flex items-center justify-center flex-shrink-0">
//               <Clock className="w-5 h-5 text-[#0B6EFD]" />
//             </div>
//             <div>
//               <h3 className="text-[#0F1724] mb-1">Off-Peak Pricing Active</h3>
//               <p className="text-[#374151]">
//                 Rates are currently lower due to low demand. Book now to save!
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Amenities */}
//         <div className="bg-white rounded-2xl p-4 border border-[#E5E7EB]">
//           <h3 className="text-[#0F1724] mb-3">Amenities</h3>
//           <div className="flex flex-wrap gap-2">
//             {location.amenities.map((amenity) => (
//               <Badge 
//                 key={amenity}
//                 variant="outline"
//                 className="rounded-lg text-[#374151] border-[#E5E7EB]"
//               >
//                 {amenity}
//               </Badge>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom CTA */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 max-w-2xl mx-auto">
//         <div className="flex items-center justify-between mb-3">
//           <div>
//             <div className="text-[#9CA3AF]">Starting from</div>
//             <div className="text-[#0F1724]">{location.price}</div>
//           </div>
//           <Button 
//             className="h-14 px-8 bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
//             onClick={onBook}
//           >
//             Book Now
//           </Button>
//         </div>
//       </div>
//     </div>
//   );
// }
// ─── LocationDetail.tsx ───────────────────────────────────────────────────────
// import { ArrowLeft, MapPin, Star, Zap, Bike, Car, Navigation, Clock, ChevronRight } from 'lucide-react';
// import type { ParkingLocation } from '../App';
// import { getAvailabilityColor, getAvailabilityLabel } from '../lib/mockData';

// interface LocationDetailProps {
//   location: ParkingLocation;
//   onBack: () => void;
//   onBook: () => void;
// }

// const S = {
//   bg: '#F7F8FC', white: '#FFFFFF', navy: '#0F1724', blue: '#0B6EFD',
//   green: '#00C48C', amber: '#F59E0B', red: '#EF4444', gray: '#6B7280', border: '#EAECF0',
// };

// export function LocationDetail({ location, onBack, onBook }: LocationDetailProps) {
//   const availColor = getAvailabilityColor(location.available, location.totalSlots);
//   const availLabel = getAvailabilityLabel(location.available, location.totalSlots);
//   const pct = Math.round((location.available / location.totalSlots) * 100);

//   const slotGrid = Array.from({ length: 24 }, (_, i) => ({
//     id: `S${i + 1}`,
//     status: i < location.available ? 'available' : i < location.totalSlots - 10 ? 'occupied' : 'reserved',
//   }));

//   return (
//     <div style={{ minHeight: '100vh', background: S.bg, fontFamily: "'DM Sans', sans-serif", paddingBottom: '90px' }}>
//       {/* Hero map area */}
//       <div style={{ position: 'relative', height: '200px', background: 'linear-gradient(135deg, #C7D9FF, #B2F0DC)', overflow: 'hidden' }}>
//         {/* Back btn */}
//         <button
//           onClick={onBack}
//           style={{
//             position: 'absolute', top: '16px', left: '16px', zIndex: 10,
//             width: '38px', height: '38px', borderRadius: '10px',
//             background: 'rgba(255,255,255,0.9)', backdropFilter: 'blur(8px)',
//             border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
//             boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
//           }}
//         >
//           <ArrowLeft style={{ width: '17px', height: '17px', color: S.navy }} />
//         </button>

//         {/* Availability chip */}
//         <div style={{
//           position: 'absolute', top: '16px', right: '16px', zIndex: 10,
//           padding: '5px 12px', borderRadius: '20px', fontSize: '12px', fontWeight: 700,
//           background: availColor + '22', color: availColor,
//           border: `1px solid ${availColor}40`, backdropFilter: 'blur(8px)',
//         }}>
//           {availLabel}
//         </div>

//         {/* Map pin */}
//         <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
//           <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: S.red, display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 16px rgba(239,68,68,0.4)' }}>
//             <MapPin style={{ width: '26px', height: '26px', color: '#fff' }} />
//           </div>
//         </div>

//         {/* Directions btn */}
//         <button style={{
//           position: 'absolute', bottom: '16px', right: '16px',
//           display: 'flex', alignItems: 'center', gap: '6px',
//           padding: '8px 14px', borderRadius: '10px',
//           background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
//           border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: S.navy,
//           boxShadow: '0 2px 8px rgba(0,0,0,0.12)',
//         }}>
//           <Navigation style={{ width: '14px', height: '14px', color: S.blue }} /> Directions
//         </button>
//       </div>

//       {/* Title section */}
//       <div style={{ background: S.white, padding: '18px 16px', borderBottom: `1px solid ${S.border}` }}>
//         <div style={{ maxWidth: '560px', margin: '0 auto' }}>
//           <h1 style={{ fontSize: '20px', fontWeight: 800, color: S.navy, margin: '0 0 4px', letterSpacing: '-0.4px' }}>{location.name}</h1>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: S.gray, fontSize: '13px', marginBottom: '14px' }}>
//             <MapPin style={{ width: '13px', height: '13px' }} />
//             <span>{location.distance} away · {location.eta} ETA</span>
//           </div>

//           {/* Stats row */}
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: S.border, borderRadius: '12px', overflow: 'hidden' }}>
//             {[
//               { label: 'Available', value: `${location.available}/${location.totalSlots}` },
//               { label: 'Rating', value: location.rating, icon: true },
//               { label: 'ETA', value: location.eta },
//             ].map(({ label, value, icon }) => (
//               <div key={label} style={{ background: S.white, padding: '12px', textAlign: 'center' }}>
//                 <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '16px', fontWeight: 800, color: S.navy, marginBottom: '3px' }}>
//                   {icon && <Star style={{ width: '14px', height: '14px', color: S.amber, fill: S.amber }} />}
//                   {value}
//                 </div>
//                 <div style={{ fontSize: '11px', color: S.gray, fontWeight: 500 }}>{label}</div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <div style={{ maxWidth: '560px', margin: '0 auto', padding: '16px' }}>
//         {/* Off-peak pricing notice */}
//         <div style={{
//           background: 'linear-gradient(135deg, #EFF4FF, #F5F3FF)', borderRadius: '14px',
//           padding: '14px 16px', marginBottom: '14px',
//           border: '1px solid rgba(11,110,253,0.15)',
//           display: 'flex', alignItems: 'center', gap: '12px',
//         }}>
//           <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#EFF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//             <Clock style={{ width: '17px', height: '17px', color: S.blue }} />
//           </div>
//           <div>
//             <div style={{ fontSize: '13px', fontWeight: 700, color: S.navy, marginBottom: '2px' }}>Off-Peak Pricing Active 🎉</div>
//             <div style={{ fontSize: '12px', color: S.gray }}>Rates are lower now. Book to save!</div>
//           </div>
//         </div>

//         {/* Slot types */}
//         <div style={{ background: S.white, borderRadius: '16px', padding: '18px', border: `1px solid ${S.border}`, marginBottom: '14px' }}>
//           <h3 style={{ fontSize: '13px', fontWeight: 700, color: S.gray, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>Slot Types</h3>
//           <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
//             {[
//               { icon: Zap, label: 'EV Charging', count: location.slots.ev, price: '₹40/hr', color: S.green, bg: '#EDFAF5' },
//               { icon: Bike, label: '2-Wheeler', count: location.slots.twoWheeler, price: '₹20/hr', color: S.blue, bg: '#EFF4FF' },
//               { icon: Car, label: '4-Wheeler', count: location.slots.fourWheeler, price: location.price, color: '#7C3AED', bg: '#F5F3FF' },
//             ].filter(s => s.count > 0).map(({ icon: Icon, label, count, price, color, bg }) => (
//               <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px', borderRadius: '12px', background: bg }}>
//                 <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                   <Icon style={{ width: '18px', height: '18px', color }} />
//                 </div>
//                 <div style={{ flex: 1 }}>
//                   <div style={{ fontSize: '14px', fontWeight: 700, color: S.navy }}>{label}</div>
//                   <div style={{ fontSize: '12px', color: S.green, fontWeight: 600 }}>{count} available</div>
//                 </div>
//                 <div style={{ fontSize: '15px', fontWeight: 800, color: S.navy }}>{price}</div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Live slot grid */}
//         <div style={{ background: S.white, borderRadius: '16px', padding: '18px', border: `1px solid ${S.border}`, marginBottom: '14px' }}>
//           <h3 style={{ fontSize: '13px', fontWeight: 700, color: S.gray, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>Live Slot View</h3>
//           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '5px', marginBottom: '14px' }}>
//             {slotGrid.map(slot => (
//               <div key={slot.id} style={{
//                 aspectRatio: '1', borderRadius: '6px',
//                 background: slot.status === 'available' ? S.green : slot.status === 'reserved' ? S.amber : S.red,
//                 opacity: slot.status === 'occupied' ? 0.5 : 1,
//                 display: 'flex', alignItems: 'center', justifyContent: 'center',
//               }}>
//                 <span style={{ fontSize: '7px', color: '#fff', fontWeight: 700 }}>{slot.id.slice(1)}</span>
//               </div>
//             ))}
//           </div>
//           <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
//             {[{ color: S.green, label: 'Free' }, { color: S.amber, label: 'Reserved' }, { color: S.red, label: 'Occupied' }].map(({ color, label }) => (
//               <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
//                 <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: color }} />
//                 <span style={{ fontSize: '11px', color: S.gray }}>{label}</span>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Amenities */}
//         <div style={{ background: S.white, borderRadius: '16px', padding: '18px', border: `1px solid ${S.border}` }}>
//           <h3 style={{ fontSize: '13px', fontWeight: 700, color: S.gray, textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Amenities</h3>
//           <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
//             {location.amenities.map(a => (
//               <span key={a} style={{ fontSize: '12px', fontWeight: 500, color: S.navy, background: S.bg, padding: '6px 12px', borderRadius: '20px', border: `1px solid ${S.border}` }}>{a}</span>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Bottom CTA */}
//       <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, background: S.white, borderTop: `1px solid ${S.border}`, padding: '12px 16px', zIndex: 20 }}>
//         <div style={{ maxWidth: '560px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//           <div>
//             <div style={{ fontSize: '11px', color: S.gray, fontWeight: 500 }}>Starting from</div>
//             <div style={{ fontSize: '22px', fontWeight: 800, color: S.navy, letterSpacing: '-0.5px' }}>{location.price}</div>
//           </div>
//           <button
//             onClick={onBook}
//             style={{
//               padding: '14px 32px', borderRadius: '14px',
//               background: 'linear-gradient(135deg, #0B6EFD, #0041A8)',
//               color: S.white, fontSize: '15px', fontWeight: 700,
//               border: 'none', cursor: 'pointer',
//               boxShadow: '0 4px 16px rgba(11,110,253,0.3)',
//             }}
//           >
//             Book Now →
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useEffect, useRef } from 'react';
import { ArrowLeft, MapPin, Star, Zap, Bike, Car, Navigation, Clock } from 'lucide-react';
import type { ParkingLocation } from '../App';
import { getAvailabilityColor, getAvailabilityLabel } from '../lib/mockData';

interface LocationDetailProps {
  location: ParkingLocation;
  onBack: () => void;
  onBook: () => void;
}

const S = {
  bg: '#F7F8FC', white: '#FFFFFF', navy: '#0F1724', blue: '#0B6EFD',
  green: '#00C48C', amber: '#F59E0B', red: '#EF4444', gray: '#6B7280', border: '#EAECF0',
};

// Same mock coords as HomeSearch
const LOCATION_COORDS: Record<string, [number, number]> = {
  L001: [13.0827, 80.2707],
  L002: [13.0674, 80.2376],
  L003: [13.0418, 80.2341],
  L004: [13.1067, 80.2784],
  L005: [13.0569, 80.2674],
};

// ── Mini Leaflet Map (non-interactive hero) ───────────────────────────────────
function LocationMiniMap({ location, availColor }: { location: ParkingLocation; availColor: string }) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<any>(null);

  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    const coords: [number, number] = LOCATION_COORDS[location.id] || [13.0827, 80.2707];

    const init = async () => {
      // CSS
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // JS
      if (!(window as any).L) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js';
          script.onload = () => resolve();
          script.onerror = reject;
          document.head.appendChild(script);
        });
      }

      const L = (window as any).L;

      const map = L.map(mapRef.current, {
        center: coords,
        zoom: 16,
        zoomControl: false,
        scrollWheelZoom: false,
        dragging: true,
        touchZoom: true,
        doubleClickZoom: false,
      });

      // Clean light tile layer
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Zoom control top-right
      L.control.zoom({ position: 'topright' }).addTo(map);

      // Custom pulsing marker for this location
      const icon = L.divIcon({
        className: '',
        html: `
          <div style="position:relative;display:flex;align-items:center;justify-content:center;width:48px;height:48px;">
            <!-- Pulse ring -->
            <div style="
              position:absolute;
              width:48px;height:48px;
              border-radius:50%;
              background:${availColor}22;
              border:2px solid ${availColor}44;
              animation:leafletPulse 2s ease-out infinite;
            "></div>
            <!-- Outer ring -->
            <div style="
              position:absolute;
              width:36px;height:36px;
              border-radius:50%;
              background:${availColor}33;
            "></div>
            <!-- Core dot -->
            <div style="
              width:22px;height:22px;
              border-radius:50%;
              background:${availColor};
              border:3px solid #fff;
              box-shadow:0 2px 10px ${availColor}66;
              z-index:2;
              display:flex;align-items:center;justify-content:center;
            ">
              <div style="width:6px;height:6px;border-radius:50%;background:#fff;"></div>
            </div>
          </div>
          <style>
            @keyframes leafletPulse {
              0% { transform: scale(0.8); opacity: 1; }
              100% { transform: scale(1.8); opacity: 0; }
            }
          </style>
        `,
        iconSize: [48, 48],
        iconAnchor: [24, 24],
      });

      const marker = L.marker(coords, { icon }).addTo(map);

      // Nearby dummy markers for context
      const nearbyOffsets: [number, number][] = [
        [0.003, 0.004], [-0.004, 0.002], [0.001, -0.005], [-0.002, -0.003],
      ];
      nearbyOffsets.forEach(([dlat, dlng]) => {
        const nearIcon = L.divIcon({
          className: '',
          html: `<div style="width:10px;height:10px;border-radius:50%;background:#9CA3AF;border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,0.2);"></div>`,
          iconSize: [10, 10],
          iconAnchor: [5, 5],
        });
        L.marker([coords[0] + dlat, coords[1] + dlng], { icon: nearIcon }).addTo(map);
      });

      leafletMap.current = map;
    };

    init().catch(console.error);

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, [location.id]);

  return <div ref={mapRef} style={{ width: '100%', height: '100%' }} />;
}


// ── Main Component ─────────────────────────────────────────────────────────────
export function LocationDetail({ location, onBack, onBook }: LocationDetailProps) {
  const availColor = getAvailabilityColor(location.available, location.totalSlots);
  const availLabel = getAvailabilityLabel(location.available, location.totalSlots);
  const pct = Math.round((location.available / location.totalSlots) * 100);

  const slotGrid = Array.from({ length: 24 }, (_, i) => ({
    id: `S${i + 1}`,
    status: i < location.available ? 'available' : i < location.totalSlots - 10 ? 'occupied' : 'reserved',
  }));

  return (
    <div style={{ minHeight: '100vh', background: S.bg, fontFamily: "'DM Sans', sans-serif", paddingBottom: '90px' }}>

      {/* ── MAP HERO (Leaflet) ── */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
        <LocationMiniMap location={location} availColor={availColor} />

        {/* Overlay controls */}
        <button
          onClick={onBack}
          style={{
            position: 'absolute', top: '14px', left: '14px', zIndex: 400,
            width: '38px', height: '38px', borderRadius: '10px',
            background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
            border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.15)',
          }}
        >
          <ArrowLeft style={{ width: '17px', height: '17px', color: S.navy }} />
        </button>

        <div style={{
          position: 'absolute', top: '14px', right: '14px', zIndex: 400,
          padding: '5px 12px', borderRadius: '20px', fontSize: '11px', fontWeight: 700,
          background: 'rgba(255,255,255,0.92)', color: availColor,
          backdropFilter: 'blur(8px)', boxShadow: '0 2px 10px rgba(0,0,0,0.10)',
          border: `1.5px solid ${availColor}40`,
        }}>
          {availLabel}
        </div>

        {/* Directions button */}
        <button style={{
          position: 'absolute', bottom: '14px', right: '14px', zIndex: 400,
          display: 'flex', alignItems: 'center', gap: '6px',
          padding: '8px 14px', borderRadius: '10px',
          background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(8px)',
          border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: S.navy,
          boxShadow: '0 2px 10px rgba(0,0,0,0.12)',
        }}>
          <Navigation style={{ width: '14px', height: '14px', color: S.blue }} /> Get Directions
        </button>

        {/* Expand map hint */}
        <div style={{
          position: 'absolute', bottom: '14px', left: '14px', zIndex: 400,
          padding: '5px 10px', borderRadius: '8px', fontSize: '10px', fontWeight: 600,
          background: 'rgba(15,23,36,0.65)', color: '#fff', backdropFilter: 'blur(6px)',
        }}>
          📍 {location.distance} away
        </div>
      </div>

      {/* ── TITLE BAR ── */}
      <div style={{ background: S.white, padding: '16px', borderBottom: `1px solid ${S.border}` }}>
        <div style={{ maxWidth: '560px', margin: '0 auto' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 800, color: S.navy, margin: '0 0 3px', letterSpacing: '-0.4px' }}>
            {location.name}
          </h1>
          <div style={{ fontSize: '13px', color: S.gray, marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>
            <MapPin style={{ width: '12px', height: '12px' }} /> {location.distance} · {location.eta} ETA
          </div>

          {/* Stats strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: S.border, borderRadius: '12px', overflow: 'hidden' }}>
            {[
              { label: 'Available', value: `${location.available}/${location.totalSlots}` },
              { label: 'Rating', value: location.rating, star: true },
              { label: 'ETA', value: location.eta },
            ].map(({ label, value, star }) => (
              <div key={label} style={{ background: S.white, padding: '11px', textAlign: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '4px', fontSize: '15px', fontWeight: 800, color: S.navy, marginBottom: '3px' }}>
                  {star && <Star style={{ width: '13px', height: '13px', color: S.amber, fill: S.amber }} />}
                  {value}
                </div>
                <div style={{ fontSize: '10px', color: S.gray, fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── CONTENT ── */}
      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '14px 16px' }}>

        {/* Off-peak notice */}
        <div style={{
          background: 'linear-gradient(135deg, #EFF4FF, #F5F3FF)', borderRadius: '14px',
          padding: '13px 15px', marginBottom: '13px',
          border: '1px solid rgba(11,110,253,0.12)',
          display: 'flex', alignItems: 'center', gap: '12px',
        }}>
          <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: '#EFF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Clock style={{ width: '16px', height: '16px', color: S.blue }} />
          </div>
          <div>
            <div style={{ fontSize: '13px', fontWeight: 700, color: S.navy, marginBottom: '1px' }}>Off-Peak Pricing Active 🎉</div>
            <div style={{ fontSize: '11px', color: S.gray }}>Rates are lower now — book to save!</div>
          </div>
        </div>

        {/* Slot types */}
        <div style={{ background: S.white, borderRadius: '16px', padding: '16px', border: `1px solid ${S.border}`, marginBottom: '13px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: S.gray, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '13px' }}>Slot Types</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '9px' }}>
            {[
              { icon: Zap, label: 'EV Charging', count: location.slots.ev, price: '₹40/hr', color: S.green, bg: '#EDFAF5' },
              { icon: Bike, label: '2-Wheeler', count: location.slots.twoWheeler, price: '₹20/hr', color: S.blue, bg: '#EFF4FF' },
              { icon: Car, label: '4-Wheeler', count: location.slots.fourWheeler, price: location.price, color: '#7C3AED', bg: '#F5F3FF' },
            ].filter(s => s.count > 0).map(({ icon: Icon, label, count, price, color, bg }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '11px', borderRadius: '11px', background: bg }}>
                <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Icon style={{ width: '17px', height: '17px', color }} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '13px', fontWeight: 700, color: S.navy }}>{label}</div>
                  <div style={{ fontSize: '11px', color: S.green, fontWeight: 600 }}>{count} available</div>
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color: S.navy }}>{price}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Live slot grid */}
        <div style={{ background: S.white, borderRadius: '16px', padding: '16px', border: `1px solid ${S.border}`, marginBottom: '13px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: S.gray, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '13px' }}>Live Slot View</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(8, 1fr)', gap: '5px', marginBottom: '12px' }}>
            {slotGrid.map(slot => (
              <div key={slot.id} style={{
                aspectRatio: '1', borderRadius: '6px',
                background: slot.status === 'available' ? S.green : slot.status === 'reserved' ? S.amber : S.red,
                opacity: slot.status === 'occupied' ? 0.45 : 1,
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontSize: '7px', color: '#fff', fontWeight: 700 }}>{slot.id.slice(1)}</span>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '18px' }}>
            {[{ color: S.green, label: 'Free' }, { color: S.amber, label: 'Reserved' }, { color: S.red, label: 'Occupied' }].map(({ color, label }) => (
              <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: '9px', height: '9px', borderRadius: '3px', background: color }} />
                <span style={{ fontSize: '11px', color: S.gray }}>{label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Amenities */}
        <div style={{ background: S.white, borderRadius: '16px', padding: '16px', border: `1px solid ${S.border}` }}>
          <div style={{ fontSize: '11px', fontWeight: 700, color: S.gray, textTransform: 'uppercase', letterSpacing: '0.09em', marginBottom: '12px' }}>Amenities</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
            {location.amenities.map(a => (
              <span key={a} style={{ fontSize: '12px', fontWeight: 500, color: S.navy, background: S.bg, padding: '5px 11px', borderRadius: '20px', border: `1px solid ${S.border}` }}>{a}</span>
            ))}
          </div>
        </div>
      </div>

      {/* ── BOTTOM CTA ── */}
      <div style={{
        position: 'fixed', bottom: 0, left: 0, right: 0, background: S.white,
        borderTop: `1px solid ${S.border}`, padding: '12px 16px', zIndex: 20,
      }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: '10px', color: S.gray, fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.06em' }}>Starting from</div>
            <div style={{ fontSize: '22px', fontWeight: 800, color: S.navy, letterSpacing: '-0.5px' }}>{location.price}</div>
          </div>
          <button
            onClick={onBook}
            style={{
              padding: '13px 30px', borderRadius: '13px',
              background: 'linear-gradient(135deg, #0B6EFD, #0041A8)',
              color: S.white, fontSize: '15px', fontWeight: 700,
              border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              boxShadow: '0 4px 16px rgba(11,110,253,0.32)',
            }}
          >
            Book Now →
          </button>
        </div>
      </div>
    </div>
  );
}