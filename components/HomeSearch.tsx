// import { useState } from 'react';
// import { Search, MapPin, Settings, User, Zap, Bike, Car, DollarSign, Navigation, Map as MapIcon } from 'lucide-react';
// import { Input } from './ui/input';
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import type { User as UserType, ParkingLocation, Screen } from '../App';
// import { mockLocations, getAvailabilityColor, getAvailabilityLabel } from '../lib/mockData';

// interface HomeSearchProps {
//   user: UserType | null;
//   onLocationSelect: (location: ParkingLocation) => void;
//   onNavigate: (screen: Screen) => void;
// }

// export function HomeSearch({ user, onLocationSelect, onNavigate }: HomeSearchProps) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeFilter, setActiveFilter] = useState<string | null>(null);
//   const [showMap, setShowMap] = useState(false);

//   const filters = [
//     { id: 'ev', label: 'EV', icon: Zap },
//     { id: '2w', label: '2W', icon: Bike },
//     { id: '4w', label: '4W', icon: Car },
//     { id: 'price', label: 'Price', icon: DollarSign },
//     { id: 'nearest', label: 'Nearest', icon: Navigation },
//   ];

//   const filteredLocations = mockLocations.filter(loc => 
//     loc.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div className="min-h-screen bg-[#F3F4F6]">
//       {/* Header */}
//       <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
//         <div className="max-w-2xl mx-auto px-4 py-4">
//           <div className="flex items-center justify-between mb-4">
//             <div>
//               <p className="text-[#9CA3AF]">Welcome back</p>
//               <h2 className="text-[#0F1724]">{user?.name || 'Guest'}</h2>
//             </div>
//             <div className="flex gap-2">
//               <Button 
//                 variant="ghost" 
//                 size="icon"
//                 className="rounded-xl"
//                 onClick={() => onNavigate('my-bookings')}
//               >
//                 <User className="w-5 h-5" />
//               </Button>
//               <Button 
//                 variant="ghost" 
//                 size="icon"
//                 className="rounded-xl"
//                 onClick={() => onNavigate('settings')}
//               >
//                 <Settings className="w-5 h-5" />
//               </Button>
//             </div>
//           </div>

//           {/* Search */}
//           <div className="relative">
//             <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#9CA3AF]" />
//             <Input 
//               placeholder="Search location or address"
//               className="pl-12 h-14 rounded-xl border-[#E5E7EB]"
//               value={searchQuery}
//               onChange={(e) => setSearchQuery(e.target.value)}
//             />
//           </div>

//           {/* Filters */}
//           <div className="flex gap-2 overflow-x-auto mt-4 pb-2 scrollbar-hide">
//             {filters.map((filter) => {
//               const Icon = filter.icon;
//               const isActive = activeFilter === filter.id;
//               return (
//                 <Button
//                   key={filter.id}
//                   variant={isActive ? "default" : "outline"}
//                   className={`rounded-xl flex-shrink-0 ${
//                     isActive ? 'bg-[#0B6EFD]' : 'border-[#E5E7EB]'
//                   }`}
//                   onClick={() => setActiveFilter(isActive ? null : filter.id)}
//                 >
//                   <Icon className="w-4 h-4 mr-2" />
//                   {filter.label}
//                 </Button>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* Location Cards */}
//       <div className="max-w-2xl mx-auto px-4 py-4 pb-24">
//         <div className="space-y-3">
//           {filteredLocations.map((location) => (
//             <LocationCard 
//               key={location.id}
//               location={location}
//               onClick={() => onLocationSelect(location)}
//             />
//           ))}
//         </div>
//       </div>

//       {/* Map Preview - Sticky Bottom */}
//       <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-[#E5E7EB] p-4 max-w-2xl mx-auto">
//         <Button 
//           className="w-full h-14 bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
//           onClick={() => setShowMap(!showMap)}
//         >
//           <MapIcon className="w-5 h-5 mr-2" />
//           {showMap ? 'Show List View' : 'Show Map View'}
//         </Button>
//       </div>
//     </div>
//   );
// }

// interface LocationCardProps {
//   location: ParkingLocation;
//   onClick: () => void;
// }

// function LocationCard({ location, onClick }: LocationCardProps) {
//   const availabilityColor = getAvailabilityColor(location.available, location.totalSlots);
//   const availabilityLabel = getAvailabilityLabel(location.available, location.totalSlots);

