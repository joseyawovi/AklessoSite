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
    <section className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl lg:text-5xl font-display font-bold gradient-text mb-4">
            Distinctions & Reconnaissances
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Une carrière marquée par l'excellence et la reconnaissance internationale
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {awards.map((award, index) => {
            const IconComponent = award.icon;
            return (
              <div 
                key={award.id}
                className="text-center group hover-lift animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
                data-testid={`award-${award.id}`}
              >
                <div className="relative mb-6">
                  <div className="w-20 h-20 mx-auto bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <IconComponent className={`h-10 w-10 ${award.color}`} />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center">
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