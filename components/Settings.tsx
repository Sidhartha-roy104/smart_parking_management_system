import { ArrowLeft, User, Bell, Moon, LogOut, Shield, CreditCard, HelpCircle } from 'lucide-react';
import { Button } from './ui/button';
import { Switch } from './ui/switch';
import { Input } from './ui/input';
import type { User as UserType } from '../App';

interface SettingsProps {
  user: UserType | null;
  onBack: () => void;
  onLogout: () => void;
}

export function Settings({ user, onBack, onLogout }: SettingsProps) {
  return (
    <div className="min-h-screen bg-[#F3F4F6]">
      {/* Header */}
      <div className="bg-white border-b border-[#E5E7EB] sticky top-0 z-10">
        <div className="max-w-2xl mx-auto px-4 py-4">
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
              <h2 className="text-[#0F1724]">Settings</h2>
              <p className="text-[#9CA3AF]">Manage your preferences</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-4 space-y-4">
        {/* Profile Section */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB]">
          <div className="p-4 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-[#374151]" />
              <h3 className="text-[#0F1724]">Profile</h3>
            </div>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full bg-[#0B6EFD] flex items-center justify-center text-white text-xl">
                {user?.name.charAt(0) || 'U'}
              </div>
              <div className="flex-1">
                <div className="text-[#0F1724] mb-1">{user?.name}</div>
                <div className="text-[#9CA3AF]">{user?.role === 'admin' ? 'Administrator' : 'User'}</div>
              </div>
              <Button variant="outline" className="rounded-xl">
                Edit
              </Button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="text-[#9CA3AF] mb-2 block">Email</label>
                <Input 
                  type="email"
                  placeholder="user@example.com"
                  className="h-12 rounded-xl border-[#E5E7EB]"
                />
              </div>
              
              <div>
                <label className="text-[#9CA3AF] mb-2 block">Phone</label>
                <Input 
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className="h-12 rounded-xl border-[#E5E7EB]"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Notifications */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB]">
          <div className="p-4 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-[#374151]" />
              <h3 className="text-[#0F1724]">Notifications</h3>
            </div>
          </div>
          
          <div className="p-4 space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#0F1724] mb-1">Booking Alerts</div>
                <div className="text-[#9CA3AF]">Get notified about booking updates</div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#0F1724] mb-1">Promotional Offers</div>
                <div className="text-[#9CA3AF]">Receive special deals and discounts</div>
              </div>
              <Switch defaultChecked />
            </div>

            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#0F1724] mb-1">Parking Reminders</div>
                <div className="text-[#9CA3AF]">Reminders before booking expires</div>
              </div>
              <Switch defaultChecked />
            </div>

            {user?.role === 'admin' && (
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-[#0F1724] mb-1">System Alerts</div>
                  <div className="text-[#9CA3AF]">Critical system notifications</div>
                </div>
                <Switch defaultChecked />
              </div>
            )}
          </div>
        </div>

        {/* Appearance */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB]">
          <div className="p-4 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <Moon className="w-5 h-5 text-[#374151]" />
              <h3 className="text-[#0F1724]">Appearance</h3>
            </div>
          </div>
          
          <div className="p-4">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-[#0F1724] mb-1">Dark Mode</div>
                <div className="text-[#9CA3AF]">Switch to dark theme</div>
              </div>
              <Switch />
            </div>
          </div>
        </div>

        {/* Payment Methods (User only) */}
        {user?.role !== 'admin' && (
          <div className="bg-white rounded-2xl border border-[#E5E7EB]">
            <div className="p-4 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <CreditCard className="w-5 h-5 text-[#374151]" />
                <h3 className="text-[#0F1724]">Payment Methods</h3>
              </div>
            </div>
            
            <div className="p-4 space-y-3">
              <div className="p-4 bg-[#F3F4F6] rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-8 bg-gradient-to-br from-[#0B6EFD] to-[#00C48C] rounded-lg" />
                  <div>
                    <div className="text-[#0F1724]">•••• •••• •••• 4242</div>
                    <div className="text-[#9CA3AF]">Expires 12/25</div>
                  </div>
                </div>
                <Button variant="ghost" size="sm" className="rounded-xl">
                  Remove
                </Button>
              </div>

              <Button variant="outline" className="w-full rounded-xl">
                Add Payment Method
              </Button>
            </div>
          </div>
        )}

        {/* Security */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB]">
          <div className="p-4 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <Shield className="w-5 h-5 text-[#374151]" />
              <h3 className="text-[#0F1724]">Security</h3>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            <Button variant="outline" className="w-full rounded-xl justify-start">
              Change Password
            </Button>
            <Button variant="outline" className="w-full rounded-xl justify-start">
              Two-Factor Authentication
            </Button>
            <Button variant="outline" className="w-full rounded-xl justify-start">
              Privacy Settings
            </Button>
          </div>
        </div>

        {/* Help & Support */}
        <div className="bg-white rounded-2xl border border-[#E5E7EB]">
          <div className="p-4 border-b border-[#E5E7EB]">
            <div className="flex items-center gap-3">
              <HelpCircle className="w-5 h-5 text-[#374151]" />
              <h3 className="text-[#0F1724]">Help & Support</h3>
            </div>
          </div>
          
          <div className="p-4 space-y-3">
            <Button variant="outline" className="w-full rounded-xl justify-start">
              Help Center
            </Button>
            <Button variant="outline" className="w-full rounded-xl justify-start">
              Contact Support
            </Button>
            <Button variant="outline" className="w-full rounded-xl justify-start">
              Terms & Privacy
            </Button>
            <Button variant="outline" className="w-full rounded-xl justify-start">
              About
            </Button>
          </div>
        </div>

        {/* Logout */}
        <div className="pb-4">
          <Button 
            variant="outline"
            className="w-full h-14 rounded-xl text-[#EF4444] border-[#EF4444] hover:bg-[#EF4444]/10"
            onClick={onLogout}
          >
            <LogOut className="w-5 h-5 mr-2" />
            Log Out
          </Button>
        </div>

        {/* App Version */}
        <div className="text-center text-[#9CA3AF] pb-4">
          Version 1.0.0 (Demo)
        </div>
      </div>
    </div>
  );
}
