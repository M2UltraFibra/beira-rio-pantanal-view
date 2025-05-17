
import React from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Fish, Anchor, TreeDeciduous, MapPin } from "lucide-react";

type ActivityProps = {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageUrl: string;
}

const ActivityCard = ({ icon, title, description, imageUrl }: ActivityProps) => {
  return (
    <Card className="overflow-hidden h-full border-none shadow-lg group">
      <div className="h-40 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition duration-500 group-hover:scale-110"
        />
      </div>
      <CardHeader className="bg-white pt-5">
        <div className="flex items-center gap-3 mb-2">
          <div className="bg-pousada-green/20 p-2 rounded-full">
            {icon}
          </div>
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
        </div>
        <CardDescription className="text-sm">{description}</CardDescription>
      </CardHeader>
    </Card>
  );
};

const ActivitiesSection = () => {
  const activities = [
    {
      icon: <Fish size={24} className="text-pousada-green" />,
      title: "Pesca Esportiva",
      description: "Experimente momentos inesquecíveis de pesca no Rio Miranda, um dos melhores pontos de pesca do Brasil, com opções para iniciantes e pescadores experientes.",
      imageUrl: "https://images.unsplash.com/photo-1516016219524-a3937cc00495?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8ZmlzaGluZ3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <Anchor size={24} className="text-pousada-green" />,
      title: "Passeios de Barco",
      description: "Navegue pelo Rio Miranda e observe a fauna e flora do Pantanal. Nossos guias especializados compartilham conhecimentos sobre esse ecossistema único.",
      imageUrl: "https://images.unsplash.com/photo-1599933190257-ade62d308472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJpdmVyJTIwYm9hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <TreeDeciduous size={24} className="text-pousada-green" />,
      title: "Trilhas Ecológicas",
      description: "Caminhe por trilhas que revelam a beleza natural do Pantanal. Ideal para observação de aves e encontros com a fauna local em seu habitat natural.",
      imageUrl: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZWNvJTIwdHJhaWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
    {
      icon: <MapPin size={24} className="text-pousada-green" />,
      title: "Gastronomia Pantaneira",
      description: "Prove os sabores autênticos da culinária pantaneira, preparados com ingredientes frescos e regionais, diretamente do maior bioma alagável do mundo.",
      imageUrl: "https://images.unsplash.com/photo-1624726175512-19b9baf9fbd1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGJyYXppbGlhbiUyMGZvb2R8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60"
    },
  ];

  return (
    <section id="activities" className="section-container">
      <h2 className="section-title">Atividades & Experiências</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Descubra o que o Pantanal tem de melhor através das nossas experiências exclusivas
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <ActivityCard 
            key={index}
            icon={activity.icon}
            title={activity.title}
            description={activity.description}
            imageUrl={activity.imageUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ActivitiesSection;
