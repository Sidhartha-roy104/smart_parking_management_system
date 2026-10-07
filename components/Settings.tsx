// import { ArrowLeft, User, Bell, Moon, LogOut, Shield, CreditCard, HelpCircle } from 'lucide-react';
// import { Button } from './ui/button';
// import { Switch } from './ui/switch';
// import { Input } from './ui/input';
// import type { User as UserType } from '../App';

// interface SettingsProps {
//   user: UserType | null;
//   onBack: () => void;
//   onLogout: () => void;
// }

// export function Settings({ user, onBack, onLogout }: SettingsProps) {
//   return (
//     <div className="min-h-screen bg-[#F3F4F6]">
//       {/* Header */}
//       <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
//         <div className="max-w-2xl mx-auto px-4 py-4">
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
//               <h2 className="text-[#0F1724]">Settings</h2>
//               <p className="text-[#9CA3AF]">Manage your preferences</p>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Content */}
//       <div className="max-w-2xl mx-auto px-4 py-4 space-y-4">
//         {/* Profile Section */}
//         <div className="bg-white rounded-2xl border border-[#E5E7EB]">
//           <div className="p-4 border-b border-[#E5E7EB]">
//             <div className="flex items-center gap-3">
//               <User className="w-5 h-5 text-[#374151]" />
//               <h3 className="text-[#0F1724]">Profile</h3>
//             </div>
//           </div>
          
//           <div className="p-4 space-y-4">
//             <div className="flex items-center gap-4">
//               <div className="w-16 h-16 rounded-full bg-[#0B6EFD] flex items-center justify-center text-white text-xl">
//                 {user?.name.charAt(0) || 'U'}
//               </div>
//               <div className="flex-1">
//                 <div className="text-[#0F1724] mb-1">{user?.name}</div>
//                 <div className="text-[#9CA3AF]">{user?.role === 'admin' ? 'Administrator' : 'User'}</div>
//               </div>
//               <Button variant="outline" className="rounded-xl">
//                 Edit
//               </Button>
//             </div>

//             <div className="space-y-3">
//               <div>
//                 <label className="text-[#9CA3AF] mb-2 block">Email</label>
//                 <Input 
//                   type="email"
//                   placeholder="user@example.com"
//                   className="h-12 rounded-xl border-[#E5E7EB]"
//                 />
//               </div>
              
//               <div>
//                 <label className="text-[#9CA3AF] mb-2 block">Phone</label>
//                 <Input 
//                   type="tel"
//                   placeholder="+91 XXXXX XXXXX"
//                   className="h-12 rounded-xl border-[#E5E7EB]"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Notifications */}
//         <div className="bg-white rounded-2xl border border-[#E5E7EB]">
//           <div className="p-4 border-b border-[#E5E7EB]">
//             <div className="flex items-center gap-3">
//               <Bell className="w-5 h-5 text-[#374151]" />
//               <h3 className="text-[#0F1724]">Notifications</h3>
//             </div>
//           </div>
          
//           <div className="p-4 space-y-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="text-[#0F1724] mb-1">Booking Alerts</div>
//                 <div className="text-[#9CA3AF]">Get notified about booking updates</div>
//               </div>
//               <Switch defaultChecked />
//             </div>

//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="text-[#0F1724] mb-1">Promotional Offers</div>
//                 <div className="text-[#9CA3AF]">Receive special deals and discounts</div>
//               </div>
//               <Switch defaultChecked />
//             </div>

//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="text-[#0F1724] mb-1">Parking Reminders</div>
//                 <div className="text-[#9CA3AF]">Reminders before booking expires</div>
//               </div>
//               <Switch defaultChecked />
//             </div>

//             {user?.role === 'admin' && (
//               <div className="flex items-center justify-between">
//                 <div>
//                   <div className="text-[#0F1724] mb-1">System Alerts</div>
//                   <div className="text-[#9CA3AF]">Critical system notifications</div>
//                 </div>
//                 <Switch defaultChecked />
//               </div>
//             )}
//           </div>
//         </div>

