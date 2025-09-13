import './BodySection.css'
import Spacer from './Spacer'
import ReviewSlider from './naosei';
import VideoCarousel from './VideoSection'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa6";
import { useState} from 'react';
import { LuMessageCircleMore } from "react-icons/lu";
// Componente Principal que une todas as seções
const BodySection = () => {
  return (
    <div className="genesis-container">
      <Header />
      <VideoPlayer />
      <Description />
      <NewCycleSection />
      <ReviverSection />
      <DemoReviews />
      <About />
      <Pricing />
      <FAQ />
      <SubscribeForm />
    </div>
  );
};

// --- Componentes de Seção ---

const Header = () => {
  return (
    <header className="genesis-header">
      <h1>
        A IMERSÃO SERÁ O SEU
        <br />
        <span className="genesis-title">GÊNESIS PESSOAL</span>
      </h1>
    </header>
  );
};

const VideoPlayer = () => {
  return (
    <div className="video-section">
      <iframe className="video_container" src="https://www.youtube.com/embed/e3hf1UkgZIw?si=GS2HBrLCMmonnQyD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
    </div>
  );
};

const Description = () => {
  return (
    <p className="description-text">
      Assim como o mundo foi criado em 7 DIAS, os participantes irão usar
      A ENERGIA DO 7 para criar a fundação do seu novo "eu" e do seu novo ano!
    </p>
  );
};

const NewCycleSection = () => {
  return (
    <div className="new-cycle-wrapper">
      <div className="new-cycle-header">
        <h2>IMAGEM<br/>DO CASULO DA BORBOLETA</h2>
        <h2>NOVO<br/>CICLO</h2>
      </div>
      <div className="grid grid-cols-2 justify-items-start">
        <div></div>
        <h3 className="text-[#159ade] m-0 text-xl font-bold">Você já sentiu que...</h3>
      </div>
      <div className="feeling-section">
          <div className="feeling-image">
            <img src="./media/pexels-mart-production-7277896.jpg" alt="Mulher pensativa" />
          </div>
          <div className="feeling-text">
            <ul>
              <li>Existe um vazio dentro de você, mesmo quando parece que está tudo bem?</li>
              <li>A autocrítica e a cobrança não te deixam se sentir "suficiente"?</li>
              <li>Mágoas, traumas e dores emocionais ainda pesam no seu coração?</li>
              <li>O sentimento de estar desalinhado consigo mesmo?</li>
              <li>Sabem que poderiam viver diferente, mas não sabem por onde começar.</li>
            </ul>
        </div>
      </div>
    </div>
  );
};

const ReviverSection = () => {
  return (
    <div className="reviver-section">
      <div className="reviver-callout">
        <p>No REVIVER, nós caminhamos juntos nesse processo.</p>
        <p>Quando você entende como funciona, suas escolhas se tornam leves e conscientes.</p>
        <p>É assim que você se torna protagonista da sua vida.</p>
      </div>
      <div >
        <p className="text-[#159ade] mb-2">E é por isso que juntos vamos montar o seu:</p>
        <h3 className="text-[#159ade] mb-8 font-bold text-xl">Manual de Funcionamento</h3>
      </div>
      <ManualSteps />
      {/* <div id="manual_steps_container">
      
        <FaChevronLeft fontSize="18px" className="chevron"/>
        <div className="manual-steps">
          <ManualStep number="1" title="Identidade Verdadeira" description="Compreendendo o ser essencial, livre de rótulos." />
          <ManualStep number="2" title="Olhar honesto para a sua História" description="Resignificar o passado: onde você esteve e escrever o PRESENTE para desenhar o seu futuro." />
          <ManualStep number="3" title="Armadilhas Emocionais" description="Identificando o que te paralisa, te impede e como podemos ressignificá-los." />
          <ManualStep number="4" title="As Forças de Caráter" description="Conhecendo suas maiores forças internas e utilizá-las para andar na direção da vida que você merece ter." />
          <ManualStep number="5" title="A Vivianne é muito incoveniente." description="E ELA ME TRATA MAL" />
        </div>
        <FaChevronRight fontSize="18px" className="chevron"/>
      </div> */}
    </div>
  );
};


