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
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Performance & Impact
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Des résultats mesurables qui témoignent de notre excellence
          </p>
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md border border-gray-200 dark:border-gray-700"
              data-testid={`stat-${index}`}
            >
              <div className="mb-4">
                <div className={`w-12 h-12 mx-auto bg-primary rounded-lg flex items-center justify-center`}>
                  <i className={`${stat.icon} text-xl text-white`}></i>
                </div>
              </div>
              
              <div className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-2" data-testid={`stat-value-${index}`}>
                <AnimatedCounter end={stat.number} suffix={stat.suffix} />
              </div>
              
              <div className="text-base font-medium text-gray-600 dark:text-gray-400" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}