import {useState} from 'react';
import "./SubscribeFormSection.css";
import { Link, redirect } from 'react-router-dom'
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

    const whatsappMessage = (
`Olá! 👋

🏷️ Nome: ${formData.nome}
📧 Email: ${formData.email}
📱 WhatsApp: ${formData.celular}

Gostaria de saber mais sobre a Imersão Reviver!

Obrigado(a)! 🙏`
    );

    const encodedMessage = encodeURIComponent(whatsappMessage);
    const whatsappRedirect = `https://whatsa.me/55971697154/?t=${encodedMessage}`
    window.open(whatsappRedirect, '_blank')


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
      setCadastrando(false);
        alert(
            `Não foi possível realizar o cadastro: \n• ${data.errors.join("\n")}`
        )
        return;
    }

    setCadastrando(false);
    alert("Usuário cadastrado com sucesso!");
  };

  const loader = (
    <div role="status">
        <svg ariaHidden="true" class="w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
        </svg>
        <span className="sr-only">Loading...</span>
    </div>
  );

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
                        {loader} Cadastrando
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