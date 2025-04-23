import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,255,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,165,0,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_80%,rgba(255,0,0,0.1),transparent_50%)]"></div>
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-orange-400 to-red-500 leading-tight">
              Tome decisões mais inteligentes com IA para seu supermercado
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl">
              A MarketIA se conecta ao seu banco de dados e transforma informações em ações para melhorar seus resultados.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#demo"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 rounded-lg hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-green-600 to-emerald-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Solicitar demonstração gratuita</span>
              </Link>
              <Link
                href="#como-funciona"
                className="group relative inline-flex items-center justify-center px-8 py-4 overflow-hidden font-medium text-white transition-all duration-300 rounded-lg border border-gray-700 hover:scale-105"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-900"></span>
                <span className="absolute inset-0 bg-gradient-to-r from-gray-700 to-gray-800 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                <span className="relative">Saiba como funciona</span>
              </Link>
            </div>
          </div>
          <div className="flex-1">
            <div className="relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 aspect-square max-w-xl mx-auto border border-gray-700/50 shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 via-orange-500/10 to-red-500/10 rounded-xl"></div>
              <div className="grid grid-cols-2 gap-4 h-full relative">
                <div className="bg-gray-700/50 rounded-lg p-4 shadow-lg backdrop-blur-sm border border-gray-600/50">
                  <div className="h-32 bg-gradient-to-br from-green-500/20 to-emerald-600/20 rounded-lg mb-2"></div>
                  <div className="h-4 bg-gray-600/50 rounded w-3/4"></div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4 shadow-lg backdrop-blur-sm border border-gray-600/50">
                  <div className="h-32 bg-gradient-to-br from-orange-500/20 to-amber-600/20 rounded-lg mb-2"></div>
                  <div className="h-4 bg-gray-600/50 rounded w-3/4"></div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4 shadow-lg backdrop-blur-sm border border-gray-600/50">
                  <div className="h-32 bg-gradient-to-br from-red-500/20 to-pink-600/20 rounded-lg mb-2"></div>
                  <div className="h-4 bg-gray-600/50 rounded w-3/4"></div>
                </div>
                <div className="bg-gray-700/50 rounded-lg p-4 shadow-lg backdrop-blur-sm border border-gray-600/50">
                  <div className="h-32 bg-gradient-to-br from-blue-500/20 to-indigo-600/20 rounded-lg mb-2"></div>
                  <div className="h-4 bg-gray-600/50 rounded w-3/4"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 