const ManualSteps = () => {
  const [curOffset, setCurOffset] = useState(0)

  const stepWidth = 200;
  const gap = 6;
  const stepLength = stepWidth + (gap*2);
  const data = [
    {
      number: "1",
      title: "Identidade Verdadeira",
      description: "Compreendendo o ser essencial, livre de rótulos.",
    },
    {
      number: "2",
      title: "Olhar honesto para a sua História",
      description: "Resignificar o passado: onde você esteve e escrever o PRESENTE para desenhar o seu futuro.",
    },
    {
      number: "3",
      title: "Armadilhas Emocionais",
      description: "Identificando o que te paralisa, te impede e como podemos ressignificá-los.",
    },
    {
      number: "4",
      title: "As Forças de Caráter",
      description: "Conhecendo suas maiores forças internas e utilizá-las para andar na direção da vida que você merece ter.",
    },
    {
      number: "5",
      title: "Propósito e Direção",
      description: "Descobrindo seu verdadeiro propósito e traçando um caminho claro para o futuro.",
    },
  ]


  const ManualStep = ({
    number,
    title,
    description,
    width,
    margin
  }) => {
    return (
    <div className="manual-step" style={{width: `${width}px`, margin: `0 ${gap}px`}}>
      <div className="step-number">{number}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
    )
  };

  // Pega o offsetLeft do próximo cartão que não aparece e seta ele como próxima parada

  const moveRight = () => {
    const manualStepsWrapper = document.querySelector(".manual-steps-wrapper");
    const manualStepsElement = document.querySelector(".manual-steps");
    const manualSteps = document.querySelectorAll(".manual-step");

    const stepW = manualSteps[0].clientWidth + (gap*2);
    const wrapperW = manualStepsWrapper.clientWidth;
    const containerW = manualStepsElement.clientWidth;
    const curOffsetSize = curOffset * stepLength;


    if (curOffsetSize + wrapperW < (containerW + stepLength)) {
      setCurOffset(n => n + 1);
    }
  }


  const moveLeft = () => {
    const chevronRight = document.querySelector("#manual_steps_container .chevron-r");
    chevronRight.classList.remove("disabled")
    const curOffsetSize = curOffset * stepLength;
    if (curOffsetSize > 0) {
      setCurOffset(n => n - 1);
    }
  }

  return (
      <div id="manual_steps_container">
        <FaChevronLeft 
          fontSize="18px" 
          className={`chevron chevron-l ${curOffset === 0 ? 'disabled' : ''}`} 
          onClick={moveLeft}
        />
        <div className="manual-steps-wrapper">
          <div 
            className="manual-steps"
            style={{
              width: `${(stepWidth + gap) * data.length}px`
            }}
          >
            {
              data.map((item) => (
                <ManualStep
                  key={item.number}
                  title={item.title}
                  number={item.number}
                  description={item.description}
                  width={stepWidth}
                  margin={gap}
                />
              ))
            }
          </div>
        </div>
        <FaChevronRight 
          fontSize="18px" 
          className={`chevron chevron-r `} 
          onClick={moveRight}
        />
      </div>
  )
}

// --- Componente Reutilizável ---

const ManualStep = ({ number, title, description }) => {
  return (
    <div className="manual-step">
      <div className="step-number">{number}</div>
      <h4>{title}</h4>
      <p>{description}</p>
    </div>
  );
};


const DemoReviews = () => {
  const demo = [
    {
        quote: "This slider is clean, accessible, and easy to drop into any React app. Exactly what we needed.",
        author: "Ana Souza",
        role: "Product Manager",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Plug-and-play. Auto-plays, pauses on hover, and works great on mobile swipes.",
        author: "Bruno Lima",
        role: "Frontend Dev",
        avatar: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Finally a testimonial component that doesn't fight me on accessibility.",
        author: "Carla Martins",
        role: "UX Designer",
        avatar: "https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Super customizable and the animations are smooth. Highly recommend for any project.",
        author: "Diego Ferreira",
        role: "Full Stack Developer",
        avatar: "https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "Easy to integrate and looks great out of the box. Saved us a lot of time.",
        author: "Elisa Ramos",
        role: "Project Lead",
        avatar: "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?q=80&w=200&auto=format&fit=crop",
    },
    {
        quote: "The mobile experience is fantastic. Swiping between testimonials feels natural.",
        author: "Felipe Costa",
        role: "Mobile Engineer",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=200&auto=format&fit=crop",
    },
  ];

  const items = [
    {
      id: 1,
      title: 'Teste',
      embedUrl:"https://www.youtube.com/embed/BhHrUSJ_zkY?si=TpoL6zYzjcNfJyXe"
    },
    {
      id: 2,
      title: 'Teste2',
      embedUrl:"https://www.youtube.com/embed/mLWUhCjJfdA?si=-2w3w7zV9RVGuXYZ"
    },

]

  return (
    <div className="mx-auto max-w-4xl p-6">
      <h2 className="mb-4 text-center text-2xl font-semibold text-[#159ade]">O que as pessoas estão dizendo...</h2>
      <ReviewSlider items={demo} />
      <VideoCarousel items={items}/>
    </div>
  );
};

export default BodySection;


const About = () => {
  return (
    <div className="about-section">
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
    </div>
  );
};

const Pricing = () => {
  const fullPrice = "497,00";
  const discountPrice = "297,00";
  
  return (
    <div className="pricing-section">
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
      </div>
  );
};

const FAQ = () => {
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
    <div className="faq-section">
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
    </div>
  );
};

const SubscribeForm = () => {
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
    <div className="subscribe-section">
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
    </div>
  );
};