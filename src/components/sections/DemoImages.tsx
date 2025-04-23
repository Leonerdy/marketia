import Image from 'next/image';

const demoImages = [
  {
    title: "Dashboard de Vendas",
    description: "Visualize o desempenho das suas vendas em tempo real",
    image: "/images/dashboard-sales.png",
    alt: "Dashboard de vendas da MarketIA",
    gradient: "from-green-500 to-emerald-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
      </svg>
    )
  },
  {
    title: "Análise de Estoque",
    description: "Controle seu estoque com previsões inteligentes",
    image: "/images/dashboard-inventory.png",
    alt: "Dashboard de estoque da MarketIA",
    gradient: "from-orange-500 to-amber-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    )
  },
  {
    title: "Relatórios Personalizados",
    description: "Acesse insights valiosos para sua gestão",
    image: "/images/dashboard-reports.png",
    alt: "Dashboard de relatórios da MarketIA",
    gradient: "from-red-500 to-pink-600",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    )
  }
];

export function DemoImages() {
  return (
    <section className="py-16 bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-6">
            Conheça nossa plataforma
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Interface intuitiva e poderosa para transformar seus dados em decisões
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {demoImages.map((image, index) => (
            <div
              key={index}
              className="group relative bg-gray-800 rounded-xl overflow-hidden hover:shadow-2xl hover:shadow-blue-500/20 transition-all duration-500"
            >
              <div className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${image.gradient}"></div>
              
              <div className="relative aspect-video bg-gray-700/50 backdrop-blur-sm">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br ${image.gradient} flex items-center justify-center text-white shadow-lg">
                    {image.icon}
                  </div>
                </div>
              </div>
              
              <div className="relative p-6">
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${image.gradient} transition-colors duration-500">
                  {image.title}
                </h3>
                <p className="text-gray-300 group-hover:text-white transition-colors duration-500">
                  {image.description}
                </p>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${image.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 