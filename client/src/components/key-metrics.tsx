export default function KeyMetrics() {
  const metrics = [
    {
      value: "850 M€",
      label: "Investissements Levés",
      sublabel: "2015-2024",
      icon: "fas fa-chart-line"
    },
    {
      value: "320 M€",
      label: "Chiffre d'Affaires 2023",
      sublabel: "Croissance +28%",
      icon: "fas fa-euro-sign"
    },
    {
      value: "15,000+",
      label: "Emplois Créés",
      sublabel: "Directs et indirects",
      icon: "fas fa-users"
    },
    {
      value: "8 Pays",
      label: "Présence Africaine",
      sublabel: "12 filiales actives",
      icon: "fas fa-globe-africa"
    },
    {
      value: "2.5 GW",
      label: "Capacité Énergétique",
      sublabel: "En développement",
      icon: "fas fa-bolt"
    },
    {
      value: "3M+",
      label: "Bénéficiaires",
      sublabel: "Accès à l'énergie",
      icon: "fas fa-lightbulb"
    }
  ];

  return (
    <section className="py-16 bg-primary dark:bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4" data-testid="text-metrics-title">
            Impact & Performance Groupe ZENER
          </h2>
          <p className="text-blue-100 text-lg">
            Chiffres clés de notre croissance et de notre impact social
          </p>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {metrics.map((metric, index) => (
            <div 
              key={index}
              className="text-center bg-white/10 p-6 rounded-xl backdrop-blur-sm"
              data-testid={`metric-${index}`}
            >
              <div className="mb-4">
                <i className={`${metric.icon} text-3xl text-secondary`}></i>
              </div>
              <div className="text-2xl lg:text-3xl font-bold mb-2" data-testid={`metric-value-${index}`}>
                {metric.value}
              </div>
              <div className="text-sm font-medium mb-1" data-testid={`metric-label-${index}`}>
                {metric.label}
              </div>
              <div className="text-xs text-blue-200" data-testid={`metric-sublabel-${index}`}>
                {metric.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}