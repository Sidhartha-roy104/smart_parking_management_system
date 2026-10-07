// import { useState } from 'react';
// import { 
//   LayoutDashboard, 
//   BarChart3, 
//   Settings, 
//   Users, 
//   MapPin,
//   TrendingUp,
//   Car,
//   DollarSign,
//   Clock,
//   Play,
//   Pause,
//   SkipForward,
//   Gauge
// } from 'lucide-react';
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import type { User, Screen } from '../App';

// interface AdminDashboardProps {
//   user: User | null;
//   onNavigate: (screen: Screen) => void;
// }

// export function AdminDashboard({ user, onNavigate }: AdminDashboardProps) {
//   const [activeTab, setActiveTab] = useState<'overview' | 'locations' | 'bookings'>('overview');
//   const [simulationRunning, setSimulationRunning] = useState(false);
//   const [simulationSpeed, setSimulationSpeed] = useState(1);

//   const stats = [
//     {
//       label: 'Total Slots',
//       value: '1,200',
//       change: '+12%',
//       trend: 'up' as const,
//       icon: MapPin,
//       color: '#0B6EFD',
//     },
//     {
//       label: 'Occupied',
//       value: '847',
//       change: '70.6%',
//       trend: 'neutral' as const,
//       icon: Car,
//       color: '#EF4444',
//     },
//     {
//       label: 'Revenue Today',
//       value: '₹45,290',
//       change: '+18%',
//       trend: 'up' as const,
//       icon: DollarSign,
//       color: '#00C48C',
//     },
//     {
//       label: 'Active Bookings',
//       value: '124',
//       change: '+5%',
//       trend: 'up' as const,
//       icon: Clock,
//       color: '#F59E0B',
//     },
//   ];

//   // Mock slot grid for main parking lot
//   const slotGrid = Array.from({ length: 60 }, (_, i) => ({
//     id: `S${i + 1}`,
//     status: Math.random() > 0.3 ? 'occupied' : Math.random() > 0.5 ? 'available' : 'reserved',
//   }));

//   const recentBookings = [
//     {
//       id: 'B001',
//       user: 'Demo User',
//       location: 'Green Mall Parking',
//       slot: 'S12',
//       time: '2 mins ago',
//       status: 'active',
//       amount: '₹30',
//     },
//     {
//       id: 'B002',
//       user: 'John Doe',
//       location: 'City Center Plaza',
//       slot: 'S45',
//       time: '5 mins ago',
//       status: 'reserved',
//       amount: '₹25',
//     },
//     {
//       id: 'B003',
//       user: 'Jane Smith',
//       location: 'Tech Park Complex',
//       slot: 'S78',
//       time: '12 mins ago',
//       status: 'active',
//       amount: '₹35',
//     },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F3F4F6]">
//       {/* Sidebar */}
//       <div className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-[#E5E7EB] p-4 hidden lg:block">
//         <div className="mb-8">
//           <div className="flex items-center gap-3 mb-2">
//             <div className="w-10 h-10 bg-[#0B6EFD] rounded-xl flex items-center justify-center">
//               <Car className="w-5 h-5 text-white" />
//             </div>
//             <div>
//               <div className="text-[#0F1724]">Smart Parking</div>
//               <div className="text-[#9CA3AF]">Admin</div>
//             </div>
//           </div>
//         </div>

//         <nav className="space-y-1">
//           <button
//             className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-[#0B6EFD]/10 text-[#0B6EFD]"
//           >
//             <LayoutDashboard className="w-5 h-5" />
//             <span>Dashboard</span>
//           </button>
//           <button
//             className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#374151] hover:bg-[#F3F4F6]"
//             onClick={() => onNavigate('analytics')}
//           >
//             <BarChart3 className="w-5 h-5" />
//             <span>Analytics</span>
//           </button>
//           <button
//             className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#374151] hover:bg-[#F3F4F6]"
//           >
//             <Users className="w-5 h-5" />
//             <span>Users</span>
//           </button>
//           <button
//             className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#374151] hover:bg-[#F3F4F6]"
//             onClick={() => onNavigate('settings')}
//           >
//             <Settings className="w-5 h-5" />
//             <span>Settings</span>
//           </button>
//         </nav>

