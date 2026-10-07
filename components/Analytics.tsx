// import { ArrowLeft, TrendingUp, DollarSign, Users, Clock } from 'lucide-react';
// import { Button } from './ui/button';
// import { Badge } from './ui/badge';
// import {
//   LineChart,
//   Line,
//   BarChart,
//   Bar,
//   XAxis,
//   YAxis,
//   CartesianGrid,
//   Tooltip,
//   ResponsiveContainer,
//   Legend,
// } from 'recharts';

// interface AnalyticsProps {
//   onBack: () => void;
// }

// export function Analytics({ onBack }: AnalyticsProps) {
//   // Mock data for charts
//   const occupancyData = [
//     { time: '00:00', occupancy: 12 },
//     { time: '03:00', occupancy: 8 },
//     { time: '06:00', occupancy: 25 },
//     { time: '09:00', occupancy: 68 },
//     { time: '12:00', occupancy: 85 },
//     { time: '15:00', occupancy: 72 },
//     { time: '18:00', occupancy: 90 },
//     { time: '21:00', occupancy: 45 },
//   ];

//   const revenueData = [
//     { day: 'Mon', revenue: 4500 },
//     { day: 'Tue', revenue: 5200 },
//     { day: 'Wed', revenue: 4800 },
//     { day: 'Thu', revenue: 6100 },
//     { day: 'Fri', revenue: 7300 },
//     { day: 'Sat', revenue: 8900 },
//     { day: 'Sun', revenue: 7600 },
//   ];

//   const peakHours = [
//     { hour: '06-09', usage: 65, color: '#F59E0B' },
//     { hour: '09-12', usage: 85, color: '#EF4444' },
//     { hour: '12-15', usage: 75, color: '#F59E0B' },
//     { hour: '15-18', usage: 90, color: '#EF4444' },
//     { hour: '18-21', usage: 55, color: '#00C48C' },
//     { hour: '21-00', usage: 30, color: '#00C48C' },
//   ];

//   const pricingRules = [
//     { name: 'Peak Hours (9AM-6PM)', multiplier: 1.5, color: '#EF4444' },
//     { name: 'Off-Peak (6PM-9AM)', multiplier: 0.8, color: '#00C48C' },
//     { name: 'Weekend Premium', multiplier: 1.3, color: '#F59E0B' },
//     { name: 'High Demand Surge', multiplier: 2.0, color: '#EF4444' },
//   ];

//   return (
//     <div className="min-h-screen bg-[#F3F4F6]">
//       {/* Header */}
//       <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
//         <div className="max-w-7xl mx-auto px-6 py-4">
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
//               <h1 className="text-[#0F1724]">Analytics & Insights</h1>
//               <p className="text-[#9CA3AF]">Performance metrics and predictions</p>
//             </div>
//             <Button variant="outline" className="rounded-xl">
//               Export Report
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-7xl mx-auto p-6">
//         {/* KPIs */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
//           <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 rounded-xl bg-[#0B6EFD]/10 flex items-center justify-center">
//                 <TrendingUp className="w-6 h-6 text-[#0B6EFD]" />
//               </div>
//               <Badge className="bg-[#00C48C]/10 text-[#00C48C] rounded-lg border-none">
//                 +12.5%
//               </Badge>
//             </div>
//             <div className="text-[#0F1724] mb-1">78%</div>
//             <div className="text-[#9CA3AF]">Avg. Occupancy</div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 rounded-xl bg-[#00C48C]/10 flex items-center justify-center">
//                 <DollarSign className="w-6 h-6 text-[#00C48C]" />
//               </div>
//               <Badge className="bg-[#00C48C]/10 text-[#00C48C] rounded-lg border-none">
//                 +18.3%
//               </Badge>
//             </div>
//             <div className="text-[#0F1724] mb-1">₹3.2L</div>
//             <div className="text-[#9CA3AF]">Weekly Revenue</div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
//                 <Users className="w-6 h-6 text-[#F59E0B]" />
//               </div>
//               <Badge className="bg-[#00C48C]/10 text-[#00C48C] rounded-lg border-none">
//                 +7.8%
//               </Badge>
//             </div>
//             <div className="text-[#0F1724] mb-1">1,247</div>
//             <div className="text-[#9CA3AF]">Active Users</div>
//           </div>

