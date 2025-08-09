import { useQuery } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import type { Media } from "@shared/schema";

export default function MediaSection() {
  const { data: media = [], isLoading } = useQuery<Media[]>({
    queryKey: ["/api/media"],
  });

  if (isLoading) {
    return (
      <section id="medias" className="py-20 bg-light-gray dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4">Médias & Interventions</h2>
            <p className="text-xl text-gray-600 dark:text-gray-400">Chargement des médias...</p>
          </div>
        </div>
      </section>
    );
  }

  if (media.length === 0) {
    return (
      <section id="medias" className="py-20 bg-light-gray dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4" data-testid="text-media-title">
              Médias & Interventions
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-400" data-testid="text-media-subtitle">
              Interviews, podcasts et conférences
            </p>
          </div>
          
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg" data-testid="text-media-empty">
              Aucun contenu média disponible pour le moment. Revenez bientôt pour découvrir mes dernières interventions.
            </p>
          </div>
        </div>
      </section>
    );
  }

  const playMedia = (mediaItem: Media) => {
    if (mediaItem.lien) {
      window.open(mediaItem.lien, '_blank');
    }
  };

  return (
    <section id="medias" className="py-20 bg-light-gray dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4" data-testid="text-media-title">
            Médias & Interventions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400" data-testid="text-media-subtitle">
            Interviews, podcasts et conférences
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {media.slice(0, 6).map((mediaItem) => (
            <div 
              key={mediaItem.id} 
              className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow"
              data-testid={`media-${mediaItem.id}`}
            >
              <div className="relative">
                {mediaItem.miniature && (
                  <img 
                    src={mediaItem.miniature} 
                    alt="" 
                    className="w-full h-48 object-cover"
                    data-testid={`img-media-${mediaItem.id}`}
                  />
                )}
                <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                  <Button 
                    onClick={() => playMedia(mediaItem)}
                    className="bg-white bg-opacity-90 rounded-full p-4 hover:bg-opacity-100 transition-colors"
                    data-testid={`button-play-media-${mediaItem.id}`}
                  >
                    <i className="fas fa-play text-primary text-xl ml-1"></i>
                  </Button>
                </div>
                <div className="absolute top-4 left-4 bg-secondary text-primary px-3 py-1 rounded-full text-xs font-semibold uppercase">
                  {mediaItem.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold text-charcoal dark:text-white mb-2 line-clamp-2" data-testid={`title-media-${mediaItem.id}`}>
                  {mediaItem.titre}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm" data-testid={`info-media-${mediaItem.id}`}>
                  {mediaItem.duree && `Durée : ${mediaItem.duree} | `}
                  Publié le {new Date(mediaItem.date_publication).toLocaleDateString('fr-FR', {
                    day: 'numeric',
                    month: 'short',
                    year: 'numeric'
                  })}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}