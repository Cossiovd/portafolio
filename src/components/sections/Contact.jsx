import { FaLinkedinIn, FaGithub, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa';
import Button from '../ui/Button';
import Input from '../ui/Input';
import Reveal from '../ui/Reveal';

export default function Contact() {
  return (
    <section id="contacto" className="py-24 px-6 md:px-16 lg:px-32 bg-light dark:bg-dark transition-colors duration-300">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
              Contacto
            </h2>
            <div className="h-1.5 w-20 bg-primary mx-auto rounded-full mb-6"></div>
            <p className="text-dark/70 dark:text-white/70 text-lg max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente o simplemente quieres saludar? ¡Me encantaría escucharte!
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 bg-white dark:bg-dark border border-black/5 dark:border-white/10 rounded-[32px] overflow-hidden shadow-2xl transition-colors duration-300">
          <div className="lg:col-span-5 bg-dark dark:bg-white/5 p-8 md:p-12 text-white flex flex-col justify-between">
            <Reveal delay={0.2}>
              <div>
                <h3 className="text-3xl font-bold mb-8">Hablemos</h3>
                <p className="text-white/70 text-lg mb-12">
                  Estoy disponible para nuevos proyectos y colaboraciones. ¡No dudes en escribirme!
                </p>

                <div className="space-y-10">
                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <FaEnvelope className="text-xl" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm font-medium mb-1">Email</p>
                      <a href="mailto:dayana-cossio@hotmail.com" className="text-white font-semibold text-lg hover:text-primary transition-colors">
                        dayana-cossio@hotmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-6 group">
                    <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                      <FaMapMarkerAlt className="text-xl" />
                    </div>
                    <div>
                      <p className="text-white/50 text-sm font-medium mb-1">Ubicación</p>
                      <p className="text-white font-semibold text-lg">
                        Medellín, Colombia
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="mt-16 lg:mt-0 pt-12 border-t border-white/10">
                <p className="text-white/50 text-sm font-medium mb-6">SÍGUEME EN MIS REDES</p>
                <div className="flex gap-4">
                  <a href="https://www.linkedin.com/in/dayana-cossio-vargas-093b561b7/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center text-white transition-all duration-300">
                    <FaLinkedinIn className="text-xl" />
                  </a>
                  <a href="https://github.com/Cossiovd" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center text-white transition-all duration-300">
                    <FaGithub className="text-xl" />
                  </a>
                  <a href="https://wa.me/573015255072" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-white/10 hover:bg-primary rounded-xl flex items-center justify-center text-white transition-all duration-300">
                    <FaWhatsapp className="text-xl" />
                  </a>
                </div>
              </div>
            </Reveal>
          </div>

          <div className="lg:col-span-7 p-8 md:p-12">
            <Reveal delay={0.3}>
              <div className="mb-10">
                <h3 className="text-2xl font-bold text-dark dark:text-white mb-2">Envía un mensaje</h3>
                <p className="text-dark/60 dark:text-white/60">Te responderé lo antes posible.</p>
              </div>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input type="text" name="name" placeholder="Tu nombre" required className="bg-light/50 dark:bg-white/5 border-transparent focus:bg-white dark:focus:bg-white/10 dark:text-white" />
                  <Input type="email" name="email" placeholder="Tu email" required className="bg-light/50 dark:bg-white/5 border-transparent focus:bg-white dark:focus:bg-white/10 dark:text-white" />
                </div>
                <Input type="text" name="subject" placeholder="Asunto" className="bg-light/50 dark:bg-white/5 border-transparent focus:bg-white dark:focus:bg-white/10 dark:text-white" />
                <Input 
                  type="text" 
                  name="message" 
                  placeholder="Tu mensaje" 
                  as="textarea" 
                  required 
                  className="bg-light/50 dark:bg-white/5 border-transparent focus:bg-white dark:focus:bg-white/10 dark:text-white min-h-[160px]" 
                />
                
                <Button className="w-full md:w-auto px-10 py-4 flex items-center justify-center gap-3 group">
                  Enviar Mensaje
                  <FaPaperPlane className="text-sm transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
