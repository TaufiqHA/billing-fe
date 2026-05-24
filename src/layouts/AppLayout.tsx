import React, { useState, ReactNode, useEffect } from 'react';
import { NavLink, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { 
  Activity, 
  LayoutDashboard, 
  Users, 
  CreditCard,
  Wifi,
  Package,
  Map as MapIcon,
  Wrench,
  BarChart,
  Settings,
  Bell,
  Search,
  ChevronLeft,
  ChevronRight,
  LogOut,
  Ticket,
  Receipt,
  PieChart,
  Box,
  ArrowLeftRight,
  MapPin,
  MessageCircle,
  Menu,
  X
} from 'lucide-react';
import { cn } from '@/src/lib/utils';

interface NavItemProps {
  to: string;
  icon: React.ElementType;
  label: string;
  isCollapsed: boolean;
  end?: boolean;
  onClick?: () => void;
}

function NavItem({ to, icon: Icon, label, isCollapsed, end, onClick }: NavItemProps) {
  return (
    <NavLink
      to={to}
      end={end}
      onClick={onClick}
      className={({ isActive }) => cn(
        "flex items-center gap-3 px-3 py-2.5 mx-2 rounded-md transition-colors text-sm text-text-primary group",
        isActive 
          ? "bg-primary-glow text-primary border-l-2 border-primary" 
          : "hover:bg-overlay text-text-secondary hover:text-text-primary border-l-2 border-transparent"
      )}
      title={isCollapsed ? label : undefined}
    >
      <Icon className="w-[18px] h-[18px] flex-shrink-0" />
      {!isCollapsed && <span className="truncate">{label}</span>}
    </NavLink>
  );
}

function NavGroup({ label, isCollapsed, children }: { label: string, isCollapsed: boolean, children: ReactNode }) {
  return (
    <div className="mb-4">
      {!isCollapsed && (
        <div className="px-5 py-2 text-xs font-semibold uppercase tracking-wider text-text-muted">
          {label}
        </div>
      )}
      {isCollapsed && <div className="h-6" />}
      <div className="space-y-0.5">
        {children}
      </div>
    </div>
  );
}

// TOPBAR COMPONENT
function Topbar({ 
  isSidebarCollapsed, 
  onMenuClick 
}: { 
  isSidebarCollapsed: boolean; 
  onMenuClick: () => void; 
}) {
  return (
    <div className={cn(
      "h-14 fixed top-0 right-0 z-40 bg-surface border-b border-border-default px-4 lg:px-6 flex items-center justify-between shadow-sm transition-all duration-300",
      "left-0 lg:left-60",
      isSidebarCollapsed && "lg:left-16"
    )}>
       <div className="flex-1 flex items-center gap-4">
          <button 
            className="lg:hidden p-2 -ml-2 text-text-secondary hover:text-text-primary"
            onClick={onMenuClick}
          >
             <Menu className="w-5 h-5" />
          </button>
          <div className="relative w-full max-w-xs hidden md:block">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-text-muted" />
            <input 
              type="text" 
              placeholder="Cari global..." 
              className="w-full bg-base border border-border-default rounded-md h-8 pl-9 pr-3 text-sm focus:outline-none focus:ring-1 focus:ring-primary text-text-primary placeholder:text-text-muted"
            />
          </div>
       </div>
       <div className="flex items-center gap-3 lg:gap-5">
         <button className="relative text-text-secondary hover:text-text-primary p-2">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-danger rounded-full border-2 border-surface animate-pulse" />
         </button>
         <div className="h-5 w-px bg-border-default hidden sm:block" />
         <div className="flex items-center gap-2 cursor-pointer">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-sm font-semibold text-white shadow-sm shrink-0">
               S
            </div>
            <div className="hidden sm:block">
              <div className="text-sm font-medium text-text-primary leading-tight">Sari Admin</div>
              <div className="text-xs text-text-muted leading-tight">Super Admin</div>
            </div>
         </div>
       </div>
    </div>
  );
}

// SIDEBAR COMPONENT
function Sidebar({ 
  isCollapsed, 
  onToggle, 
  isMobileOpen,
  onMobileClose
}: { 
  isCollapsed: boolean; 
  onToggle: () => void;
  isMobileOpen: boolean;
  onMobileClose: () => void;
}) {
  const navigate = useNavigate();

  return (
    <>
      {/* Mobile Backdrop */}
      {isMobileOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
          onClick={onMobileClose}
        />
      )}

      <aside 
        className={cn(
          "fixed top-0 left-0 h-full bg-base border-r border-border-default z-50 flex flex-col transition-transform duration-300 ease-in-out lg:translate-x-0",
          !isCollapsed ? "w-60" : "w-16",
          !isMobileOpen ? "-translate-x-full lg:translate-x-0" : "translate-x-0 w-64 lg:w-60",
          isMobileOpen && isCollapsed && "w-64" // Reset width if open on mobile
        )}
      >
        <div className="h-14 px-4 flex items-center justify-between border-b border-border-default shrink-0">
          <div className="flex items-center gap-3 overflow-hidden">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center shrink-0 shadow-glow">
              <Activity className="w-5 h-5 text-white" />
            </div>
            {(!isCollapsed || isMobileOpen) && <span className="font-heading font-bold text-lg text-text-primary truncate">TSB</span>}
          </div>
          <button 
            className="lg:hidden p-1 text-text-secondary hover:text-text-primary"
            onClick={onMobileClose}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto py-4 scrollbar-thin scrollbar-thumb-border-default">
          <NavGroup label="Overview" isCollapsed={isCollapsed && !isMobileOpen}>
            <NavItem to="/dashboard" icon={LayoutDashboard} label="Dashboard" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/live-monitor" icon={Activity} label="Live Monitor" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
          </NavGroup>
          
          <NavGroup label="Pelanggan" isCollapsed={isCollapsed && !isMobileOpen}>
            <NavItem to="/pelanggan" end icon={Users} label="Data Pelanggan" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/tiket" icon={Ticket} label="Ticketing" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
          </NavGroup>

          <NavGroup label="Billing" isCollapsed={isCollapsed && !isMobileOpen}>
            <NavItem to="/billing" end icon={Receipt} label="Invoice Management" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/billing/pembayaran/catat" icon={CreditCard} label="Pembayaran" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/billing/laporan" icon={PieChart} label="Laporan Keuangan" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/billing/paket" icon={Box} label="Paket Layanan" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
          </NavGroup>

          <NavGroup label="Jaringan" isCollapsed={isCollapsed && !isMobileOpen}>
            <NavItem to="/jaringan" end icon={Wifi} label="MikroTik Manager" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/jaringan/olt" icon={Activity} label="OLT Monitor" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/jaringan/bandwidth" icon={BarChart} label="Bandwidth Monitor" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
          </NavGroup>

          <NavGroup label="Inventaris" isCollapsed={isCollapsed && !isMobileOpen}>
            <NavItem to="/inventaris/stok" icon={Package} label="Stok Perangkat" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/inventaris/mutasi" icon={ArrowLeftRight} label="Mutasi Barang" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
          </NavGroup>

          <NavGroup label="GIS & Map" isCollapsed={isCollapsed && !isMobileOpen}>
            <NavItem to="/gis/fiber" icon={MapIcon} label="Fiber Map" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/gis/teknisi" icon={MapPin} label="Tracking Teknisi" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
          </NavGroup>

          <NavGroup label="Teknisi" isCollapsed={isCollapsed && !isMobileOpen}>
            <NavItem to="/teknisi" icon={Wrench} label="Dispatch Tiket" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
          </NavGroup>

          <NavGroup label="Laporan" isCollapsed={isCollapsed && !isMobileOpen}>
            <NavItem to="/laporan" icon={BarChart} label="Analytics" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
          </NavGroup>

          <NavGroup label="Pengaturan" isCollapsed={isCollapsed && !isMobileOpen}>
            <NavItem to="/pengaturan/umum" icon={Settings} label="Profil & Billing" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/pengaturan/users" icon={Users} label="User & Role" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/pengaturan/whatsapp" icon={MessageCircle} label="WhatsApp Gateway" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
            <NavItem to="/pengaturan/automasi" icon={Settings} label="Automasi" isCollapsed={isCollapsed && !isMobileOpen} onClick={onMobileClose} />
          </NavGroup>
        </div>

        <div className="p-3 border-t border-border-default shrink-0 flex flex-col gap-2">
          <button 
            onClick={onToggle}
            className="hidden lg:flex items-center justify-center w-full h-8 rounded border border-border-default bg-surface hover:bg-overlay text-text-secondary hover:text-text-primary transition-colors"
          >
            {isCollapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
          </button>
          <button onClick={() => navigate('/login')} className="flex items-center gap-3 px-3 py-2 rounded-md hover:bg-danger-dim text-text-secondary hover:text-danger transition-colors mt-1 group">
             <LogOut className="w-[18px] h-[18px] flex-shrink-0" />
             {(!isCollapsed || isMobileOpen) && <span className="text-sm font-medium">Keluar</span>}
          </button>
        </div>
      </aside>
    </>
  );
}

// MAIN LAYOUT
export default function AppLayout() {
  const [isSidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [isMobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  // Close mobile sidebar on route change
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-base flex flex-col lg:flex-row">
      <Sidebar 
        isCollapsed={isSidebarCollapsed} 
        onToggle={() => setSidebarCollapsed(!isSidebarCollapsed)} 
        isMobileOpen={isMobileOpen}
        onMobileClose={() => setMobileOpen(false)}
      />
      
      <div className={cn(
        "flex-1 flex flex-col transition-all duration-300 lg:ml-60",
        isSidebarCollapsed && "lg:ml-16"
      )}>
        <Topbar 
          isSidebarCollapsed={isSidebarCollapsed}
          onMenuClick={() => setMobileOpen(true)}
        />
        <main className="flex-1 mt-14 p-4 lg:p-6 overflow-x-hidden max-w-[1440px] w-full mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
