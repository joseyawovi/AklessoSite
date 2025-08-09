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
            {/* Formation */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700" data-testid="card-education">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                <i className="fas fa-graduation-cap mr-3"></i>Formation
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-education-1">
                    Master en Ingénierie Énergétique - École Polytechnique de Paris (2005)
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-education-2">
                    MBA Executive - INSEAD Business School (2010)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Career */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700" data-testid="card-career">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                <i className="fas fa-briefcase mr-3"></i>Carrière
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-career-1">
                    2015 - Présent : Président du Groupe ZENER
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Leadership stratégique et expansion régionale
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-career-2">
                    2010 - 2015 : Directeur Afrique de l'Ouest - TotalEnergies
                  </p>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    Développement des projets énergétiques régionaux
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Distinctions */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700" data-testid="card-awards">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                <i className="fas fa-medal mr-3"></i>Distinctions
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-award-1">
                    Prix de l'Entrepreneur de l'Année - CEDEAO (2022)
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-award-2">
                    Chevalier de l'Ordre National du Togo (2020)
                  </p>
                </div>
              </div>
            </div>
            
            {/* Engagements */}
            <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700" data-testid="card-commitments">
              <h3 className="text-2xl font-semibold text-primary mb-4">
                <i className="fas fa-heart mr-3"></i>Engagements
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-commitment-1">
                    Président de la Fondation Énergie pour l'Afrique
                  </p>
                </div>
                <div className="border-l-4 border-secondary pl-4">
                  <p className="font-medium text-charcoal dark:text-white" data-testid="text-commitment-2">
                    Membre du Conseil des Entrepreneurs Africains
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