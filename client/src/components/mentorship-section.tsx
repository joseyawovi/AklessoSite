import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { insertMentorshipRequestSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import type { InsertMentorshipRequest } from "@shared/schema";

export default function MentorshipSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertMentorshipRequest>({
    resolver: zodResolver(insertMentorshipRequestSchema),
    defaultValues: {
      nom: "",
      email: "",
      motivation: "",
    },
  });

  const mentorshipMutation = useMutation({
    mutationFn: async (data: InsertMentorshipRequest) => {
      const response = await apiRequest("POST", "/api/mentorship-requests", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Candidature envoyée !",
        description: "Votre demande de mentorat a été envoyée avec succès. Nous vous répondrons dans les plus brefs délais.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/mentorship-requests"] });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi de votre candidature. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertMentorshipRequest) => {
    mentorshipMutation.mutate(data);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-secondary to-yellow-400">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-primary mb-4" data-testid="text-mentorship-title">
          Programme de Mentorat
        </h2>
        <p className="text-xl text-primary mb-8" data-testid="text-mentorship-subtitle">
          Accompagnement des jeunes entrepreneurs africains
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-8 text-left">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-semibold text-charcoal dark:text-white mb-4" data-testid="text-mentorship-apply">
                Candidatez au programme
              </h3>
              <ul className="space-y-3 text-gray-600 dark:text-gray-400 mb-6">
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-secondary mr-3"></i>
                  Accompagnement personnalisé
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-secondary mr-3"></i>
                  Accès au réseau professionnel
                </li>
                <li className="flex items-center">
                  <i className="fas fa-check-circle text-secondary mr-3"></i>
                  Sessions de formation exclusives
                </li>
              </ul>
            </div>
            
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-charcoal dark:text-white mb-2">Nom complet *</label>
                <Input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  {...form.register("nom")}
                  data-testid="input-mentorship-nom"
                />
                {form.formState.errors.nom && (
                  <p className="text-red-600 text-sm mt-1">
                    {form.formState.errors.nom.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal dark:text-white mb-2">Email *</label>
                <Input 
                  type="email" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  {...form.register("email")}
                  data-testid="input-mentorship-email"
                />
                {form.formState.errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-charcoal dark:text-white mb-2">Motivation *</label>
                <Textarea 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-24"
                  placeholder="Parlez-nous de votre projet et de vos objectifs..."
                  {...form.register("motivation")}
                  data-testid="textarea-mentorship-motivation"
                />
                {form.formState.errors.motivation && (
                  <p className="text-red-600 text-sm mt-1">
                    {form.formState.errors.motivation.message}
                  </p>
                )}
              </div>
              <Button 
                type="submit" 
                disabled={mentorshipMutation.isPending}
                className="w-full bg-secondary text-primary py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
                data-testid="button-mentorship-submit"
              >
                {mentorshipMutation.isPending ? "Envoi en cours..." : "Envoyer ma candidature"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}