//           <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//             <div className="flex items-center justify-between mb-4">
//               <div className="w-12 h-12 rounded-xl bg-[#EF4444]/10 flex items-center justify-center">
//                 <Clock className="w-6 h-6 text-[#EF4444]" />
//               </div>
//               <Badge className="bg-[#00C48C]/10 text-[#00C48C] rounded-lg border-none">
//                 -5.2%
//               </Badge>
//             </div>
//             <div className="text-[#0F1724] mb-1">2.4 hrs</div>
//             <div className="text-[#9CA3AF]">Avg. Duration</div>
//           </div>
//         </div>

//         {/* Charts Grid */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//           {/* Occupancy Over Time */}
//           <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//             <div className="mb-6">
//               <h2 className="text-[#0F1724] mb-1">Occupancy Over Time</h2>
//               <p className="text-[#9CA3AF]">Today's parking utilization</p>
//             </div>
            
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={occupancyData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
//                 <XAxis dataKey="time" stroke="#9CA3AF" />
//                 <YAxis stroke="#9CA3AF" />
//                 <Tooltip 
//                   contentStyle={{ 
//                     backgroundColor: 'white', 
//                     border: '1px solid #E5E7EB',
//                     borderRadius: '12px'
//                   }}
//                 />
//                 <Line 
//                   type="monotone" 
//                   dataKey="occupancy" 
//                   stroke="#0B6EFD" 
//                   strokeWidth={3}
//                   dot={{ fill: '#0B6EFD', r: 4 }}
//                   activeDot={{ r: 6 }}
//                 />
//               </LineChart>
//             </ResponsiveContainer>
//           </div>

//           {/* Revenue Trends */}
//           <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//             <div className="mb-6">
//               <h2 className="text-[#0F1724] mb-1">Revenue Trends</h2>
//               <p className="text-[#9CA3AF]">Weekly revenue breakdown</p>
//             </div>
            
//             <ResponsiveContainer width="100%" height={250}>
//               <BarChart data={revenueData}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
//                 <XAxis dataKey="day" stroke="#9CA3AF" />
//                 <YAxis stroke="#9CA3AF" />
//                 <Tooltip 
//                   contentStyle={{ 
//                     backgroundColor: 'white', 
//                     border: '1px solid #E5E7EB',
//                     borderRadius: '12px'
//                   }}
//                 />
//                 <Bar 
//                   dataKey="revenue" 
//                   fill="#00C48C" 
//                   radius={[8, 8, 0, 0]}
//                 />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         {/* Peak Hours Heatmap */}
//         <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] mb-6">
//           <div className="mb-6">
//             <h2 className="text-[#0F1724] mb-1">Peak Hour Analysis</h2>
//             <p className="text-[#9CA3AF]">Usage patterns throughout the day</p>
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
//             {peakHours.map((hour) => (
//               <div 
//                 key={hour.hour}
//                 className="relative rounded-xl p-4 text-center overflow-hidden"
//               >
//                 <div 
//                   className="absolute inset-0 opacity-20"
//                   style={{ backgroundColor: hour.color }}
//                 />
//                 <div className="relative z-10">
//                   <div className="text-[#0F1724] mb-2">{hour.hour}</div>
//                   <div className="mb-2" style={{ color: hour.color }}>{hour.usage}%</div>
//                   <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
//                     <div 
//                       className="h-full rounded-full"
//                       style={{ 
//                         width: `${hour.usage}%`,
//                         backgroundColor: hour.color
//                       }}
//                     />
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Pricing Rules & Predictions */}
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
//           {/* Dynamic Pricing Rules */}
//           <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//             <div className="mb-6">
//               <h2 className="text-[#0F1724] mb-1">Dynamic Pricing Rules</h2>
//               <p className="text-[#9CA3AF]">Active pricing multipliers</p>
//             </div>

//             <div className="space-y-3">
//               {pricingRules.map((rule) => (
//                 <div key={rule.name} className="p-4 bg-[#F3F4F6] rounded-xl">
//                   <div className="flex items-center justify-between mb-3">
//                     <div className="text-[#0F1724]">{rule.name}</div>
//                     <Badge 
//                       className="rounded-lg"
//                       style={{
//                         backgroundColor: `${rule.color}15`,
//                         color: rule.color,
//                         border: 'none'
//                       }}
//                     >
//                       {rule.multiplier}x
//                     </Badge>
//                   </div>
//                   <div className="flex items-center gap-2">
//                     <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
//                       <div 
//                         className="h-full rounded-full"
//                         style={{ 
//                           width: `${(rule.multiplier / 2) * 100}%`,
//                           backgroundColor: rule.color
//                         }}
//                       />
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>

