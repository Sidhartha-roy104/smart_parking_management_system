// import { Building2, Car, Gauge, Users, Clock, Shield } from 'lucide-react';
// import { Button } from './ui/button';
// import { motion } from 'framer-motion';
// import type { UserRole } from '../App';

// interface WelcomeScreenProps {
//   onLogin: (role: UserRole, name: string) => void;
// }

// export function WelcomeScreen({ onLogin }: WelcomeScreenProps) {
//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         duration: 0.6,
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.5 }
//     }
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#F3F4F6] via-white to-[#E5E7EB] flex flex-col relative overflow-hidden">
//       {/* Background decoration */}
//       <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%230B6EFD%22%20fill-opacity%3D%220.03%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

//       {/* Header */}
//       <header className="relative z-20 bg-white/90 backdrop-blur-sm border-b border-[#E5E7EB]">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex justify-between items-center py-4">
//             <div className="flex items-center space-x-2">
//               <Car className="w-8 h-8 text-[#0B6EFD]" />
//               <span className="text-xl font-bold text-[#0F1724]">Smart Parking</span>
//             </div>
//             <nav className="hidden md:flex space-x-8">
//               <a href="#home" className="text-[#374151] hover:text-[#0B6EFD] transition-colors">Home</a>
//               <a href="#features" className="text-[#374151] hover:text-[#0B6EFD] transition-colors">Features</a>
//               <a href="#about" className="text-[#374151] hover:text-[#0B6EFD] transition-colors">About</a>
//               <a href="#contact" className="text-[#374151] hover:text-[#0B6EFD] transition-colors">Contact</a>
//             </nav>
//             <div className="flex space-x-2">
//               <Button
//                 variant="ghost"
//                 className="text-[#374151] hover:bg-[#F3F4F6]"
//                 onClick={() => onLogin('user', 'Demo User')}
//               >
//                 Sign In
//               </Button>
//               <Button
//                 className="bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 text-white"
//                 onClick={() => onLogin('user', 'Demo User')}
//               >
//                 Get Started
//               </Button>
//             </div>
//           </div>
//         </div>
//       </header>

//       {/* Main Content */}
//       <main className="flex-1 flex items-center justify-center p-4">
//         <motion.div
//           className="w-full max-w-4xl relative z-10"
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//         {/* Header */}
//         <motion.div className="text-center mb-16" variants={itemVariants}>
//           <motion.div
//             className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-[#0B6EFD] to-[#0056D2] rounded-3xl mb-8 shadow-lg"
//             whileHover={{ scale: 1.05 }}
//             transition={{ type: "spring", stiffness: 300 }}
//           >
//             <Car className="w-12 h-12 text-white" />
//           </motion.div>
//           <motion.h1
//             className="text-4xl md:text-5xl font-bold text-[#0F1724] mb-4"
//             variants={itemVariants}
//           >
//             Smart Parking
//           </motion.h1>
//           <motion.p
//             className="text-xl text-[#374151] max-w-2xl mx-auto"
//             variants={itemVariants}
//           >
//             Revolutionize your parking experience with real-time availability, seamless booking, and intelligent management
//           </motion.p>
//         </motion.div>

//         {/* Stats */}
//         <motion.div
//           className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
//           variants={itemVariants}
//         >
//           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
//             <div className="text-3xl font-bold text-[#0B6EFD] mb-2">500+</div>
//             <div className="text-[#374151]">Parking Locations</div>
//           </div>
//           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
//             <div className="text-3xl font-bold text-[#00C48C] mb-2">10K+</div>
//             <div className="text-[#374151]">Happy Users</div>
//           </div>
//           <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-sm">
//             <div className="text-3xl font-bold text-[#F59E0B] mb-2">99.9%</div>
//             <div className="text-[#374151]">Uptime</div>
//           </div>
//         </motion.div>

