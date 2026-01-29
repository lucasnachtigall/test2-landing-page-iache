import './Method.css';

const Method = () => {
  return (
    <section className="method section-large">
      <div className="container">
        <div className="microcopy">COMO EU TRABALHO</div>
        <h2>Eu crio sistemas que facilitam sua venda</h2>

        <div className="method-content">
          <p className="intro-text">
            Não trabalho com "estratégia bonita no papel".
          </p>

          <p className="highlight-statement">
            Eu <strong>construo estrutura digital funcional</strong> que tira seu negócio da dependência de rede social
            e coloca no controle da sua própria máquina de vendas.
          </p>

          <div className="services-list">
            <div className="service-item">
              <span className="service-icon">→</span>
              <span>Landing pages que convertem visitante em cliente</span>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <span>Sites posicionados para gerar confiança e facilitar decisão</span>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <span>Sistemas internos que organizam processos e reduzem retrabalho</span>
            </div>
            <div className="service-item">
              <span className="service-icon">→</span>
              <span>Soluções digitais sob medida (SaaS, plataformas, painéis de gestão)</span>
            </div>
          </div>

          <div className="method-goal">
            <p className="goal-title">Tudo pensado para uma coisa:</p>
            <p className="goal-statement">
              Você vender mais, com menos esforço, e de forma previsível.
            </p>
          </div>

          <p className="closing-line">
            Não é mágica. É estrutura.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Method;