//         <div className="absolute bottom-4 left-4 right-4">
//           <div className="bg-[#F3F4F6] rounded-xl p-3">
//             <div className="text-[#9CA3AF] mb-1">Logged in as</div>
//             <div className="text-[#0F1724]">{user?.name}</div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="lg:ml-64">
//         {/* Top Bar */}
//         <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
//           <div className="px-6 py-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <h1 className="text-[#0F1724]">Dashboard</h1>
//                 <p className="text-[#9CA3AF]">Real-time parking management</p>
//               </div>
//               <div className="flex items-center gap-3">
//                 <Button 
//                   variant="outline"
//                   className="rounded-xl"
//                   onClick={() => onNavigate('settings')}
//                 >
//                   <Settings className="w-4 h-4 lg:mr-2" />
//                   <span className="hidden lg:inline">Settings</span>
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats Grid */}
//         <div className="p-6">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//             {stats.map((stat) => {
//               const Icon = stat.icon;
//               return (
//                 <div key={stat.label} className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//                   <div className="flex items-start justify-between mb-4">
//                     <div 
//                       className="w-12 h-12 rounded-xl flex items-center justify-center"
//                       style={{ backgroundColor: `${stat.color}15` }}
//                     >
//                       <Icon className="w-6 h-6" style={{ color: stat.color }} />
//                     </div>
//                     {stat.trend === 'up' && (
//                       <Badge className="bg-[#00C48C]/10 text-[#00C48C] rounded-lg border-none">
//                         <TrendingUp className="w-3 h-3 mr-1" />
//                         {stat.change}
//                       </Badge>
//                     )}
//                   </div>
//                   <div className="text-[#0F1724] mb-1">{stat.value}</div>
//                   <div className="text-[#9CA3AF]">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Main Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             {/* Slot Grid Visualization */}
//             <div className="lg:col-span-2">
//               <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//                 <div className="flex items-center justify-between mb-6">
//                   <div>
//                     <h2 className="text-[#0F1724] mb-1">Green Mall Parking - Live View</h2>
//                     <p className="text-[#9CA3AF]">Real-time slot occupancy</p>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="w-3 h-3 rounded-full bg-[#00C48C] animate-pulse" />
//                     <span className="text-[#374151]">Live</span>
//                   </div>
//                 </div>

//                 <div className="grid grid-cols-10 gap-2 mb-6">
//                   {slotGrid.map((slot) => (
//                     <div
//                       key={slot.id}
//                       className="aspect-square rounded-lg cursor-pointer hover:scale-110 transition-transform flex items-center justify-center"
//                       style={{
//                         backgroundColor:
//                           slot.status === 'available' ? '#00C48C' :
//                           slot.status === 'reserved' ? '#F59E0B' : '#EF4444'
//                       }}
//                       title={`${slot.id} - ${slot.status}`}
//                     >
//                       <span className="text-xs text-white opacity-0 hover:opacity-100">
//                         {slot.id.slice(1)}
//                       </span>
//                     </div>
//                   ))}
//                 </div>

