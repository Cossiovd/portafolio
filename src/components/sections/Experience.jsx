import Card from '../ui/Card';
import { experiences } from '../../data/experiences';

export default function Experience() {
    return (
        <section id="experiencia" className="py-20 px-6 md:px-16 lg:px-32 bg-white">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold text-[#1a1a1a] mb-4 text-center">
                    Experiencia profesional
                </h2>
                <div className="h-1 w-24 bg-[#2563eb] mx-auto mb-12 rounded-full"></div>

                <div className="space-y-8">
                    {experiences.map((experience) => (
                        <Card
                            key={experience.id}
                            className="bg-[#f8f9fa] p-8 !rounded-2xl"
                        >
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#1a1a1a] mb-2">
                                        {experience.title}
                                    </h3>
                                    <h4 className="text-xl text-[#2563eb] mb-3">
                                        {experience.company}
                                    </h4>
                                    <p className="text-gray-600 font-medium">
                                        {experience.period}
                                    </p>
                                </div>
                                <div className="bg-white px-4 py-2 rounded-lg border border-gray-200">
                                    <p className="text-[#2563eb] font-medium">{experience.company}</p>
                                </div>
                            </div>

                            <p className="text-gray-700 mt-4 leading-relaxed text-lg">
                                {experience.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
