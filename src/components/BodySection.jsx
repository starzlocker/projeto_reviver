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
    </div>
  );
};

export default BodySection;