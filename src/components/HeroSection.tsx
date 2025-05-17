
import React from "react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <div className="relative h-screen w-full">
      {/* Hero background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
          backgroundPosition: "center center"
        }}
      >
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-white text-center px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold mb-4 animate-fade-in">
          Pousada Beira Rio Miranda
        </h1>
        <p className="text-xl md:text-2xl max-w-3xl mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
          Acorde com o som das águas no coração do Pantanal Sul-Mato-Grossense
        </p>
        <Button 
          className="btn-primary text-lg animate-fade-in" 
          style={{animationDelay: "0.4s"}}
          onClick={() => document.getElementById('contact')?.scrollIntoView({behavior: 'smooth'})}
        >
          Reservar Agora
        </Button>
      </div>
    </div>
  );
};

export default HeroSection;
