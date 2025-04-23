const benefits = [
  {
    title: "Redução de perdas e desperdícios",
    description: "Identificação precoce de produtos com baixa rotatividade e otimização do estoque."
  },
  {
    title: "Aumento das margens de lucro",
    description: "Análise inteligente de preços e promoções para maximizar o retorno."
  },
  {
    title: "Automação de relatórios",
    description: "Relatórios automáticos e personalizados, economizando tempo e reduzindo erros."
  },
  {
    title: "Decisões mais rápidas",
    description: "Insights em tempo real para agir rapidamente nas oportunidades do mercado."
  },
  {
    title: "Previsões de desempenho",
    description: "Alertas e previsões baseadas em IA para antecipar tendências e problemas."
  },
  {
    title: "Gestão eficiente",
    description: "Controle total sobre todas as áreas do seu supermercado em uma única plataforma."
  }
];

export function Benefits() {
  return (
    <section className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que você ganha com a MarketIA
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Transforme desafios em oportunidades com nossa solução de inteligência artificial.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-lg">✓</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-300">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 