//         {/* Features */}
//         <motion.div
//           className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg mb-12"
//           variants={itemVariants}
//         >
//           <h2 className="text-2xl font-semibold text-center text-[#0F1724] mb-8">Why Choose Smart Parking?</h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//             <motion.div className="flex items-start gap-4" variants={itemVariants}>
//               <div className="w-12 h-12 rounded-xl bg-[#0B6EFD]/10 flex items-center justify-center flex-shrink-0">
//                 <Gauge className="w-6 h-6 text-[#0B6EFD]" />
//               </div>
//               <div>
//                 <h3 className="text-[#0F1724] font-semibold mb-2">Real-time Availability</h3>
//                 <p className="text-[#9CA3AF]">Live updates on parking spots with instant notifications when spaces become available</p>
//               </div>
//             </motion.div>

//             <motion.div className="flex items-start gap-4" variants={itemVariants}>
//               <div className="w-12 h-12 rounded-xl bg-[#00C48C]/10 flex items-center justify-center flex-shrink-0">
//                 <Building2 className="w-6 h-6 text-[#00C48C]" />
//               </div>
//               <div>
//                 <h3 className="text-[#0F1724] font-semibold mb-2">Multiple Locations</h3>
//                 <p className="text-[#9CA3AF]">Access parking at malls, offices, airports, and public spaces across the city</p>
//               </div>
//             </motion.div>

//             <motion.div className="flex items-start gap-4" variants={itemVariants}>
//               <div className="w-12 h-12 rounded-xl bg-[#F59E0B]/10 flex items-center justify-center flex-shrink-0">
//                 <Clock className="w-6 h-6 text-[#F59E0B]" />
//               </div>
//               <div>
//                 <h3 className="text-[#0F1724] font-semibold mb-2">Quick Booking</h3>
//                 <p className="text-[#9CA3AF]">Reserve your spot in just 3 taps with our intuitive mobile-first interface</p>
//               </div>
//             </motion.div>

//             <motion.div className="flex items-start gap-4" variants={itemVariants}>
//               <div className="w-12 h-12 rounded-xl bg-[#EF4444]/10 flex items-center justify-center flex-shrink-0">
//                 <Shield className="w-6 h-6 text-[#EF4444]" />
//               </div>
//               <div>
//                 <h3 className="text-[#0F1724] font-semibold mb-2">Secure & Reliable</h3>
//                 <p className="text-[#9CA3AF]">Bank-level security with 24/7 support and guaranteed spot availability</p>
//               </div>
//             </motion.div>
//           </div>
//         </motion.div>

//         {/* CTA Section */}
//         <motion.div className="text-center mb-12" variants={itemVariants}>
//           <h2 className="text-2xl font-semibold text-[#0F1724] mb-4">Ready to Get Started?</h2>
//           <p className="text-[#374151] mb-8">Join thousands of users who trust Smart Parking for their daily commute</p>
//         </motion.div>

//         {/* Auth buttons */}
//         <motion.div className="space-y-4 max-w-md mx-auto" variants={itemVariants}>
//           <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//             <Button
//               className="w-full h-14 bg-gradient-to-r from-[#0B6EFD] to-[#0056D2] hover:from-[#0056D2] hover:to-[#0041A8] rounded-xl shadow-lg text-white font-semibold"
//               onClick={() => onLogin('user', 'Demo User')}
//             >
//               Get Started Free
//             </Button>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//             <Button
//               variant="outline"
//               className="w-full h-14 border-2 border-[#0B6EFD] text-[#0B6EFD] hover:bg-[#0B6EFD] hover:text-white rounded-xl font-semibold"
//               onClick={() => onLogin('user', 'Demo User')}
//             >
//               Sign In
//             </Button>
//           </motion.div>

//           <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//             <Button
//               variant="ghost"
//               className="w-full h-14 text-[#374151] hover:bg-[#F3F4F6] rounded-xl font-semibold"
//               onClick={() => onLogin('guest', 'Guest User')}
//             >
//               Continue as Guest
//             </Button>
//           </motion.div>

