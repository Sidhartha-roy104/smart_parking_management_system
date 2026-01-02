import { useState } from 'react';
import { ArrowLeft, QrCode, CheckCircle2, Camera, Keyboard } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { motion } from 'framer-motion';

interface QRScanEntryProps {
  onBack: () => void;
}

export function QRScanEntry({ onBack }: QRScanEntryProps) {
  const [scanning, setScanning] = useState(true);
  const [scanned, setScanned] = useState(false);
  const [manualEntry, setManualEntry] = useState(false);
  const [manualCode, setManualCode] = useState('');

  const handleScan = () => {
    setScanning(false);
    setTimeout(() => {
      setScanned(true);
    }, 500);
  };

  const handleManualSubmit = () => {
    if (manualCode.trim()) {
      setScanning(false);
      setTimeout(() => {
        setScanned(true);
      }, 500);
    }
  };

  return (
    <div className="min-h-screen bg-[#0F1724]">
      {/* Header */}
      <div className="border-b border-white/10 sticky top-0 z-10 bg-[#0F1724]">
        <div className="max-w-2xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Button 
              variant="ghost" 
              size="icon"
              className="rounded-xl text-white hover:bg-white/10"
              onClick={onBack}
            >
              <ArrowLeft className="w-5 h-5" />
            </Button>
            <div className="flex-1">
              <h2 className="text-white">QR Scanner</h2>
              <p className="text-white/60">Scan your parking QR code</p>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        {!scanned ? (
          <div className="space-y-6">
            {!manualEntry ? (
              <>
                {/* Scanner View */}
                <div className="relative aspect-square max-w-sm mx-auto">
                  <div className="absolute inset-0 rounded-3xl overflow-hidden bg-gradient-to-br from-[#0B6EFD]/20 to-[#00C48C]/20">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Camera className="w-24 h-24 text-white/40" />
                    </div>
                    
                    {scanning && (
                      <motion.div
                        className="absolute inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#0B6EFD] to-transparent"
                        animate={{ y: [0, 400] }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          ease: "linear"
                        }}
                      />
                    )}
                  </div>

                  {/* Corner Brackets */}
                  <div className="absolute top-8 left-8 w-12 h-12 border-l-4 border-t-4 border-[#0B6EFD] rounded-tl-2xl" />
                  <div className="absolute top-8 right-8 w-12 h-12 border-r-4 border-t-4 border-[#0B6EFD] rounded-tr-2xl" />
                  <div className="absolute bottom-8 left-8 w-12 h-12 border-l-4 border-b-4 border-[#0B6EFD] rounded-bl-2xl" />
                  <div className="absolute bottom-8 right-8 w-12 h-12 border-r-4 border-b-4 border-[#0B6EFD] rounded-br-2xl" />
                </div>

                {/* Instructions */}
                <div className="text-center">
                  <p className="text-white/80 mb-4">
                    Position the QR code within the frame
                  </p>
                  <Button 
                    className="bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
                    onClick={handleScan}
                  >
                    Simulate Scan
                  </Button>
                </div>

                {/* Manual Entry Toggle */}
                <div className="text-center">
                  <Button 
                    variant="ghost"
                    className="text-white/60 hover:text-white hover:bg-white/10 rounded-xl"
                    onClick={() => setManualEntry(true)}
                  >
                    <Keyboard className="w-4 h-4 mr-2" />
                    Enter Code Manually
                  </Button>
                </div>
              </>
            ) : (
              <>
                {/* Manual Entry View */}
                <div className="max-w-sm mx-auto">
                  <div className="text-center mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4">
                      <QrCode className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-white mb-2">Enter Code</h3>
                    <p className="text-white/60">Type your booking code below</p>
                  </div>

                  <div className="space-y-4">
                    <Input 
                      placeholder="QR-XXXXX-XXX"
                      className="h-14 rounded-xl bg-white/10 border-white/20 text-white placeholder:text-white/40"
                      value={manualCode}
                      onChange={(e) => setManualCode(e.target.value)}
                    />
                    
                    <div className="flex gap-2">
                      <Button 
                        variant="ghost"
                        className="flex-1 rounded-xl text-white hover:bg-white/10"
                        onClick={() => setManualEntry(false)}
                      >
                        Back to Scanner
                      </Button>
                      <Button 
                        className="flex-1 bg-[#0B6EFD] hover:bg-[#0B6EFD]/90 rounded-xl"
                        onClick={handleManualSubmit}
                      >
                        Verify
                      </Button>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center py-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", duration: 0.6 }}
              className="w-32 h-32 bg-[#00C48C] rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle2 className="w-16 h-16 text-white" />
            </motion.div>

            <h2 className="text-white mb-3">Entry Confirmed!</h2>
            <p className="text-white/60 mb-8">Welcome to the parking lot</p>

            {/* Next Steps */}
            <div className="bg-white/10 rounded-2xl p-6 max-w-sm mx-auto mb-6">
              <h3 className="text-white mb-4">Next Steps</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0B6EFD] flex items-center justify-center flex-shrink-0 text-white text-sm">
                    1
                  </div>
                  <div className="text-white/80">
                    Proceed to your assigned slot: <span className="text-white">S12</span>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0B6EFD] flex items-center justify-center flex-shrink-0 text-white text-sm">
                    2
                  </div>
                  <div className="text-white/80">
                    Park your vehicle within the marked area
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#0B6EFD] flex items-center justify-center flex-shrink-0 text-white text-sm">
                    3
                  </div>
                  <div className="text-white/80">
                    Lock your vehicle and enjoy your visit
                  </div>
                </div>
              </div>
            </div>

            <Button 
              className="w-full max-w-sm bg-white text-[#0F1724] hover:bg-white/90 rounded-xl"
              onClick={onBack}
            >
              Back to Home
            </Button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
