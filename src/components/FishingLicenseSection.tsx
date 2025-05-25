import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";

const FishingLicenseSection = () => {
  return (
    <section className="section-container bg-white py-16"> {/* Adicionado padding vertical */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> {/* Ajustado gap */}
        {/* Coluna da Imagem/Destaque */}
        <Card className="bg-gradient-to-br from-blue-700 to-blue-900 text-white border-none shadow-2xl overflow-hidden"> {/* Tons de azul mais profundos e sombra */}
          <CardContent className="p-10 text-center"> {/* Padding aumentado */}
            <div className="mb-6">
              <FileText size={72} className="mx-auto mb-6 text-blue-100" /> {/* Ícone maior e cor mais sutil */}
              <h3 className="text-3xl font-extrabold mb-3 leading-tight">Documento Essencial</h3> {/* Título mais forte e conciso */}
              <p className="text-blue-200 text-md">
                Indispensável para a pesca esportiva em todo o território nacional.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Coluna do Conteúdo Principal */}
        <div className="space-y-7"> {/* Ajustado espaçamento */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-5 text-gray-800 leading-tight"> {/* Título maior e mais robusto */}
              Licença para Pesca Esportiva
            </h2>
            <p className="text-gray-600 mb-5 text-lg leading-relaxed"> {/* Texto maior e com melhor espaçamento */}
              A **Licença de Pescador Amador** é um requisito legal para todos os praticantes da pesca esportiva maiores de 18 anos no Brasil. Esta autorização é **obrigatória** tanto para atividades de pesca embarcada quanto desembarcada, garantindo a conformidade com a legislação ambiental vigente.
            </p>
            <p className="text-gray-600 mb-8 text-lg leading-relaxed"> {/* Texto maior e com melhor espaçamento */}
              Simplifique o processo: obtenha sua licença de forma rápida e segura através do portal oficial do governo federal, com um procedimento 100% online.
            </p>
          </div>

          <Button
            className="bg-orange-600 hover:bg-orange-700 text-white font-bold px-10 py-4 rounded-lg transition-transform transform hover:scale-105 shadow-xl inline-flex items-center gap-3 text-lg" // Botão mais proeminente e com animação
            onClick={() => window.open('https://www.gov.br/pt-br/servicos/solicitar-licenca-de-pescador-amador', '_blank')}
          >
            Emitir Licença Agora
            <ExternalLink size={20} /> {/* Ícone maior */}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FishingLicenseSection;
