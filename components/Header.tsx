'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { navItems } from '@/lib/data';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const mobileNavId = 'mobile-navigation';

  return (
    <header className="sticky top-0 z-[1000] border-b border-[#e9dec9] bg-[#fffaf0]/92 backdrop-blur-xl shadow-[0_8px_22px_rgba(60,45,24,0.12)] supports-[backdrop-filter]:bg-[#fffaf0]/82">
      <div className="page-shell py-3">
        <div className="flex items-center gap-4 xl:gap-6">
          <Link href="/" className="flex items-center rounded-lg px-2 py-1 hover:bg-[#f5e6c8]/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-primary/40">
            <Image
              src="https://res.cloudinary.com/dz3hsef7i/image/upload/v1777971055/logo-crs_wiozxq.png"
              alt="CRS Logo"
              width={270}
              height={60}
              className="w-[195px] sm:w-[225px] lg:w-[270px] h-auto"
              unoptimized
            />
          </Link>

          <nav className="hidden lg:flex items-center gap-1.5 xl:gap-2 ml-1 flex-1 justify-end">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={`relative text-[13px] xl:text-sm font-semibold tracking-[0.01em] transition-all whitespace-nowrap px-4 py-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-primary/30 ${
                  pathname === item.href
                    ? 'text-[#0B2E1A] bg-crs-gold shadow-[0_8px_18px_rgba(217,130,25,0.28)]'
                    : 'text-[#0B2E1A] hover:text-[#0B2E1A] hover:bg-[#e79a36] hover:shadow-[0_8px_18px_rgba(217,130,25,0.22)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <button
            type="button"
            className="lg:hidden ml-auto shrink-0 p-2 rounded-md text-[#0B2E1A] hover:bg-[#f5e6c8]/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-primary/30 relative z-[60] pointer-events-auto touch-manipulation"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileMenuOpen}
            aria-controls={mobileNavId}
            aria-haspopup="menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {mobileMenuOpen && (
          <nav
            id={mobileNavId}
            className="lg:hidden mt-4 pb-4 border-t border-[#e9dec9] pt-4 grid grid-cols-1 gap-2 relative z-[1001]"
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={pathname === item.href ? 'page' : undefined}
                className={`font-medium transition-colors py-2.5 px-3 rounded-xl border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-primary/30 ${
                  pathname === item.href
                    ? 'text-[#0B2E1A] bg-crs-gold border-[#e79a36]'
                    : 'text-[#0B2E1A] bg-white border-gray-200 hover:text-[#0B2E1A] hover:bg-crs-gold hover:border-[#e79a36]'
                }`}
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
