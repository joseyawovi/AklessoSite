export default function BusinessVision() {
  return (
    <section id="vision" className="py-20 bg-light-gray dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4" data-testid="text-vision-title">
            Vision Stratégique & Mission d'Entreprise
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400" data-testid="text-vision-subtitle">
            Construire l'écosystème énergétique africain de demain
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                <i className="fas fa-target mr-3"></i>Notre Mission
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Développer et opérer des infrastructures énergétiques durables en Afrique, 
                générant de la valeur économique, sociale et environnementale. Nous créons 
                des entreprises rentables qui transforment positivement les communautés 
                où nous opérons.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                <i className="fas fa-eye mr-3"></i>Vision 2030
              </h3>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                Devenir le leader pan-africain des solutions énergétiques intégrées, 
                avec 5 GW de capacité installée, une présence dans 15 pays et 
                un impact direct sur 10 millions de bénéficiaires.
              </p>
            </div>
          </div>
          
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Piliers Stratégiques
            </h3>
            
            <div className="space-y-4">
              <div className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <div className="bg-primary text-white p-3 rounded-lg flex-shrink-0">
                  <i className="fas fa-chart-line text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal dark:text-white mb-2">Excellence Opérationnelle</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    ROI supérieur à 15% sur tous nos projets, efficacité énergétique optimisée
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <div className="bg-secondary text-primary p-3 rounded-lg flex-shrink-0">
                  <i className="fas fa-lightbulb text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal dark:text-white mb-2">Innovation Continue</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    R&D représentant 3% du CA, partenariats technologiques internationaux
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4 bg-white dark:bg-gray-700 p-6 rounded-lg shadow">
                <div className="bg-green-500 text-white p-3 rounded-lg flex-shrink-0">
                  <i className="fas fa-users text-lg"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-charcoal dark:text-white mb-2">Impact Social</h4>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Création d'emplois qualifiés, formation professionnelle, développement local
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Strategic Objectives */}
        <div className="bg-gradient-to-r from-primary to-blue-800 rounded-2xl p-8 text-white">
          <h3 className="text-2xl font-bold mb-8 text-center">Objectifs Stratégiques 2025-2027</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">1 Md€</div>
              <div className="text-lg font-medium mb-2">Valorisation Groupe</div>
              <div className="text-sm text-blue-200">Introduction en bourse prévue 2026</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">25,000</div>
              <div className="text-lg font-medium mb-2">Emplois Créés</div>
              <div className="text-sm text-blue-200">Directs et écosystème partenaires</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary mb-2">15 Pays</div>
              <div className="text-lg font-medium mb-2">Présence Africaine</div>
              <div className="text-sm text-blue-200">Expansion panafricaine accélérée</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}