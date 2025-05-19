import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button"; // For potential category filters
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; // For category tabs

interface ImageItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  caption?: string;
}

const imagesData: ImageItem[] = [
  {
    id: "acomodacao1",
    src: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Interior de uma acomodação aconchegante na Pousada do Inácio",
    category: "Acomodações",
    caption: "Conforto e charme em cada detalhe.",
  },
  {
    id: "acomodacao2",
    src: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    alt: "Cabana charmosa com varanda na Pousada do Inácio",
    category: "Acomodações",
    caption: "Sua varanda privativa para relaxar.",
  },
  {
    id: "pesca1",
    src: "https://images.unsplash.com/photo-1547093359-34894e755203?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    alt: "Pescador no Rio Miranda ao amanhecer",
    category: "Pontos de Pesca",
    caption: "Aventura de pesca no Rio Miranda.",
  },
  {
    id: "pesca2",
    src: "https://images.unsplash.com/photo-1506665531195-3055de0795e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Vista panorâmica de um ponto de pesca no Rio Miranda",
    category: "Pontos de Pesca",
    caption: "Paisagens deslumbrantes para sua pescaria.",
  },
  {
    id: "comodidade1",
    src: "https://images.unsplash.com/photo-1505275350444-8363bb508c2c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Área de refeições ao ar livre na Pousada do Inácio",
    category: "Comodidades",
    caption: "Saboreie a culinária local ao ar livre.",
  },
  {
    id: "comodidade2",
    src: "https://images.unsplash.com/photo-1570315697801-710503600801?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Redes para descanso em meio à natureza na Pousada do Inácio",
    category: "Comodidades",
    caption: "Relaxe em nossas redes com vista para a natureza.",
  },
  {
    id: "arredores1",
    src: "https://images.unsplash.com/photo-1500332981807-ba9b5a08a529?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Trilha na natureza exuberante ao redor da Pousada",
    category: "Arredores",
    caption: "Explore as trilhas e a beleza natural.",
  },
  {
    id: "arredores2",
    src: "https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    alt: "Pássaro nativo observado nos arredores da Pousada",
    category: "Arredores",
    caption: "Observe a rica fauna local.",
  },
];

const categories = ["Todas", ...new Set(imagesData.map((img) => img.category))];

export default function GaleriaImagens() {
  const [selectedCategory, setSelectedCategory] = useState("Todas");
  const [openDialog, setOpenDialog] = useState(false);
  const [selectedImage, setSelectedImage] = useState<ImageItem | null>(null);

  const filteredImages = selectedCategory === "Todas"
    ? imagesData
    : imagesData.filter((img) => img.category === selectedCategory);

  const handleImageClick = (image: ImageItem) => {
    setSelectedImage(image);
    setOpenDialog(true);
  };

  return (
    <div className="w-full">
      <Tabs defaultValue="Todas" className="w-full mb-6 md:mb-8">
        <TabsList className="grid w-full grid-cols-3 sm:grid-cols-5 gap-2">
          {categories.map((category) => (
            <TabsTrigger 
              key={category} 
              value={category} 
              onClick={() => setSelectedCategory(category)}
              className="text-xs sm:text-sm"
            >
              {category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {filteredImages.map((image) => (
          <div
            key={image.id}
            className="aspect-square rounded-lg overflow-hidden cursor-pointer group relative shadow-lg hover:shadow-xl transition-shadow duration-300"
            onClick={() => handleImageClick(image)}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-2 md:p-3">
              {image.caption && <p className="text-white text-xs md:text-sm truncate">{image.caption}</p>}
            </div>
          </div>
        ))}
      </div>

      {selectedImage && (
        <Dialog open={openDialog} onOpenChange={setOpenDialog}>
          <DialogContent className="max-w-3xl max-h-[90vh] p-2 sm:p-4">
            <img 
              src={selectedImage.src} 
              alt={selectedImage.alt} 
              className="max-w-full max-h-[80vh] object-contain rounded-md mx-auto"
            />
            {selectedImage.caption && (
              <p className="text-center text-sm text-muted-foreground mt-2">
                {selectedImage.caption}
              </p>
            )}
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
}

export default GallerySection;
