import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import type { Post } from "@shared/schema";

export default function ArticlesSection() {
  const { data: articles = [], isLoading } = useQuery<Post[]>({
    queryKey: ["/api/posts"],
  });

  if (isLoading) {
    return (
      <section id="articles" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Articles & Réflexions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Chargement des articles...</p>
          </div>
        </div>
      </section>
    );
  }

  if (articles.length === 0) {
    return (
      <section id="articles" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4" data-testid="text-articles-title">
              Articles & Réflexions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-testid="text-articles-subtitle">
              Mes analyses sur l'entrepreneuriat et l'énergie en Afrique
            </p>
          </div>
          
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg" data-testid="text-articles-empty">
              Aucun article disponible pour le moment. Revenez bientôt pour découvrir mes dernières réflexions.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="articles" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4" data-testid="text-articles-title">
            Articles & Réflexions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400" data-testid="text-articles-subtitle">
            Mes analyses sur l'entrepreneuriat et l'énergie en Afrique
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.slice(0, 6).map((article) => (
            <article 
              key={article.id} 
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              data-testid={`article-${article.id}`}
            >
              {article.image_url && (
                <img 
                  src={article.image_url} 
                  alt="" 
                  className="w-full h-48 object-cover"
                  data-testid={`img-article-${article.id}`}
                />
              )}
              <div className="p-6">
                <div className="text-sm text-secondary font-medium mb-2" data-testid={`date-article-${article.id}`}>
                  {new Date(article.date_publication).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'long', 
                    year: 'numeric'
                  })}
                </div>
                <h3 className="text-xl font-semibold text-charcoal dark:text-white mb-3 line-clamp-2" data-testid={`title-article-${article.id}`}>
                  {article.titre}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 line-clamp-3" data-testid={`content-article-${article.id}`}>
                  {article.contenu.substring(0, 150)}...
                </p>
                <Button 
                  variant="link" 
                  className="inline-flex items-center text-primary font-medium mt-4 hover:text-blue-800 transition-colors p-0"
                  data-testid={`button-read-article-${article.id}`}
                >
                  Lire la suite <i className="fas fa-arrow-right ml-2"></i>
                </Button>
              </div>
            </article>
          ))}
        </div>
        
        {articles.length > 6 && (
          <div className="text-center mt-12">
            <Button 
              className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
              data-testid="button-view-all-articles"
            >
              Voir tous les articles
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}