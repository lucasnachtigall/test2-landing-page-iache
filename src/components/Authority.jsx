import './Authority.css';

const Authority = () => {
  return (
    <section className="authority section-large">
      <div className="container">
        <h2>Construção leva tempo. Dependência, também.</h2>

        <div className="authority-content">
          <p className="intro">A diferença é que uma te deixa no controle.</p>

          <div className="scenarios">
            <div className="scenario">
              <p>Hoje você pode estar vendendo bem no Instagram.</p>
              <p className="consequence">Amanhã, o algoritmo muda e você volta à estaca zero.</p>
            </div>

            <div className="scenario">
              <p>Hoje você pode ter um bom mês de indicações.</p>
              <p className="consequence">Mas você não consegue prever o próximo.</p>
            </div>
          </div>

          <div className="main-statement">
            <p>
              <strong>Empresas que pensam em longo prazo não constroem em terreno alugado.</strong>
            </p>
          </div>

          <p className="detail-text">
            Elas investem em base própria. Em estrutura digital que não depende de like, de engajamento
            ou da boa vontade de uma rede social.
          </p>

          <div className="promise-box">
            <p className="promise-title">Eu não vendo promessa de resultado rápido.</p>
            <p className="promise-statement">
              Eu construo sistemas que funcionam de verdade — e que continuam funcionando depois que o projeto termina.
            </p>
          </div>

          <p className="final-message">
            Se você está cansado de viver na incerteza e quer começar a construir previsibilidade no seu negócio,
            está no lugar certo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Authority;
