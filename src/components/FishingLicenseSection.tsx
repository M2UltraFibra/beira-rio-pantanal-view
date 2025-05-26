import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, FileText } from "lucide-react";

const FishingLicenseSection = () => {
  return (
    <section id="fishing-license" className="section-container bg-white">
      <h2 className="section-title">Carteira de Pesca Esportiva</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Todo pescador com mais de 18 anos precisa ter a carteira de pesca
        amadora para praticar a atividade legalmente no Brasil
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Card className="border-none shadow-md">
          <CardContent className="p-6 text-center">
            <div className="mb-6">
              <FileText size={64} className="mx-auto mb-4 text-primary" />
              <h3 className="text-xl font-semibold mb-2 font-serif">
                Documento Obrigatório
              </h3>
              <p className="text-muted-foreground text-sm">
                Para pesca esportiva em todo território nacional
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 font-serif">
              Licença de Pesca
            </h3>
            <p className="text-muted-foreground mb-4">
              A licença é obrigatória tanto para pesca embarcada quanto 
              desembarcada. Todo pescador deve portar o documento durante 
              a atividade.
            </p>

            <p className="text-muted-foreground mb-6">
              Obtenha sua licença de forma rápida e 100% online através do
              portal oficial do governo.
            </p>
          </div>

          <Button
            className="btn-primary inline-flex items-center gap-2"
            onClick={() =>
              window.open(
                "https://www.gov.br/pt-br/servicos/solicitar-licenca-de-pescador-amador",
                "_blank"
              )
            }
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
