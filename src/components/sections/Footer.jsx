import Reveal from '../ui/Reveal';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-dark py-12 px-6 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center gap-4">
        <Reveal>
          <p className="text-dark/60 dark:text-white/60 text-sm font-medium">
            © {new Date().getFullYear()} Dayana Cossio Vargas. Todos los derechos reservados.
          </p>
        </Reveal>
        <Reveal delay={0.2}>
          <p className="text-dark/40 dark:text-white/30 text-xs">
            Diseñado y desarrollado con pasión.
          </p>
        </Reveal>
      </div>
    </footer>
  );
}
