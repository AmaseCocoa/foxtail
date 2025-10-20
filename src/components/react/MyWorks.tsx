import * as React from "react"
import { uiProjects } from '../../data/works';

const WorksPage: React.FC = () => {
	
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
            {uiProjects.map((project, index) => (
                <div key={index} className="bg-white rounded-2xl duration-300">
                                        <img src={typeof project.imageUrl === 'string' ? project.imageUrl : project.imageUrl.src} alt={project.title} className="w-full h-48 object-cover" />
                    <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2" translate={!project.notranslateTitle? "yes" : "no"}>{project.title}</h3>
                        <p className="text-gray-700 mb-3">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-2">
                            {project.technologies.map((tech, i) => (
                                <div key={i} className="flex items-center bg-[#E78B30] rounded-full px-3 py-1 text-sm" translate="no">
                                    <span className="text-white">{tech}</span>
                                </div>
                            ))}
                        </div>
                        <a href={project.link} className="text-[#E78B30] hover:text-[#E99643] font-medium">View Details</a>
                    </div>
                </div>
            ))}
        </div>

    )
}

export default WorksPage