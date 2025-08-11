import AnimatedCounter from "./animated-counter";

export default function KeyStatistics() {
  const stats = [
    { 
      value: "500+", 
      label: "Emplois créés",
      number: 500,
      suffix: "+",
      icon: "fas fa-users",
      color: "from-blue-500 to-blue-600"
    },
    { 
      value: "15", 
      label: "Pays couverts",
      number: 15,
      suffix: "",
      icon: "fas fa-globe-africa",
      color: "from-green-500 to-green-600"
    },
    { 
      value: "20+", 
      label: "Années d'expérience",
      number: 20,
      suffix: "+",
      icon: "fas fa-calendar-alt",
      color: "from-purple-500 to-purple-600"
    },
    { 
      value: "50+", 
      label: "Projets réalisés",
      number: 50,
      suffix: "+",
      icon: "fas fa-project-diagram",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-display font-bold gradient-text mb-4">
            Impact en Chiffres
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Mesurer l'excellence par les résultats
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center group hover-lift animate-fade-in bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
              data-testid={`stat-${index}`}
            >
              <div className="mb-6">
                <div className={`w-16 h-16 mx-auto bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <i className={`${stat.icon} text-2xl text-white`}></i>
                </div>
              </div>
              
              <div className="text-4xl lg:text-5xl font-bold text-charcoal dark:text-white mb-3" data-testid={`stat-value-${index}`}>
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              
              <div className="text-lg font-semibold text-charcoal dark:text-white" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}