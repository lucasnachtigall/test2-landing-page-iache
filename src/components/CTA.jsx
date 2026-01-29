import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section-large">
      <div className="container">
        <div className="cta-content">
          <div className="cta-icon">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
              <polyline points="22 4 12 14.01 9 11.01"/>
            </svg>
          </div>

          <h2>Pronto para ter sua própria estrutura?</h2>

          <p className="cta-text">
            Pare de depender de algoritmo. Construa um sistema que vende enquanto você dorme.
          </p>

          <button className="cta-button">
            <span>Quero começar agora</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>

          <p className="cta-footer">Conversa gratuita para entender seu cenário</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
