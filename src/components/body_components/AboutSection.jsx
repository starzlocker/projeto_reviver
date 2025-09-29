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
              Cristã, mãe da Gabriela, psicóloga, palestrante e escritora, apaixonada por gente e pelo poder da transformação.
            </p>
            <p>
              Ao longo da minha trajetória, encontrei no autoconhecimento, na fé e na cura emocional o caminho para ressignificar minha própria história. Com MBA Executivo em Gestão Empresarial e formação em Psicologia Positiva, Logoterapia e Terapia dos Esquemas, fundei a AZ Desenvolvimento Humano e o Movimento REVIVER. Minha missão é inspirar pessoas a reencontrarem seu equilíbrio, seu bem-estar e sua força interior, respeitando a beleza única de cada ser humano em suas dimensões biológica, psicológica e espiritual.
            </p>
          </div>
          
          <div className="about-person">
            <h3>Mariangela de Paula</h3>
            <p>
              Cristã, casada com Anderson e mãe da Marina e Marianna, psicóloga, palestrante e escritora. Amo pessoas e seu potencial de superação.
            </p>
            <p>
              Minha maior transformação aconteceu quando conheci a Deus. Com Ele voltei a sonhar e acreditar que poderia me superar. Pós-graduada em Psicologia Positiva, Master Coach, Especialização em Logoterapia, Gestão de Pessoas em Resiliência e idealizadora do Movimento Mulheres Fortes! Seminarista formada pelo Instituto Teológico Carisma em Alphaville. Encontrei na Amanda uma grande parceira; e no Movimento REVIVER os princípios que acredito. Meu propósito é ser um instrumento de edificação do corpo, alma e espírito humano, com saúde mental e resiliência.
            </p>
          </div>
          
          <p className="about-team">
              Contamos também com uma equipe formada por outras psicólogas e por pessoas que já participaram de edições anteriores do Movimento REVIVER. Elas acreditam no propósito e hoje caminham conosco como <strong>REVIVENTES</strong>, compartilhando suas experiências e multiplicando a transformação. Juntos, acreditamos na força de viver a vida de forma autêntica, integrando corpo, alma e espírito.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection