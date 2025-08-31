import './BodySection.css'
import Spacer from './Spacer'
import ReviewSlider from './naosei';
import VideoCarousel from './VideoSection'

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
            <img src="/media/pexels-mart-production-7277896.jpg" alt="Mulher pensativa" />
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
      <div className="manual-steps">
        <ManualStep number="1" title="Identidade Verdadeira" description="Compreendendo o ser essencial, livre de rótulos." />
        <ManualStep number="2" title="Olhar honesto para a sua História" description="Resignificar o passado: onde você esteve e escrever o PRESENTE para desenhar o seu futuro." />
        <ManualStep number="3" title="Armadilhas Emocionais" description="Identificando o que te paralisa, te impede e como podemos ressignificá-los." />
        <ManualStep number="4" title="As Forças de Caráter" description="Conhecendo suas maiores forças internas e utilizá-las para andar na direção da vida que você merece ter." />
      </div>
    </div>
  );
};

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