import { Building2, Car, Gauge, Users, Clock, Shield } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import type { UserRole } from '../App';

interface WelcomeScreenProps {
  onLogin: (role: UserRole, name: string) => void;
}

export function WelcomeScreen({ onLogin }: WelcomeScreenProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#F3F4F6] via-white to-[#E5E7EB] flex flex-col relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230B6EFD%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      {/* Header */}
      <header className="relative z-20 bg-white/90 backdrop-blur-sm border-b border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Car className="w-8 h-8 text-[#0B6EFD]" />
              <span className="text-xl font-bold text-[#0F1724]">Smart Parking</span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="#home" className="text-[#374151] hover:text-[#0B6EFD] transition-colors">Home</a>
              <a href="#features" className="text-[#374151] hover:text-[#0B6EFD] transition-colors">Features</a>
              <a href="#about" className="text-[#374151] hover:text-[#0B6EFD] transition-colors">About</a>
              <a href="#contact" className="text-[#374151] hover:text-[#0B6EFD] transition-colors">Contact</a>
            </nav>
            <div className="flex space-x-2">
              <Button
                variant="ghost"
                className="text-[#374151] hover:bg-[#F3F4F6]"
                onClick={() => onLogin('user', 'Demo User')}
              >
                Sign In
              </Button>
              <Button
                className="bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 text-white"
                onClick={() => onLogin('user', 'Demo User')}
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center p-4">
        <motion.div
          className="w-full max-w-4xl relative z-10"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
        {/* Header */}
        <motion.div className="text-center mb-16" variants={itemVariants}>
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#0B6EFD] to-[#0056D2] rounded-3xl mb-8 shadow-lg"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <Car className="w-12 h-12 text-white" />
          </motion.div>
          <motion.h1
            className="text-4xl md:text-5xl font-bold text-[#0F1724] mb-4"
            variants={itemVariants}
          >
            Smart Parking
          </motion.h1>
          <motion.p
            className="text-xl text-[#374151] max-w-2xl mx-auto"
            variants={itemVariants}
          >
            Revolutionize your parking experience with real-time availability, seamless booking, and intelligent management
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
          variants={itemVariants}
        >
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-[#0B6EFD] mb-2">500+</div>
            <div className="text-[#374151]">Parking Locations</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-[#00C48C] mb-2">10K+</div>
            <div className="text-[#374151]">Happy Users</div>
          </div>
          <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
            <div className="text-3xl font-bold text-[#F59E0B] mb-2">99.9%</div>
            <div className="text-[#374151]">Uptime</div>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div
          className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-12"
          variants={itemVariants}
        >
          <h2 className="text-2xl font-semibold text-center text-[#0F1724] mb-8">Why Choose Smart Parking?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div className="flex items-start gap-4" variants={itemVariants}>
              <div className="w-12 h-12 rounded-xl bg-[#0B6EFD]/10 flex items-center justify-center flex-shrink-0">
                <Gauge className="w-6 h-6 text-[#0B6EFD]" />
              </div>
              <div>
                <h3 className="text-[#0F1724] font-semibold mb-2">Real-time Availability</h3>
                <p className="text-[#9CA3AF]">Live updates on parking spots with instant notifications when spaces become available</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-4" variants={itemVariants}>
              <div className="w-12 h-12 rounded-xl bg-[#00C48C]/10 flex items-center justify-center flex-shrink-0">
                <Building2 className="w-6 h-6 text-[#00C48C]" />
              </div>
              <div>
                <h3 className="text-[#0F1724] font-semibold mb-2">Multiple Locations</h3>
                <p className="text-[#9CA3AF]">Access parking at malls, offices, airports, and public spaces across the city</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-4" variants={itemVariants}>
              <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#F59E0B]" />
              </div>
              <div>
                <h3 className="text-[#0F1724] font-semibold mb-2">Quick Booking</h3>
                <p className="text-[#9CA3AF]">Reserve your spot in just 3 taps with our intuitive mobile-first interface</p>
              </div>
            </motion.div>

            <motion.div className="flex items-start gap-4" variants={itemVariants}>
              <div className="w-12 h-12 rounded-xl bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-[#EF4444]" />
              </div>
              <div>
                <h3 className="text-[#0F1724] font-semibold mb-2">Secure & Reliable</h3>
                <p className="text-[#9CA3AF]">Bank-level security with 24/7 support and guaranteed spot availability</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div className="text-center mb-12" variants={itemVariants}>
          <h2 className="text-2xl font-semibold text-[#0F1724] mb-4">Ready to Get Started?</h2>
          <p className="text-[#374151] mb-8">Join thousands of users who trust Smart Parking for their daily commute</p>
        </motion.div>

        {/* Auth buttons */}
        <motion.div className="space-y-4 max-w-md mx-auto" variants={itemVariants}>
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              className="w-full h-14 bg-gradient-to-r from-[#0B6EFD] to-[#0056D2] hover:from-[#0056D2] hover:to-[#0041A8] rounded-xl shadow-lg text-white font-semibold"
              onClick={() => onLogin('user', 'Demo User')}
            >
              Get Started Free
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="outline"
              className="w-full h-14 border-2 border-[#0B6EFD] text-[#0B6EFD] hover:bg-[#0B6EFD] hover:text-white rounded-xl font-semibold"
              onClick={() => onLogin('user', 'Demo User')}
            >
              Sign In
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button
              variant="ghost"
              className="w-full h-14 text-[#374151] hover:bg-[#F3F4F6] rounded-xl font-semibold"
              onClick={() => onLogin('guest', 'Guest User')}
            >
              Continue as Guest
            </Button>
          </motion.div>

          <div className="pt-6 border-t border-[#E5E7EB] mt-8">
            <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="ghost"
                className="w-full h-14 text-[#0B6EFD] hover:bg-[#0B6EFD]/10 rounded-xl font-semibold"
                onClick={() => onLogin('admin', 'Admin User')}
              >
                Admin Access
              </Button>
            </motion.div>
          </div>
        </motion.div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative z-20 bg-white/90 backdrop-blur-sm border-t border-[#E5E7EB] mt-auto">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Car className="w-6 h-6 text-[#0B6EFD]" />
                <span className="text-lg font-bold text-[#0F1724]">Smart Parking</span>
              </div>
              <p className="text-[#9CA3AF] text-sm">
                Revolutionizing parking with smart technology and seamless user experience.
              </p>
            </div>
            <div>
              <h3 className="text-[#0F1724] font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><a href="#features" className="hover:text-[#0B6EFD]">Features</a></li>
                <li><a href="#pricing" className="hover:text-[#0B6EFD]">Pricing</a></li>
                <li><a href="#api" className="hover:text-[#0B6EFD]">API</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#0F1724] font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><a href="#about" className="hover:text-[#0B6EFD]">About</a></li>
                <li><a href="#blog" className="hover:text-[#0B6EFD]">Blog</a></li>
                <li><a href="#careers" className="hover:text-[#0B6EFD]">Careers</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-[#0F1724] font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-sm text-[#9CA3AF]">
                <li><a href="#help" className="hover:text-[#0B6EFD]">Help Center</a></li>
                <li><a href="#contact" className="hover:text-[#0B6EFD]">Contact</a></li>
                <li><a href="#privacy" className="hover:text-[#0B6EFD]">Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#E5E7EB] mt-8 pt-8 text-center text-sm text-[#9CA3AF]">
            <p>&copy; 2025 Smart Parking. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}