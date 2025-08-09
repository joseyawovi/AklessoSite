import jonasPortraitImage from "@assets/photos de jonas-4-jonas_1754715375685.png";

export default function VisionSection() {
  return (
    <section id="vision" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4" data-testid="text-vision-title">
            Ma Vision
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400" data-testid="text-vision-subtitle">
            Pour l'Afrique, l'énergie et l'entrepreneuriat
          </p>
        </div>
        
        {/* Jonas Portrait */}
        <div className="mb-12 text-center">
          <img 
            src={jonasPortraitImage} 
            alt="Portrait de Jonas Daou" 
            className="w-48 h-48 mx-auto rounded-full object-cover shadow-xl border-4 border-white dark:border-gray-700"
            data-testid="img-jonas-portrait"
          />
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-12">
          <div className="prose prose-lg max-w-none dark:prose-invert" data-testid="content-vision">
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              L'Afrique se trouve à un carrefour historique. Avec une population jeune et dynamique, 
              des ressources naturelles abondantes et un potentiel énergétique immense, notre continent 
              a tous les atouts pour devenir le moteur de la croissance mondiale du 21ème siècle.
            </p>
            
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              Ma vision s'articule autour de trois piliers fondamentaux : la souveraineté énergétique, 
              l'innovation technologique et l'entrepreneuriat responsable. Nous devons cesser d'être 
              spectateurs de notre développement pour devenir les architectes de notre destinée.
            </p>
            
            <blockquote className="border-l-4 border-secondary bg-yellow-50 dark:bg-yellow-900/20 p-6 my-8 italic text-lg text-gray-800 dark:text-gray-200" data-testid="quote-vision">
              "L'énergie n'est pas seulement une question technique, c'est le fondement de toute 
              transformation sociale et économique durable."
            </blockquote>
            
            <p className="text-lg leading-relaxed mb-6 text-gray-700 dark:text-gray-300">
              À travers le Groupe ZENER, nous œuvrons pour démocratiser l'accès à l'énergie propre 
              et abordable. Chaque projet que nous menons est pensé comme un catalyseur de développement 
              local, créateur d'emplois et de compétences.
            </p>
            
            <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Mon engagement va au-delà du business. Il s'agit de contribuer à l'émergence d'une 
              nouvelle génération d'entrepreneurs africains, capables de rivaliser sur la scène 
              internationale tout en restant ancrés dans les réalités de nos territoires.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}