import Button from '../ui/Button';
import Reveal from '../ui/Reveal';

export default function About() {
    return (
        <section id="sobre-mi" className="py-24 px-6 md:px-16 lg:px-32 bg-white dark:bg-dark transition-colors duration-300">
            <div className="max-w-4xl mx-auto">
                <Reveal>
                    <div className="mb-16 text-center">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
                            Sobre mí
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                    </div>
                </Reveal>

                <div className="space-y-8">
                    <Reveal>
                        <p className="text-dark/70 dark:text-white/70 leading-relaxed text-lg">
                            ¡Hola! Soy <strong className="text-dark dark:text-white font-bold">Dayana Cossio Vargas</strong>, Ingeniera de Software apasionada por el diseño y desarrollo de soluciones digitales.
                        </p>
                    </Reveal>

                    <Reveal>
                        <p className="text-dark/70 dark:text-white/70 leading-relaxed text-lg">
                            Me enfoco en combinar experiencia de usuario (UX/UI) y desarrollo frontend para construir productos funcionales, accesibles y alineados a las necesidades del negocio. Cuento con experiencia en análisis de requerimientos, diseño de prototipos y desarrollo de plataformas web.
                        </p>
                    </Reveal>

                    <Reveal>
                        <p className="text-dark/70 dark:text-white/70 leading-relaxed text-lg">
                            Mi objetivo es transformar ideas en productos digitales eficientes, escalables y centrados en el usuario, que generen valor real para las organizaciones. Trabajo bajo metodologías ágiles, participando en el ciclo completo de los proyectos.
                        </p>
                    </Reveal>
                </div>

                <Reveal delay={0.5}>
                    <div className="mt-12 flex justify-center">
                        <Button className="px-10 py-4 text-lg w-full sm:w-auto justify-center">
                            Descargar CV
                        </Button>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
