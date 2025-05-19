import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-pousada-green/90 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">Pousadas do Início</h3>
            <p className="text-white/80">
              Experiências à beira do Rio Miranda
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-white/70 transition-colors">Início</a></li>
              <li><a href="#gallery" className="hover:text-white/70 transition-colors">Galeria</a></li>
              <li><a href="#accommodations" className="hover:text-white/70 transition-colors">Acomodações</a></li>
              <li><a href="#activities" className="hover:text-white/70 transition-colors">Atividades</a></li>
              <li><a href="#contact" className="hover:text-white/70 transition-colors">Contato</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-4 font-serif">Redes Sociais</h3>
            <div className="flex space-x-4">
              {/* Ícones como antes */}
              {/* Facebook */}
              <a href="#" aria-label="Facebook" className="hover:text-white/70 transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              {/* Instagram */}
              <a href="#" aria-label="Instagram" className="hover:text-white/70 transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07..."/></svg>
              </a>
              {/* Twitter */}
              <a href="#" aria-label="Twitter" className="hover:text-white/70 transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656..."/></svg>
              </a>
              {/* YouTube */}
              <a href="#" aria-label="YouTube" className="hover:text-white/70 transition-colors">
                <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246..."/></svg>
              </a>
            </div>
          </div>
        </div>

        {/* Frase institucional e logo */}
        <div className="mt-8 text-center">
          <p className="text-white font-serif text-lg mb-4">Pousadas do Início – Experiências à beira do Rio Miranda</p>
          <img
            src="/logo.png" // Substitua pelo caminho correto do seu logo
            alt="Logo Pousadas do Início"
            className="mx-auto w-32 h-auto"
          />
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-sm text-center text-white/70">
          <p>&copy; {currentYear} Pousadas do Início. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
