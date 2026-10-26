import Link from 'next/link';
import Image from 'next/image';
import { Facebook } from 'lucide-react';
import { footerLinks } from '@/lib/data';

export default function Footer() {
  return (
    <footer className="bg-[linear-gradient(180deg,#0b2e1a_0%,#102f1f_60%,#0b2e1a_100%)] text-white">
      <div className="page-shell py-9 md:py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-7">
          <div>
            <Image
              src="https://res.cloudinary.com/dz3hsef7i/image/upload/v1777971055/logo-crs_wiozxq.png"
              alt="CRS Logo"
              width={270}
              height={60}
              className="w-[150px] sm:w-[170px] h-auto mb-3"
              unoptimized
            />
            <p className="text-[11px] uppercase tracking-wide text-crs-sand font-bold mb-2">Official CRS Portal</p>
            <h3 className="font-bold text-lg mb-2 text-white">Directorate General</h3>
            <p className="text-sm text-gray-100/95 leading-7">
              Crop Reporting Services
              <br />
              Agriculture and Cooperatives Department Balochistan
              <br />
              Government of Balochistan
            </p>
            <p className="text-sm text-gray-200 mt-3 leading-7">
              Official platform for district-level crop intelligence, agricultural statistics, and policy support.
            </p>
            <div className="flex flex-wrap items-center gap-2.5 mt-4">
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#1877F2] text-white hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                aria-label="X"
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-black text-white hover:brightness-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold transition-colors font-bold text-base"
              >
                X
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">{footerLinks.services.title}<span className="inline-block w-1.5 h-1.5 bg-crs-gold rounded-full"></span></h4>
            <ul className="space-y-2">
              {footerLinks.services.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-100/95 hover:text-crs-gold transition-colors text-sm leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold/70 rounded-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">{footerLinks.information.title}<span className="inline-block w-1.5 h-1.5 bg-crs-gold rounded-full"></span></h4>
            <ul className="space-y-2">
              {footerLinks.information.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-100/95 hover:text-crs-gold transition-colors text-sm leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold/70 rounded-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4 flex items-center gap-2 text-white">{footerLinks.resources.title}<span className="inline-block w-1.5 h-1.5 bg-crs-gold rounded-full"></span></h4>
            <ul className="space-y-2">
              {footerLinks.resources.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-gray-100/95 hover:text-crs-gold transition-colors text-sm leading-6 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold/70 rounded-sm">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-white/25 pt-5 text-center text-sm text-gray-200">
          <p className="mb-2">
            &copy; {new Date().getFullYear()} Directorate General of Crop Reporting Services. All rights reserved.
          </p>
          <p className="text-xs text-gray-300 mb-2">Government of Balochistan, Agriculture and Cooperatives Department Balochistan</p>
          <p className="text-xs text-gray-300">
            Designed and developed by{' '}
            <a
              href="https://www.dayyantech.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-crs-sand hover:text-crs-gold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-crs-gold rounded-sm"
            >
              Dayyan Tech
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