//           <div className="pt-6 border-t border-[#E5E7EB] mt-8">
//             <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
//               <Button
//                 variant="ghost"
//                 className="w-full h-14 text-[#0B6EFD] hover:bg-[#0B6EFD]/10 rounded-xl font-semibold"
//                 onClick={() => onLogin('admin', 'Admin User')}
//               >
//                 Admin Access
//               </Button>
//             </motion.div>
//           </div>
//         </motion.div>
//         </motion.div>
//       </main>

//       {/* Footer */}
//       <footer className="relative z-20 bg-white/90 backdrop-blur-sm border-t border-[#E5E7EB] mt-auto">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
//           <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//             <div>
//               <div className="flex items-center space-x-2 mb-4">
//                 <Car className="w-6 h-6 text-[#0B6EFD]" />
//                 <span className="text-lg font-bold text-[#0F1724]">Smart Parking</span>
//               </div>
//               <p className="text-[#9CA3AF] text-sm">
//                 Revolutionizing parking with smart technology and seamless user experience.
//               </p>
//             </div>
//             <div>
//               <h3 className="text-[#0F1724] font-semibold mb-4">Product</h3>
//               <ul className="space-y-2 text-sm text-[#9CA3AF]">
//                 <li><a href="#features" className="hover:text-[#0B6EFD]">Features</a></li>
//                 <li><a href="#pricing" className="hover:text-[#0B6EFD]">Pricing</a></li>
//                 <li><a href="#api" className="hover:text-[#0B6EFD]">API</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-[#0F1724] font-semibold mb-4">Company</h3>
//               <ul className="space-y-2 text-sm text-[#9CA3AF]">
//                 <li><a href="#about" className="hover:text-[#0B6EFD]">About</a></li>
//                 <li><a href="#blog" className="hover:text-[#0B6EFD]">Blog</a></li>
//                 <li><a href="#careers" className="hover:text-[#0B6EFD]">Careers</a></li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-[#0F1724] font-semibold mb-4">Support</h3>
//               <ul className="space-y-2 text-sm text-[#9CA3AF]">
//                 <li><a href="#help" className="hover:text-[#0B6EFD]">Help Center</a></li>
//                 <li><a href="#contact" className="hover:text-[#0B6EFD]">Contact</a></li>
//                 <li><a href="#privacy" className="hover:text-[#0B6EFD]">Privacy Policy</a></li>
//               </ul>
//             </div>
//           </div>
//           <div className="border-t border-[#E5E7EB] mt-8 pt-8 text-center text-sm text-[#9CA3AF]">
//             <p>&copy; 2025 Smart Parking. All rights reserved.</p>
//           </div>
//         </div>
//       </footer>
//     </div>
//   );
// }
import { Building2, Car, Gauge, Users, Clock, Shield, ArrowRight, MapPin, Zap } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'framer-motion';
import type { UserRole } from '../App';

interface WelcomeScreenProps {
  onLogin: (role: UserRole, name: string) => void;
}

