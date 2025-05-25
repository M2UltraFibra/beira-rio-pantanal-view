
import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";

const FishingLicenseSection = () => {
  return (
    <section className="section-container bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Card className="bg-gradient-to-br from-blue-600 to-blue-800 text-white border-none shadow-xl">
          <CardContent className="p-8 text-center">
            <div className="mb-6">
              <FileText size={64} className="mx-auto mb-4 text-white" />
              <h3 className="text-2xl font-bold mb-2">Documento Obrigatório</h3>
              <p className="text-blue-100 text-sm">
                Para pesca esportiva em todo território nacional
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-semibold mb-4 text-primary">
              Carteira de Pesca Esportiva
            </h2>
            <p className="text-muted-foreground mb-4">
              Todo pescador com mais de 18 anos precisa ter a carteira de pesca 
              amadora para praticar a atividade legalmente no Brasil. A licença é 
              obrigatória tanto para pesca embarcada quanto desembarcada.
            </p>
            <p className="text-muted-foreground mb-6">
              Obtenha sua licença de forma rápida e 100% online através do portal 
              oficial do governo.
            </p>
          </div>

          <Button 
            className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3 rounded-md transition-all shadow-lg inline-flex items-center gap-2"
            onClick={() => window.open('https://www.gov.br/ibama/pt-br/assuntos/fauna-e-recursos-pesqueiros/pesca/registro-geral-da-atividade-pesqueira-rgp/licenca-de-pesca-amadora', '_blank')}
          >
            Solicitar Carteira de Pesca
            <ExternalLink size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FishingLicenseSection;
