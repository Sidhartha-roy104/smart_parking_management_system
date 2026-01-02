import { ArrowLeft, TrendingUp, DollarSign, Users, Clock } from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

interface AnalyticsProps {
  onBack: () => void;
}

export function Analytics({ onBack }: AnalyticsProps) {
  // Mock data for charts
  const occupancyData = [
    { time: '00:00', occupancy: 12 },
    { time: '03:00', occupancy: 8 },
    { time: '06:00', occupancy: 25 },
    { time: '09:00', occupancy: 68 },
    { time: '12:00', occupancy: 85 },
    { time: '15:00', occupancy: 72 },
    { time: '18:00', occupancy: 90 },
    { time: '21:00', occupancy: 45 },
  ];

  const revenueData = [
    { day: 'Mon', revenue: 4500 },
    { day: 'Tue', revenue: 5200 },
    { day: 'Wed', revenue: 4800 },
    { day: 'Thu', revenue: 6100 },
    { day: 'Fri', revenue: 7300 },
    { day: 'Sat', revenue: 8900 },
    { day: 'Sun', revenue: 7600 },
  ];

  const peakHours = [
    { hour: '06-09', usage: 65, color: '#F59E0B' },
    { hour: '09-12', usage: 85, color: '#EF4444' },
    { hour: '12-15', usage: 75, color: '#F59E0B' },
    { hour: '15-18', usage: 90, color: '#EF4444' },
    { hour: '18-21', usage: 55, color: '#00C48C' },
    { hour: '21-00', usage: 30, color: '#00C48C' },
  ];

  const pricingRules = [
    { name: 'Peak Hours (9AM-6PM)', multiplier: 1.5, color: '#EF4444' },
    { name: 'Off-Peak (6PM-9AM)', multiplier: 0.8, color: '#00C48C' },
    { name: 'Weekend Premium', multiplier: 1.3, color: '#F59E0B' },
    { name: 'High Demand Surge', multiplier: 2.0, color: '#EF4444' },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
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
              <h1 className="text-[#0F1724]">Analytics & Insights</h1>
              <p className="text-[#9CA3AF]">Performance metrics and predictions</p>
            </div>
            <Button variant="outline" className="rounded-xl">
              Export Report
            </Button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        {/* KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#0B6EFD]/10 flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-[#0B6EFD]" />
              </div>
              <Badge className="bg-[#00C48C]/10 text-[#00C48C] rounded-lg border-none">
                +12.5%
              </Badge>
            </div>
            <div className="text-[#0F1724] mb-1">78%</div>
            <div className="text-[#9CA3AF]">Avg. Occupancy</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#00C48C]/10 flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-[#00C48C]" />
              </div>
              <Badge className="bg-[#00C48C]/10 text-[#00C48C] rounded-lg border-none">
                +18.3%
              </Badge>
            </div>
            <div className="text-[#0F1724] mb-1">₹3.2L</div>
            <div className="text-[#9CA3AF]">Weekly Revenue</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center">
                <Users className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <Badge className="bg-[#00C48C]/10 text-[#00C48C] rounded-lg border-none">
                +7.8%
              </Badge>
            </div>
            <div className="text-[#0F1724] mb-1">1,247</div>
            <div className="text-[#9CA3AF]">Active Users</div>
          </div>

          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-xl bg-[#EF4444]/10 flex items-center justify-center">
                <Clock className="w-6 h-6 text-[#EF4444]" />
              </div>
              <Badge className="bg-[#00C48C]/10 text-[#00C48C] rounded-lg border-none">
                -5.2%
              </Badge>
            </div>
            <div className="text-[#0F1724] mb-1">2.4 hrs</div>
            <div className="text-[#9CA3AF]">Avg. Duration</div>
          </div>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Occupancy Over Time */}
          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="mb-6">
              <h2 className="text-[#0F1724] mb-1">Occupancy Over Time</h2>
              <p className="text-[#9CA3AF]">Today's parking utilization</p>
            </div>
            
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={occupancyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="time" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px'
                  }}
                />
                <Line 
                  type="monotone" 
                  dataKey="occupancy" 
                  stroke="#0B6EFD" 
                  strokeWidth={3}
                  dot={{ fill: '#0B6EFD', r: 4 }}
                  activeDot={{ r: 6 }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>

          {/* Revenue Trends */}
          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="mb-6">
              <h2 className="text-[#0F1724] mb-1">Revenue Trends</h2>
              <p className="text-[#9CA3AF]">Weekly revenue breakdown</p>
            </div>
            
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={revenueData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#E5E7EB" />
                <XAxis dataKey="day" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" />
                <Tooltip 
                  contentStyle={{ 
                    backgroundColor: 'white', 
                    border: '1px solid #E5E7EB',
                    borderRadius: '12px'
                  }}
                />
                <Bar 
                  dataKey="revenue" 
                  fill="#00C48C" 
                  radius={[8, 8, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Peak Hours Heatmap */}
        <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] mb-6">
          <div className="mb-6">
            <h2 className="text-[#0F1724] mb-1">Peak Hour Analysis</h2>
            <p className="text-[#9CA3AF]">Usage patterns throughout the day</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {peakHours.map((hour) => (
              <div 
                key={hour.hour}
                className="relative rounded-xl p-4 text-center overflow-hidden"
              >
                <div 
                  className="absolute inset-0 opacity-20"
                  style={{ backgroundColor: hour.color }}
                />
                <div className="relative z-10">
                  <div className="text-[#0F1724] mb-2">{hour.hour}</div>
                  <div className="mb-2" style={{ color: hour.color }}>{hour.usage}%</div>
                  <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                    <div 
                      className="h-full rounded-full"
                      style={{ 
                        width: `${hour.usage}%`,
                        backgroundColor: hour.color
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Rules & Predictions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Dynamic Pricing Rules */}
          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="mb-6">
              <h2 className="text-[#0F1724] mb-1">Dynamic Pricing Rules</h2>
              <p className="text-[#9CA3AF]">Active pricing multipliers</p>
            </div>

            <div className="space-y-3">
              {pricingRules.map((rule) => (
                <div key={rule.name} className="p-4 bg-[#F3F4F6] rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-[#0F1724]">{rule.name}</div>
                    <Badge 
                      className="rounded-lg"
                      style={{
                        backgroundColor: `${rule.color}15`,
                        color: rule.color,
                        border: 'none'
                      }}
                    >
                      {rule.multiplier}x
                    </Badge>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full"
                        style={{ 
                          width: `${(rule.multiplier / 2) * 100}%`,
                          backgroundColor: rule.color
                        }}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <Button variant="outline" className="w-full mt-4 rounded-xl">
              Edit Pricing Rules
            </Button>
          </div>

          {/* Predictions */}
          <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
            <div className="mb-6">
              <h2 className="text-[#0F1724] mb-1">Occupancy Predictions</h2>
              <p className="text-[#9CA3AF]">AI-powered forecasts</p>
            </div>

            <div className="space-y-4">
              <div className="bg-gradient-to-r from-[#0B6EFD]/10 to-transparent rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#374151]">Next Hour</span>
                  <span className="text-[#0B6EFD]">92%</span>
                </div>
                <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full bg-[#0B6EFD] rounded-full" style={{ width: '92%' }} />
                </div>
                <p className="text-[#9CA3AF] mt-2">High demand expected</p>
              </div>

              <div className="bg-gradient-to-r from-[#00C48C]/10 to-transparent rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#374151]">Tomorrow 9AM</span>
                  <span className="text-[#00C48C]">45%</span>
                </div>
                <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full bg-[#00C48C] rounded-full" style={{ width: '45%' }} />
                </div>
                <p className="text-[#9CA3AF] mt-2">Moderate demand</p>
              </div>

              <div className="bg-gradient-to-r from-[#F59E0B]/10 to-transparent rounded-xl p-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-[#374151]">This Weekend</span>
                  <span className="text-[#F59E0B]">78%</span>
                </div>
                <div className="h-2 bg-[#E5E7EB] rounded-full overflow-hidden">
                  <div className="h-full bg-[#F59E0B] rounded-full" style={{ width: '78%' }} />
                </div>
                <p className="text-[#9CA3AF] mt-2">Above average demand</p>
              </div>
            </div>

            <div className="mt-6 p-4 bg-[#0B6EFD]/5 rounded-xl border border-[#0B6EFD]/20">
              <div className="flex items-start gap-3">
                <TrendingUp className="w-5 h-5 text-[#0B6EFD] flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-[#0F1724] mb-1">Recommendation</div>
                  <p className="text-[#374151]">
                    Enable surge pricing for next 2 hours to maximize revenue during peak demand.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
