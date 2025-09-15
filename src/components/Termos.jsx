import "./Termos.css"
import "../components/body_components/FooterSection"
import FooterSection from "../components/body_components/FooterSection";
import { Link } from "react-router-dom";
const Termos = () => {
  return (
    <section className="termos">
    <TermsSection />
    <PoliticaPrivacidade />
    <FooterSection />
      <p className="link-to">
        <Link to="/" className="link-to">
          Home
        </Link>
      </p>
    </section>
  )
}

const TermsSection = () => {
  return (
    <section>
      <h1>Termos de Uso</h1>
      <p>Última atualização: 14 de setembro de 2025</p>
      <p>
        Bem-vindo ao nosso site! Ao acessar e utilizar nossos serviços, você concorda com estes Termos de Uso.
      </p>
      <p>
        Você se compromete a fornecer informações verdadeiras e corretas no formulário e entende que o uso indevido dos nossos serviços é proibido.
      </p>
      <p>
        Podemos atualizar estes termos a qualquer momento, e é sua responsabilidade consultá-los regularmente.
      </p>
    </section>
  );
};

const PoliticaPrivacidade = () => {
  return (
    <section>
      <h1>Política de Privacidade</h1>


      <h2>1. Informações Coletadas</h2>
      <p>
        Coletamos informações pessoais fornecidas por você através de formulários neste
        site, incluindo: <strong>nome, e-mail e número de celular</strong>.
      </p>

      <h2>2. Finalidade da Coleta</h2>
      <ul>
        <li>Entrar em contato com você;</li>
        <li>Enviar informações e atualizações relacionadas aos nossos serviços;</li>
        <li>Melhorar a experiência de uso do site.</li>
      </ul>

      <h2>3. Compartilhamento de Dados</h2>
      <p>
        Não vendemos, trocamos ou compartilhamos suas informações pessoais com terceiros,
        exceto quando exigido por lei.
      </p>

      <h2>4. Armazenamento e Segurança</h2>
      <p>
        Seus dados são armazenados em sistemas seguros (como planilhas do Google Sheets)
        e adotamos medidas razoáveis para protegê-los contra acessos não autorizados.
      </p>

      <h2>5. Direitos do Usuário</h2>
      <p>
        Conforme a LGPD, você tem o direito de solicitar a exclusão ou atualização de
        seus dados pessoais a qualquer momento, entrando em contato conosco.
      </p>

      <h2>6. Alterações desta Política</h2>
      <p>
        Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que
        você consulte esta página de tempos em tempos.
      </p>

      <h2>7. Contato</h2>
      <p>
        Para exercer seus direitos ou esclarecer dúvidas sobre esta política, entre em
        contato pelo e-mail: <em>app.juliog@gmail.com</em>.
      </p>
    </section>
  );
}

export default Termos;