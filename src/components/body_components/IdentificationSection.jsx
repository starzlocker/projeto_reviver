import "./IdentificationSection.css"

const IdentificationSection = () => {
  return (
    <section className="new-cycle-wrapper">
      <div className="new-cycle-header">
        <img src="./media/novo_ciclo_banner.png"></img>
      </div>
      <div className="feeling-section-out-text">
        <h3>VOCÊ JÁ SENTIU QUE...</h3>
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
              <li>Sabe que poderia viver diferente, mas não sabe por onde começar?</li>
              <li>A procrastinação tem te impedido de viver o que Deus já sonhou para você?</li>
              <li>O medo tem travado seus passos e silenciado os desejos do seu coração?</li>
            </ul>
        </div>
      </div>
      <div className="reviver-callout">
        <p>No REVIVER, nós caminhamos juntos nesse processo.</p>
        <p>Quando você entende como funciona, suas escolhas se tornam leves e conscientes.</p>
        <p>É assim que você assume o papel de autor da sua história e passa a vive-la como verdadeiro protagonista.</p>
      </div>
    </section>
  );
};

export default IdentificationSection;