//   return (
//     <div 
//       className="bg-white rounded-2xl p-4 cursor-pointer hover:shadow-md transition-shadow border border-[#E5E7EB]"
//       onClick={onClick}
//     >
//       <div className="flex items-start justify-between mb-3">
//         <div className="flex-1">
//           <h3 className="text-[#0F1724] mb-1">{location.name}</h3>
//           <div className="flex items-center gap-2 text-[#9CA3AF]">
//             <MapPin className="w-4 h-4" />
//             <span>{location.distance}</span>
//             <span>•</span>
//             <span>{location.eta}</span>
//           </div>
//         </div>
//         <Badge 
//           className="rounded-lg"
//           style={{ 
//             backgroundColor: availabilityColor,
//             color: 'white',
//             border: 'none'
//           }}
//         >
//           {availabilityLabel}
//         </Badge>
//       </div>

//       <div className="flex items-center justify-between">
//         <div className="flex gap-4">
//           <div className="text-center">
//             <div className="text-[#0F1724]">{location.available}</div>
//             <div className="text-[#9CA3AF]">Available</div>
//           </div>
//           <div className="w-px bg-[#E5E7EB]" />
//           <div className="text-center">
//             <div className="text-[#0F1724]">{location.price}</div>
//             <div className="text-[#9CA3AF]">Base Price</div>
//           </div>
//         </div>

//         <div className="flex gap-2">
//           {location.slots.ev > 0 && (
//             <div className="w-8 h-8 rounded-lg bg-[#00C48C]/10 flex items-center justify-center">
//               <Zap className="w-4 h-4 text-[#00C48C]" />
//             </div>
//           )}
//           {location.slots.twoWheeler > 0 && (
//             <div className="w-8 h-8 rounded-lg bg-[#0B6EFD]/10 flex items-center justify-center">
//               <Bike className="w-4 h-4 text-[#0B6EFD]" />
//             </div>
//           )}
//           {location.slots.fourWheeler > 0 && (
//             <div className="w-8 h-8 rounded-lg bg-[#0B6EFD]/10 flex items-center justify-center">
//               <Car className="w-4 h-4 text-[#0B6EFD]" />
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Amenities */}
//       {location.amenities.length > 0 && (
//         <div className="flex gap-2 mt-3 pt-3 border-t border-[#E5E7EB]">
//           {location.amenities.slice(0, 3).map((amenity) => (
//             <Badge 
//               key={amenity} 
//               variant="outline"
//               className="rounded-lg text-[#374151] border-[#E5E7EB]"
//             >
//               {amenity}
//             </Badge>
//           ))}
//           {location.amenities.length > 3 && (
//             <Badge 
//               variant="outline"
//               className="rounded-lg text-[#374151] border-[#E5E7EB]"
//             >
//               +{location.amenities.length - 3}
//             </Badge>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
// import { useState } from 'react';
// import { Search, MapPin, Settings, User, Zap, Bike, Car, DollarSign, Navigation, Map as MapIcon, Bell, ChevronRight } from 'lucide-react';
// import type { User as UserType, ParkingLocation, Screen } from '../App';
// import { mockLocations, getAvailabilityColor, getAvailabilityLabel } from '../lib/mockData';

// interface HomeSearchProps {
//   user: UserType | null;
//   onLocationSelect: (location: ParkingLocation) => void;
//   onNavigate: (screen: Screen) => void;
// }

// const S = {
//   bg: '#F7F8FC', white: '#FFFFFF', navy: '#0F1724', blue: '#0B6EFD',
//   green: '#00C48C', amber: '#F59E0B', red: '#EF4444', gray: '#6B7280', border: '#EAECF0',
// };

// export function HomeSearch({ user, onLocationSelect, onNavigate }: HomeSearchProps) {
//   const [searchQuery, setSearchQuery] = useState('');
//   const [activeFilter, setActiveFilter] = useState<string | null>(null);

//   const filters = [
//     { id: 'ev', label: 'EV Charging', icon: Zap },
//     { id: '2w', label: '2-Wheeler', icon: Bike },
//     { id: '4w', label: '4-Wheeler', icon: Car },
//     { id: 'price', label: 'Best Price', icon: DollarSign },
//     { id: 'nearest', label: 'Nearest', icon: Navigation },
//   ];

