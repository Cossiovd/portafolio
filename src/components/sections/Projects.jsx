import React from 'react';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { projects } from '../../data/projects';

export default function Projects() {

    return (
        <section id="proyectos" className="py-20 px-6 md:px-16 lg:px-32 bg-white">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12 text-center">
                    Proyectos Destacados
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <Card key={index}>
                            <div className="h-48 bg-[#f5f5f5] w-full overflow-hidden">
                                <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-[#1a1a1a] mb-3">{project.title}</h3>
                                <p className="text-[#717182] text-base leading-relaxed mb-6 flex-grow">
                                    {project.description}
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag, i) => (
                                        <Badge key={i}>
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                                <div className="flex gap-4">
                                    <a href="#" className="flex items-center gap-2 text-[#2563eb] font-medium hover:underline">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                                        Ver proyecto
                                    </a>
                                    <a href="#" className="flex items-center gap-2 text-[#717182] font-medium hover:text-[#1a1a1a] transition-colors">
                                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                                        Ver código
                                    </a>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
