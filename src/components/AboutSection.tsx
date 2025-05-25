import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section-container bg-white py-16 lg:py-24">
      <h2 className="section-title text-center mb-12">Sobre a Pousada do Inácio</h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Ordem dos elementos: texto primeiro no mobile, imagem primeiro no desktop */}
        <div className="order-1 lg:order-1 space-y-6">
          <p className="text-lg text-muted-foreground leading-relaxed">
            A **Pousada do Inácio** é seu lar longe de casa em **Bonito, MS**. Localizada estrategicamente às margens do **Rio Miranda**, no Distrito Águas do Miranda, oferecemos uma experiência única que combina a emoção da pesca esportiva com o conforto e tranquilidade que você merece.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Nossa estrutura foi pensada para atender tanto os pescadores mais exigentes quanto famílias em busca de momentos de lazer e contato com a natureza. Contamos com acomodações confortáveis, áreas de convivência e acesso privilegiado ao rio.
          </p>

          <p className="text-lg text-muted-foreground leading-relaxed">
            Seja para capturar aquele peixe troféu ou simplesmente relaxar contemplando as belezas naturais da região, a Pousada do Inácio é o lugar perfeito para sua próxima aventura.
          </p>
        </div>

        {/* Imagem */}
        <div className="order-2 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1541742425281-c1d3fc8aff96?q=80&w=2012&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVu"
            alt="Equipamentos de pesca e rede de descanso em um ambiente à beira do rio" // Descrição mais detalhada da imagem para acessibilidade
            className="w-full h-auto rounded-lg shadow-lg object-cover" // Adicionado object-cover para melhor ajuste da imagem
          />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
