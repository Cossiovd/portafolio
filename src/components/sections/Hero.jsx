import React from 'react';
import Button from '../ui/Button';

export default function Hero() {
  return (
    <section id="inicio" className="w-full min-h-screen flex items-center justify-center px-6 md:px-16 lg:px-32 bg-white pt-20">
      <div className="max-w-5xl w-full flex flex-col gap-6">
        <p className="text-[#2563eb] text-lg md:text-xl font-medium tracking-wide">
          Hola, soy
        </p>
        <h1 className="text-[#1a1a1a] text-5xl md:text-6xl lg:text-[72px] font-bold leading-tight font-['Inter',sans-serif]">
          Dayana Cossio Vargas
        </h1>
        <h2 className="text-[#717182] text-2xl md:text-3xl lg:text-[40px] font-normal mt-2">
          Ingeniera de Software | Soluciones Digitales | Frontend & UX/UI | Gestión de Proyectos
        </h2>
        <p className="text-[rgba(26,26,26,0.8)] text-lg md:text-xl leading-relaxed max-w-3xl mt-4">
          Ingeniera de Software enfocada en el diseño y construcción de soluciones digitales, combinando desarrollo frontend y experiencia de usuario. Cuento con experiencia en análisis de requerimientos, diseño de soluciones y participación en el ciclo de vida de proyectos bajo metodologías ágiles, orientando el desarrollo a productos funcionales, escalables y alineados al negocio.
        </p>
        
        <div className="flex flex-wrap gap-4 mt-8">
          <Button variant="primary" className="px-8 py-3.5 text-lg">
            Ver proyectos
          </Button>
          <Button variant="outline" className="px-8 py-3.5 text-lg">
            Contactar
          </Button>
        </div>
      </div>
    </section>
  );
}