//         {/* Appearance */}
//         <div className="bg-white rounded-2xl border border-[#E5E7EB]">
//           <div className="p-4 border-b border-[#E5E7EB]">
//             <div className="flex items-center gap-3">
//               <Moon className="w-5 h-5 text-[#374151]" />
//               <h3 className="text-[#0F1724]">Appearance</h3>
//             </div>
//           </div>
          
//           <div className="p-4">
//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="text-[#0F1724] mb-1">Dark Mode</div>
//                 <div className="text-[#9CA3AF]">Switch to dark theme</div>
//               </div>
//               <Switch />
//             </div>
//           </div>
//         </div>

//         {/* Payment Methods (User only) */}
//         {user?.role !== 'admin' && (
//           <div className="bg-white rounded-2xl border border-[#E5E7EB]">
//             <div className="p-4 border-b border-[#E5E7EB]">
//               <div className="flex items-center gap-3">
//                 <CreditCard className="w-5 h-5 text-[#374151]" />
//                 <h3 className="text-[#0F1724]">Payment Methods</h3>
//               </div>
//             </div>
            
//             <div className="p-4 space-y-3">
//               <div className="p-4 bg-[#F3F4F6] rounded-xl flex items-center justify-between">
//                 <div className="flex items-center gap-3">
//                   <div className="w-12 h-8 bg-gradient-to-br from-[#0B6EFD] to-[#00C48C] rounded-lg" />
//                   <div>
//                     <div className="text-[#0F1724]">•••• •••• •••• 4242</div>
//                     <div className="text-[#9CA3AF]">Expires 12/25</div>
//                   </div>
//                 </div>
//                 <Button variant="ghost" size="sm" className="rounded-xl">
//                   Remove
//                 </Button>
//               </div>

//               <Button variant="outline" className="w-full rounded-xl">
//                 Add Payment Method
//               </Button>
//             </div>
//           </div>
//         )}

//         {/* Security */}
//         <div className="bg-white rounded-2xl border border-[#E5E7EB]">
//           <div className="p-4 border-b border-[#E5E7EB]">
//             <div className="flex items-center gap-3">
//               <Shield className="w-5 h-5 text-[#374151]" />
//               <h3 className="text-[#0F1724]">Security</h3>
//             </div>
//           </div>
          
//           <div className="p-4 space-y-3">
//             <Button variant="outline" className="w-full rounded-xl justify-start">
//               Change Password
//             </Button>
//             <Button variant="outline" className="w-full rounded-xl justify-start">
//               Two-Factor Authentication
//             </Button>
//             <Button variant="outline" className="w-full rounded-xl justify-start">
//               Privacy Settings
//             </Button>
//           </div>
//         </div>

//         {/* Help & Support */}
//         <div className="bg-white rounded-2xl border border-[#E5E7EB]">
//           <div className="p-4 border-b border-[#E5E7EB]">
//             <div className="flex items-center gap-3">
//               <HelpCircle className="w-5 h-5 text-[#374151]" />
//               <h3 className="text-[#0F1724]">Help & Support</h3>
//             </div>
//           </div>
          
//           <div className="p-4 space-y-3">
//             <Button variant="outline" className="w-full rounded-xl justify-start">
//               Help Center
//             </Button>
//             <Button variant="outline" className="w-full rounded-xl justify-start">
//               Contact Support
//             </Button>
//             <Button variant="outline" className="w-full rounded-xl justify-start">
//               Terms & Privacy
//             </Button>
//             <Button variant="outline" className="w-full rounded-xl justify-start">
//               About
//             </Button>
//           </div>
//         </div>

//         {/* Logout */}
//         <div className="pb-4">
//           <Button 
//             variant="outline"
//             className="w-full h-14 rounded-xl text-[#EF4444] border-[#EF4444] hover:bg-[#EF4444]/10"
//             onClick={onLogout}
//           >
//             <LogOut className="w-5 h-5 mr-2" />
//             Log Out
//           </Button>
//         </div>