//   const filteredLocations = mockLocations.filter(loc =>
//     loc.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   return (
//     <div style={{ minHeight: '100vh', background: S.bg, fontFamily: "'DM Sans', sans-serif", paddingBottom: '90px' }}>
//       {/* ── HEADER ── */}
//       <div style={{
//         background: S.white, borderBottom: `1px solid ${S.border}`,
//         position: 'sticky', top: 0, zIndex: 20,
//         padding: '0 16px',
//       }}>
//         <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//           {/* Top row */}
//           <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '16px', paddingBottom: '14px' }}>
//             <div>
//               <div style={{ fontSize: '12px', color: S.gray, fontWeight: 500, marginBottom: '2px' }}>
//                 Welcome back 👋
//               </div>
//               <div style={{ fontSize: '18px', fontWeight: 800, color: S.navy, letterSpacing: '-0.3px' }}>
//                 {user?.name || 'Guest'}
//               </div>
//             </div>
//             <div style={{ display: 'flex', gap: '8px' }}>
//               <button
//                 onClick={() => onNavigate('my-bookings')}
//                 style={{
//                   width: '38px', height: '38px', borderRadius: '10px', border: `1px solid ${S.border}`,
//                   background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 }}
//               >
//                 <User style={{ width: '17px', height: '17px', color: S.gray }} />
//               </button>
//               <button
//                 onClick={() => onNavigate('settings')}
//                 style={{
//                   width: '38px', height: '38px', borderRadius: '10px', border: `1px solid ${S.border}`,
//                   background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
//                 }}
//               >
//                 <Settings style={{ width: '17px', height: '17px', color: S.gray }} />
//               </button>
//             </div>
//           </div>

//           {/* Search bar */}
//           <div style={{ position: 'relative', marginBottom: '12px' }}>
//             <Search style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)', width: '18px', height: '18px', color: S.gray }} />
//             <input
//               placeholder="Search location or address..."
//               value={searchQuery}
//               onChange={e => setSearchQuery(e.target.value)}
//               style={{
//                 width: '100%', height: '48px', borderRadius: '12px',
//                 border: `1.5px solid ${S.border}`, paddingLeft: '44px', paddingRight: '16px',
//                 fontSize: '14px', color: S.navy, background: S.bg, outline: 'none',
//                 boxSizing: 'border-box', fontFamily: 'inherit',
//                 transition: 'border-color 0.15s',
//               }}
//               onFocus={e => (e.target.style.borderColor = S.blue)}
//               onBlur={e => (e.target.style.borderColor = S.border)}
//             />
//           </div>

//           {/* Filter pills */}
//           <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '14px', scrollbarWidth: 'none' }}>
//             {filters.map(({ id, label, icon: Icon }) => {
//               const active = activeFilter === id;
//               return (
//                 <button
//                   key={id}
//                   onClick={() => setActiveFilter(active ? null : id)}
//                   style={{
//                     display: 'flex', alignItems: 'center', gap: '6px', flexShrink: 0,
//                     padding: '7px 14px', borderRadius: '20px', border: 'none', cursor: 'pointer',
//                     background: active ? S.blue : S.bg,
//                     color: active ? S.white : S.gray,
//                     fontSize: '13px', fontWeight: 600,
//                     transition: 'all 0.15s',
//                     boxShadow: active ? '0 2px 8px rgba(11,110,253,0.3)' : 'none',
//                   }}
//                 >
//                   <Icon style={{ width: '13px', height: '13px' }} />
//                   {label}
//                 </button>
//               );
//             })}
//           </div>
//         </div>
//       </div>

//       {/* ── CONTENT ── */}
//       <div style={{ maxWidth: '600px', margin: '0 auto', padding: '16px' }}>
//         <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
//           <h2 style={{ fontSize: '14px', fontWeight: 700, color: S.navy, margin: 0 }}>
//             {filteredLocations.length} locations nearby
//           </h2>
//           <span style={{ fontSize: '12px', color: S.gray }}>Sorted by distance</span>
//         </div>

//         <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
//           {filteredLocations.map((location) => (
//             <LocationCard key={location.id} location={location} onClick={() => onLocationSelect(location)} />
//           ))}
//         </div>
//       </div>

//       {/* ── BOTTOM CTA ── */}
//       <div style={{
//         position: 'fixed', bottom: 0, left: 0, right: 0,
//         background: S.white, borderTop: `1px solid ${S.border}`,
//         padding: '12px 16px', zIndex: 20,
//       }}>
//         <div style={{ maxWidth: '600px', margin: '0 auto' }}>
//           <button style={{
//             width: '100%', height: '50px', borderRadius: '14px',
//             background: 'linear-gradient(135deg, #0B6EFD, #0041A8)',
//             color: S.white, fontSize: '15px', fontWeight: 700,
//             border: 'none', cursor: 'pointer',
//             display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
//             boxShadow: '0 4px 16px rgba(11,110,253,0.3)',
//           }}>
//             <MapIcon style={{ width: '18px', height: '18px' }} /> Switch to Map View
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// function LocationCard({ location, onClick }: { location: ParkingLocation; onClick: () => void }) {
//   const availabilityColor = getAvailabilityColor(location.available, location.totalSlots);
//   const availabilityLabel = getAvailabilityLabel(location.available, location.totalSlots);
//   const pct = Math.round((location.available / location.totalSlots) * 100);

