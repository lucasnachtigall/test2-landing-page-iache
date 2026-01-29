import './NewLogic.css';

const NewLogic = () => {
  return (
    <section className="new-logic section-large">
      <div className="container">
        <div className="microcopy">ASSIM QUE EMPRESAS REAIS CRESCEM</div>
        <h2>Estrutura vende. Esforço constante cansa.</h2>

        <div className="comparison-grid">
          <div className="comparison-column old">
            <h3>Dependência de rede social</h3>
            <div className="arrow">↓</div>
            <ul className="comparison-list">
              <li>Você precisa aparecer todo dia</li>
              <li>Algoritmo decide quem te vê</li>
              <li>Venda depende de volume de esforço</li>
              <li>Resultado imprevisível</li>
            </ul>
          </div>

          <div className="comparison-arrow">→</div>

          <div className="comparison-column new">
            <h3>Estrutura digital própria</h3>
            <div className="arrow">↓</div>
            <ul className="comparison-list">
              <li>Seu sistema trabalha 24/7</li>
              <li>Você controla o fluxo de conversão</li>
              <li>Venda acontece de forma previsível</li>
              <li>Escalável sem depender de você</li>
            </ul>
          </div>
        </div>

        <div className="closing-content">
          <p className="main-text">
            Empresas que crescem com consistência não vivem disputando atenção em feed.
          </p>
          <p className="secondary-text">
            Elas têm uma base digital estruturada:<br />
            Um lugar onde o cliente vai, entende e compra — sem depender de likes, shares ou algoritmo.
          </p>
          <p className="statement">
            <strong>Isso é construção. Não improviso.</strong>
          </p>
        </div>
      </div>
    </section>
  );
};

export default NewLogic;
