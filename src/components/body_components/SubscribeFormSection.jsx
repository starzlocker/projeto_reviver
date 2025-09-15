import {useState} from 'react';
import "./SubscribeFormSection.css";
import { Link } from 'react-router-dom'
const SubscribeFormSection = ({fullPrice, discountPrice}) => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    celular: '',
    check: '',
  });

  const [cadastrando, setCadastrando] = useState(false);

  const apiSheet = "https://script.google.com/macros/s/AKfycbzG0wPWqcgaqjmyBwxhKOrZx995f90d69sWX49iWyHiT7g-yTAmf880F4MJRnvwonxa/exec" 


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    if (cadastrando) {
        return;
    }
    setCadastrando(true);


    e.preventDefault();

    if (formData.check != 10) {
        alert("O valor da soma está incorreto!");
        setCadastrando(false);
        return;
    }

    setFormData(prevState => ({
    ...prevState,
    check: ""
    }));
    
    const request = {
        "nome": formData.nome,
        "email": formData.email,
        "celular": formData.celular
    };

    const response = await fetch(apiSheet, {
        method: 'POST',
        body: JSON.stringify(request)
    });

    if (!response.ok) {
        console.error("A requisição falhou");
        setCadastrando(false);
        return;
    }

    const data = await response.json();

    if (data.errors) {
        alert(
            `Não foi possível realizar o cadastro: \n• ${data.errors.join("\n")}`
        )
        setCadastrando(false);
        return;
    }

    setCadastrando(false);

    alert("Usuário cadastrado com sucesso!");
  };

  return (
    <section className="subscribe-section" id="subscribe_section">
      <h2 className="section-title text-white">Garanta sua Transformação</h2>
      <form className="subscribe-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
            type="text" 
            name="nome" 
            placeholder="Seu nome completo"
            value={formData.nome}
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
            name="celular" 
            placeholder="Seu WhatsApp"
            value={formData.celular}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <input 
            type="number" 
            name="check" 
            placeholder="Quanto é 3 + 7?"
            value={formData.check}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label className="check_field">
            <input
              type="checkbox"
              name="consentimento"
              onChange={handleInputChange}
              required
            />
            <span>
              Li e concordo com os <Link to="/termos" className="underline text-blue-400">Termos de Uso</Link> e a <a href="/privacidade" className="underline text-blue-400">Política de Privacidade</a>.
            </span>
          </label>
        </div>
        <div className="form-footer" id="subscribe_button">
            {
                cadastrando ?
                    <button type="submit" className="cta-button disabled">
                        ADQUIRIR MEU LUGAR
                    </button>
                    :
                    <button type="submit" className="cta-button">
                        ADQUIRIR MEU LUGAR
                    </button>
            }
          <div className="price-info">
            <p className="old-price">De R$ {fullPrice.toFixed(2)}</p>
            <p className="new-price">Por R$ {discountPrice.toFixed(2)}</p>
            <p className="payment-info">Parcelamos no cartão de crédito</p>
          </div>
        </div>
      </form>
    </section>
  );
};


export default SubscribeFormSection;