//   return (
//     <div
//       onClick={onClick}
//       style={{
//         background: '#FFFFFF', borderRadius: '16px', padding: '16px',
//         border: `1px solid #EAECF0`, cursor: 'pointer',
//         transition: 'box-shadow 0.15s, border-color 0.15s',
//         boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
//       }}
//       onMouseEnter={e => {
//         (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(0,0,0,0.10)';
//         (e.currentTarget as HTMLElement).style.borderColor = '#0B6EFD';
//       }}
//       onMouseLeave={e => {
//         (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
//         (e.currentTarget as HTMLElement).style.borderColor = '#EAECF0';
//       }}
//     >
//       {/* Top row */}
//       <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
//         <div style={{ flex: 1, marginRight: '12px' }}>
//           <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F1724', margin: '0 0 4px', letterSpacing: '-0.2px' }}>
//             {location.name}
//           </h3>
//           <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: '#6B7280' }}>
//             <MapPin style={{ width: '12px', height: '12px' }} />
//             <span>{location.distance}</span>
//             <span style={{ margin: '0 2px' }}>·</span>
//             <span>{location.eta} away</span>
//           </div>
//         </div>
//         <span style={{
//           fontSize: '11px', fontWeight: 700, padding: '4px 10px', borderRadius: '20px',
//           background: availabilityColor + '18', color: availabilityColor,
//           letterSpacing: '0.02em', whiteSpace: 'nowrap',
//         }}>
//           {availabilityLabel}
//         </span>
//       </div>

//       {/* Availability bar */}
//       <div style={{ marginBottom: '14px' }}>
//         <div style={{ height: '5px', background: '#F0F2F7', borderRadius: '3px', overflow: 'hidden' }}>
//           <div style={{
//             height: '100%', borderRadius: '3px',
//             width: `${pct}%`,
//             background: availabilityColor,
//             transition: 'width 0.4s',
//           }} />
//         </div>
//         <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '5px' }}>
//           <span style={{ fontSize: '11px', color: '#6B7280' }}>{location.available} spots free</span>
//           <span style={{ fontSize: '11px', color: '#6B7280' }}>{location.totalSlots} total</span>
//         </div>
//       </div>

//       {/* Bottom row */}
//       <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
//         <div style={{ display: 'flex', gap: '8px' }}>
//           {location.slots.ev > 0 && (
//             <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#EDFAF5', padding: '4px 8px', borderRadius: '7px' }}>
//               <Zap style={{ width: '11px', height: '11px', color: '#00C48C' }} />
//               <span style={{ fontSize: '11px', fontWeight: 600, color: '#00C48C' }}>EV</span>
//             </div>
//           )}
//           {location.slots.twoWheeler > 0 && (
//             <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#EFF4FF', padding: '4px 8px', borderRadius: '7px' }}>
//               <Bike style={{ width: '11px', height: '11px', color: '#0B6EFD' }} />
//               <span style={{ fontSize: '11px', fontWeight: 600, color: '#0B6EFD' }}>2W</span>
//             </div>
//           )}
//           {location.slots.fourWheeler > 0 && (
//             <div style={{ display: 'flex', alignItems: 'center', gap: '4px', background: '#EFF4FF', padding: '4px 8px', borderRadius: '7px' }}>
//               <Car style={{ width: '11px', height: '11px', color: '#0B6EFD' }} />
//               <span style={{ fontSize: '11px', fontWeight: 600, color: '#0B6EFD' }}>4W</span>
//             </div>
//           )}
//         </div>
//         <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
//           <span style={{ fontSize: '16px', fontWeight: 800, color: '#0F1724' }}>{location.price}</span>
//           <ChevronRight style={{ width: '14px', height: '14px', color: '#9CA3AF' }} />
//         </div>
//       </div>

//       {/* Amenities */}
//       {location.amenities.length > 0 && (
//         <div style={{ display: 'flex', gap: '6px', marginTop: '12px', paddingTop: '12px', borderTop: '1px solid #F0F2F7', flexWrap: 'wrap' }}>
//           {location.amenities.slice(0, 4).map(a => (
//             <span key={a} style={{ fontSize: '10px', color: '#6B7280', background: '#F7F8FC', padding: '3px 8px', borderRadius: '5px', fontWeight: 500 }}>{a}</span>
//           ))}
//           {location.amenities.length > 4 && (
//             <span style={{ fontSize: '10px', color: '#9CA3AF', background: '#F7F8FC', padding: '3px 8px', borderRadius: '5px' }}>+{location.amenities.length - 4}</span>
//           )}
//         </div>
//       )}
//     </div>
//   );
// }
import { useState, useEffect, useRef } from 'react';
import {
  Search, MapPin, Settings, User, Zap, Bike, Car,
  DollarSign, Navigation, Map as MapIcon, List, ChevronRight, X
} from 'lucide-react';
import type { User as UserType, ParkingLocation, Screen } from '../App';
import { mockLocations, getAvailabilityColor, getAvailabilityLabel } from '../lib/mockData';

