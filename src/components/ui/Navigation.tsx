'use client';

import Link from 'next/link';

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 flex items-center justify-center text-white shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500">
              MarketIA
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link href="#problema" className="text-gray-300 hover:text-white transition-colors">
              Problema
            </Link>
            <Link href="#como-funciona" className="text-gray-300 hover:text-white transition-colors">
              Solução
            </Link>
            <Link href="#recursos" className="text-gray-300 hover:text-white transition-colors">
              Recursos
            </Link>
            <Link href="#precos" className="text-gray-300 hover:text-white transition-colors">
              Preços
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <Link
              href="#contato"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-green-500 to-emerald-600 text-white font-medium hover:shadow-lg hover:shadow-green-500/20 transition-all"
            >
              Contato
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
} 