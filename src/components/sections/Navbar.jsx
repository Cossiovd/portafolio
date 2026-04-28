import React from 'react';
import Button from '../ui/Button';

export default function Navbar() {
  return (
    <nav className="w-full h-[72px] flex items-center justify-between px-6 md:px-16 lg:px-32 bg-white fixed top-0 z-50 shadow-sm">
      <div className="text-[#1a1a1a] text-2xl font-bold font-['Inter',sans-serif]">
        DC
      </div>
      
      <div className="hidden md:flex items-center gap-8">
        <a href="#inicio" className="text-[#2563eb] font-medium border-b-2 border-[#2563eb] pb-1">Inicio</a>
        <a href="#sobre-mi" className="text-[rgba(26,26,26,0.7)] hover:text-[#2563eb] font-medium transition-colors">Sobre mí</a>
        <a href="#proyectos" className="text-[rgba(26,26,26,0.7)] hover:text-[#2563eb] font-medium transition-colors">Proyectos</a>
        <a href="#habilidades" className="text-[rgba(26,26,26,0.7)] hover:text-[#2563eb] font-medium transition-colors">Habilidades</a>
        <a href="#experiencia" className="text-[rgba(26,26,26,0.7)] hover:text-[#2563eb] font-medium transition-colors">Experiencia</a>
        <a href="#contacto" className="text-[rgba(26,26,26,0.7)] hover:text-[#2563eb] font-medium transition-colors">Contacto</a>
      </div>
      
      <Button>
        Contáctame
      </Button>
    </nav>
  );
}
