import { useQuery } from "@tanstack/react-query";
import type { Project } from "@shared/schema";

export default function ProjectsSection() {
  const { data: projects = [], isLoading } = useQuery<Project[]>({
    queryKey: ["/api/projects"],
  });

  if (isLoading) {
    return (
      <section id="projets" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Projets & Réalisations</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Chargement des projets...</p>
          </div>
        </div>
      </section>
    );
  }

  if (projects.length === 0) {
    return (
      <section id="projets" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4" data-testid="text-projects-title">
              Projets & Réalisations
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-testid="text-projects-subtitle">
              Nos contributions au développement énergétique africain
            </p>
          </div>
          
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg" data-testid="text-projects-empty">
              Aucun projet disponible pour le moment. Revenez bientôt pour découvrir nos réalisations.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const getStatusStyle = (statut: string) => {
    switch (statut.toLowerCase()) {
      case 'réalisé':
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200";
      case 'en cours':
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200";
      case 'planifié':
        return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200";
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200";
    }
  };

  return (
    <section id="projets" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4" data-testid="text-projects-title">
            Projets & Réalisations
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400" data-testid="text-projects-subtitle">
            Nos contributions au développement énergétique africain
          </p>
        </div>
        
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-100 dark:border-gray-700"
              data-testid={`project-${project.id}`}
            >
              <div className={`grid lg:grid-cols-2 gap-8 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span 
                      className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusStyle(project.statut)}`}
                      data-testid={`status-project-${project.id}`}
                    >
                      {project.statut}
                    </span>
                    <span className="ml-3 text-gray-500 dark:text-gray-400 text-sm" data-testid={`country-project-${project.id}`}>
                      {project.pays}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-charcoal dark:text-white mb-4" data-testid={`title-project-${project.id}`}>
                    {project.nom}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed" data-testid={`description-project-${project.id}`}>
                    {project.description}
                  </p>
                  <div className="space-y-3">
                    {project.capacite && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <i className="fas fa-bolt text-secondary mr-3"></i>
                        <span>Capacité : {project.capacite}</span>
                      </div>
                    )}
                    {project.foyers_alimentes && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <i className="fas fa-home text-secondary mr-3"></i>
                        <span>Foyers alimentés : {project.foyers_alimentes}</span>
                      </div>
                    )}
                    {project.emplois_crees && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <i className="fas fa-users text-secondary mr-3"></i>
                        <span>Emplois créés : {project.emplois_crees}</span>
                      </div>
                    )}
                    {project.co2_evite && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <i className="fas fa-leaf text-secondary mr-3"></i>
                        <span>CO2 évité : {project.co2_evite}</span>
                      </div>
                    )}
                    {project.date_mise_service && (
                      <div className="flex items-center text-sm text-gray-600 dark:text-gray-400">
                        <i className="fas fa-calendar text-secondary mr-3"></i>
                        <span>Mise en service : {project.date_mise_service}</span>
                      </div>
                    )}
                  </div>
                </div>
                <div className={`lg:p-4 ${index % 2 === 1 ? 'lg:order-first' : ''}`}>
                  {project.image_url && (
                    <img 
                      src={project.image_url} 
                      alt="" 
                      className="w-full h-full object-cover rounded-lg"
                      data-testid={`img-project-${project.id}`}
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}