//         {/* App Version */}
//         <div className="text-center text-[#9CA3AF] pb-4">
//           Version 1.0.0 (Demo)
//         </div>
//       </div>
//     </div>
//   );
// }
// ─── Settings.tsx ─────────────────────────────────────────────────────────────
import { ArrowLeft, User, Bell, Moon, LogOut, Shield, CreditCard, HelpCircle, ChevronRight } from 'lucide-react';
import { Switch } from './ui/switch';
import { Input } from './ui/input';
import type { User as UserType } from '../App';

interface SettingsProps {
  user: UserType | null;
  onBack: () => void;
  onLogout: () => void;
}

const S = {
  bg: '#F7F8FC', white: '#FFFFFF', navy: '#0F1724', blue: '#0B6EFD',
  green: '#00C48C', amber: '#F59E0B', red: '#EF4444', gray: '#6B7280', border: '#EAECF0',
};

export function Settings({ user, onBack, onLogout }: SettingsProps) {
  function Section({ icon: Icon, title, iconColor = S.blue, children }: any) {
    return (
      <div style={{ background: S.white, borderRadius: '16px', border: `1px solid ${S.border}`, overflow: 'hidden', marginBottom: '12px' }}>
        <div style={{ padding: '14px 18px', borderBottom: `1px solid ${S.border}`, display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div style={{ width: '32px', height: '32px', borderRadius: '9px', background: iconColor + '15', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Icon style={{ width: '15px', height: '15px', color: iconColor }} />
          </div>
          <span style={{ fontSize: '14px', fontWeight: 700, color: S.navy }}>{title}</span>
        </div>
        <div style={{ padding: '4px 0' }}>{children}</div>
      </div>
    );
  }

  function SettingRow({ label, desc, action }: { label: string; desc?: string; action: React.ReactNode }) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 18px', borderBottom: `1px solid ${S.border}` }}>
        <div>
          <div style={{ fontSize: '14px', fontWeight: 600, color: S.navy }}>{label}</div>
          {desc && <div style={{ fontSize: '12px', color: S.gray, marginTop: '1px' }}>{desc}</div>}
        </div>
        {action}
      </div>
    );
  }

  function NavRow({ label }: { label: string }) {
    return (
      <button style={{
        width: '100%', padding: '13px 18px', border: 'none', background: 'none', cursor: 'pointer',
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: `1px solid ${S.border}`,
        textAlign: 'left',
      }}
        onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = S.bg}
        onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = 'none'}
      >
        <span style={{ fontSize: '14px', fontWeight: 500, color: S.navy }}>{label}</span>
        <ChevronRight style={{ width: '15px', height: '15px', color: S.gray }} />
      </button>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: S.bg, fontFamily: "'DM Sans', sans-serif" }}>
      {/* Header */}
      <div style={{ background: S.white, borderBottom: `1px solid ${S.border}`, position: 'sticky', top: 0, zIndex: 20, padding: '0 16px' }}>
        <div style={{ maxWidth: '560px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '12px', height: '60px' }}>
          <button onClick={onBack} style={{ width: '36px', height: '36px', borderRadius: '10px', border: `1px solid ${S.border}`, background: S.white, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <ArrowLeft style={{ width: '17px', height: '17px', color: S.navy }} />
          </button>
          <div>
            <div style={{ fontSize: '16px', fontWeight: 700, color: S.navy }}>Settings</div>
            <div style={{ fontSize: '12px', color: S.gray }}>Manage your preferences</div>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: '560px', margin: '0 auto', padding: '20px 16px' }}>
        {/* Profile Card */}
        <div style={{ background: 'linear-gradient(135deg, #0B6EFD, #0041A8)', borderRadius: '18px', padding: '20px', marginBottom: '12px', display: 'flex', alignItems: 'center', gap: '14px' }}>
          <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: 'rgba(255,255,255,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', fontWeight: 800, color: '#fff', flexShrink: 0 }}>
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>{user?.name}</div>
            <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.7)' }}>{user?.role === 'admin' ? 'Administrator' : 'Member'}</div>
          </div>
          <button style={{ padding: '7px 16px', borderRadius: '8px', border: 'none', background: 'rgba(255,255,255,0.2)', color: '#fff', fontSize: '13px', fontWeight: 600, cursor: 'pointer', backdropFilter: 'blur(4px)' }}>
            Edit
          </button>
        </div>

        <Section icon={User} title="Profile">
          <div style={{ padding: '14px 18px', borderBottom: `1px solid ${S.border}` }}>
            <label style={{ fontSize: '11px', fontWeight: 600, color: S.gray, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>Email</label>
            <input type="email" placeholder="user@example.com" style={{ width: '100%', height: '42px', borderRadius: '10px', border: `1px solid ${S.border}`, paddingLeft: '12px', fontSize: '14px', color: S.navy, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', background: S.bg }} />
          </div>
          <div style={{ padding: '14px 18px' }}>
            <label style={{ fontSize: '11px', fontWeight: 600, color: S.gray, textTransform: 'uppercase', letterSpacing: '0.08em', display: 'block', marginBottom: '6px' }}>Phone</label>
            <input type="tel" placeholder="+91 XXXXX XXXXX" style={{ width: '100%', height: '42px', borderRadius: '10px', border: `1px solid ${S.border}`, paddingLeft: '12px', fontSize: '14px', color: S.navy, fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box', background: S.bg }} />
          </div>
        </Section>

        <Section icon={Bell} title="Notifications" iconColor={S.amber}>
          <SettingRow label="Booking Alerts" desc="Updates on your bookings" action={<Switch defaultChecked />} />
          <SettingRow label="Promotional Offers" desc="Deals and discounts" action={<Switch defaultChecked />} />
          <SettingRow label="Parking Reminders" desc="Before your booking expires" action={<Switch defaultChecked />} />
          {user?.role === 'admin' && <SettingRow label="System Alerts" desc="Critical system notifications" action={<Switch defaultChecked />} />}
        </Section>

        <Section icon={Moon} title="Appearance" iconColor="#7C3AED">
          <SettingRow label="Dark Mode" desc="Switch to dark theme" action={<Switch />} />
        </Section>

        {user?.role !== 'admin' && (
          <Section icon={CreditCard} title="Payment Methods" iconColor={S.green}>
            <div style={{ padding: '14px 18px', borderBottom: `1px solid ${S.border}`, display: 'flex', alignItems: 'center', gap: '12px' }}>
              <div style={{ width: '48px', height: '30px', borderRadius: '6px', background: 'linear-gradient(135deg, #0B6EFD, #00C48C)', flexShrink: 0 }} />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: 600, color: S.navy }}>•••• •••• •••• 4242</div>
                <div style={{ fontSize: '11px', color: S.gray }}>Expires 12/25</div>
              </div>
              <button style={{ fontSize: '12px', color: S.red, fontWeight: 600, background: 'none', border: 'none', cursor: 'pointer' }}>Remove</button>
            </div>
            <button style={{ width: '100%', padding: '13px 18px', border: 'none', background: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px', color: S.blue, fontWeight: 600, fontSize: '14px', fontFamily: 'inherit' }}>
              + Add Payment Method
            </button>
          </Section>
        )}

        <Section icon={Shield} title="Security" iconColor={S.red}>
          <NavRow label="Change Password" />
          <NavRow label="Two-Factor Authentication" />
          <NavRow label="Privacy Settings" />
        </Section>

        <Section icon={HelpCircle} title="Help & Support" iconColor={S.gray}>
          <NavRow label="Help Center" />
          <NavRow label="Contact Support" />
          <NavRow label="Terms & Privacy" />
          <NavRow label="About" />
        </Section>

        {/* Logout */}
        <button
          onClick={onLogout}
          style={{
            width: '100%', height: '50px', borderRadius: '14px',
            border: `1.5px solid ${S.red}`, background: '#FEF2F2',
            color: S.red, fontSize: '15px', fontWeight: 700, cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
            fontFamily: 'inherit', marginBottom: '8px',
          }}
        >
          <LogOut style={{ width: '17px', height: '17px' }} /> Log Out
        </button>

        <div style={{ textAlign: 'center', fontSize: '12px', color: S.gray, paddingBottom: '24px' }}>Version 1.0.0 (Demo)</div>
      </div>
    </div>
  );
}