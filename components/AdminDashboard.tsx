import { useState } from 'react';
import { 
  LayoutDashboard, 
  BarChart3, 
  Settings, 
  Users, 
  MapPin,
  TrendingUp,
  Car,
  DollarSign,
  Clock,
  Play,
  Pause,
  SkipForward,
  Gauge
} from 'lucide-react';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import type { User, Screen } from '../App';

interface AdminDashboardProps {
  user: User | null;
  onNavigate: (screen: Screen) => void;
}

export function AdminDashboard({ user, onNavigate }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState<'overview' | 'locations' | 'bookings'>('overview');
  const [simulationRunning, setSimulationRunning] = useState(false);
  const [simulationSpeed, setSimulationSpeed] = useState(1);

  const stats = [
    {
      label: 'Total Slots',
      value: '1,200',
      change: '+12%',
      trend: 'up' as const,
      icon: MapPin,
      color: '#0B6EFD',
    },
    {
      label: 'Occupied',
      value: '847',
      change: '70.6%',
      trend: 'neutral' as const,
      icon: Car,
      color: '#EF4444',
    },
    {
      label: 'Revenue Today',
      value: '₹45,290',
      change: '+18%',
      trend: 'up' as const,
      icon: DollarSign,
      color: '#00C48C',
    },
    {
      label: 'Active Bookings',
      value: '124',
      change: '+5%',
      trend: 'up' as const,
      icon: Clock,
      color: '#F59E0B',
    },
  ];

  // Mock slot grid for main parking lot
  const slotGrid = Array.from({ length: 60 }, (_, i) => ({
    id: `S${i + 1}`,
    status: Math.random() > 0.3 ? 'occupied' : Math.random() > 0.5 ? 'available' : 'reserved',
  }));

  const recentBookings = [
    {
      id: 'B001',
      user: 'Demo User',
      location: 'Green Mall Parking',
      slot: 'S12',
      time: '2 mins ago',
      status: 'active',
      amount: '₹30',
    },
    {
      id: 'B002',
      user: 'John Doe',
      location: 'City Center Plaza',
      slot: 'S45',
      time: '5 mins ago',
      status: 'reserved',
      amount: '₹25',
    },
    {
      id: 'B003',
      user: 'Jane Smith',
      location: 'Tech Park Complex',
      slot: 'S78',
      time: '12 mins ago',
      status: 'active',
      amount: '₹35',
    },
  ];

  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Sidebar */}
      <div className="fixed left-0 top-0 bottom-0 w-64 bg-white border-r border-[#E5E7EB] p-4 hidden lg:block">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-[#0B6EFD] rounded-xl flex items-center justify-center">
              <Car className="w-5 h-5 text-white" />
            </div>
            <div>
              <div className="text-[#0F1724]">Smart Parking</div>
              <div className="text-[#9CA3AF]">Admin</div>
            </div>
          </div>
        </div>

        <nav className="space-y-1">
          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl bg-[#0B6EFD]/10 text-[#0B6EFD]"
          >
            <LayoutDashboard className="w-5 h-5" />
            <span>Dashboard</span>
          </button>
          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#374151] hover:bg-[#F3F4F6]"
            onClick={() => onNavigate('analytics')}
          >
            <BarChart3 className="w-5 h-5" />
            <span>Analytics</span>
          </button>
          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#374151] hover:bg-[#F3F4F6]"
          >
            <Users className="w-5 h-5" />
            <span>Users</span>
          </button>
          <button
            className="w-full flex items-center gap-3 px-3 py-2 rounded-xl text-[#374151] hover:bg-[#F3F4F6]"
            onClick={() => onNavigate('settings')}
          >
            <Settings className="w-5 h-5" />
            <span>Settings</span>
          </button>
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-[#F3F4F6] rounded-xl p-3">
            <div className="text-[#9CA3AF] mb-1">Logged in as</div>
            <div className="text-[#0F1724]">{user?.name}</div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="lg:ml-64">
        {/* Top Bar */}
        <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
          <div className="px-6 py-4">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-[#0F1724]">Dashboard</h1>
                <p className="text-[#9CA3AF]">Real-time parking management</p>
              </div>
              <div className="flex items-center gap-3">
                <Button 
                  variant="outline"
                  className="rounded-xl"
                  onClick={() => onNavigate('settings')}
                >
                  <Settings className="w-4 h-4 lg:mr-2" />
                  <span className="hidden lg:inline">Settings</span>
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="p-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div key={stat.label} className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
                  <div className="flex items-start justify-between mb-4">
                    <div 
                      className="w-12 h-12 rounded-xl flex items-center justify-center"
                      style={{ backgroundColor: `${stat.color}15` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: stat.color }} />
                    </div>
                    {stat.trend === 'up' && (
                      <Badge className="bg-[#00C48C]/10 text-[#00C48C] rounded-lg border-none">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        {stat.change}
                      </Badge>
                    )}
                  </div>
                  <div className="text-[#0F1724] mb-1">{stat.value}</div>
                  <div className="text-[#9CA3AF]">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Slot Grid Visualization */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h2 className="text-[#0F1724] mb-1">Green Mall Parking - Live View</h2>
                    <p className="text-[#9CA3AF]">Real-time slot occupancy</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#00C48C] animate-pulse" />
                    <span className="text-[#374151]">Live</span>
                  </div>
                </div>

                <div className="grid grid-cols-10 gap-2 mb-6">
                  {slotGrid.map((slot) => (
                    <div
                      key={slot.id}
                      className="aspect-square rounded-lg cursor-pointer hover:scale-110 transition-transform flex items-center justify-center"
                      style={{
                        backgroundColor:
                          slot.status === 'available' ? '#00C48C' :
                          slot.status === 'reserved' ? '#F59E0B' : '#EF4444'
                      }}
                      title={`${slot.id} - ${slot.status}`}
                    >
                      <span className="text-xs text-white opacity-0 hover:opacity-100">
                        {slot.id.slice(1)}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="flex items-center justify-between text-sm border-t border-[#E5E7EB] pt-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-[#00C48C]" />
                      <span className="text-[#374151]">Available ({slotGrid.filter(s => s.status === 'available').length})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-[#F59E0B]" />
                      <span className="text-[#374151]">Reserved ({slotGrid.filter(s => s.status === 'reserved').length})</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 rounded bg-[#EF4444]" />
                      <span className="text-[#374151]">Occupied ({slotGrid.filter(s => s.status === 'occupied').length})</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="rounded-xl">
                    Expand View
                  </Button>
                </div>
              </div>

              {/* Simulation Control */}
              <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB] mt-6">
                <h2 className="text-[#0F1724] mb-4">Simulation Control</h2>
                
                <div className="flex items-center gap-3 mb-4">
                  <Button
                    variant={simulationRunning ? "outline" : "default"}
                    size="icon"
                    className="rounded-xl"
                    onClick={() => setSimulationRunning(!simulationRunning)}
                  >
                    {simulationRunning ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                  </Button>
                  <Button variant="outline" size="icon" className="rounded-xl">
                    <SkipForward className="w-5 h-5" />
                  </Button>
                  
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[#9CA3AF]">Speed</span>
                      <Badge variant="outline" className="rounded-lg">
                        {simulationSpeed}x
                      </Badge>
                    </div>
                    <div className="flex gap-2">
                      {[1, 5, 10].map((speed) => (
                        <Button
                          key={speed}
                          variant={simulationSpeed === speed ? "default" : "outline"}
                          size="sm"
                          className="rounded-xl flex-1"
                          onClick={() => setSimulationSpeed(speed)}
                        >
                          {speed}x
                        </Button>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="bg-[#F3F4F6] rounded-xl p-4">
                  <div className="flex items-center gap-3 mb-3">
                    <Gauge className="w-5 h-5 text-[#0B6EFD]" />
                    <div>
                      <div className="text-[#0F1724]">Random Occupancy</div>
                      <div className="text-[#9CA3AF]">Simulate realistic traffic patterns</div>
                    </div>
                  </div>
                  <Button variant="outline" className="w-full rounded-xl">
                    Generate Random Events
                  </Button>
                </div>
              </div>
            </div>

            {/* Recent Bookings */}
            <div className="bg-white rounded-2xl p-6 border border-[#E5E7EB]">
              <h2 className="text-[#0F1724] mb-4">Recent Bookings</h2>
              
              <div className="space-y-3">
                {recentBookings.map((booking) => (
                  <div 
                    key={booking.id}
                    className="p-4 bg-[#F3F4F6] rounded-xl hover:bg-[#E5E7EB] transition-colors cursor-pointer"
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="text-[#0F1724] mb-1">{booking.user}</div>
                        <div className="text-[#9CA3AF]">{booking.location}</div>
                      </div>
                      <Badge 
                        className="rounded-lg"
                        style={{
                          backgroundColor: booking.status === 'active' ? '#00C48C' : '#F59E0B',
                          color: 'white',
                          border: 'none'
                        }}
                      >
                        {booking.status}
                      </Badge>
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-[#9CA3AF]">Slot {booking.slot}</span>
                      <span className="text-[#0F1724]">{booking.amount}</span>
                    </div>
                    
                    <div className="text-[#9CA3AF] mt-2">{booking.time}</div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4 rounded-xl">
                View All Bookings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
