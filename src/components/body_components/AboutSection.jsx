import "./AboutSection.css"

const AboutSection = () => {
  return (
    <section className="about-section">
      <h2 className="section-title">QUEM VAI TE GUIAR NESSA TRANSFORMAÇÃO</h2>
      <div className="about-content">
        <div className="about-img-container">
          <img src="./media/two_woman.jpg" alt="Equipe Movimento REVIVER" />
        </div>
        <div className="about-text">
          <div className="about-person">
            <h3>Amanda Zanutim</h3>
            <p>
              Psicóloga, idealizadora do Movimento REVIVER e especialista em transformar vidas através do autoconhecimento e da cura emocional. Sua experiência pessoal e profissional a tornam a guia perfeita para sua jornada de transformação pessoal.
            </p>
          </div>
          
          <div className="about-person">
            <h3>Mariangela de Paula</h3>
            <p>
              Psicóloga, Master Coach e Pastora, com vasta experiência em processos de desenvolvimento pessoal e liderança. Sua paixão é ajudar você a alcançar seu potencial máximo através da psicologia positiva e da resiliência.
            </p>
          </div>
          
          <p className="about-team">
            Contamos também com uma equipe multidisciplinar. Psicólogas e Empreendedoras que decidiram vivenciar o Movimento REVIVER no seu dia a dia e assumiram levar nosso propósito para outras pessoas. Juntas, elas criaram uma imersão transformadora, onde você vai entender seu funcionamento e viver sua história de forma autêntica, com foco no corpo, alma e espírito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection