import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, PhoneCall, ShieldCheck, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Início', path: '/' },
    { name: 'Serviços', path: '/servicos' },
    { name: 'Academia', path: '/academia' },
    { name: 'Certificados', path: '/certificados' },
  ];

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <header className="bg-white/90 backdrop-blur-md sticky top-0 z-50 border-b border-sky-100 shadow-sm shadow-sky-900/5 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" onClick={closeMobileMenu} className="flex items-center group">
          <img
            src="/images/logo-simon.jpg"
            alt="Logo Simon Climatização"
            className="h-12 sm:h-14 w-auto mix-blend-multiply transition-transform duration-200 group-hover:scale-102"
          />
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação Principal">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold tracking-wider uppercase transition-colors duration-200 relative py-1 ${
                isActive(link.path)
                  ? 'text-sky-600'
                  : 'text-slate-600 hover:text-sky-500'
              }`}
            >
              {link.name}
              {isActive(link.path) && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-sky-500 rounded-full"
                  transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                />
              )}
            </Link>
          ))}

          <Link
            to="/contato"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-600 hover:to-blue-700 text-white font-bold px-5 py-2.5 rounded-xl transition-all duration-200 text-sm shadow-md shadow-sky-500/25 hover:shadow-lg hover:shadow-sky-500/35 hover:-translate-y-0.5 active:translate-y-0"
          >
            <ShieldCheck className="w-4 h-4" aria-hidden="true" />
            Contato
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <div className="flex items-center gap-3 md:hidden">
          <Link
            to="/contato"
            onClick={closeMobileMenu}
            className="inline-flex items-center gap-1 bg-sky-500 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm"
          >
            Contato
          </Link>

          <button
            type="button"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
            className="p-2 rounded-xl text-slate-700 hover:bg-sky-50 hover:text-sky-600 transition-colors focus:outline-none focus:ring-2 focus:ring-sky-400"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" aria-hidden="true" />
            ) : (
              <Menu className="w-6 h-6" aria-hidden="true" />
            )}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="md:hidden border-t border-sky-100 bg-white/98 backdrop-blur-xl px-6 py-6 shadow-xl"
          >
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={closeMobileMenu}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl font-bold text-base transition-colors ${
                    isActive(link.path)
                      ? 'bg-sky-50 text-sky-600 border border-sky-200'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-4 h-4 text-slate-400" aria-hidden="true" />
                </Link>
              ))}

              <div className="pt-4 mt-2 border-t border-slate-100 flex flex-col gap-3">
                <Link
                  to="/contato"
                  onClick={closeMobileMenu}
                  className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-sky-500 to-blue-600 text-white font-bold py-3.5 rounded-xl text-center shadow-lg shadow-sky-500/25"
                >
                  <PhoneCall className="w-4 h-4" aria-hidden="true" />
                  Solicitar Diagnóstico Técnico
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
