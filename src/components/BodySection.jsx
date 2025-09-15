import './BodySection.css'
import Spacer from './Spacer'
import IntroSection from './body_components/IntroSection'
import IdentificationSection from './body_components/IdentificationSection';
import FunctionManualSection from './body_components/FunctionalManualSection';
import ReviewSection from './body_components/ReviewSection';
import AboutSection from './body_components/AboutSection'
import PricingSection from './body_components/PricingSection'
import FAQSection from './body_components/FAQSection';
import SubscribeFormSection from './body_components/SubscribeFormSection';
import FooterSection from './body_components/FooterSection';
import { Link } from 'react-router-dom';
// Componente Principal que une todas as seções
const BodySection = () => {
  const fullPrice = 697;
  const discountPrice = 497;

  return (
    <div className="genesis-container">
      <IntroSection />
      <IdentificationSection />
      <FunctionManualSection />
      <ReviewSection />
      <AboutSection />
      <PricingSection fullPrice={fullPrice} discountPrice={discountPrice}/>
      <FAQSection />
      <SubscribeFormSection fullPrice={fullPrice} discountPrice={discountPrice}/>
      <FooterSection />
      <p>
        <Link to="/projeto_reviver/termos" className="link-to">
          Termos de Uso e Política de Privacidade
        </Link>
      </p>
    </div>
  );
};

export default BodySection;