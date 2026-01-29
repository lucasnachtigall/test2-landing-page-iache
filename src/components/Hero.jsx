import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            <span>ESTRUTURA DIGITAL</span>
          </div>

          <h1 className="hero-title">
            Pare de alimentar <span className="accent-text">algoritmo</span>
          </h1>

          <p className="hero-subtitle">
            Construa seu próprio sistema de vendas que trabalha 24/7 — sem depender de post, like ou engajamento.
          </p>

          <div className="hero-ctas">
            <button className="btn-primary">
              <span>Quero construir minha estrutura</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="12" cy="12" r="10"/>
                <path d="M12 6v6l4 2"/>
              </svg>
              <div>
                <strong>24/7</strong>
                <span>Sistema ativo</span>
              </div>
            </div>
            <div className="stat-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
              </svg>
              <div>
                <strong>Escalável</strong>
                <span>Sem limite</span>
              </div>
            </div>
            <div className="stat-item">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
              </svg>
              <div>
                <strong>Previsível</strong>
                <span>Vendas constantes</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
