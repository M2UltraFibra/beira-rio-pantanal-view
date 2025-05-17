
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { toast } from "sonner";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a backend
    console.log("Form submitted:", formData);
    toast.success("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      message: ""
    });
  };

  return (
    <section id="contact" className="section-container bg-pousada-green/10">
      <h2 className="section-title">Entre em Contato</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Estamos à disposição para tirar suas dúvidas, receber suas sugestões ou agendar sua reserva
      </p>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
        <Card className="border-none shadow-md">
          <CardContent className="p-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input 
                  id="name" 
                  name="name" 
                  placeholder="Seu nome completo" 
                  value={formData.name} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input 
                  id="email" 
                  name="email" 
                  type="email" 
                  placeholder="seu.email@exemplo.com" 
                  value={formData.email} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="phone">Telefone</Label>
                <Input 
                  id="phone" 
                  name="phone" 
                  placeholder="(XX) XXXXX-XXXX" 
                  value={formData.phone} 
                  onChange={handleChange} 
                  required 
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Como podemos ajudar? Informe detalhes sobre sua reserva ou dúvida." 
                  value={formData.message} 
                  onChange={handleChange} 
                  rows={4} 
                  required 
                />
              </div>
              
              <Button type="submit" className="btn-primary w-full mt-6">
                Enviar Mensagem
              </Button>
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2 font-serif">Localização</h3>
            <p className="text-muted-foreground">
              Estrada Pantaneira, KM 25<br />
              Beira do Rio Miranda<br />
              Miranda - MS, Brasil<br />
              CEP: 79380-000
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-2 font-serif">Contato Direto</h3>
            <p className="text-muted-foreground">
              reservas@pousadabeiramirada.com.br<br />
              +55 (67) 99999-9999<br />
              Horário de atendimento: 8h às 20h
            </p>
          </div>
          
          <div className="rounded-lg overflow-hidden h-64 shadow-md">
            {/* This would be a Google Map embed in a real website */}
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-500">
              Mapa de Localização
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
