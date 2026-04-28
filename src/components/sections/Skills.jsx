import React from 'react';
import Card from '../ui/Card';
import { skillCategories } from '../../data/skills';

export default function Skills() {
    return (
        <section id="habilidades" className="py-20 px-6 md:px-16 lg:px-32 bg-[#f5f5f5]">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-12 text-center">
                    Habilidades
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {skillCategories.map((category, index) => (
                        <Card key={index} className="p-6">
                            <div className="w-12 h-12 bg-blue-50 rounded-[10px] flex items-center justify-center mb-6">
                                <svg className="w-6 h-6 text-[#2563eb]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    {category.iconPaths.map((path, i) => (
                                        <path key={i} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={path} />
                                    ))}
                                </svg>
                            </div>
                            <h3 className="text-xl font-semibold text-[#1a1a1a] mb-6">
                                {category.title}
                            </h3>
                            <ul className="space-y-3">
                                {category.skills.map((skill, i) => (
                                    <li key={i} className="flex items-center gap-3 text-[#717182]">
                                        <div className="w-1.5 h-1.5 bg-[#2563eb] rounded-full"></div>
                                        {skill}
                                    </li>
                                ))}
                            </ul>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
