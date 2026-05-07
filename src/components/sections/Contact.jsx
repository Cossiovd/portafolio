import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';
import Reveal from '../ui/Reveal';

const contactMethods = [
  {
    name: 'LinkedIn',
    description: 'Conectemos profesionalmente y hablemos de proyectos.',
    icon: <FaLinkedinIn />,
    link: 'https://www.linkedin.com/in/dayana-cossio-vargas-093b561b7/',
    color: 'bg-[#0077b5]',
    action: 'Ver Perfil'
  },
  {
    name: 'GitHub',
    description: 'Explora mis repositorios y contribuciones de código.',
    icon: <FaGithub />,
    link: 'https://github.com/Cossiovd',
    color: 'bg-[#333]',
    action: 'Ver Proyectos'
  },
  {
    name: 'WhatsApp',
    description: 'Escríbeme para una respuesta rápida y directa.',
    icon: <FaWhatsapp />,
    link: 'https://wa.me/573015255072',
    color: 'bg-[#25D366]',
    action: 'Enviar Mensaje'
  },
  {
    name: 'Email',
    description: 'Envíame un correo para consultas más detalladas.',
    icon: <FaEnvelope />,
    link: 'mailto:dayana-cossio@hotmail.com',
    color: 'bg-primary',
    action: 'Escribir Email'
  }
];

export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 md:px-16 lg:px-32 bg-light dark:bg-dark transition-colors duration-300 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <Reveal>
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
              ¡Conectemos!
            </h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-dark/70 dark:text-white/70 text-lg max-w-2xl mx-auto">
              Estoy siempre abierta a nuevas oportunidades, colaboraciones o simplemente a una buena charla sobre tecnología.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactMethods.map((method, index) => (
            <Reveal key={method.name} delay={index * 0.1}>
              <a 
                href={method.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="group block h-full p-8 bg-white dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-3xl shadow-sm hover:shadow-xl hover:border-primary/30 transition-all duration-500 hover:-translate-y-2"
              >
                <div className={`w-14 h-14 ${method.color} text-white rounded-2xl flex items-center justify-center text-2xl mb-6 shadow-lg transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3`}>
                  {method.icon}
                </div>
                
                <h3 className="text-xl font-bold text-dark dark:text-white mb-3 flex items-center gap-2">
                  {method.name}
                  <FaExternalLinkAlt className="text-[10px] opacity-0 group-hover:opacity-50 transition-opacity" />
                </h3>
                
                <p className="text-dark/60 dark:text-white/60 text-sm leading-relaxed mb-6">
                  {method.description}
                </p>
                
                <span className="text-sm font-bold text-primary flex items-center gap-2 mt-auto">
                  {method.action}
                  <span className="w-0 group-hover:w-4 h-[1px] bg-primary transition-all duration-300"></span>
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.5}>
          <div className="mt-20 p-8 md:p-12 bg-dark dark:bg-white/5 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8 border border-white/10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center text-3xl">
                <FaMapMarkerAlt className="text-primary" />
              </div>
              <div>
                <p className="text-white/50 text-sm font-medium mb-1">Ubicación Actual</p>
                <p className="text-xl font-bold">Medellín, Colombia</p>
              </div>
            </div>
            
            <div className="hidden md:block w-[1px] h-12 bg-white/10"></div>
            
            <div className="text-center md:text-right">
              <p className="text-white/70 text-lg mb-2 italic">"Construyendo el futuro, una línea de código a la vez."</p>
              <p className="text-primary font-medium text-sm">Disponibilidad para proyectos remotos</p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