export function WelcomeScreen({ onLogin }: WelcomeScreenProps) {
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
    }),
  };

  const features = [
    {
      icon: <Gauge className="w-5 h-5" />,
      color: '#0B6EFD',
      bg: '#EFF4FF',
      title: 'Real-time Availability',
      desc: 'Live updates on parking spots with instant notifications when spaces become available.',
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      color: '#00C48C',
      bg: '#EDFAF5',
      title: 'Multiple Locations',
      desc: 'Access parking at malls, offices, airports, and public spaces across the city.',
    },
    {
      icon: <Clock className="w-5 h-5" />,
      color: '#F59E0B',
      bg: '#FFFBEB',
      title: 'Quick Booking',
      desc: 'Reserve your spot in just 3 taps with our intuitive mobile-first interface.',
    },
    {
      icon: <Shield className="w-5 h-5" />,
      color: '#EF4444',
      bg: '#FEF2F2',
      title: 'Secure & Reliable',
      desc: 'Bank-level security with 24/7 support and guaranteed spot availability.',
    },
  ];

  const stats = [
    { value: '500+', label: 'Parking Locations', color: '#0B6EFD' },
    { value: '10K+', label: 'Happy Users', color: '#00C48C' },
    { value: '99.9%', label: 'Uptime', color: '#F59E0B' },
  ];

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ fontFamily: "'DM Sans', 'Helvetica Neue', sans-serif", background: '#F8FAFF' }}
    >
      {/* Ambient blobs */}
      <div
        style={{
          position: 'absolute', top: '-120px', right: '-120px',
          width: '500px', height: '500px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(11,110,253,0.10) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: '100px', left: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0,196,140,0.08) 0%, transparent 70%)',
          pointerEvents: 'none', zIndex: 0,
        }}
      />

      {/* ── HEADER ── */}
      <header
        style={{
          position: 'relative', zIndex: 30,
          background: 'rgba(255,255,255,0.85)',
          backdropFilter: 'blur(12px)',
          borderBottom: '1px solid #E9EEF8',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
            {/* Logo */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div
                style={{
                  width: '36px', height: '36px', borderRadius: '10px',
                  background: 'linear-gradient(135deg, #0B6EFD, #0041A8)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >
                <Car style={{ width: '18px', height: '18px', color: '#fff' }} />
              </div>
              <span style={{ fontWeight: 700, fontSize: '17px', color: '#0F1724', letterSpacing: '-0.3px' }}>
                Smart Parking
              </span>
            </div>

            {/* Nav */}
            <nav style={{ display: 'flex', gap: '32px' }} className="hidden md:flex">
              {['Home', 'Features', 'About', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  style={{
                    color: '#6B7280', fontSize: '14px', fontWeight: 500,
                    textDecoration: 'none', transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#0B6EFD')}
                  onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#6B7280')}
                >
                  {item}
                </a>
              ))}
            </nav>

            {/* Header CTAs */}
            <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
              <button
                onClick={() => onLogin('user', 'Demo User')}
                style={{
                  padding: '8px 16px', borderRadius: '8px', border: 'none',
                  background: 'transparent', color: '#374151', fontWeight: 500,
                  fontSize: '14px', cursor: 'pointer', transition: 'background 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = '#F3F4F6')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = 'transparent')}
              >
                Sign In
              </button>
              <button
                onClick={() => onLogin('user', 'Demo User')}
                style={{
                  padding: '8px 18px', borderRadius: '8px',
                  background: 'linear-gradient(135deg, #0B6EFD, #0056D2)',
                  color: '#fff', fontWeight: 600, fontSize: '14px',
                  border: 'none', cursor: 'pointer',
                  boxShadow: '0 2px 8px rgba(11,110,253,0.3)',
                  transition: 'opacity 0.2s',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = '0.9')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = '1')}
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── MAIN ── */}
      <main style={{ flex: 1, position: 'relative', zIndex: 10 }}>
        {/* HERO */}
        <section style={{ padding: '80px 24px 64px', textAlign: 'center', maxWidth: '760px', margin: '0 auto' }}>
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible">
            <div
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                background: '#EFF4FF', border: '1px solid #BFCFFF',
                borderRadius: '100px', padding: '6px 14px', marginBottom: '28px',
              }}
            >
              <Zap style={{ width: '13px', height: '13px', color: '#0B6EFD' }} />
              <span style={{ fontSize: '13px', fontWeight: 600, color: '#0B6EFD', letterSpacing: '0.01em' }}>
                Now with AI-powered spot prediction
              </span>
            </div>
          </motion.div>

          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            style={{
              fontSize: 'clamp(36px, 6vw, 60px)', fontWeight: 800,
              color: '#0F1724', lineHeight: 1.1, letterSpacing: '-1.5px', marginBottom: '20px',
            }}
          >
            Park Smarter,{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #0B6EFD, #00C48C)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}
            >
              Not Harder
            </span>
          </motion.h1>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            style={{ fontSize: '17px', color: '#6B7280', lineHeight: 1.7, marginBottom: '40px', maxWidth: '560px', margin: '0 auto 40px' }}
          >
            Real-time availability, seamless booking, and intelligent management — all in one place.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            custom={3} variants={fadeUp} initial="hidden" animate="visible"
            style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap', marginBottom: '16px' }}
          >
            <button
              onClick={() => onLogin('user', 'Demo User')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', borderRadius: '12px',
                background: 'linear-gradient(135deg, #0B6EFD, #0056D2)',
                color: '#fff', fontWeight: 700, fontSize: '15px',
                border: 'none', cursor: 'pointer',
                boxShadow: '0 4px 20px rgba(11,110,253,0.35)',
                transition: 'transform 0.15s, box-shadow 0.15s',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(-1px)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(11,110,253,0.4)';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.transform = 'translateY(0)';
                (e.currentTarget as HTMLElement).style.boxShadow = '0 4px 20px rgba(11,110,253,0.35)';
              }}
            >
              Get Started Free <ArrowRight style={{ width: '16px', height: '16px' }} />
            </button>

            <button
              onClick={() => onLogin('guest', 'Guest User')}
              style={{
                padding: '14px 28px', borderRadius: '12px',
                background: '#fff', border: '1.5px solid #E5E7EB',
                color: '#374151', fontWeight: 600, fontSize: '15px',
                cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s',
                boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#0B6EFD';
                (e.currentTarget as HTMLElement).style.color = '#0B6EFD';
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLElement).style.borderColor = '#E5E7EB';
                (e.currentTarget as HTMLElement).style.color = '#374151';
              }}
            >
              Continue as Guest
            </button>
          </motion.div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible">
            <button
              onClick={() => onLogin('admin', 'Admin User')}
              style={{
                background: 'none', border: 'none', cursor: 'pointer',
                fontSize: '13px', color: '#9CA3AF', fontWeight: 500,
                textDecoration: 'underline', textUnderlineOffset: '3px',
              }}
            >
              Admin Access →
            </button>
          </motion.div>
        </section>

        {/* STATS STRIP */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 64px' }}>
          <motion.div
            custom={5} variants={fadeUp} initial="hidden" animate="visible"
            style={{
              display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '1px', background: '#E9EEF8',
              borderRadius: '16px', overflow: 'hidden',
              boxShadow: '0 2px 16px rgba(0,0,0,0.06)',
            }}
          >
            {stats.map(({ value, label, color }) => (
              <div
                key={label}
                style={{
                  background: '#fff', padding: '28px 24px', textAlign: 'center',
                }}
              >
                <div style={{ fontSize: '32px', fontWeight: 800, color, letterSpacing: '-1px', marginBottom: '4px' }}>
                  {value}
                </div>
                <div style={{ fontSize: '13px', color: '#9CA3AF', fontWeight: 500 }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </section>

        {/* FEATURES */}
        <section style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px 80px' }}>
          <motion.div custom={6} variants={fadeUp} initial="hidden" animate="visible">
            <p style={{ fontSize: '12px', fontWeight: 700, color: '#0B6EFD', letterSpacing: '0.1em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '10px' }}>
              Why Smart Parking
            </p>
            <h2 style={{ fontSize: 'clamp(22px, 4vw, 32px)', fontWeight: 800, color: '#0F1724', textAlign: 'center', letterSpacing: '-0.5px', marginBottom: '40px' }}>
              Everything you need, nothing you don't
            </h2>
          </motion.div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '16px',
            }}
          >
            {features.map(({ icon, color, bg, title, desc }, i) => (
              <motion.div
                key={title}
                custom={7 + i} variants={fadeUp} initial="hidden" animate="visible"
                whileHover={{ y: -4 }}
                style={{
                  background: '#fff', borderRadius: '16px',
                  padding: '24px', border: '1px solid #F0F3FA',
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  transition: 'box-shadow 0.2s',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 8px 28px rgba(0,0,0,0.10)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)')}
              >
                <div
                  style={{
                    width: '40px', height: '40px', borderRadius: '10px',
                    background: bg, display: 'flex', alignItems: 'center',
                    justifyContent: 'center', marginBottom: '16px', color,
                  }}
                >
                  {icon}
                </div>
                <h3 style={{ fontSize: '15px', fontWeight: 700, color: '#0F1724', marginBottom: '8px' }}>
                  {title}
                </h3>
                <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.6 }}>{desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* TRUST BANNER */}
        <section style={{ maxWidth: '900px', margin: '0 auto 80px', padding: '0 24px' }}>
          <motion.div
            custom={12} variants={fadeUp} initial="hidden" animate="visible"
            style={{
              background: 'linear-gradient(135deg, #0B6EFD 0%, #0041A8 100%)',
              borderRadius: '20px', padding: '48px 40px',
              display: 'flex', alignItems: 'center', justifyContent: 'space-between',
              flexWrap: 'wrap', gap: '24px',
            }}
          >
            <div>
              <h2 style={{ fontSize: '24px', fontWeight: 800, color: '#fff', marginBottom: '8px', letterSpacing: '-0.4px' }}>
                Ready to transform your commute?
              </h2>
              <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>
                Join 10,000+ drivers who've already made the switch.
              </p>
            </div>
            <button
              onClick={() => onLogin('user', 'Demo User')}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                padding: '14px 28px', borderRadius: '12px',
                background: '#fff', color: '#0B6EFD',
                fontWeight: 700, fontSize: '15px', border: 'none',
                cursor: 'pointer', whiteSpace: 'nowrap',
                boxShadow: '0 4px 16px rgba(0,0,0,0.15)',
                transition: 'transform 0.15s',
              }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1.03)')}
              onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.transform = 'scale(1)')}
            >
              Start for Free <ArrowRight style={{ width: '16px', height: '16px' }} />
            </button>
          </motion.div>
        </section>
      </main>

      {/* ── FOOTER ── */}
      <footer
        style={{
          background: '#fff', borderTop: '1px solid #E9EEF8',
          position: 'relative', zIndex: 10,
        }}
      >
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '48px 24px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '32px', marginBottom: '40px' }}>
            {/* Brand */}
            <div style={{ gridColumn: 'span 1' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
                <div
                  style={{
                    width: '32px', height: '32px', borderRadius: '8px',
                    background: 'linear-gradient(135deg, #0B6EFD, #0041A8)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >
                  <Car style={{ width: '16px', height: '16px', color: '#fff' }} />
                </div>
                <span style={{ fontWeight: 700, color: '#0F1724', fontSize: '15px' }}>Smart Parking</span>
              </div>
              <p style={{ fontSize: '13px', color: '#9CA3AF', lineHeight: 1.7 }}>
                Revolutionizing parking with smart technology.
              </p>
            </div>

            {/* Links */}
            {[
              { heading: 'Product', links: [['Features', '#features'], ['Pricing', '#pricing'], ['API', '#api']] },
              { heading: 'Company', links: [['About', '#about'], ['Blog', '#blog'], ['Careers', '#careers']] },
              { heading: 'Support', links: [['Help Center', '#help'], ['Contact', '#contact'], ['Privacy Policy', '#privacy']] },
            ].map(({ heading, links }) => (
              <div key={heading}>
                <p style={{ fontWeight: 700, fontSize: '13px', color: '#0F1724', marginBottom: '12px', letterSpacing: '0.02em' }}>
                  {heading}
                </p>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {links.map(([label, href]) => (
                    <li key={label}>
                      <a
                        href={href}
                        style={{ fontSize: '13px', color: '#9CA3AF', textDecoration: 'none', transition: 'color 0.2s' }}
                        onMouseEnter={(e) => ((e.target as HTMLElement).style.color = '#0B6EFD')}
                        onMouseLeave={(e) => ((e.target as HTMLElement).style.color = '#9CA3AF')}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ borderTop: '1px solid #F0F3FA', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
            <p style={{ fontSize: '13px', color: '#D1D5DB' }}>© 2025 Smart Parking. All rights reserved.</p>
            <button
              onClick={() => onLogin('admin', 'Admin User')}
              style={{
                background: 'none', border: 'none', fontSize: '12px',
                color: '#D1D5DB', cursor: 'pointer', fontWeight: 500,
              }}
            >
              Admin Access
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}