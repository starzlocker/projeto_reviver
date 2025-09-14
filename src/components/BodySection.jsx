import './BodySection.css'
import Spacer from './Spacer'
import IntroSection from './body_components/IntroSection'
import IdentificationSection from './body_components/IdentificationSection';
import FunctionManualSection from './body_components/FunctionalManualSection';
import ReviewSection from './body_components/ReviewSection';
import { useState } from 'react';
import { LuMessageCircleMore } from "react-icons/lu";
// Componente Principal que une todas as seções
const BodySection = () => {
  return (
    <div className="genesis-container">
      <IntroSection />
      <IdentificationSection />
      <FunctionManualSection />
      <ReviewSection />
      <AboutSection />
      <PricingSection />
      <FAQSection />
      <SubscribeFormSection />
    </div>
  );
};

// --- Componentes de Seção ---




export default BodySection;


const AboutSection = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">QUEM VAI TE GUIAR NESSA TRANSFORMAÇÃO</h2>
      <div className="about-content">
        <div className="about-img-container">
          <img src="./media/pexels-mart-production-7277896.jpg" alt="Equipe Movimento Reviver" />
        </div>
        <div className="about-text">
          <div className="about-person">
            <h3>Amanda Zanutim</h3>
            <p>
              Psicóloga, idealizadora do Movimento Reviver e especialista em transformar vidas através do autoconhecimento e da cura emocional. Sua experiência pessoal e profissional a tornam a guia perfeita para sua jornada de transformação pessoal.
            </p>
          </div>
          
          <div className="about-person">
            <h3>Mariangela de Paula</h3>
            <p>
              Psicóloga, Master Coach e Pastora, com vasta experiência em processos de desenvolvimento pessoal e liderança. Sua paixão é ajudar você a alcançar seu potencial máximo através da psicologia positiva e da resiliência.
            </p>
          </div>
          
          <p className="about-team">
            Contamos também com uma equipe multidisciplinar. Psicólogas e Empreendedoras que decidiram vivenciar o Movimento Reviver no seu dia a dia e assumiram levar nosso propósito para outras pessoas. Juntas, elas criaram uma imersão transformadora, onde você vai entender seu funcionamento e viver sua história de forma autêntica, com foco no corpo, alma e espírito.
          </p>
        </div>
      </div>
    </section>
  );
};

const PricingSection = () => {
  const fullPrice = "497,00";
  const discountPrice = "297,00";
  
  return (
    <section className="pricing-section">
      <h2 className="section-title text-white">O que você recebe com o REVIVER?</h2>
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
              <p className="old-price">De R$ {fullPrice}</p>
              <p className="new-price">Por R$ {discountPrice}</p>
              <p className="payment-info">Parcelamos no cartão de crédito</p>
            </div>
            <button className="cta-button">ADQUIRIR MEU LUGAR</button>
          </div>
        </div>
      </section>
  );
};

const FAQSection = () => {
  const [openItem, setOpenItem] = useState(null);
  
  const data = [
    {
      "question": "Qual a data, local e horário da 7ª Imersão?",
      "answer": "A 7ª Imersão será realizada no dia 15 de Novembro, das 08:30 às 18:30."
    },
    {
      "question": "Qual a idade mínima para participar?",
      "answer": "A imersão é aberta para pessoas a partir de 18 anos."
    },
    {
      "question": "A imersão é exclusiva para mulheres?",
      "answer": "Não! A 6ª Imersão é para homens e mulheres, e casais são muito bem-vindos."
    },
    {
      "question": "A equipe do Movimento Reviver é formada apenas por psicólogas?",
      "answer": "Não. Temos uma equipe multidisciplinar, com profissionais de diversas áreas. Nossa abordagem é integral, considerando o ser humano em suas dimensões biológica, psicológica e espiritual."
    },
    {
      "question": "Já faço terapia, a imersão pode atrapalhar meu processo?",
      "answer": "De forma alguma. Nossa abordagem é disruptiva e autêntica, e não concorre com seu processo terapêutico. Pelo contrário, ela vai agregar e complementar sua jornada de autoconhecimento."
    },
    {
      "question": "O que é o Manual de Funcionamento?",
      "answer": "O Manual de Funcionamento é uma ferramenta personalizada de autoconhecimento, que te ajuda a entender como você opera em suas dimensões biológica, psicológica e espiritual."
    }
  ];

  const toggleItem = (index) => {
    setOpenItem(openItem === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="section-title">Perguntas Frequentes</h2>
      <div className="faq-container">
        {data.map((item, index) => (
          <div key={index} className="faq-item">
            <div 
              className={`faq-question ${openItem === index ? 'active' : ''}`}
              onClick={() => toggleItem(index)}
            >
              <span>{item.question}</span>
              <span className="faq-icon">{openItem === index ? '−' : '+'}</span>
            </div>
            {openItem === index && (
              <div className="faq-answer">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

const SubscribeFormSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });
  
  const fullPrice = "497,00";
  const discountPrice = "297,00";

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Aqui você pode implementar a lógica de envio do formulário
  };

  return (
    <section className="subscribe-section">
      <h2 className="section-title text-white">Garanta sua Transformação</h2>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="name" 
            placeholder="Seu nome completo"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="email" 
            name="email" 
            placeholder="Seu melhor e-mail"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="tel" 
            name="phone" 
            placeholder="Seu WhatsApp"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        
        <div className="form-footer">
          <button type="submit" className="cta-button">
            ADQUIRIR MEU LUGAR
          </button>
          <div className="price-info">
            <p className="old-price">De R$ {fullPrice}</p>
            <p className="new-price">Por R$ {discountPrice}</p>
            <p className="payment-info">Parcelamos no cartão de crédito</p>
          </div>
        </div>
      </form>
    </section>
  );
};