import "./FAQSection.css";
import {useState} from "react";

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
      "answer": "Não! A 7ª Imersão é para homens e mulheres, e casais são muito bem-vindos."
    },
    {
      "question": "A equipe do Movimento REVIVER é formada apenas por psicólogas?",
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

export default FAQSection