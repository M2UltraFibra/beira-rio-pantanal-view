
import React from "react";
import HeroSection from "@/components/HeroSection";
import GallerySection from "@/components/GallerySection";
import AccommodationSection from "@/components/AccommodationSection";
import ActivitiesSection from "@/components/ActivitiesSection";
import ContactSection from "@/components/ContactSection";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <GallerySection />
      <AccommodationSection />
      <ActivitiesSection />
      <ContactSection />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
};

export default Index;
