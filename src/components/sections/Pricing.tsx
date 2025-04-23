const plans = [
  {
    name: "Básico",
    price: "R$ 299",
    period: "/mês",
    description: "Ideal para pequenos supermercados",
    features: [
      "Análise de vendas básica",
      "Previsão de demanda",
      "Relatórios mensais",
      "Suporte por email"
    ],
    cta: "Começar agora",
    popular: false
  },
  {
    name: "Profissional",
    price: "R$ 599",
    period: "/mês",
    description: "Perfeito para supermercados em crescimento",
    features: [
      "Todas as features do Básico",
      "Gestão de estoque avançada",
      "Relatórios semanais",
      "Suporte prioritário",
      "Integração com ERP"
    ],
    cta: "Começar agora",
    popular: true
  },
  {
    name: "Enterprise",
    price: "R$ 999",
    period: "/mês",
    description: "Para redes de supermercados",
    features: [
      "Todas as features do Profissional",
      "Análise de múltiplas lojas",
      "Relatórios personalizados",
      "Suporte 24/7",
      "API dedicada",
      "Consultoria especializada"
    ],
    cta: "Fale conosco",
    popular: false
  }
];

export function Pricing() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Planos e Preços
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Escolha o plano ideal para o seu supermercado
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`bg-gray-800 rounded-lg border ${
                plan.popular
                  ? "border-blue-500 shadow-lg shadow-blue-500/20"
                  : "border-gray-700"
              }`}
            >
              {plan.popular && (
                <div className="bg-blue-600 text-white text-center py-1 rounded-t-lg">
                  Mais Popular
                </div>
              )}
              <div className="p-6">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-white">
                    {plan.price}
                  </span>
                  <span className="text-gray-400 ml-1">{plan.period}</span>
                </div>
                <p className="text-gray-300 mb-6">{plan.description}</p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center text-gray-300">
                      <svg
                        className="w-5 h-5 text-green-500 mr-2"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button
                  className={`w-full py-3 px-4 rounded-lg font-medium ${
                    plan.popular
                      ? "bg-blue-600 text-white hover:bg-blue-700"
                      : "bg-gray-700 text-white hover:bg-gray-600"
                  }`}
                >
                  {plan.cta}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 