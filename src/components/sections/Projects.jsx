import React, { useState } from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import Reveal from '../ui/Reveal';
import Modal from '../ui/Modal';
import { projects } from '../../data/projects';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="proyectos" className="py-24 px-6 md:px-16 lg:px-32 bg-white dark:bg-dark transition-colors duration-300">
            <div className="max-w-7xl mx-auto">
                <Reveal>
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-dark dark:text-white mb-4">
                            Proyectos Destacados
                        </h2>
                        <div className="h-1.5 w-24 bg-primary mx-auto rounded-full"></div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                    {projects.map((project, index) => (
                        <Reveal key={index} delay={index * 0.1}>
                            <Card className="group h-full flex flex-col border border-black/5 dark:border-white/10 overflow-hidden hover:shadow-2xl transition-all duration-500">
                                <div className="relative h-56 w-full overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                                </div>

                                <div className="p-8 flex flex-col flex-grow">
                                    <h3 className="text-2xl font-bold text-dark dark:text-white mb-3 group-hover:text-primary transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-dark/60 dark:text-white/60 text-base leading-relaxed mb-6 flex-grow">
                                        {project.short_description}
                                    </p>

                                    <div className="flex flex-wrap gap-2 mb-8">
                                        {project.tags.map((tag, i) => (
                                            <Badge key={i} className="bg-primary/5 text-primary border-primary/10 dark:bg-primary/10 dark:text-primary dark:border-primary/20">
                                                {tag}
                                            </Badge>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-6">
                                        <button
                                            onClick={() => setSelectedProject(project)}
                                            className="flex items-center gap-2 text-primary font-bold hover:underline group/btn"
                                        >
                                            <FaExternalLinkAlt className="text-sm transition-transform group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                                            Ver detalle
                                        </button>
                                        <a
                                            href={project.repository}
                                            className="flex items-center gap-2 text-dark/50 dark:text-white/50 font-medium hover:text-dark dark:hover:text-white transition-colors"
                                        >
                                            <FaGithub className="text-lg" /> {project.repository ? "Código" : ""}
                                        </a>
                                    </div>
                                </div>
                            </Card>
                        </Reveal>
                    ))}
                </div>
            </div>

            {/* Detail Modal */}
            <Modal
                isOpen={!!selectedProject}
                onClose={() => setSelectedProject(null)}
                title={selectedProject?.title}
            >
                {selectedProject && (
                    <div className="flex flex-col gap-8">
                        <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-lg">
                            <img
                                src={selectedProject.image}
                                alt={selectedProject.title}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-lg font-bold text-dark dark:text-white mb-3 uppercase tracking-wider">Sobre el proyecto</h4>
                                <p className="text-dark/70 dark:text-white/70 text-lg leading-relaxed">
                                    {selectedProject.long_description}
                                </p>
                            </div>

                            <div>
                                <h4 className="text-lg font-bold text-dark dark:text-white mb-3 uppercase tracking-wider">Tecnologías utilizadas</h4>
                                <div className="flex flex-wrap gap-3">
                                    {selectedProject.tags.map((tag, i) => (
                                        <Badge key={i} className="px-4 py-1.5 text-sm">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-6 border-t border-black/5 dark:border-white/5 flex gap-4">
                                <Button className="flex-1 justify-center gap-2" onClick={() => window.open(selectedProject.link)}>
                                    <FaExternalLinkAlt /> {selectedProject.link ? "Visitar Sitio Web" : ""}
                                </Button>
                                <Button variant="outline" className="flex-1 justify-center gap-2 dark:border-white/20 dark:text-white dark:hover:bg-white/5" onClick={() => window.open(selectedProject.repository)}>
                                    <FaGithub /> {selectedProject.repository ? "Código" : ""}
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </Modal>
        </section>
    );
}
