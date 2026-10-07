import { useState } from 'react';
import { ArrowLeft, QrCode, CheckCircle2, Camera, Keyboard } from 'lucide-react';
import { motion } from 'framer-motion';

interface QRScanEntryProps {
  onBack: () => void;
}

export function QRScanEntry({ onBack }: QRScanEntryProps) {
  const [scanning, setScanning] = useState(true);
  const [scanned, setScanned] = useState(false);
  const [manualEntry, setManualEntry] = useState(false);
  const [manualCode, setManualCode] = useState('');

  const handleScan = () => { setScanning(false); setTimeout(() => setScanned(true), 400); };
  const handleManualSubmit = () => { if (manualCode.trim()) { setScanning(false); setTimeout(() => setScanned(true), 400); } };

  const steps = ['Proceed to your assigned slot: S12', 'Park within the marked area', 'Lock your vehicle and enjoy your visit'];

  return (
    <div style={{ minHeight: '100vh', background: '#0D1520', fontFamily: "'DM Sans', sans-serif", display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <div style={{ padding: '16px', borderBottom: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <button onClick={onBack} style={{ width: '36px', height: '36px', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.08)', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <ArrowLeft style={{ width: '17px', height: '17px', color: '#fff' }} />
        </button>
        <div>
          <div style={{ fontSize: '16px', fontWeight: 700, color: '#fff' }}>QR Scanner</div>
          <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>Scan your parking entry code</div>
        </div>
      </div>

      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 20px' }}>
        {!scanned ? (
          <div style={{ width: '100%', maxWidth: '360px' }}>
            {!manualEntry ? (
              <div style={{ textAlign: 'center' }}>
                {/* Scanner frame */}
                <div style={{ position: 'relative', width: '260px', height: '260px', margin: '0 auto 28px' }}>
                  {/* Background */}
                  <div style={{ position: 'absolute', inset: 0, borderRadius: '20px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Camera style={{ width: '60px', height: '60px', color: 'rgba(255,255,255,0.2)' }} />
                  </div>

                  {/* Scan line */}
                  {scanning && (
                    <motion.div
                      style={{ position: 'absolute', left: '16px', right: '16px', height: '2px', background: 'linear-gradient(90deg, transparent, #0B6EFD, transparent)', borderRadius: '1px' }}
                      animate={{ y: [16, 228] }}
                      transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
                    />
                  )}

                  {/* Corner brackets */}
                  {[{ top: '10px', left: '10px', borderTop: true, borderLeft: true },
                    { top: '10px', right: '10px', borderTop: true, borderRight: true },
                    { bottom: '10px', left: '10px', borderBottom: true, borderLeft: true },
                    { bottom: '10px', right: '10px', borderBottom: true, borderRight: true }].map((pos, i) => (
                    <div key={i} style={{
                      position: 'absolute', width: '22px', height: '22px',
                      top: pos.top,
                      left: pos.left,
                      right: pos.right,
                      bottom: pos.bottom,
                      borderTopWidth: pos.borderTop ? '3px' : 0,
                      borderRightWidth: pos.borderRight ? '3px' : 0,
                      borderBottomWidth: pos.borderBottom ? '3px' : 0,
                      borderLeftWidth: pos.borderLeft ? '3px' : 0,
                      borderStyle: 'solid', borderColor: '#0B6EFD',
                      borderTopLeftRadius: pos.borderTop && pos.borderLeft ? '6px' : 0,
                      borderTopRightRadius: pos.borderTop && pos.borderRight ? '6px' : 0,
                      borderBottomLeftRadius: pos.borderBottom && pos.borderLeft ? '6px' : 0,
                      borderBottomRightRadius: pos.borderBottom && pos.borderRight ? '6px' : 0,
                    }} />
                  ))}
                </div>

                <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '14px', marginBottom: '20px' }}>
                  Position your QR code within the frame
                </p>

                <button
                  onClick={handleScan}
                  style={{
                    padding: '13px 32px', borderRadius: '14px',
                    background: 'linear-gradient(135deg, #0B6EFD, #0041A8)',
                    color: '#fff', fontSize: '15px', fontWeight: 700,
                    border: 'none', cursor: 'pointer', display: 'block', margin: '0 auto 16px',
                    boxShadow: '0 4px 20px rgba(11,110,253,0.4)', fontFamily: 'inherit',
                  }}
                >
                  Simulate Scan
                </button>

                <button
                  onClick={() => setManualEntry(true)}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'rgba(255,255,255,0.45)', fontSize: '13px', display: 'flex', alignItems: 'center', gap: '6px', margin: '0 auto', fontFamily: 'inherit' }}
                >
                  <Keyboard style={{ width: '14px', height: '14px' }} /> Enter code manually
                </button>
              </div>
            ) : (
              <div>
                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: 'rgba(11,110,253,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                    <QrCode style={{ width: '24px', height: '24px', color: '#5B9FFF' }} />
                  </div>
                  <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#fff', margin: '0 0 4px' }}>Enter Your Code</h3>
                  <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', margin: 0 }}>Type your booking code below</p>
                </div>

                <input
                  placeholder="QR-XXXXX-XXX"
                  value={manualCode}
                  onChange={e => setManualCode(e.target.value)}
                  style={{
                    width: '100%', height: '50px', borderRadius: '12px',
                    background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)',
                    color: '#fff', paddingLeft: '14px', fontSize: '15px', fontWeight: 600,
                    letterSpacing: '0.05em', fontFamily: 'inherit', outline: 'none', boxSizing: 'border-box',
                    marginBottom: '12px',
                  }}
                />

                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={() => setManualEntry(false)} style={{ flex: 1, height: '46px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.15)', background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.7)', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit' }}>
                    Back
                  </button>
                  <button onClick={handleManualSubmit} style={{ flex: 1, height: '46px', borderRadius: '12px', background: '#0B6EFD', border: 'none', color: '#fff', fontSize: '14px', fontWeight: 700, cursor: 'pointer', fontFamily: 'inherit' }}>
                    Verify
                  </button>
                </div>
              </div>
            )}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            style={{ width: '100%', maxWidth: '360px', textAlign: 'center' }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.6 }}
              style={{ width: '88px', height: '88px', borderRadius: '50%', background: '#00C48C', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', boxShadow: '0 0 0 16px rgba(0,196,140,0.12)' }}
            >
              <CheckCircle2 style={{ width: '44px', height: '44px', color: '#fff' }} />
            </motion.div>

            <h2 style={{ fontSize: '22px', fontWeight: 800, color: '#fff', margin: '0 0 6px' }}>Entry Confirmed!</h2>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.55)', margin: '0 0 28px' }}>Welcome to the parking lot</p>

            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '20px', marginBottom: '20px', textAlign: 'left', border: '1px solid rgba(255,255,255,0.1)' }}>
              <h3 style={{ fontSize: '12px', fontWeight: 700, color: 'rgba(255,255,255,0.4)', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 14px' }}>Next Steps</h3>
              {steps.map((step, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', marginBottom: i < steps.length - 1 ? '12px' : 0 }}>
                  <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#0B6EFD', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontSize: '11px', fontWeight: 700, color: '#fff' }}>{i + 1}</div>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.6 }}>{step}</span>
                </div>
              ))}
            </div>

            <button
              onClick={onBack}
              style={{
                width: '100%', height: '50px', borderRadius: '14px',
                background: '#fff', color: '#0F1724', fontSize: '15px', fontWeight: 700,
                border: 'none', cursor: 'pointer', fontFamily: 'inherit',
              }}
            >
              Back to Home
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}