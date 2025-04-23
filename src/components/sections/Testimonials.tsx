const testimonials = [
  {
    quote:
      "A MarketIA revolucionou a forma como gerenciamos nosso supermercado. As previsões de demanda são incrivelmente precisas!",
    author: "Carlos Silva",
    role: "Gerente de Operações",
    company: "Supermercado Bom Preço",
  },
  {
    quote:
      "Nunca tivemos tanto controle sobre nosso estoque. A redução de desperdícios foi impressionante desde que implementamos a MarketIA.",
    author: "Ana Oliveira",
    role: "Diretora Comercial",
    company: "Rede de Supermercados Qualitá",
  },
  {
    quote:
      "A integração foi simples e o suporte é excepcional. A MarketIA se tornou uma ferramenta essencial para nosso negócio.",
    author: "Roberto Santos",
    role: "CEO",
    company: "Supermercados Express",
  },
];

export function Testimonials() {
  return (
    <section className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            O que nossos clientes dizem
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Histórias reais de supermercados que transformaram seus resultados
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg p-6 hover:bg-gray-700 transition-colors"
            >
              <div className="text-yellow-400 mb-4">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>
              <p className="text-gray-300 mb-4">{testimonial.quote}</p>
              <div>
                <h4 className="text-white font-bold">{testimonial.author}</h4>
                <p className="text-gray-400">
                  {testimonial.role} - {testimonial.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 