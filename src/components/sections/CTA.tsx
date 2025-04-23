'use client';

import { useState } from 'react';

export function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', company: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="demo" className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center text-white mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comece a transformar seu supermercado hoje
          </h2>
          <p className="text-xl text-blue-100">
            Solicite uma demonstração gratuita e descubra como a MarketIA pode ajudar seu negócio.
          </p>
        </div>

        <div className="max-w-md mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-white mb-1">
                Nome
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-blue-500 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                placeholder="Seu nome completo"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                E-mail
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-blue-500 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                placeholder="seu@email.com"
              />
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-medium text-white mb-1">
                Nome do Supermercado
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 rounded-lg border border-blue-500 focus:ring-2 focus:ring-blue-300 focus:border-blue-500"
                placeholder="Nome do seu supermercado"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-white text-blue-600 font-medium py-3 px-6 rounded-lg hover:bg-blue-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
            >
              Quero experimentar a MarketIA
            </button>
          </form>
        </div>
      </div>
    </section>
  );
} 