//             <Button variant="outline" className="w-full mt-4 rounded-xl">
//               Edit Pricing Rules
//             </Button>
//           </div>

//           {/* Predictions */}
//           <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
//             <div className="mb-6">
//               <h2 className="text-[#0F1724] mb-1">Occupancy Predictions</h2>
//               <p className="text-[#9CA3AF]">AI-powered forecasts</p>
//             </div>

//             <div className="space-y-4">
//               <div className="bg-gradient-to-r from-[#0B6EFD]/10 to-transparent rounded-xl p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-[#374151]">Next Hour</span>
//                   <span className="text-[#0B6EFD]">92%</span>
//                 </div>
//                 <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
//                   <div className="h-full bg-[#0B6EFD] rounded-full" style={{ width: '92%' }} />
//                 </div>
//                 <p className="text-[#9CA3AF] mt-2">High demand expected</p>
//               </div>

//               <div className="bg-gradient-to-r from-[#00C48C]/10 to-transparent rounded-xl p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-[#374151]">Tomorrow 9AM</span>
//                   <span className="text-[#00C48C]">45%</span>
//                 </div>
//                 <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
//                   <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '45%' }} />
//                 </div>
//                 <p className="text-[#9CA3AF] mt-2">Moderate demand</p>
//               </div>

//               <div className="bg-gradient-to-r from-[#F59E0B]/10 to-transparent rounded-xl p-4">
//                 <div className="flex items-center justify-between mb-2">
//                   <span className="text-[#374151]">This Weekend</span>
//                   <span className="text-[#F59E0B]">78%</span>
//                 </div>
//                 <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
//                   <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: '78%' }} />
//                 </div>
//                 <p className="text-[#9CA3AF] mt-2">Above average demand</p>
//               </div>
//             </div>

