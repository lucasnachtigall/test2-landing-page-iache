import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>Seu Nome / Marca</h3>
            <p>
              Desenvolvimento de estrutura digital para empresas que querem crescer fora da dependência de rede social.
            </p>
          </div>

          <div className="footer-contact">
            <p className="contact-label">Contato:</p>
            <a href="mailto:seu@email.com" className="contact-link">seu@email.com</a>
            <a href="https://wa.me/5511999999999" className="contact-link" target="_blank" rel="noopener noreferrer">
              WhatsApp: +55 11 99999-9999
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
