import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Dr. Amina Kone",
    role: "Ministre de l'Énergie, Côte d'Ivoire",
    content: "Jonas Daou est un visionnaire qui transforme le paysage énergétique de l'Afrique de l'Ouest. Son leadership au sein du Groupe ZENER est exemplaire.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 2,
    name: "Prof. Kwame Asante",
    role: "Directeur, Institut Africain de l'Énergie",
    content: "Les projets innovants d'Aklesso Jonas contribuent significativement au développement durable de notre continent. Un entrepreneur d'exception.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
  },
  {
    id: 3,
    name: "Sarah Mitchell",
    role: "CEO, African Development Bank",
    content: "Working with Jonas has been transformative. His vision for renewable energy in Africa aligns perfectly with our sustainability goals.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1494790108755-2616b90b8d4c?w=100&h=100&fit=crop&crop=face&auto=format&q=80"
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Recommandations Professionnelles
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Témoignages de dirigeants et partenaires institutionnels
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.id}
              className="bg-gray-50 dark:bg-gray-800 rounded-lg p-6 border border-gray-200 dark:border-gray-700"
              data-testid={`testimonial-${testimonial.id}`}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-full mb-6">
                <Quote className="h-6 w-6 text-primary" />
              </div>
              
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              
              <p className="text-gray-700 dark:text-gray-300 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>
              
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                  data-testid={`img-testimonial-${testimonial.id}`}
                />
                <div>
                  <h4 className="font-semibold text-charcoal dark:text-white" data-testid={`name-testimonial-${testimonial.id}`}>
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400" data-testid={`role-testimonial-${testimonial.id}`}>
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}