import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Activity, Mail, CheckCircle2 } from 'lucide-react';
import { Button } from '@/src/components/ui/Button';
import { Input } from '@/src/components/ui/Input';
import { Card } from '@/src/components/ui/Card';

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleNextStep = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setStep(step + 1);
    }, 800);
  };

  const handleComplete = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      navigate('/login');
    }, 800);
  };

  return (
    <div className="min-h-screen w-full flex bg-base text-text-primary selection:bg-primary/30 items-center justify-center p-8 relative overflow-hidden">
       {/* Background ambient visuals */}
       <div className="absolute inset-0 z-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }} />
       <motion.div animate={{ opacity: [0.1, 0.15, 0.1] }} transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }} className="absolute -left-32 -top-32 text-primary blur-3xl z-0 pointer-events-none w-96 h-96 rounded-full bg-primary" />
       
       <div className="fixed top-8 left-8 flex flex-row items-center gap-2 cursor-pointer z-10 hover:opacity-80 transition-opacity" onClick={() => navigate('/login')}>
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shadow-glow">
            <Activity className="w-5 h-5 text-white" />
          </div>
          <span className="font-heading font-bold text-xl hidden sm:block">TSB</span>
       </div>

       <motion.div
          key={`step-` + step}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="w-full max-w-[400px] z-10 relative"
       >
          <Card className="p-8 border-border-default shadow-lg bg-surface">
             <div className="flex justify-center mb-6">
                <div className="flex gap-2">
                  <div className={`h-1.5 w-8 rounded-full ${step >= 1 ? 'bg-primary' : 'bg-overlay'}`} />
                  <div className={`h-1.5 w-8 rounded-full ${step >= 2 ? 'bg-primary' : 'bg-overlay'}`} />
                  <div className={`h-1.5 w-8 rounded-full ${step >= 3 ? 'bg-primary' : 'bg-overlay'}`} />
                </div>
             </div>

             {step === 1 && (
                <form onSubmit={handleNextStep}>
                   <div className="text-center mb-8">
                     <h2 className="text-2xl font-bold font-heading mb-2">Lupa Password?</h2>
                     <p className="text-sm text-text-secondary">Masukkan alamat email Anda untuk menerima tautan reset password.</p>
                   </div>
                   <div className="space-y-4">
                     <Input 
                       label="Alamat Email" 
                       type="email" 
                       placeholder="admin@ispdomain.com"
                       required
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                     />
                     <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                       {isLoading ? 'Mengirim...' : 'Kirim Tautan Reset'}
                     </Button>
                   </div>
                </form>
             )}

             {step === 2 && (
                <div className="text-center py-4">
                   <div className="w-16 h-16 bg-success-dim rounded-full flex items-center justify-center mx-auto mb-6">
                      <Mail className="w-8 h-8 text-success" />
                   </div>
                   <h2 className="text-xl font-bold font-heading mb-2">Cek Email Anda</h2>
                   <p className="text-sm text-text-secondary mb-8">Kami telah mengirimkan instruksi untuk reset password ke <strong>{email || 'email Anda'}</strong>. Tautan akan kadaluarsa dalam 1 jam.</p>
                   <Button variant="secondary" onClick={() => setStep(3)} className="w-full" size="md">
                      Simulasikan Klik Tautan (Demo)
                   </Button>
                </div>
             )}

             {step === 3 && (
                <form onSubmit={handleComplete}>
                   <div className="text-center mb-8">
                     <h2 className="text-2xl font-bold font-heading mb-2">Password Baru</h2>
                     <p className="text-sm text-text-secondary">Masukkan password baru untuk akun Anda.</p>
                   </div>
                   <div className="space-y-4">
                     <Input 
                       label="Password Baru" 
                       type="password" 
                       placeholder="Minimal 8 karakter"
                       required
                       value={password}
                       onChange={(e) => setPassword(e.target.value)}
                     />
                     <Button type="submit" size="lg" className="w-full" disabled={isLoading}>
                       {isLoading ? 'Menyimpan...' : 'Simpan & Masuk'}
                     </Button>
                   </div>
                </form>
             )}

             {step === 1 && (
               <div className="mt-8 text-center">
                 <button onClick={() => navigate('/login')} className="text-sm text-text-secondary hover:text-text-primary transition-colors">
                    ← Kembali ke halaman Masuk
                 </button>
               </div>
             )}
          </Card>
       </motion.div>
    </div>
  )
}
