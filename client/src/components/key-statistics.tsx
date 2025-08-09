export default function KeyStatistics() {
  const stats = [
    { value: "500+", label: "Emplois créés" },
    { value: "15", label: "Pays couverts" },
    { value: "20+", label: "Années d'expérience" },
    { value: "50+", label: "Projets réalisés" }
  ];

  return (
    <section className="py-16 bg-light-gray dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center" data-testid={`stat-${index}`}>
              <div className="text-4xl font-bold text-primary mb-2" data-testid={`stat-value-${index}`}>
                {stat.value}
              </div>
              <div className="text-charcoal dark:text-gray-300 font-medium" data-testid={`stat-label-${index}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}