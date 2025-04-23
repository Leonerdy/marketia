const problems = [
  {
    title: "Falta de visibilidade dos dados",
    description: "Dificuldade em acessar e entender informações importantes sobre o negócio."
  },
  {
    title: "Dificuldade em identificar produtos não vendidos",
    description: "Perda de oportunidades e aumento de desperdício por falta de visibilidade."
  },
  {
    title: "Gestão ineficiente de estoque",
    description: "Excesso ou falta de produtos devido à falta de previsão precisa."
  },
  {
    title: "Tempo perdido com planilhas manuais",
    description: "Processos demorados e sujeitos a erros humanos."
  }
];

export function Problem() {
  return (
    <section id="problema" className="py-16 bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Desafios que você enfrenta no dia a dia
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Gerir um supermercado é complexo. Identificamos os principais problemas que afetam sua eficiência e lucratividade.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-gray-700 p-6 rounded-lg border border-gray-600 hover:border-blue-500 transition-colors duration-200"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-900/50 flex items-center justify-center">
                  <span className="text-blue-400 font-bold">{index + 1}</span>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">
                    {problem.title}
                  </h3>
                  <p className="text-gray-300">
                    {problem.description}
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