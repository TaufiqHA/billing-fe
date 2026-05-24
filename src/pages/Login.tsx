import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Activity, Shield, Zap } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import { Card } from '@/src/components/ui/Card';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsError(false);
    setTimeout(() => {
      // Dummy logic for demonstration
      if (email === 'admin@ispdomain.com' && password === 'password') {
        navigate('/dashboard');
      } else {
        setIsError(true);
        setIsLoading(false);
      }
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex bg-base text-text-primary selection:bg-primary/30">
      <div className="hidden lg:flex lg:w-1/2 relative overflow-hidden bg-gradient-to-br from-base to-elevated flex-col justify-center p-16 border-r border-border-default">
        {/* Animated backdrop grid */}
        <div className="absolute inset-0 z-0 opacity-20" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)', backgroundSize: '32px 32px' }} />
        
        {/* Soft abstract brand glow */}
        <motion.div animate={{ y: [0, -10, 0] }} transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }} className="absolute -right-20 -top-20 text-primary-glow blur-3xl z-0 pointer-events-none">
          <Activity className="w-96 h-96" />
        </motion.div>
        
        <div className="relative z-10 max-w-lg">
          <div className="flex items-center gap-3 mb-8 text-white">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center shadow-glow">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-3xl font-heading font-bold tracking-tight">TS SMART BILLING</h1>
          </div>
          <p className="text-xl text-text-secondary mb-12">Platform manajemen ISP FTTH & RT/RW Net Enterprise dengan operasi terpadu dan otomatisasi cerdas.</p>
          
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-md bg-info-dim text-info mt-1"><Zap className="w-5 h-5" /></div>
              <div className="text-left">
                <h3 className="font-semibold text-lg text-text-primary">Otomatisasi Penuh</h3>
                <p className="text-text-secondary text-sm">Billing, isolir otomatis, dan reminder WhatsApp terintegrasi dalam satu alur kerja yang efisien.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="p-2 rounded-md bg-success-dim text-success mt-1"><Shield className="w-5 h-5" /></div>
              <div className="text-left">
                <h3 className="font-semibold text-lg text-text-primary">Keandalan Enterprise</h3>
                <p className="text-text-secondary text-sm">Monitoring MikroTik dan OLT real-time dengan alert preventif sebelum pelanggan mengeluh.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center p-8 relative">
        <div className="absolute top-8 left-8 lg:hidden flex flex-row items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-bold text-xl">TSB</span>
        </div>

        <motion.div
          animate={isError ? { x: [-10, 10, -10, 10, 0] } : {}}
          transition={{ duration: 0.4 }}
          className="w-full max-w-[400px]"
        >
          <Card glass className="p-8">
            <div className="mb-8 text-center text-white">
              <h2 className="text-2xl font-bold font-heading mb-2">Masuk ke TSB</h2>
              <p className="text-sm text-text-secondary">Platform ISP Management Enterprise</p>
            </div>

            {isError && (
              <div className="mb-6 p-3 rounded-md bg-danger-dim border border-danger text-danger text-sm flex items-center gap-2 font-medium">
                Kredensial tidak valid. Silakan coba lagi.
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <Input
                label="Username atau Email"
                type="text"
                placeholder="admin@ispdomain.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <Input
                label="Password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              
              <div className="flex items-center justify-between mt-2">
                <label className="flex items-center gap-2 text-sm text-text-secondary cursor-pointer hover:text-text-primary transition-colors">
                  <input type="checkbox" className="rounded border-border-default bg-surface focus:ring-primary accent-primary" />
                  Ingat saya
                </label>
                <button type="button" onClick={() => navigate('/forgot-password')} className="text-sm text-primary hover:text-primary-hover transition-colors">
                  Lupa password?
                </button>
              </div>

              <Button type="submit" size="lg" className="w-full mt-6" disabled={isLoading}>
                {isLoading ? 'Mengautentikasi...' : 'Masuk'}
              </Button>
            </form>
            
            <div className="mt-8 text-center text-xs text-text-muted">
              Demo: admin@ispdomain.com / password
            </div>
          </Card>
          
          <div className="mt-8 text-center">
            <p className="text-xs text-text-muted">© 2026 TS Smart Billing. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
