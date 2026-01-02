import { useState } from 'react';
import { WelcomeScreen } from './components/WelcomeScreen';
import { HomeSearch } from './components/HomeSearch';
import { LocationDetail } from './components/LocationDetail';
import { BookingFlow } from './components/BookingFlow';
import { MyBookings } from './components/MyBookings';
import { QRScanEntry } from './components/QRScanEntry';
import { AdminDashboard } from './components/AdminDashboard';
import { Analytics } from './components/Analytics';
import { Settings } from './components/Settings';

export type UserRole = 'guest' | 'user' | 'admin';

export interface User {
  id: string;
  name: string;
  role: UserRole;
}

export interface ParkingLocation {
  id: string;
  name: string;
  coords: [number, number];
  totalSlots: number;
  available: number;
  price: string;
  distance: string;
  eta: string;
  rating: number;
  amenities: string[];
  slots: {
    ev: number;
    twoWheeler: number;
    fourWheeler: number;
  };
}

export interface Booking {
  id: string;
  locationId: string;
  locationName: string;
  slotId: string;
  slotType: string;
  status: 'reserved' | 'active' | 'completed' | 'cancelled';
  startTime: Date;
  endTime?: Date;
  price: number;
  expiresInMins?: number;
  qrCode?: string;
}

export type Screen = 
  | 'welcome' 
  | 'home' 
  | 'location-detail' 
  | 'booking' 
  | 'my-bookings' 
  | 'qr-scan'
  | 'admin-dashboard'
  | 'analytics'
  | 'settings';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('welcome');
  const [user, setUser] = useState<User | null>(null);
  const [selectedLocation, setSelectedLocation] = useState<ParkingLocation | null>(null);
  const [currentBooking, setCurrentBooking] = useState<Booking | null>(null);

  const handleLogin = (role: UserRole, name: string) => {
    setUser({ id: `U${Date.now()}`, name, role });
    if (role === 'admin') {
      setCurrentScreen('admin-dashboard');
    } else {
      setCurrentScreen('home');
    }
  };

  const handleLocationSelect = (location: ParkingLocation) => {
    setSelectedLocation(location);
    setCurrentScreen('location-detail');
  };

  const handleBookNow = () => {
    setCurrentScreen('booking');
  };

  const handleBookingComplete = (booking: Booking) => {
    setCurrentBooking(booking);
    setCurrentScreen('my-bookings');
  };

  const navigateToScreen = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  return (
    <div className="min-h-screen bg-white">
      {currentScreen === 'welcome' && (
        <WelcomeScreen onLogin={handleLogin} />
      )}
      
      {currentScreen === 'home' && (
        <HomeSearch 
          user={user} 
          onLocationSelect={handleLocationSelect}
          onNavigate={navigateToScreen}
        />
      )}
      
      {currentScreen === 'location-detail' && selectedLocation && (
        <LocationDetail 
          location={selectedLocation}
          onBack={() => setCurrentScreen('home')}
          onBook={handleBookNow}
        />
      )}
      
      {currentScreen === 'booking' && selectedLocation && (
        <BookingFlow 
          location={selectedLocation}
          onBack={() => setCurrentScreen('location-detail')}
          onComplete={handleBookingComplete}
        />
      )}
      
      {currentScreen === 'my-bookings' && (
        <MyBookings 
          user={user}
          currentBooking={currentBooking}
          onBack={() => setCurrentScreen('home')}
          onNavigate={navigateToScreen}
        />
      )}
      
      {currentScreen === 'qr-scan' && (
        <QRScanEntry 
          onBack={() => setCurrentScreen('home')}
        />
      )}
      
      {currentScreen === 'admin-dashboard' && (
        <AdminDashboard 
          user={user}
          onNavigate={navigateToScreen}
        />
      )}
      
      {currentScreen === 'analytics' && (
        <Analytics 
          onBack={() => setCurrentScreen('admin-dashboard')}
        />
      )}
      
      {currentScreen === 'settings' && (
        <Settings 
          user={user}
          onBack={() => {
            if (user?.role === 'admin') {
              setCurrentScreen('admin-dashboard');
            } else {
              setCurrentScreen('home');
            }
          }}
          onLogout={() => {
            setUser(null);
            setCurrentScreen('welcome');
          }}
        />
      )}
    </div>
  );
}