interface HomeSearchProps {
  user: UserType | null;
  onLocationSelect: (location: ParkingLocation) => void;
  onNavigate: (screen: Screen) => void;
}

const S = {
  bg: '#F7F8FC', white: '#FFFFFF', navy: '#0F1724', blue: '#0B6EFD',
  green: '#00C48C', amber: '#F59E0B', red: '#EF4444', gray: '#6B7280', border: '#EAECF0',
};

// Assign mock lat/lng to each location (Chennai area coords)
const LOCATION_COORDS: Record<string, [number, number]> = {
  L001: [13.0827, 80.2707],
  L002: [13.0674, 80.2376],
  L003: [13.0418, 80.2341],
  L004: [13.1067, 80.2784],
  L005: [13.0569, 80.2674],
};

// ── Leaflet Map component ─────────────────────────────────────────────────────
function ParkingMap({
  locations,
  selectedId,
  onSelect,
}: {
  locations: ParkingLocation[];
  selectedId: string | null;
  onSelect: (loc: ParkingLocation) => void;
}) {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletMap = useRef<any>(null);
  const markersRef = useRef<any[]>([]);

  useEffect(() => {
    if (!mapRef.current || leafletMap.current) return;

    // Dynamically load Leaflet CSS + JS
    const loadLeaflet = async () => {
      // Inject CSS
      if (!document.getElementById('leaflet-css')) {
        const link = document.createElement('link');
        link.id = 'leaflet-css';
        link.rel = 'stylesheet';
        link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css';
        document.head.appendChild(link);
      }

      // Load JS
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

      // Init map — centered on Chennai
      const map = L.map(mapRef.current, {
        center: [13.0827, 80.2707],
        zoom: 13,
        zoomControl: false,
      });

      // Tile layer — clean CartoDB light style
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 19,
      }).addTo(map);

      // Custom zoom controls bottom-right
      L.control.zoom({ position: 'bottomright' }).addTo(map);

      // Add markers
      locations.forEach((loc) => {
        const coords = LOCATION_COORDS[loc.id] || [13.0827, 80.2707];
        const availColor = getAvailabilityColor(loc.available, loc.totalSlots);
        const pct = Math.round((loc.available / loc.totalSlots) * 100);

        // Custom HTML marker
        const icon = L.divIcon({
          className: '',
          html: `
            <div style="
              position:relative;
              display:flex;
              flex-direction:column;
              align-items:center;
              cursor:pointer;
            ">
              <div style="
                background:${availColor};
                color:#fff;
                font-family:'DM Sans',sans-serif;
                font-size:11px;
                font-weight:700;
                padding:5px 10px;
                border-radius:20px;
                white-space:nowrap;
                box-shadow:0 3px 12px ${availColor}55;
                border:2px solid #fff;
              ">${loc.price}</div>
              <div style="
                width:0;height:0;
                border-left:6px solid transparent;
                border-right:6px solid transparent;
                border-top:7px solid ${availColor};
                margin-top:-1px;
              "></div>
            </div>
          `,
          iconSize: [80, 38],
          iconAnchor: [40, 38],
        });

        const marker = L.marker(coords, { icon }).addTo(map);

        marker.on('click', () => onSelect(loc));

        // Popup
        marker.bindPopup(`
          <div style="font-family:'DM Sans',sans-serif;min-width:200px;padding:4px 0">
            <div style="font-size:13px;font-weight:700;color:#0F1724;margin-bottom:3px">${loc.name}</div>
            <div style="font-size:11px;color:#6B7280;margin-bottom:8px">${loc.distance} · ${loc.eta} ETA</div>
            <div style="display:flex;gap:10px;margin-bottom:8px">
              <div style="text-align:center;flex:1">
                <div style="font-size:14px;font-weight:800;color:#0F1724">${loc.available}</div>
                <div style="font-size:10px;color:#6B7280">Available</div>
              </div>
              <div style="text-align:center;flex:1">
                <div style="font-size:14px;font-weight:800;color:${availColor}">${pct}%</div>
                <div style="font-size:10px;color:#6B7280">Free</div>
              </div>
              <div style="text-align:center;flex:1">
                <div style="font-size:14px;font-weight:800;color:#0F1724">${loc.price}</div>
                <div style="font-size:10px;color:#6B7280">Base rate</div>
              </div>
            </div>
            <button onclick="window.__parkingSelect && window.__parkingSelect('${loc.id}')" style="
              width:100%;height:34px;border-radius:8px;border:none;cursor:pointer;
              background:linear-gradient(135deg,#0B6EFD,#0041A8);
              color:#fff;font-size:12px;font-weight:700;font-family:'DM Sans',sans-serif;
            ">Book Now</button>
          </div>
        `, { maxWidth: 240, closeButton: true });

        markersRef.current.push({ marker, locId: loc.id });
      });

      leafletMap.current = map;

      // Global select handler for popup buttons
      (window as any).__parkingSelect = (id: string) => {
        const loc = locations.find(l => l.id === id);
        if (loc) onSelect(loc);
      };
    };

    loadLeaflet().catch(console.error);

    return () => {
      if (leafletMap.current) {
        leafletMap.current.remove();
        leafletMap.current = null;
      }
    };
  }, []);

  // Highlight selected marker
  useEffect(() => {
    if (!leafletMap.current || !selectedId) return;
    const found = markersRef.current.find(m => m.locId === selectedId);
    if (found) {
      found.marker.openPopup();
      leafletMap.current.flyTo(
        LOCATION_COORDS[selectedId] || [13.0827, 80.2707],
        15,
        { duration: 0.8 }
      );
    }
  }, [selectedId]);

  return (
    <div ref={mapRef} style={{ width: '100%', height: '100%' }} />
  );
}

