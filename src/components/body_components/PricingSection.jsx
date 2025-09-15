import "./PricingSection.css"

const PricingSection = ({ fullPrice, discountPrice }) => {
  const scrollToSubscribe = () => {
    const element = document.getElementById('subscribe_section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  return (
    <section className="pricing-section">
      <h3>O que você recebe com o REVIVER?</h3>
      <div className="pricing-inner-container">
          <div className="pricing-benefits">
            <div className="benefit-item">
              <h3>Teste Exclusivo + Ferramentas</h3>
              <p>Desvende seu funcionamento com nosso teste e ferramentas práticas.</p>
            </div>
            <div className="benefit-item">
              <h3>Material de Autodesenvolvimento</h3>
              <p>Continue sua jornada com nosso material exclusivo pós-imersão.</p>
            </div>
            <div className="benefit-item">
              <h3>Brindes Personalizados</h3>
              <p>Celebre sua transformação com nossos mimos personalizados.</p>
            </div>
          </div>
          
          <div className="pricing-card">
            <p className="pricing-intro">Só falta um passo para <span className="highlight">transformar a sua vida</span></p>
            <div className="price-container">
              <p className="old-price">De R$ {fullPrice.toFixed(2)}</p>
              <p className="new-price">Por R$ {discountPrice.toFixed(2)}</p>
              <p className="payment-info">Parcelamos no cartão de crédito</p>
            </div>
            <button className="cta-button" onClick={scrollToSubscribe}>ADQUIRIR MEU LUGAR</button>
          </div>
        </div>
      </section>
  );
};

export default PricingSection