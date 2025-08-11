import { Award, Trophy, Medal, Star } from "lucide-react";

const awards = [
  {
    id: 1,
    title: "Prix de l'Excellence Entrepreneuriale",
    organization: "Union Africaine",
    year: "2023",
    description: "Reconnaissance pour son leadership dans le secteur énergétique africain",
    icon: Trophy,
    color: "text-yellow-500"
  },
  {
    id: 2,
    title: "Entrepreneur de l'Année",
    organization: "West Africa Business Forum",
    year: "2022",
    description: "Pour sa contribution au développement économique régional",
    icon: Award,
    color: "text-blue-500"
  },
  {
    id: 3,
    title: "Prix Innovation Énergétique",
    organization: "African Energy Congress",
    year: "2021",
    description: "Innovation dans les solutions énergétiques durables",
    icon: Medal,
    color: "text-green-500"
  },
  {
    id: 4,
    title: "Leader Visionnaire",
    organization: "Forbes Africa",
    year: "2020",
    description: "Classé parmi les 100 leaders les plus influents d'Afrique",
    icon: Star,
    color: "text-purple-500"
  }
];

export default function AwardsSection() {
  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Prix & Reconnaissances
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Reconnaissance de l'excellence par les institutions internationales
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div 
                key={award.id}
                className="text-center bg-white dark:bg-gray-900 p-6 rounded-lg border border-gray-200 dark:border-gray-700"
                data-testid={`award-${award.id}`}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary rounded-lg flex items-center justify-center">
                    <IconComponent className="h-8 w-8 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center">
                    <span className="text-xs font-bold text-primary">{award.year}</span>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2" data-testid={`title-award-${award.id}`}>
                  {award.title}
                </h3>
                <p className="text-sm font-medium text-primary mb-3" data-testid={`org-award-${award.id}`}>
                  {award.organization}
                </p>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed" data-testid={`desc-award-${award.id}`}>
                  {award.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}