import "./IntroSection.css"

const IntroSection = () => {
  return (

    <section>
      <div className="genesis-header">
        <p>
          A IMERSÃO SERÁ O SEU PORTAL PARA UM
        </p>
        <h1 className="genesis-title">NOVO CICLO</h1>
      </div>
      <div className="video-section">
        <iframe className="video_container" src="https://www.youtube.com/embed/E2Du7bbZxFI?si=mSmAojKXHAz6hhbm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="description-text">
        <p>
          O 7 nos lembra da criação e da completude. Agora, é tempo de você REVIVER e lançar as bases de um eu renovado, cheio de fé, esperança e entendimento.
        </p>
      </div>
    </section>
  );
};

export default IntroSection;

/*
<iframe width="560" height="315" src="https://www.youtube.com/embed/E2Du7bbZxFI?si=mSmAojKXHAz6hhbm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
*/