import Link from 'next/link';

const footerLinks = [
  {
    title: "Sobre",
    links: [
      { label: "Nossa História", href: "/sobre" },
      { label: "Equipe", href: "/equipe" },
      { label: "Trabalhe Conosco", href: "/carreiras" }
    ]
  },
  {
    title: "Legal",
    links: [
      { label: "Termos de Uso", href: "/termos" },
      { label: "Política de Privacidade", href: "/privacidade" },
      { label: "Cookies", href: "/cookies" }
    ]
  },
  {
    title: "Suporte",
    links: [
      { label: "Central de Ajuda", href: "/ajuda" },
      { label: "Documentação", href: "/docs" },
      { label: "Status", href: "/status" }
    ]
  }
];

const socialLinks = [
  { label: "LinkedIn", href: "https://linkedin.com/company/marketia" },
  { label: "Twitter", href: "https://twitter.com/marketia" },
  { label: "Instagram", href: "https://instagram.com/marketia" }
];

export function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold text-white">MarketIA</span>
            </Link>
            <p className="text-gray-400">
              Transformando dados em decisões inteligentes para supermercados.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {footerLinks.map((column, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{column.title}</h3>
              <ul className="space-y-2">
                {column.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © {new Date().getFullYear()} MarketIA. Todos os direitos reservados.
            </p>
            <div className="mt-4 md:mt-0">
              <p className="text-gray-400">
                Contato: contato@marketia.com.br | (11) 9999-9999
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 