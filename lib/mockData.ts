import type { ParkingLocation, Booking } from '../App';

export const mockLocations: ParkingLocation[] = [
  {
    id: 'L001',
    name: 'Green Mall Parking',
    coords: [17.440079, 78.348915],
    totalSlots: 120,
    available: 12,
    price: '₹30/hr',
    distance: '0.8 km',
    eta: '4 mins',
    rating: 4.5,
    amenities: ['EV Charging', 'Covered', 'Security'],
    slots: {
      ev: 4,
      twoWheeler: 5,
      fourWheeler: 3,
    },
  },
  {
    id: 'L002',
    name: 'City Center Plaza',
    coords: [17.445079, 78.353915],
    totalSlots: 200,
    available: 45,
    price: '₹25/hr',
    distance: '1.2 km',
    eta: '6 mins',
    rating: 4.7,
    amenities: ['EV Charging', 'Covered', 'Security', 'Valet'],
    slots: {
      ev: 15,
      twoWheeler: 20,
      fourWheeler: 10,
    },
  },
  {
    id: 'L003',
    name: 'Metro Station Parking',
    coords: [17.435079, 78.343915],
    totalSlots: 80,
    available: 3,
    price: '₹20/hr',
    distance: '2.1 km',
    eta: '9 mins',
    rating: 4.2,
    amenities: ['Security', 'CCTV'],
    slots: {
      ev: 0,
      twoWheeler: 2,
      fourWheeler: 1,
    },
  },
  {
    id: 'L004',
    name: 'Tech Park Complex',
    coords: [17.450079, 78.358915],
    totalSlots: 300,
    available: 89,
    price: '₹35/hr',
    distance: '3.5 km',
    eta: '12 mins',
    rating: 4.8,
    amenities: ['EV Charging', 'Covered', 'Security', 'Valet', 'Car Wash'],
    slots: {
      ev: 25,
      twoWheeler: 30,
      fourWheeler: 34,
    },
  },
  {
    id: 'L005',
    name: 'Airport Terminal 1',
    coords: [17.430079, 78.338915],
    totalSlots: 500,
    available: 156,
    price: '₹50/hr',
    distance: '5.8 km',
    eta: '18 mins',
    rating: 4.6,
    amenities: ['EV Charging', 'Covered', 'Security', 'Valet', '24/7'],
    slots: {
      ev: 50,
      twoWheeler: 56,
      fourWheeler: 50,
    },
  },
];

export const mockBookings: Booking[] = [
  {
    id: 'B001',
    locationId: 'L001',
    locationName: 'Green Mall Parking',
    slotId: 'S12',
    slotType: '4-Wheeler',
    status: 'active',
    startTime: new Date(Date.now() - 30 * 60 * 1000),
    price: 30,
    qrCode: 'QR-B001-S12',
  },
];

export const slotStatuses = {
  available: '#00C48C',
  reserved: '#F59E0B',
  occupied: '#EF4444',
  maintenance: '#9CA3AF',
};

export function getAvailabilityColor(available: number, total: number): string {
  const percentage = (available / total) * 100;
  if (percentage > 30) return slotStatuses.available;
  if (percentage > 10) return slotStatuses.reserved;
  return slotStatuses.occupied;
}

export function getAvailabilityLabel(available: number, total: number): string {
  const percentage = (available / total) * 100;
  if (percentage > 30) return 'Good';
  if (percentage > 10) return 'Limited';
  return 'Almost Full';
}
