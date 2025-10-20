import * as React from "react"
import { Server, Database } from 'lucide-react';
import { systemProjects } from '../../data/works';

const iconComponents: { [key: string]: React.ElementType } = {
    Server,
    Database,
};

const WorksBackendSection: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {systemProjects.map((project, index) => {
                const Icon = iconComponents[project.icon];
                return (
                    <div key={index} className="bg-white rounded-2xl p-6 flex items-start gap-6">
                        <div className="text-[#E78B30]">
                            {Icon && <Icon size={48} />}
                        </div>
                        <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2" translate={!project.notranslateTitle? "yes" : "no"}>{project.title}</h3>
                            <p className="text-gray-700 mb-4">{project.description}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, i) => (
                                    <div key={i} className="flex items-center bg-[#E78B30] rounded-full px-3 py-1 text-sm" translate="no">
                                        <span className="text-white">{tech}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default WorksBackendSection