import jonasBusinessImage from "@assets/photos de jonas-5-jonas_1754715375686.png";

export default function BiographySection() {
  return (
    <section id="biographie" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4" data-testid="text-biography-title">
            Biographie
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto" data-testid="text-biography-subtitle">
            Un parcours d'excellence au service du développement énergétique africain
          </p>
        </div>
        
        {/* Jonas Business Photo */}
        <div className="mb-16 text-center">
          <img 
            src={jonasBusinessImage} 
            alt="Jonas Daou, entrepreneur et leader" 
            className="w-full max-w-2xl mx-auto h-96 object-cover object-center rounded-xl shadow-xl"
            data-testid="img-jonas-business"
          />
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Jonas Daou, Président du Groupe ZENER</p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            {/* Executive Profile */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700" data-testid="card-profile">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                <i className="fas fa-user-tie mr-3"></i>Profil Exécutif
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-profile-1">
                    Master Ingénierie Énergétique - École Polytechnique Paris (2005)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Spécialisation systèmes énergétiques complexes
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-profile-2">
                    MBA Executive Strategy - INSEAD Business School (2010)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Finance internationale et développement durable
                  </p>
                </div>
              </div>
            </div>
            
            {/* Leadership Experience */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700" data-testid="card-leadership">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                <i className="fas fa-chart-line mr-3"></i>Leadership & Résultats
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-leadership-1">
                    2015 - Présent : Président-Directeur Général, Groupe ZENER
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    CA consolidé : 320 M€ | 12 filiales | 1,800 collaborateurs | 8 pays
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-leadership-2">
                    2010 - 2015 : Directeur Régional Afrique de l'Ouest - TotalEnergies
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Gestion P&L 180 M€ | 450 M€ d'investissements | 5 pays
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Key Achievements */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700" data-testid="card-achievements">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                <i className="fas fa-trophy mr-3"></i>Réalisations Clés
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-achievement-1">
                    CEO de l'Année Afrique - African Business Awards (2023)
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Croissance 340% en 8 ans - Impact social exceptionnel
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-achievement-2">
                    850 M€ d'investissements levés - 15,000 emplois créés
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Plus grande série A africaine dans l'énergie (2022)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Board Positions */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700" data-testid="card-boards">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                <i className="fas fa-building mr-3"></i>Mandats & Gouvernance
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-board-1">
                    Administrateur - African Development Bank Energy Fund
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Supervision 2.5 Md€ d'investissements énergétiques
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-board-2">
                    Co-Président - Africa Energy Council
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Think tank regroupant 50 leaders du secteur
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}