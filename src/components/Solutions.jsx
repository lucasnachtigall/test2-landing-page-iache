import './Solutions.css';

const Solutions = () => {
  const solutions = [
    {
      title: "Landing Pages",
      description: "Páginas de alta conversão focadas em transformar visitantes em clientes",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="3" width="18" height="18" rx="2"/>
          <path d="M3 9h18M9 21V9"/>
        </svg>
      )
    },
    {
      title: "Sites Estratégicos",
      description: "Sites estruturados para gerar autoridade e facilitar decisões de compra",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
          <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
          <line x1="12" y1="22.08" x2="12" y2="12"/>
        </svg>
      )
    },
    {
      title: "Sistemas Internos",
      description: "Automação de processos e organização de dados para reduzir retrabalho",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="3"/>
          <path d="M12 1v6m0 6v6M5.93 5.93l4.24 4.24m5.66 5.66l4.24 4.24M1 12h6m6 0h6M5.93 18.07l4.24-4.24m5.66-5.66l4.24-4.24"/>
        </svg>
      )
    },
    {
      title: "SaaS Customizados",
      description: "Plataformas completas desenvolvidas para resolver problemas específicos do seu negócio",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="2" y="3" width="20" height="14" rx="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    }
  ];

  return (
    <section className="solutions section-large">
      <div className="container">
        <div className="solutions-header">
          <h2>Soluções que construo</h2>
          <p>Estrutura digital funcional para o seu negócio crescer com previsibilidade</p>
        </div>

        <div className="solutions-grid">
          {solutions.map((solution, index) => (
            <div key={index} className="solution-card">
              <div className="solution-icon">{solution.icon}</div>
              <h3>{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
