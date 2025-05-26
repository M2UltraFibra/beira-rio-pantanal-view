import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AnimatedFish from "@/components/AnimatedFish";

const Blog = () => {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section do Blog */}
      <section className="pt-20 pb-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
              Blog da Pousada Beira Rio
            </h1>
            <p className="text-xl text-muted-foreground">
              Dicas, experiências e guias completos sobre pesca esportiva no
              Pantanal
            </p>
          </div>
        </div>
      </section>

      {/* Artigo Principal */}
      <article className="section-container bg-white">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6 font-serif">
              Pesca Esportiva em Águas do Miranda: O Paraíso dos Pescadores no
              Pantanal
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Descubra por que Águas do Miranda é considerado um dos melhores
              destinos de pesca esportiva do Brasil e como vivenciar uma
              experiência transformadora no coração do Mato Grosso do Sul.
            </p>
            <div className="mt-8">
              <img
                src="https://images.unsplash.com/photo-1500673922987-e212871fec22?w=800&h=400&fit=crop"
                alt="Rio Miranda com águas cristalinas em Águas do Miranda, Bonito MS, ideal para pesca esportiva"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>
          </header>

          <div className="space-y-8 text-lg leading-relaxed">
            <p className="text-xl text-gray-700 font-medium">
              Imagine-se às margens do Rio Miranda, com a linha na água e o
              coração acelerado esperando pela fisgada do dourado dos seus
              sonhos. A <strong>pesca esportiva em Águas do Miranda</strong> não
              é apenas um hobby - é uma experiência que conecta você com a
              natureza mais selvagem e preservada do Pantanal
              Sul-Mato-Grossense.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Por Que Águas do Miranda é o Destino Perfeito para Pesca
              Esportiva?
            </h2>

            <div className="my-8">
              <img
                src="https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?w=800&h=400&fit=crop"
                alt="Paisagem do Pantanal em Águas do Miranda com rio serpenteando entre montanhas, destino ideal para turismo de pesca"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <p>
              Localizada estrategicamente no distrito de{" "}
              <strong>Bonito-MS</strong>, Águas do Miranda oferece uma das mais
              ricas biodiversidades aquáticas do país. O Rio Miranda, com suas
              águas cristalinas e correnteza moderada, abriga espécies nobres
              que fazem o coração de qualquer pescador acelerar: dourado,
              pintado, pacu, piavuçu e jaú são apenas algumas das espécies que
              você pode encontrar durante sua{" "}
              <strong>pescaria em Bonito</strong>.
            </p>

            <blockquote className="border-l-4 border-pousada-green pl-6 py-4 bg-green-50 italic text-lg">
              "Quer saber qual é o melhor período para pegar aquele dourado
              campeão que você sempre sonhou? Continue lendo e descubra os
              segredos dos pescadores locais!"
            </blockquote>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Melhores Épocas para Pesca Esportiva no Pantanal
            </h2>

            <p>
              O <strong>turismo de pesca</strong> em Águas do Miranda é
              favorecido pelo clima tropical que proporciona condições ideais
              durante praticamente todo o ano. No entanto, conhecer as estações
              pode fazer toda a diferença no sucesso da sua pescaria:
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Período de Seca (Maio a Setembro)
            </h3>

            <p>
              Durante os meses secos, os peixes se concentram nos poços mais
              profundos, facilitando a localização e aumentando as chances de
              captura. É a época preferida pelos{" "}
              <strong>pescadores amadores</strong> e profissionais,
              especialmente para a pesca do dourado e pintado.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Período de Cheia (Outubro a Abril)
            </h3>

            <p>
              As águas mais altas dispersam os peixes, mas oferecem a
              oportunidade única de pescar em meio à natureza exuberante, com a
              fauna e flora pantaneiras em pleno vigor. Ideal para quem busca
              uma experiência de <strong>ecoturismo</strong> completa.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Pousadas para Pesca em Águas do Miranda: Estrutura que Faz a
              Diferença
            </h2>

            <div className="my-8">
              <img
                src="https://images.unsplash.com/photo-1472396961693-142e6e269027?w=800&h=400&fit=crop"
                alt="Paisagem natural do Pantanal próxima às pousadas para pesca em Águas do Miranda, Bonito MS"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <p>
              Escolher as{" "}
              <strong>pousadas para pesca em Águas do Miranda</strong> adequadas
              é fundamental para o sucesso da sua viagem. As Pousadas do Inácio
              oferecem uma <strong>estrutura para pescadores amadores</strong> e
              profissionais que inclui:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li>Acomodações confortáveis à beira do Rio Miranda</li>
              <li>Freezers para conservação dos peixes</li>
              <li>Área de limpeza e preparo dos pescados</li>
              <li>Guias especializados conhecedores da região</li>
              <li>Embarcações equipadas e seguras</li>
              <li>Alimentação regional de qualidade</li>
            </ul>

            <blockquote className="border-l-4 border-pousada-green pl-6 py-4 bg-green-50 italic text-lg">
              "Já imaginou acordar com o som do rio e ter sua embarcação pronta
              para mais um dia de pescaria inesquecível?"
            </blockquote>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Fauna Aquática: Os Troféus que Te Esperam
            </h2>

            <p>
              A diversidade de espécies torna cada{" "}
              <strong>viagem de pesca no MS</strong> única e emocionante.
              Conheça os principais alvos dos pescadores:
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Dourado - O Rei dos Rios
            </h3>

            <p>
              Conhecido como o "rei dos rios", o dourado é o peixe mais cobiçado
              da <strong>pesca esportiva</strong>. Com sua coloração dourada
              característica e briga intensa, pode ultrapassar os 15kg e
              proporcionar momentos de pura adrenalina.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Pintado - O Gigante Silencioso
            </h3>

            <p>
              O pintado, com suas pintas características, é um dos maiores
              peixes de couro do Pantanal. Pescadores experientes sabem que sua
              captura exige técnica e paciência, mas a recompensa é
              inesquecível.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Pacu - Força e Velocidade
            </h3>

            <p>
              O pacu combina força e agilidade, oferecendo uma briga
              emocionante. É uma excelente opção para{" "}
              <strong>pescadores amadores</strong> que querem vivenciar a emoção
              da pesca pantaneira.
            </p>

            <div className="my-8">
              <img
                src="https://images.unsplash.com/photo-1518877593221-1f28583780b4?w=800&h=400&fit=crop"
                alt="Pescador praticando pesca esportiva sustentável no Rio Miranda, Águas do Miranda, Bonito MS"
                className="w-full h-64 object-cover rounded-lg shadow-lg"
              />
            </div>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Roteiros Personalizados para Cada Tipo de Pescador
            </h2>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Para Famílias com Crianças
            </h3>

            <p>
              Roteiros que combinam <strong>natureza e aventura</strong> com
              segurança, incluindo pesca de lambaris e pacus menores, passeios
              ecológicos e observação da fauna local. Uma forma perfeita de
              introduzir os pequenos ao mundo da pesca responsável.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Para Grupos de Amigos
            </h3>

            <p>
              Expedições focadas na pesca de espécies troféu, com competições
              amigáveis e momentos de confraternização à beira do rio. Inclui
              churrascos com os peixes pescados e degustação da culinária
              pantaneira.
            </p>

            <h3 className="text-2xl font-semibold text-primary mt-8 mb-4">
              Para Pescadores Solo
            </h3>

            <p>
              Experiências contemplativas que combinam a pesca com momentos de
              conexão profunda com a natureza. Ideal para quem busca paz,
              reflexão e o desafio pessoal de dominar as técnicas de pesca
              pantaneira.
            </p>

            <blockquote className="border-l-4 border-pousada-green pl-6 py-4 bg-green-50 italic text-lg">
              "Qual tipo de pescador você é? Independente da resposta, temos a
              experiência perfeita esperando por você!"
            </blockquote>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Pesca Sustentável: Preservando o Paraíso para as Futuras Gerações
            </h2>

            <p>
              A <strong>pesca esportiva em Águas do Miranda</strong> é praticada
              seguindo rigorosos princípios de sustentabilidade. Nosso
              compromisso vai além de proporcionar momentos inesquecíveis -
              trabalhamos ativamente para a preservação do ecossistema
              pantaneiro:
            </p>

            <ul className="list-disc pl-8 space-y-2">
              <li>Prática do "pesque e solte" para espécies reprodutoras</li>
              <li>Respeito aos períodos de defeso</li>
              <li>Uso de anzóis sem farpa quando possível</li>
              <li>Educação ambiental para todos os hóspedes</li>
              <li>Apoio a projetos de conservação local</li>
              <li>Monitoramento da qualidade da água</li>
            </ul>

            <p>
              Nossos guias são capacitados não apenas para encontrar os melhores
              pontos de pesca, mas também para educar sobre a importância da
              conservação. Cada pescador que visita nosso{" "}
              <strong>pesqueiro</strong> torna-se um embaixador da preservação
              pantaneira.
            </p>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              A Experiência Completa nas Pousadas do Inácio
            </h2>

            <p>
              Mais do que simples <strong>pousadas em Águas do Miranda</strong>,
              oferecemos uma experiência completa de imersão na cultura e
              natureza pantaneiras. Nossa{" "}
              <strong>pousada com estrutura para pescador</strong> foi projetada
              pensando em cada detalhe:
            </p>

            <p>
              <strong>Localização Privilegiada:</strong> Às margens do Rio
              Miranda, com acesso direto às melhores pesqueiras da região. Você
              sai da sua acomodação e já está no paraíso da pesca.
            </p>

            <p>
              <strong>Conforto e Comodidade:</strong> Quartos climatizados com
              vista para o rio, área de convivência, e todas as facilidades para
              que você descanse após um dia intenso de pescaria.
            </p>

            <p>
              <strong>Gastronomia Regional:</strong> Delicie-se com pratos
              típicos preparados com ingredientes frescos, incluindo os peixes
              que você mesmo pescou, preparados por chefs especialistas em
              culinária pantaneira.
            </p>

            <p>
              <strong>Guias Especializados:</strong> Nossa equipe conhece cada
              recanto do Rio Miranda. Eles não apenas levam você aos melhores
              pontos, mas compartilham conhecimentos sobre técnicas de pesca,
              comportamento dos peixes e história da região.
            </p>

            <blockquote className="border-l-4 border-pousada-green pl-6 py-4 bg-green-50 italic text-lg">
              "Que tal transformar seu sonho de pesca em realidade? O Rio
              Miranda está chamando, e nós temos tudo pronto para recebê-lo!"
            </blockquote>

            <h2 className="text-3xl font-bold text-primary mt-12 mb-6">
              Planeje Sua Aventura no Pantanal
            </h2>

            <p>
              A <strong>pesca esportiva em Águas do Miranda</strong> é mais do
              que uma atividade - é uma jornada de descoberta, conexão com a
              natureza e criação de memórias que durarão para sempre. Seja você
              um pescador experiente em busca do próximo troféu ou um iniciante
              ansioso para aprender, nosso paraíso pantaneiro tem algo especial
              reservado para você.
            </p>

            <p>
              Não espere mais para viver essa experiência transformadora. O
              dourado dos seus sonhos está esperando, os pintados gigantes nadam
              em águas cristalinas, e toda a magia do Pantanal
              Sul-Mato-Grossense está pronta para ser descoberta.
            </p>

            <div className="bg-gradient-to-r from-pousada-green/10 to-blue-50 p-8 rounded-lg mt-12 text-center">
              <section className="mt-16 text-center">
                <h2 className="text-3xl font-semibold text-gray-800 mb-4">
                  Pronto para Sua Próxima Grande Pescaria?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Entre em contato conosco e descubra nossos pacotes exclusivos de <strong>turismo de pesca</strong>. Personalizamos cada experiência para tornar sua estadia inesquecível.
                  Faça sua reserva conosco e viva a pesca esportiva como nunca
                  antes.
                </p>

                <a
                  href="https://wa.me/5567992156433?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20pesca%20esportiva%20em%20%C3%81guas%20do%20Miranda."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-6 rounded-full shadow transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12.004 2.003c-5.52 0-10 4.478-10 9.997 0 1.76.459 3.445 1.329 4.944l-1.39 5.082 5.215-1.366c1.451.804 3.09 1.23 4.846 1.23 5.52 0 9.997-4.478 9.997-9.997s-4.477-9.997-9.997-9.997zm.022 17.998c-1.59 0-3.134-.426-4.486-1.23l-.32-.191-3.098.811.823-3.01-.208-.317c-.808-1.255-1.231-2.696-1.231-4.177 0-4.418 3.584-8.003 8.003-8.003s8.003 3.585 8.003 8.003c.001 4.419-3.584 8.004-8.003 8.004zm4.419-6.067c-.245-.122-1.446-.715-1.67-.797-.223-.082-.386-.122-.548.123-.163.245-.63.797-.772.962-.143.163-.285.183-.53.061-.244-.122-1.03-.379-1.963-1.208-.726-.647-1.215-1.447-1.358-1.691-.143-.245-.015-.377.108-.498.112-.112.244-.285.367-.428.123-.143.163-.244.244-.407.082-.163.041-.306-.02-.428-.061-.122-.548-1.324-.752-1.814-.198-.48-.4-.415-.548-.424l-.468-.008c-.163 0-.428.061-.652.306s-.857.837-.857 2.04c0 1.204.877 2.367 1.002 2.53.122.163 1.728 2.641 4.192 3.702.586.253 1.044.403 1.4.514.588.187 1.122.161 1.545.098.472-.07 1.446-.591 1.65-1.163.203-.571.203-1.061.142-1.163-.061-.102-.223-.163-.468-.285z" />
                  </svg>
                  Garanta sua Pescaria
                </a>

              <p className="text-sm text-muted-foreground">
                Águas do Miranda, Bonito-MS - Onde a pesca esportiva encontra a hospitalidade pantaneira
              </p>
              </section>
            </div>
          </div>
        </div>
      </article>

      <Footer />
      <FloatingWhatsApp />
      <AnimatedFish />
    </div>
  );
};

export default Blog;