//             <div className="mt-6 p-4 bg-[#0B6EFD]/5 rounded-xl border border-[#0B6EFD]/20">
//               <div className="flex items-start gap-3">
//                 <TrendingUp className="w-5 h-5 text-[#0B6EFD] flex-shrink-0 mt-0.5" />
//                 <div>
//                   <div className="text-[#0F1724] mb-1">Recommendation</div>
//                   <p className="text-[#374151]">
//                     Enable surge pricing for next 2 hours to maximize revenue during peak demand.
//                   </p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
// ─── Analytics.tsx ────────────────────────────────────────────────────────────
import { ArrowLeft, TrendingUp, DollarSign, Users, Clock, Download } from 'lucide-react';
import {
  LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';

interface AnalyticsProps {
  onBack: () => void;
}

const S = {
  bg: '#F7F8FC', white: '#FFFFFF', navy: '#0F1724', blue: '#0B6EFD',
  green: '#00C48C', amber: '#F59E0B', red: '#EF4444', gray: '#6B7280', border: '#EAECF0',
};

function Card({ children, style = {} }: { children: React.ReactNode; style?: any }) {
  return <div style={{ background: S.white, borderRadius: '16px', padding: '20px', border: `1px solid ${S.border}`, ...style }}>{children}</div>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div style={{ fontSize: '11px', fontWeight: 700, color: S.gray, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{children}</div>;
}

export function Analytics({ onBack }: AnalyticsProps) {
  const occupancyData = [
    { time: '00:00', value: 12 }, { time: '03:00', value: 8 }, { time: '06:00', value: 25 },
    { time: '09:00', value: 68 }, { time: '12:00', value: 85 }, { time: '15:00', value: 72 },
    { time: '18:00', value: 90 }, { time: '21:00', value: 45 },
  ];

  const revenueData = [
    { day: 'Mon', revenue: 4500 }, { day: 'Tue', revenue: 5200 }, { day: 'Wed', revenue: 4800 },
    { day: 'Thu', revenue: 6100 }, { day: 'Fri', revenue: 7300 }, { day: 'Sat', revenue: 8900 }, { day: 'Sun', revenue: 7600 },
  ];

  const peakHours = [
    { hour: '06–09', usage: 65, color: S.amber }, { hour: '09–12', usage: 85, color: S.red },
    { hour: '12–15', usage: 75, color: S.amber }, { hour: '15–18', usage: 90, color: S.red },
    { hour: '18–21', usage: 55, color: S.green }, { hour: '21–00', usage: 30, color: S.green },
  ];

  const pricingRules = [
    { name: 'Peak Hours (9AM–6PM)', multiplier: 1.5, color: S.red },
    { name: 'Off-Peak (6PM–9AM)', multiplier: 0.8, color: S.green },
    { name: 'Weekend Premium', multiplier: 1.3, color: S.amber },
    { name: 'High Demand Surge', multiplier: 2.0, color: S.red },
  ];

  const kpis = [
    { icon: TrendingUp, label: 'Avg. Occupancy', value: '78%', change: '+12.5%', color: S.blue, bg: '#EFF4FF' },
    { icon: DollarSign, label: 'Weekly Revenue', value: '₹3.2L', change: '+18.3%', color: S.green, bg: '#EDFAF5' },
    { icon: Users, label: 'Active Users', value: '1,247', change: '+7.8%', color: S.amber, bg: '#FFFBEB' },
    { icon: Clock, label: 'Avg. Duration', value: '2.4 hrs', change: '-5.2%', color: S.red, bg: '#FEF2F2' },
  ];

  const predictions = [
    { label: 'Next Hour', value: 92, color: S.blue, note: 'High demand expected' },
    { label: 'Tomorrow 9AM', value: 45, color: S.green, note: 'Moderate demand' },
    { label: 'This Weekend', value: 78, color: S.amber, note: 'Above average demand' },
  ];

  const tooltipStyle = { contentStyle: { background: S.white, border: `1px solid ${S.border}`, borderRadius: '10px', fontSize: '12px', fontFamily: "'DM Sans', sans-serif" }, labelStyle: { fontWeight: 700, color: S.navy } };

  return (
    <div style={{ minHeight: '100vh', background: S.bg, fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ background: S.white, borderBottom: `1px solid ${S.border}`, position: 'sticky', top: 0, zIndex: 20, padding: '0 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '14px', height: '62px' }}>
          <button onClick={onBack} style={{ width: '36px', height: '36px', borderRadius: '10px', border: `1px solid ${S.border}`, background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowLeft style={{ width: '17px', height: '17px', color: S.navy }} />
          </button>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '17px', fontWeight: 700, color: S.navy, letterSpacing: '-0.3px' }}>Analytics & Insights</div>
            <div style={{ fontSize: '12px', color: S.gray }}>Performance metrics and predictions</div>
          </div>
          <button style={{
            display: 'flex', alignItems: 'center', gap: '6px', padding: '8px 16px',
            borderRadius: '10px', border: `1px solid ${S.border}`, background: S.white,
            color: S.navy, fontSize: '13px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit',
          }}>
            <Download style={{ width: '14px', height: '14px' }} /> Export
          </button>
        </div>
      </div>

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '24px' }}>
        {/* KPI grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px', marginBottom: '24px' }}>
          {kpis.map(({ icon: Icon, label, value, change, color, bg }) => (
            <Card key={label}>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon style={{ width: '18px', height: '18px', color }} />
                </div>
                <span style={{ fontSize: '11px', fontWeight: 700, color: change.startsWith('-') ? S.red : S.green, background: change.startsWith('-') ? '#FEF2F2' : '#EDFAF5', padding: '3px 8px', borderRadius: '20px' }}>{change}</span>
              </div>
              <div style={{ fontSize: '26px', fontWeight: 800, color: S.navy, letterSpacing: '-0.5px', marginBottom: '4px' }}>{value}</div>
              <div style={{ fontSize: '12px', color: S.gray, fontWeight: 500 }}>{label}</div>
            </Card>
          ))}
        </div>

        {/* Charts row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '20px' }}>
          <Card>
            <SectionLabel>Occupancy Over Time</SectionLabel>
            <div style={{ fontSize: '16px', fontWeight: 700, color: S.navy, marginBottom: '16px' }}>Today's Utilization</div>
            <ResponsiveContainer width="100%" height={220}>
              <LineChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" stroke={S.border} />
                <XAxis dataKey="time" stroke={S.gray} fontSize={11} />
                <YAxis stroke={S.gray} fontSize={11} />
                <Tooltip {...tooltipStyle} />
                <Line type="monotone" dataKey="value" stroke={S.blue} strokeWidth={2.5} dot={{ fill: S.blue, r: 4, strokeWidth: 0 }} activeDot={{ r: 6 }} name="Occupancy %" />
              </LineChart>
            </ResponsiveContainer>
          </Card>

          <Card>
            <SectionLabel>Revenue Trends</SectionLabel>
            <div style={{ fontSize: '16px', fontWeight: 700, color: S.navy, marginBottom: '16px' }}>Weekly Breakdown</div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke={S.border} />
                <XAxis dataKey="day" stroke={S.gray} fontSize={11} />
                <YAxis stroke={S.gray} fontSize={11} />
                <Tooltip {...tooltipStyle} formatter={(v: any) => [`₹${v}`, 'Revenue']} />
                <Bar dataKey="revenue" fill={S.green} radius={[6, 6, 0, 0]} name="Revenue" />
              </BarChart>
            </ResponsiveContainer>
          </Card>
        </div>

        {/* Peak hours */}
        <Card style={{ marginBottom: '20px' }}>
          <SectionLabel>Peak Hour Analysis</SectionLabel>
          <div style={{ fontSize: '16px', fontWeight: 700, color: S.navy, marginBottom: '18px' }}>Usage Patterns</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
            {peakHours.map(({ hour, usage, color }) => (
              <div key={hour} style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '13px', fontWeight: 700, color: S.navy, marginBottom: '8px' }}>{hour}</div>
                <div style={{ height: '80px', background: S.bg, borderRadius: '8px', overflow: 'hidden', display: 'flex', alignItems: 'flex-end', marginBottom: '8px', border: `1px solid ${S.border}` }}>
                  <div style={{ width: '100%', height: `${usage}%`, background: color, borderRadius: '0 0 6px 6px', transition: 'height 0.4s', opacity: 0.85 }} />
                </div>
                <div style={{ fontSize: '14px', fontWeight: 800, color, letterSpacing: '-0.3px' }}>{usage}%</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Bottom row */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
          {/* Pricing Rules */}
          <Card>
            <SectionLabel>Dynamic Pricing</SectionLabel>
            <div style={{ fontSize: '16px', fontWeight: 700, color: S.navy, marginBottom: '16px' }}>Active Multipliers</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {pricingRules.map(({ name, multiplier, color }) => (
                <div key={name} style={{ background: S.bg, borderRadius: '12px', padding: '12px 14px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: S.navy }}>{name}</span>
                    <span style={{ fontSize: '12px', fontWeight: 800, color, background: color + '18', padding: '3px 10px', borderRadius: '20px' }}>{multiplier}x</span>
                  </div>
                  <div style={{ height: '5px', background: S.border, borderRadius: '3px', overflow: 'hidden' }}>
                    <div style={{ height: '100%', width: `${(multiplier / 2) * 100}%`, background: color, borderRadius: '3px', transition: 'width 0.4s' }} />
                  </div>
                </div>
              ))}
            </div>
            <button style={{ width: '100%', marginTop: '14px', height: '40px', borderRadius: '10px', border: `1px solid ${S.border}`, background: S.white, cursor: 'pointer', fontSize: '13px', fontWeight: 600, color: S.navy, fontFamily: 'inherit' }}>
              Edit Pricing Rules
            </button>
          </Card>

          {/* Predictions */}
          <Card>
            <SectionLabel>AI Predictions</SectionLabel>
            <div style={{ fontSize: '16px', fontWeight: 700, color: S.navy, marginBottom: '16px' }}>Occupancy Forecasts</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '16px' }}>
              {predictions.map(({ label, value, color, note }) => (
                <div key={label} style={{ borderRadius: '12px', padding: '14px', background: color + '0D', border: `1px solid ${color}22` }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '8px' }}>
                    <span style={{ fontSize: '13px', fontWeight: 600, color: S.navy }}>{label}</span>
                    <span style={{ fontSize: '16px', fontWeight: 800, color }}>{value}%</span>
                  </div>
                  <div style={{ height: '5px', background: S.border, borderRadius: '3px', overflow: 'hidden', marginBottom: '6px' }}>
                    <div style={{ height: '100%', width: `${value}%`, background: color, borderRadius: '3px' }} />
                  </div>
                  <div style={{ fontSize: '11px', color: S.gray }}>{note}</div>
                </div>
              ))}
            </div>
            <div style={{ background: '#EFF4FF', borderRadius: '12px', padding: '14px', border: '1px solid rgba(11,110,253,0.15)', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
              <TrendingUp style={{ width: '17px', height: '17px', color: S.blue, flexShrink: 0, marginTop: '1px' }} />
              <div>
                <div style={{ fontSize: '13px', fontWeight: 700, color: S.navy, marginBottom: '3px' }}>Recommendation</div>
                <div style={{ fontSize: '12px', color: S.gray, lineHeight: 1.6 }}>Enable surge pricing for next 2 hours to maximize revenue during peak demand.</div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
