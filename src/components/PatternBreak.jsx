import './PatternBreak.css';

const PatternBreak = () => {
  return (
    <section className="pattern-break section-large">
      <div className="container">
        <h2>O que ninguém te contou sobre vender na internet</h2>

        <div className="pattern-content">
          <p className="intro">A verdade é simples:</p>

          <div className="truth-statement">
            <h3>Post não é ativo. Estrutura é.</h3>
          </div>

          <div className="contrast-blocks">
            <p>Rede social não foi feita pra você vender.</p>
            <p>Foi feita pra você ficar. Postar. Alimentar. Repetir.</p>

            <div className="contrast-list">
              <div className="contrast-item">
                <span className="before">Enquanto você posta,</span>
                <span className="after">quem tem estrutura converte.</span>
              </div>
              <div className="contrast-item">
                <span className="before">Enquanto você explica no Direct,</span>
                <span className="after">quem tem sistema automatiza.</span>
              </div>
              <div className="contrast-item">
                <span className="before">Enquanto você depende de algoritmo,</span>
                <span className="after">quem tem estrutura digital própria <strong>vende com previsibilidade.</strong></span>
              </div>
            </div>
          </div>

          <div className="final-message">
            <p className="large-text">Você não precisa de mais post.</p>
            <p className="large-text highlight-text">Você precisa de um sistema que trabalhe por você.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PatternBreak;
