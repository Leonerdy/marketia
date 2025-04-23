import Image from 'next/image';

const steps = [
  {
    title: "Conexão com o banco de dados",
    description: "Integração segura com seu sistema atual para coleta de dados em tempo real."
  },
  {
    title: "Análise de padrões",
    description: "Identificação de tendências de vendas, estoque e desempenho do negócio."
  },
  {
    title: "Geração de insights",
    description: "Relatórios inteligentes e recomendações baseadas em inteligência artificial."
  },
  {
    title: "Tomada de decisão",
    description: "Informações claras e acionáveis para melhorar seus resultados."
  }
];

export function Solution() {
  return (
    <section id="como-funciona" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Como a MarketIA funciona
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Uma solução completa que transforma dados em decisões inteligentes para seu supermercado.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-900/50 flex items-center justify-center">
                  <span className="text-blue-400 font-bold text-xl">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="relative aspect-square">
            <div className="absolute inset-0 bg-gray-800 rounded-lg flex items-center justify-center">
              <span className="text-gray-400">Diagrama do sistema</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 