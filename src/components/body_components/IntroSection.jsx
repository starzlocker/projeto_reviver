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
        <iframe className="video_container" src="https://www.youtube.com/embed/e3hf1UkgZIw?si=GS2HBrLCMmonnQyD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>
      <div className="description-text">
        <p>
          Assim como o mundo foi criado em 7 DIAS, os participantes irão usar.<br />
          A ENERGIA DO 7 para criar a fundação do seu novo "eu" e do seu novo ano!
        </p>
      </div>
    </section>
  );
};

export default IntroSection;