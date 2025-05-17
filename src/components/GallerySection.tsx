
import React from "react";
import { Card, CardContent } from "@/components/ui/card";

type GalleryItemProps = {
  image: string;
  title: string;
}

const GalleryItem = ({ image, title }: GalleryItemProps) => {
  return (
    <Card className="overflow-hidden group">
      <CardContent className="p-0 relative">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105" 
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="text-white font-medium text-lg">{title}</h3>
        </div>
      </CardContent>
    </Card>
  );
};

const GallerySection = () => {
  const galleryItems = [
    {
      image: "https://images.unsplash.com/photo-1618773928121-c32242e63f39?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8aG90ZWwlMjByb29tfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Acomodações Confortáveis"
    },
    {
      image: "https://images.unsplash.com/photo-1504893524553-b855bce32c67?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVsYXglMjByaXZlcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Vista Panorâmica para o Rio"
    },
    {
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dHJhZGl0aW9uYWwlMjBmb29kfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
      title: "Gastronomia Regional"
    },
    {
      image: "https://images.unsplash.com/photo-1520031607503-2d59cba835c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGZpc2hpbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60", 
      title: "Pesca Esportiva"
    },
    {
      image: "https://images.unsplash.com/photo-1599933190257-ade62d308472?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJpdmVyJTIwYm9hdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
      title: "Passeios de Barco"
    },
    {
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGFudGFuYWwlMjBicmF6aWx8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",
      title: "Natureza Exuberante"
    }
  ];

  return (
    <section id="gallery" className="section-container bg-white">
      <h2 className="section-title">Conheça Nossa Pousada</h2>
      <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
        Desfrute de momentos inesquecíveis em meio à natureza do Pantanal, com o conforto e a tranquilidade que você merece.
      </p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryItems.map((item, index) => (
          <GalleryItem 
            key={index}
            image={item.image}
            title={item.title}
          />
        ))}
      </div>
    </section>
  );
};

export default GallerySection;
