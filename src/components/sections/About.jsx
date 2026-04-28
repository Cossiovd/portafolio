import Button from '../ui/Button';

export default function About() {
    return (
        <section id="sobre-mi" className="py-20 px-6 md:px-16 lg:px-32 bg-white">
            <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-16 items-center">
                <div className="w-full md:w-1/2">
                    <div className="relative w-full h-80 bg-[#2563eb]/10 rounded-3xl overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-100"></div>
                        <div className="absolute -bottom-8 -right-8 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-50"></div>
                    </div>
                </div>

                <div className="w-full md:w-1/2">
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4">
                        Sobre mí
                    </h2>
                    <div className="h-1 w-24 bg-[#2563eb] mb-6 rounded-full"></div>
                    <p className="text-gray-700 leading-relaxed text-lg mb-4">
                        ¡Hola! Soy <strong>Dayana Cossio Vargas</strong>, Ingeniera de Software apasionada por el diseño y desarrollo de soluciones digitales. Me enfoco en combinar experiencia de usuario (UX/UI) y desarrollo frontend para construir productos funcionales, accesibles y alineados a las necesidades del negocio.
                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        Cuento con experiencia en análisis de requerimientos, diseño de prototipos y desarrollo de plataformas web, incluyendo soluciones en WordPress y e-commerce. Trabajo bajo metodologías ágiles, participando en el ciclo completo de los proyectos, desde la definición hasta la implementación.

                    </p>
                    <p className="text-gray-700 leading-relaxed text-lg mb-6">
                        Mi objetivo es transformar ideas en productos digitales eficientes, escalables y centrados en el usuario, que generen valor real para las organizaciones.
                    </p>
                    <Button className="px-8 py-3.5 text-lg">
                        Descargar CV
                    </Button>
                </div>
            </div>
        </section>
    );
}
