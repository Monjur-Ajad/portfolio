import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { HiHome, HiUser, HiCode, HiCube, HiBriefcase, HiFolderOpen, HiMail, HiBadgeCheck } from 'react-icons/hi';
import { FaLinkedin, FaGithub, FaTwitter } from 'react-icons/fa';
import { CONTACTS, SOCIAL_LINKS } from '../constants/constants';
import Link from 'next/link';

export default function Layout({ children, title, description, canonical }) {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);

  const defaultTitle = "Monjur Ajad | Tech Expert, FinTech Architect & Senior Developer";
  const defaultDescription = "Portfolio of Monjurul Islam Ajad - Senior Software Engineer, Team Lead, and FinTech Expert specializing in Laravel, Next.js, POS, and Inventory systems.";
  const baseUrl = "https://monjurajad.com";
  const currentUrl = canonical || `${baseUrl}${router.pathname}`;

  const keywords = "tech expert, engineer, developer, ecommerce developer, team lead, fintech expert, fintech, pos, inventory, monjur, ajad, monjurul islam, monjurul islam ajad";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Track Site Visits
  useEffect(() => {
    const trackVisit = async () => {
      try {
        const pageName = title || router.pathname.replace('/', '') || 'Home';
        await fetch(`https://monjurajad.com/backend/api/views.php?page=${encodeURIComponent(pageName)}`);
      } catch (error) {
        console.error('Tracking failed:', error);
      }
    };
    trackVisit();
  }, [router.pathname]);

  const navItems = [
    { name: 'Home', href: '/', icon: <HiHome /> },
    { name: 'About', href: '/about', icon: <HiUser /> },
    { name: 'Contributor', href: '/contributor', icon: <HiCode /> },
    { name: 'Packages', href: '/packages', icon: <HiCube /> },
    { name: 'Experience', href: '/experience', icon: <HiBriefcase /> },
    { name: 'Projects', href: '/projects', icon: <HiFolderOpen /> },
    { name: 'Certificates', href: '/certificates', icon: <HiBadgeCheck /> },
    { name: 'Contact', href: '/contact', icon: <HiMail /> },
  ];

  return (
    <div className="min-h-screen bg-[#020617] text-white selection:bg-emerald-500 selection:text-black">
      <Head>
        <title>{title ? `${title} | Monjur Ajad` : defaultTitle}</title>
        <meta name="description" content={description || defaultDescription} />
        <meta name="keywords" content={keywords} />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph */}
        <meta property="og:title" content={title ? `${title} | Monjur Ajad` : defaultTitle} />
        <meta property="og:description" content={description || defaultDescription} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:type" content="website" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title ? `${title} | Monjur Ajad` : defaultTitle} />
        <meta name="twitter:description" content={description || defaultDescription} />
      </Head>

      {/* Navbar */}
      <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-[#0b1120]/80 backdrop-blur-lg border-b border-white/5 py-3' : 'bg-[#0b1120] py-4'}`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between">
            {/* Nav Items */}
            <div className="flex items-center gap-1 md:gap-3 overflow-x-auto no-scrollbar py-1">
              {navItems.map((item) => {
                const isActive = router.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-xl transition-all duration-300 group
                      ${isActive ? 'text-emerald-400 bg-white/5 shadow-[0_0_20px_rgba(16,185,129,0.1)]' : 'text-gray-400 hover:text-white hover:bg-white/5'}`}
                  >
                    <span className={`text-lg transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5 ${isActive ? 'scale-110' : ''}`}>
                      {item.icon}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] hidden md:block">
                      {item.name}
                    </span>

                    {/* Active Indicator Dot */}
                    {isActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-emerald-400 rounded-full shadow-[0_0_8px_rgba(16,185,129,0.8)] animate-pulse"></span>
                    )}

                    {/* Hover Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/0 via-emerald-500/5 to-emerald-500/0 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
                  </Link>
                );
              })}
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2 ml-4">
              <a href={SOCIAL_LINKS.LINKEDIN} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-emerald-500/10 transition-all duration-300 border border-white/10 hover:border-emerald-500/30 group">
                <FaLinkedin className="text-lg group-hover:scale-110 transition-transform" />
              </a>
              <a href={SOCIAL_LINKS.GITHUB} target="_blank" rel="noreferrer" className="w-10 h-10 flex items-center justify-center bg-white/5 rounded-xl text-gray-400 hover:text-white hover:bg-emerald-500/10 transition-all duration-300 border border-white/10 hover:border-emerald-500/30 group">
                <FaGithub className="text-lg group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        {children}
      </main>

      {/* Informative Footer */}
      <footer className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
            {/* Branding Column */}
            <div className="md:col-span-1">
              <div className="text-2xl font-black tracking-tighter text-slate-900 mb-4 italic">MONJUR.</div>
              <p className="text-slate-500 text-xs font-bold leading-relaxed mb-6">
                Specializing in FinTech architecture and high-performance system engineering. Building the future of digital finance.
              </p>
              <div className="flex gap-4">
                {Object.entries(SOCIAL_LINKS).slice(0, 3).map(([key, url]) => (
                  <a key={key} href={url} target="_blank" rel="noreferrer" className="w-8 h-8 rounded-lg bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-indigo-600 hover:text-white transition-all">
                    {key === 'LINKEDIN' ? <FaLinkedin /> : key === 'GITHUB' ? <FaGithub /> : <FaTwitter />}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-6">Navigation</h4>
              <ul className="space-y-4">
                {['About', 'Projects', 'Experience', 'Certificates', 'Contact'].map((link) => (
                  <li key={link}>
                    <Link href={`/${link.toLowerCase()}`} className="text-slate-500 hover:text-indigo-600 font-bold text-xs transition-colors">{link}</Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-6">Contact</h4>
              <ul className="space-y-4">
                <li>
                  <a href={`mailto:${CONTACTS.EMAIL}`} className="text-slate-500 hover:text-indigo-600 font-bold text-xs transition-colors block truncate">{CONTACTS.EMAIL}</a>
                </li>
                <li>
                  <a href={`tel:${CONTACTS.PHONE}`} className="text-slate-500 hover:text-indigo-600 font-bold text-xs transition-colors">{CONTACTS.PHONE}</a>
                </li>
                <li className="text-slate-400 text-[10px] font-bold">Dhaka, Bangladesh</li>
              </ul>
            </div>

            {/* Availability */}
            <div>
              <h4 className="text-[10px] font-black uppercase tracking-widest text-indigo-600 mb-6">Status</h4>
              <div className="p-6 bg-white border border-slate-200 rounded-3xl">
                <div className="flex items-center gap-3 mb-4">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                  </span>
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-900">Available</span>
                </div>
                <p className="text-[10px] text-slate-400 font-bold leading-relaxed">Currently open for architecture consultation and leadership roles.</p>
              </div>
            </div>
          </div>

          <div className="pt-12 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div className="text-slate-400 text-[9px] font-black uppercase tracking-[0.3em]">
              © 2026 MONJURUL ISLAM AJAD. ALL RIGHTS RESERVED.
            </div>
            <div className="text-slate-300 text-[8px] font-black uppercase tracking-widest italic">
              Built with Precision & Engineering Excellence.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}



