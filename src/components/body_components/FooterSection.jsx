import { Link } from 'react-router-dom'

const FooterSection = () => {
  return (
    <footer className="footer-section bg-gray-100 text-center py-6 text-sm mt-10">
      <p>&copy; {new Date().getFullYear()} Movimento Reviver. Todos os direitos reservados.</p>
    </footer>
  );
};

export default FooterSection;