//                 <div className="flex items-center justify-between text-sm border-t border-[#E5E7EB] pt-4">
//                   <div className="flex items-center gap-4">
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 rounded bg-[#00C48C]" />
//                       <span className="text-[#374151]">Available ({slotGrid.filter(s => s.status === 'available').length})</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 rounded bg-[#F59E0B]" />
//                       <span className="text-[#374151]">Reserved ({slotGrid.filter(s => s.status === 'reserved').length})</span>
//                     </div>
//                     <div className="flex items-center gap-2">
//                       <div className="w-4 h-4 rounded bg-[#EF4444]" />
//                       <span className="text-[#374151]">Occupied ({slotGrid.filter(s => s.status === 'occupied').length})</span>
//                     </div>
//                   </div>
//                   <Button variant="outline" size="sm" className="rounded-xl">
//                     Expand View
//                   </Button>
//                 </div>
//               </div>

//               {/* Simulation Control */}
//               <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] mt-6">
//                 <h2 className="text-[#0F1724] mb-4">Simulation Control</h2>
                
//                 <div className="flex items-center gap-3 mb-4">
//                   <Button
//                     variant={simulationRunning ? "outline" : "default"}
//                     size="icon"
//                     className="rounded-xl"
//                     onClick={() => setSimulationRunning(!simulationRunning)}
//                   >
//                     {simulationRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
//                   </Button>
//                   <Button variant="outline" size="icon" className="rounded-xl">
//                     <SkipForward className="w-5 h-5" />
//                   </Button>
                  
//                   <div className="flex-1">
//                     <div className="flex items-center justify-between mb-2">
//                       <span className="text-[#9CA3AF]">Speed</span>
//                       <Badge variant="outline" className="rounded-lg">
//                         {simulationSpeed}x
//                       </Badge>
//                     </div>
//                     <div className="flex gap-2">
//                       {[1, 5, 10].map((speed) => (
//                         <Button
//                           key={speed}
//                           variant={simulationSpeed === speed ? "default" : "outline"}
//                           size="sm"
//                           className="rounded-xl flex-1"
//                           onClick={() => setSimulationSpeed(speed)}
//                         >
//                           {speed}x
//                         </Button>
//                       ))}
//                     </div>
//                   </div>
//                 </div>

//                 <div className="bg-[#F3F4F6] rounded-xl p-4">
//                   <div className="flex items-center gap-3 mb-3">
//                     <Gauge className="w-5 h-5 text-[#0B6EFD]" />
//                     <div>
//                       <div className="text-[#0F1724]">Random Occupancy</div>
//                       <div className="text-[#9CA3AF]">Simulate realistic traffic patterns</div>
//                     </div>
//                   </div>
//                   <Button variant="outline" className="w-full rounded-xl">
//                     Generate Random Events
//                   </Button>
//                 </div>
//               </div>
//             </div>

//             {/* Recent Bookings */}
//             <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//               <h2 className="text-[#0F1724] mb-4">Recent Bookings</h2>
              
//               <div className="space-y-3">
//                 {recentBookings.map((booking) => (
//                   <div 
//                     key={booking.id}
//                     className="p-4 bg-[#F3F4F6] rounded-xl hover:bg-[#E5E7EB] transition-colors cursor-pointer"
//                   >
//                     <div className="flex items-start justify-between mb-2">
//                       <div className="flex-1">
//                         <div className="text-[#0F1724] mb-1">{booking.user}</div>
//                         <div className="text-[#9CA3AF]">{booking.location}</div>
//                       </div>
//                       <Badge 
//                         className="rounded-lg"
//                         style={{
//                           backgroundColor: booking.status === 'active' ? '#00C48C' : '#F59E0B',
//                           color: 'white',
//                           border: 'none'
//                         }}
//                       >
//                         {booking.status}
//                       </Badge>
//                     </div>
                    
//                     <div className="flex items-center justify-between text-sm">
//                       <span className="text-[#9CA3AF]">Slot {booking.slot}</span>
//                       <span className="text-[#0F1724]">{booking.amount}</span>
//                     </div>
                    
//                     <div className="text-[#9CA3AF] mt-2">{booking.time}</div>
//                   </div>
//                 ))}
//               </div>

//               <Button variant="outline" className="w-full mt-4 rounded-xl">
//                 View All Bookings
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { useState } from 'react';
import {
  LayoutDashboard, BarChart3, Settings, Users, MapPin,
  TrendingUp, Car, DollarSign, Clock, Play, Pause, SkipForward, Gauge, Bell, ChevronRight
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { User, Screen } from '../App';

interface AdminDashboardProps {
  user: User | null;
  onNavigate: (screen: Screen) => void;
}

const S = {
  bg: '#F7F8FC',
  white: '#FFFFFF',
  navy: '#0F1724',
  blue: '#0B6EFD',
  green: '#00C48C',
  amber: '#F59E0B',
  red: '#EF4444',
  gray: '#6B7280',
  border: '#EAECF0',
  sidebar: '#0F1724',
};

export function AdminDashboard({ user, onNavigate }: AdminDashboardProps) {
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(1);

  const stats = [
    { label: 'Total Slots', value: '1,200', change: '+12%', icon: MapPin, color: S.blue, bg: '#EFF4FF' },
    { label: 'Occupied Now', value: '847', sub: '70.6% full', icon: Car, color: S.red, bg: '#FEF2F2' },
    { label: 'Revenue Today', value: '₹45,290', change: '+18%', icon: DollarSign, color: S.green, bg: '#EDFAF5' },
    { label: 'Active Bookings', value: '124', change: '+5%', icon: Clock, color: S.amber, bg: '#FFFBEB' },
  ];

  const slotGrid = Array.from({ length: 60 }, (_, i) => ({
    id: `S${i + 1}`,
    status: Math.random() > 0.3 ? 'occupied' : Math.random() > 0.5 ? 'available' : 'reserved',
  }));

  const recentBookings = [
    { id: 'B001', user: 'Demo User', location: 'Green Mall Parking', slot: 'S12', time: '2 mins ago', status: 'active', amount: '₹30' },
    { id: 'B002', user: 'John Doe', location: 'City Center Plaza', slot: 'S45', time: '5 mins ago', status: 'reserved', amount: '₹25' },
    { id: 'B003', user: 'Jane Smith', location: 'Tech Park Complex', slot: 'S78', time: '12 mins ago', status: 'active', amount: '₹35' },
  ];

  const navItems = [
    { label: 'Dashboard', icon: LayoutDashboard, active: true, action: undefined },
    { label: 'Analytics', icon: BarChart3, active: false, action: () => onNavigate('analytics') },
    { label: 'Users', icon: Users, active: false, action: undefined },
    { label: 'Settings', icon: Settings, active: false, action: () => onNavigate('settings') },
  ];

  return (
    <div style={{ minHeight: '100vh', background: S.bg, display: 'flex', fontFamily: "'DM Sans', sans-serif" }}>
      {/* ── SIDEBAR ── */}
      <aside style={{
        width: '240px', background: S.sidebar, display: 'flex', flexDirection: 'column',
        position: 'fixed', top: 0, left: 0, bottom: 0, zIndex: 40, flexShrink: 0,
      }} className="hidden lg:flex">
        {/* Brand */}
        <div style={{ padding: '28px 20px 20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '4px' }}>
            <div style={{
              width: '36px', height: '36px', borderRadius: '10px',
              background: 'linear-gradient(135deg, #0B6EFD, #0041A8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
            }}>
              <Car style={{ width: '18px', height: '18px', color: '#fff' }} />
            </div>
            <div>
              <div style={{ color: '#fff', fontWeight: 700, fontSize: '15px', letterSpacing: '-0.3px' }}>Smart Parking</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Admin Panel</div>
            </div>
          </div>
        </div>

        <div style={{ height: '1px', background: 'rgba(255,255,255,0.08)', margin: '0 20px' }} />

        {/* Nav */}
        <nav style={{ padding: '16px 12px', flex: 1 }}>
          <div style={{ marginBottom: '6px', padding: '0 8px 8px', color: 'rgba(255,255,255,0.3)', fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase' }}>
            Navigation
          </div>
          {navItems.map(({ label, icon: Icon, active, action }) => (
            <button
              key={label}
              onClick={action}
              style={{
                width: '100%', display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 12px', borderRadius: '10px', border: 'none', cursor: action ? 'pointer' : 'default',
                background: active ? 'rgba(11,110,253,0.18)' : 'transparent',
                color: active ? '#5B9FFF' : 'rgba(255,255,255,0.55)',
                fontSize: '14px', fontWeight: active ? 600 : 400,
                marginBottom: '2px', transition: 'all 0.15s', textAlign: 'left',
              }}
              onMouseEnter={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.06)'; }}
              onMouseLeave={e => { if (!active) (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
            >
              <Icon style={{ width: '17px', height: '17px', flexShrink: 0 }} />
              {label}
              {active && <div style={{ marginLeft: 'auto', width: '6px', height: '6px', borderRadius: '50%', background: '#5B9FFF' }} />}
            </button>
          ))}
        </nav>

        {/* User card */}
        <div style={{ padding: '12px', margin: '0 12px 20px' }}>
          <div style={{
            background: 'rgba(255,255,255,0.07)', borderRadius: '12px', padding: '12px',
            display: 'flex', alignItems: 'center', gap: '10px',
          }}>
            <div style={{
              width: '34px', height: '34px', borderRadius: '50%', flexShrink: 0,
              background: 'linear-gradient(135deg, #0B6EFD, #00C48C)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', fontWeight: 700, fontSize: '14px',
            }}>
              {user?.name?.charAt(0) || 'A'}
            </div>
            <div style={{ overflow: 'hidden' }}>
              <div style={{ color: '#fff', fontSize: '13px', fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{user?.name}</div>
              <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: '11px' }}>Administrator</div>
            </div>
          </div>
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div style={{ marginLeft: '240px', flex: 1, display: 'flex', flexDirection: 'column' }} className="lg:ml-60">
        {/* Topbar */}
        <header style={{
          background: S.white, borderBottom: `1px solid ${S.border}`,
          position: 'sticky', top: 0, zIndex: 30,
          padding: '0 28px', height: '64px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        }}>
          <div>
            <h1 style={{ fontSize: '18px', fontWeight: 700, color: S.navy, letterSpacing: '-0.3px', margin: 0 }}>Dashboard</h1>
            <p style={{ fontSize: '12px', color: S.gray, margin: 0 }}>Real-time parking management</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <button style={{
              width: '38px', height: '38px', borderRadius: '10px', border: `1px solid ${S.border}`,
              background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
              position: 'relative',
            }}>
              <Bell style={{ width: '17px', height: '17px', color: S.gray }} />
              <div style={{ position: 'absolute', top: '8px', right: '8px', width: '7px', height: '7px', background: S.red, borderRadius: '50%', border: '1.5px solid white' }} />
            </button>
            <button
              onClick={() => onNavigate('settings')}
              style={{
                display: 'flex', alignItems: 'center', gap: '6px',
                padding: '8px 14px', borderRadius: '10px', border: `1px solid ${S.border}`,
                background: S.white, color: S.navy, fontSize: '13px', fontWeight: 500, cursor: 'pointer',
              }}
            >
              <Settings style={{ width: '15px', height: '15px' }} /> Settings
            </button>
          </div>
        </header>

        {/* Content */}
        <main style={{ padding: '24px 28px', flex: 1 }}>
          {/* Stat Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
            {stats.map(({ label, value, change, sub, icon: Icon, color, bg }) => (
              <div key={label} style={{
                background: S.white, borderRadius: '16px', padding: '20px',
                border: `1px solid ${S.border}`, boxShadow: '0 1px 4px rgba(0,0,0,0.04)',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon style={{ width: '18px', height: '18px', color }} />
                  </div>
                  {change && (
                    <span style={{ fontSize: '11px', fontWeight: 600, color: S.green, background: '#EDFAF5', padding: '3px 8px', borderRadius: '20px', display: 'flex', alignItems: 'center', gap: '3px' }}>
                      <TrendingUp style={{ width: '10px', height: '10px' }} />{change}
                    </span>
                  )}
                </div>
                <div style={{ fontSize: '24px', fontWeight: 800, color: S.navy, letterSpacing: '-0.5px', marginBottom: '4px' }}>{value}</div>
                <div style={{ fontSize: '12px', color: S.gray, fontWeight: 500 }}>{label}</div>
                {sub && <div style={{ fontSize: '11px', color: color, fontWeight: 600, marginTop: '2px' }}>{sub}</div>}
              </div>
            ))}
          </div>

          {/* Main Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 320px', gap: '20px' }}>
            {/* Left */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {/* Live Slot View */}
              <div style={{ background: S.white, borderRadius: '16px', padding: '22px', border: `1px solid ${S.border}` }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div>
                    <h2 style={{ fontSize: '15px', fontWeight: 700, color: S.navy, margin: '0 0 3px' }}>Green Mall Parking — Live View</h2>
                    <p style={{ fontSize: '12px', color: S.gray, margin: 0 }}>Real-time slot occupancy</p>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', background: '#EDFAF5', padding: '5px 10px', borderRadius: '20px' }}>
                    <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: S.green, animation: 'pulse 2s infinite' }} />
                    <span style={{ fontSize: '12px', fontWeight: 600, color: S.green }}>Live</span>
                  </div>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(10, 1fr)', gap: '5px', marginBottom: '16px' }}>
                  {slotGrid.map((slot) => (
                    <div
                      key={slot.id}
                      title={`${slot.id} — ${slot.status}`}
                      style={{
                        aspectRatio: '1', borderRadius: '6px', cursor: 'pointer',
                        transition: 'transform 0.12s, opacity 0.12s',
                        background: slot.status === 'available' ? S.green : slot.status === 'reserved' ? S.amber : S.red,
                        opacity: slot.status === 'occupied' ? 0.6 : 1,
                      }}
                      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1.2)'; (e.currentTarget as HTMLElement).style.zIndex = '2'; (e.currentTarget as HTMLElement).style.position = 'relative'; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = 'scale(1)'; }}
                    />
                  ))}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '14px', borderTop: `1px solid ${S.border}` }}>
                  <div style={{ display: 'flex', gap: '20px' }}>
                    {[
                      { color: S.green, label: 'Available', count: slotGrid.filter(s => s.status === 'available').length },
                      { color: S.amber, label: 'Reserved', count: slotGrid.filter(s => s.status === 'reserved').length },
                      { color: S.red, label: 'Occupied', count: slotGrid.filter(s => s.status === 'occupied').length },
                    ].map(({ color, label, count }) => (
                      <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '7px' }}>
                        <div style={{ width: '10px', height: '10px', borderRadius: '3px', background: color }} />
                        <span style={{ fontSize: '12px', color: S.gray }}>{label} <strong style={{ color: S.navy }}>{count}</strong></span>
                      </div>
                    ))}
                  </div>
                  <button style={{
                    fontSize: '12px', fontWeight: 600, color: S.blue, background: '#EFF4FF',
                    padding: '5px 12px', borderRadius: '8px', border: 'none', cursor: 'pointer',
                  }}>Expand View</button>
                </div>
              </div>

              {/* Simulation Control */}
              <div style={{ background: S.white, borderRadius: '16px', padding: '22px', border: `1px solid ${S.border}` }}>
                <h2 style={{ fontSize: '15px', fontWeight: 700, color: S.navy, margin: '0 0 16px' }}>Simulation Control</h2>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <button
                    onClick={() => setSimulationRunning(!simulationRunning)}
                    style={{
                      width: '44px', height: '44px', borderRadius: '12px', border: 'none', cursor: 'pointer',
                      background: simulationRunning ? '#FEF2F2' : S.blue,
                      color: simulationRunning ? S.red : S.white,
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}
                  >
                    {simulationRunning ? <Pause style={{ width: '18px', height: '18px' }} /> : <Play style={{ width: '18px', height: '18px' }} />}
                  </button>
                  <button style={{
                    width: '44px', height: '44px', borderRadius: '12px', border: `1px solid ${S.border}`,
                    background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}>
                    <SkipForward style={{ width: '18px', height: '18px', color: S.gray }} />
                  </button>

                  <div style={{ flex: 1 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                      <span style={{ fontSize: '12px', color: S.gray, fontWeight: 500 }}>Simulation Speed</span>
                      <span style={{ fontSize: '12px', fontWeight: 700, color: S.blue, background: '#EFF4FF', padding: '2px 8px', borderRadius: '6px' }}>{simulationSpeed}x</span>
                    </div>
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {[1, 5, 10].map(speed => (
                        <button
                          key={speed}
                          onClick={() => setSimulationSpeed(speed)}
                          style={{
                            flex: 1, padding: '7px', borderRadius: '8px', border: 'none', cursor: 'pointer', fontSize: '13px', fontWeight: 600,
                            background: simulationSpeed === speed ? S.blue : S.bg,
                            color: simulationSpeed === speed ? S.white : S.gray,
                            transition: 'all 0.15s',
                          }}
                        >
                          {speed}x
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '14px', background: S.bg, borderRadius: '12px', padding: '14px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ width: '38px', height: '38px', borderRadius: '10px', background: '#EFF4FF', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <Gauge style={{ width: '17px', height: '17px', color: S.blue }} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '13px', fontWeight: 600, color: S.navy, marginBottom: '2px' }}>Random Occupancy</div>
                    <div style={{ fontSize: '11px', color: S.gray }}>Simulate realistic traffic patterns</div>
                  </div>
                  <button style={{
                    padding: '7px 14px', borderRadius: '8px', border: `1px solid ${S.border}`,
                    background: S.white, color: S.navy, fontSize: '12px', fontWeight: 600, cursor: 'pointer', flexShrink: 0,
                  }}>Generate</button>
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div style={{ background: S.white, borderRadius: '16px', padding: '22px', border: `1px solid ${S.border}`, height: 'fit-content' }}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <h2 style={{ fontSize: '15px', fontWeight: 700, color: S.navy, margin: 0 }}>Recent Bookings</h2>
                <button style={{ fontSize: '12px', color: S.blue, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>View All</button>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {recentBookings.map((b) => (
                  <div
                    key={b.id}
                    style={{
                      padding: '14px', borderRadius: '12px', background: S.bg, cursor: 'pointer',
                      border: `1px solid ${S.border}`, transition: 'border-color 0.15s',
                    }}
                    onMouseEnter={e => (e.currentTarget as HTMLElement).style.borderColor = S.blue}
                    onMouseLeave={e => (e.currentTarget as HTMLElement).style.borderColor = S.border}
                  >
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '10px' }}>
                      <div>
                        <div style={{ fontSize: '13px', fontWeight: 600, color: S.navy, marginBottom: '2px' }}>{b.user}</div>
                        <div style={{ fontSize: '11px', color: S.gray }}>{b.location}</div>
                      </div>
                      <span style={{
                        fontSize: '10px', fontWeight: 700, padding: '3px 8px', borderRadius: '6px', textTransform: 'uppercase', letterSpacing: '0.05em',
                        background: b.status === 'active' ? '#EDFAF5' : '#FFFBEB',
                        color: b.status === 'active' ? S.green : S.amber,
                      }}>{b.status}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '11px', color: S.gray }}>Slot {b.slot} · {b.time}</span>
                      <span style={{ fontSize: '13px', fontWeight: 700, color: S.navy }}>{b.amount}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
