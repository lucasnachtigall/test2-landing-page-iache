import './ProblemIdentification.css';

const ProblemIdentification = () => {
  return (
    <section className="problem section">
      <div className="container">
        <div className="problem-header">
          <h2>O problema não é você</h2>
          <p className="problem-intro">
            Você trabalha todo dia, mas o resultado continua imprevisível
          </p>
        </div>

        <div className="problem-comparison">
          <div className="comparison-card negative">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                <polyline points="15 3 21 3 21 9"/>
                <line x1="10" y1="14" x2="21" y2="3"/>
              </svg>
            </div>
            <h3>Esforço Alto</h3>
            <ul>
              <li>Postar todo dia</li>
              <li>Responder mensagens</li>
              <li>Criar conteúdo constante</li>
              <li>Alimentar algoritmo</li>
            </ul>
          </div>

          <div className="comparison-arrow">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </div>

          <div className="comparison-card warning">
            <div className="card-icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3>Resultado Baixo</h3>
            <ul>
              <li>Vendas imprevisíveis</li>
              <li>Dependência de algoritmo</li>
              <li>Sem escalabilidade</li>
              <li>Esforço = Resultado</li>
            </ul>
          </div>
        </div>

        <div className="problem-conclusion">
          <p>Isso não é crescimento. <strong>É sobrevivência.</strong></p>
        </div>
      </div>
    </section>
  );
};

export default ProblemIdentification;