// ── Location Card ─────────────────────────────────────────────────────────────
function LocationCard({
  location,
  onClick,
  isHighlighted,
}: {
  location: ParkingLocation;
  onClick: () => void;
  isHighlighted?: boolean;
}) {
  const availColor = getAvailabilityColor(location.available, location.totalSlots);
  const availLabel = getAvailabilityLabel(location.available, location.totalSlots);
  const pct = Math.round((location.available / location.totalSlots) * 100);

  return (
    <div
      onClick={onClick}
      style={{
        background: S.white, borderRadius: '16px', padding: '16px',
        border: `1.5px solid ${isHighlighted ? S.blue : S.border}`,
        cursor: 'pointer', transition: 'all 0.15s',
        boxShadow: isHighlighted ? `0 4px 20px rgba(11,110,253,0.15)` : '0 1px 4px rgba(0,0,0,0.04)',
      }}
      onMouseEnter={e => {
        if (!isHighlighted) {
          (e.currentTarget as HTMLElement).style.borderColor = S.blue;
          (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 16px rgba(0,0,0,0.10)';
        }
      }}
      onMouseLeave={e => {
        if (!isHighlighted) {
          (e.currentTarget as HTMLElement).style.borderColor = S.border;
          (e.currentTarget as HTMLElement).style.boxShadow = '0 1px 4px rgba(0,0,0,0.04)';
        }
      }}
    >
      {/* Top */}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <h3 style={{ fontSize: '14px', fontWeight: 700, color: S.navy, margin: '0 0 3px', letterSpacing: '-0.2px' }}>
            {location.name}
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px', fontSize: '12px', color: S.gray }}>
            <MapPin style={{ width: '11px', height: '11px' }} />
            <span>{location.distance} · {location.eta} away</span>
          </div>
        </div>
        <span style={{
          fontSize: '10px', fontWeight: 700, padding: '3px 9px', borderRadius: '20px',
          background: availColor + '18', color: availColor, whiteSpace: 'nowrap',
        }}>{availLabel}</span>
      </div>

      {/* Progress bar */}
      <div style={{ marginBottom: '12px' }}>
        <div style={{ height: '4px', background: '#F0F2F7', borderRadius: '3px', overflow: 'hidden' }}>
          <div style={{ height: '100%', width: `${pct}%`, background: availColor, borderRadius: '3px' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '4px' }}>
          <span style={{ fontSize: '10px', color: S.gray }}>{location.available} spots free</span>
          <span style={{ fontSize: '10px', color: S.gray }}>{location.totalSlots} total</span>
        </div>
      </div>

      {/* Bottom */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', gap: '6px' }}>
          {location.slots.ev > 0 && (
            <span style={{ fontSize: '10px', fontWeight: 700, color: S.green, background: '#EDFAF5', padding: '3px 7px', borderRadius: '6px' }}>⚡ EV</span>
          )}
          {location.slots.twoWheeler > 0 && (
            <span style={{ fontSize: '10px', fontWeight: 700, color: S.blue, background: '#EFF4FF', padding: '3px 7px', borderRadius: '6px' }}>🏍 2W</span>
          )}
          {location.slots.fourWheeler > 0 && (
            <span style={{ fontSize: '10px', fontWeight: 700, color: '#7C3AED', background: '#F5F3FF', padding: '3px 7px', borderRadius: '6px' }}>🚗 4W</span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '3px' }}>
          <span style={{ fontSize: '15px', fontWeight: 800, color: S.navy }}>{location.price}</span>
          <ChevronRight style={{ width: '13px', height: '13px', color: S.gray }} />
        </div>
      </div>
    </div>
  );
}

// ── Main Component ─────────────────────────────────────────────────────────────
export function HomeSearch({ user, onLocationSelect, onNavigate }: HomeSearchProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [showMap, setShowMap] = useState(false);
  const [selectedMapId, setSelectedMapId] = useState<string | null>(null);

  const filters = [
    { id: 'ev', label: 'EV', icon: Zap },
    { id: '2w', label: '2-Wheeler', icon: Bike },
    { id: '4w', label: '4-Wheeler', icon: Car },
    { id: 'price', label: 'Best Price', icon: DollarSign },
    { id: 'nearest', label: 'Nearest', icon: Navigation },
  ];

  const filteredLocations = mockLocations.filter(loc =>
    loc.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleMapSelect = (loc: ParkingLocation) => {
    setSelectedMapId(loc.id);
  };

  const handleCardClickInMap = (loc: ParkingLocation) => {
    onLocationSelect(loc);
  };

  // Find selected location for bottom sheet in map view
  const selectedLoc = filteredLocations.find(l => l.id === selectedMapId);

  return (
    <div style={{ minHeight: '100vh', background: S.bg, fontFamily: "'DM Sans', sans-serif", display: 'flex', flexDirection: 'column' }}>
      {/* ── HEADER ── */}
      <div style={{
        background: S.white, borderBottom: `1px solid ${S.border}`,
        position: 'sticky', top: 0, zIndex: 30, padding: '0 16px', flexShrink: 0,
      }}>
        <div style={{ maxWidth: '640px', margin: '0 auto' }}>
          {/* Top row */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', paddingBottom: '12px' }}>
            <div>
              <div style={{ fontSize: '11px', color: S.gray, fontWeight: 500, marginBottom: '1px' }}>Welcome back 👋</div>
              <div style={{ fontSize: '18px', fontWeight: 800, color: S.navy, letterSpacing: '-0.3px' }}>{user?.name || 'Guest'}</div>
            </div>
            <div style={{ display: 'flex', gap: '8px' }}>
              <button onClick={() => onNavigate('my-bookings')} style={{ width: '36px', height: '36px', borderRadius: '10px', border: `1px solid ${S.border}`, background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <User style={{ width: '16px', height: '16px', color: S.gray }} />
              </button>
              <button onClick={() => onNavigate('settings')} style={{ width: '36px', height: '36px', borderRadius: '10px', border: `1px solid ${S.border}`, background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Settings style={{ width: '16px', height: '16px', color: S.gray }} />
              </button>
            </div>
          </div>

          {/* Search */}
          <div style={{ position: 'relative', marginBottom: '10px' }}>
            <Search style={{ position: 'absolute', left: '13px', top: '50%', transform: 'translateY(-50%)', width: '16px', height: '16px', color: S.gray }} />
            <input
              placeholder="Search location or address..."
              value={searchQuery}
              onChange={e => setSearchQuery(e.target.value)}
              style={{
                width: '100%', height: '44px', borderRadius: '11px',
                border: `1.5px solid ${S.border}`, paddingLeft: '40px', paddingRight: '40px',
                fontSize: '14px', color: S.navy, background: S.bg, outline: 'none',
                boxSizing: 'border-box', fontFamily: 'inherit', transition: 'border-color 0.15s',
              }}
              onFocus={e => (e.target.style.borderColor = S.blue)}
              onBlur={e => (e.target.style.borderColor = S.border)}
            />
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', display: 'flex', padding: '4px' }}>
                <X style={{ width: '14px', height: '14px', color: S.gray }} />
              </button>
            )}
          </div>

          {/* Filters + view toggle */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', paddingBottom: '12px' }}>
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', flex: 1, scrollbarWidth: 'none' }}>
              {filters.map(({ id, label, icon: Icon }) => {
                const active = activeFilter === id;
                return (
                  <button
                    key={id}
                    onClick={() => setActiveFilter(active ? null : id)}
                    style={{
                      display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0,
                      padding: '6px 12px', borderRadius: '20px', border: 'none', cursor: 'pointer',
                      background: active ? S.blue : S.bg,
                      color: active ? S.white : S.gray,
                      fontSize: '12px', fontWeight: 600, transition: 'all 0.15s',
                      boxShadow: active ? '0 2px 8px rgba(11,110,253,0.3)' : 'none',
                      fontFamily: 'inherit',
                    }}
                  >
                    <Icon style={{ width: '12px', height: '12px' }} />{label}
                  </button>
                );
              })}
            </div>

            {/* View toggle */}
            <button
              onClick={() => { setShowMap(!showMap); setSelectedMapId(null); }}
              style={{
                display: 'flex', alignItems: 'center', gap: '5px', flexShrink: 0,
                padding: '6px 12px', borderRadius: '20px', border: `1px solid ${S.border}`,
                background: showMap ? S.navy : S.white, color: showMap ? S.white : S.navy,
                fontSize: '12px', fontWeight: 700, cursor: 'pointer', transition: 'all 0.15s',
                fontFamily: 'inherit',
              }}
            >
              {showMap ? <List style={{ width: '12px', height: '12px' }} /> : <MapIcon style={{ width: '12px', height: '12px' }} />}
              {showMap ? 'List' : 'Map'}
            </button>
          </div>
        </div>
      </div>

      {/* ── MAP VIEW ── */}
      {showMap && (
        <div style={{ flex: 1, position: 'relative', minHeight: 'calc(100vh - 160px)' }}>
          <ParkingMap
            locations={filteredLocations}
            selectedId={selectedMapId}
            onSelect={handleMapSelect}
          />

          {/* Selected location bottom sheet */}
          {selectedLoc && (
            <div style={{
              position: 'absolute', bottom: 0, left: 0, right: 0, zIndex: 20,
              background: S.white, borderTopLeftRadius: '20px', borderTopRightRadius: '20px',
              padding: '16px', boxShadow: '0 -4px 24px rgba(0,0,0,0.12)',
              border: `1px solid ${S.border}`,
              animation: 'slideUp 0.25s ease',
            }}>
              <style>{`@keyframes slideUp { from { transform: translateY(100%); opacity:0; } to { transform: translateY(0); opacity:1; } }`}</style>

              {/* Handle */}
              <div style={{ width: '36px', height: '4px', borderRadius: '2px', background: S.border, margin: '0 auto 14px' }} />

              <div style={{ maxWidth: '640px', margin: '0 auto' }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '12px' }}>
                  <div>
                    <h3 style={{ fontSize: '15px', fontWeight: 700, color: S.navy, margin: '0 0 3px' }}>{selectedLoc.name}</h3>
                    <div style={{ fontSize: '12px', color: S.gray }}>{selectedLoc.distance} · {selectedLoc.eta} ETA</div>
                  </div>
                  <button onClick={() => setSelectedMapId(null)} style={{ width: '28px', height: '28px', borderRadius: '8px', border: `1px solid ${S.border}`, background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <X style={{ width: '13px', height: '13px', color: S.gray }} />
                  </button>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', background: S.border, borderRadius: '12px', overflow: 'hidden', marginBottom: '12px' }}>
                  {[
                    { label: 'Available', value: selectedLoc.available },
                    { label: 'Total', value: selectedLoc.totalSlots },
                    { label: 'From', value: selectedLoc.price },
                  ].map(({ label, value }) => (
                    <div key={label} style={{ background: S.bg, padding: '10px', textAlign: 'center' }}>
                      <div style={{ fontSize: '15px', fontWeight: 800, color: S.navy }}>{value}</div>
                      <div style={{ fontSize: '10px', color: S.gray, marginTop: '2px' }}>{label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button
                    onClick={() => onLocationSelect(selectedLoc)}
                    style={{
                      flex: 1, height: '46px', borderRadius: '12px',
                      background: 'linear-gradient(135deg, #0B6EFD, #0041A8)',
                      color: S.white, fontSize: '14px', fontWeight: 700, border: 'none', cursor: 'pointer',
                      boxShadow: '0 4px 14px rgba(11,110,253,0.3)', fontFamily: 'inherit',
                    }}
                  >
                    View Details & Book
                  </button>
                  <button style={{
                    width: '46px', height: '46px', borderRadius: '12px', border: `1px solid ${S.border}`,
                    background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <Navigation style={{ width: '16px', height: '16px', color: S.blue }} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {/* ── LIST VIEW ── */}
      {!showMap && (
        <div style={{ flex: 1, padding: '14px 16px 24px', maxWidth: '640px', margin: '0 auto', width: '100%', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontSize: '13px', fontWeight: 700, color: S.navy }}>{filteredLocations.length} locations nearby</span>
            <span style={{ fontSize: '12px', color: S.gray }}>Sorted by distance</span>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {filteredLocations.map(loc => (
              <LocationCard
                key={loc.id}
                location={loc}
                onClick={() => onLocationSelect(loc)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}