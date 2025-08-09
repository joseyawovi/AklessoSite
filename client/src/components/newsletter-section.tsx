import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import { insertSubscriberSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import type { InsertSubscriber } from "@shared/schema";

export default function NewsletterSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<InsertSubscriber>({
    resolver: zodResolver(insertSubscriberSchema),
    defaultValues: {
      email: "",
    },
  });

  const subscribeMutation = useMutation({
    mutationFn: async (data: InsertSubscriber) => {
      const response = await apiRequest("POST", "/api/subscribers", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Inscription réussie !",
        description: "Vous avez été inscrit(e) à la newsletter avec succès.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/subscribers"] });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'inscription. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertSubscriber) => {
    subscribeMutation.mutate(data);
  };

  return (
    <section className="py-20 bg-primary dark:bg-blue-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-white mb-4" data-testid="text-newsletter-title">
          Restez connecté à l'actualité
        </h2>
        <p className="text-xl text-blue-100 mb-8" data-testid="text-newsletter-subtitle">
          Recevez mes dernières réflexions sur l'entrepreneuriat et l'énergie en Afrique
        </p>
        
        <form onSubmit={form.handleSubmit(onSubmit)} className="max-w-md mx-auto">
          <div className="flex gap-3">
            <Input 
              type="email" 
              placeholder="Votre adresse email" 
              className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-secondary bg-white text-charcoal"
              {...form.register("email")}
              data-testid="input-newsletter-email"
            />
            <Button 
              type="submit" 
              disabled={subscribeMutation.isPending}
              className="bg-secondary text-primary px-6 py-3 rounded-lg font-semibold hover:bg-yellow-400 transition-colors"
              data-testid="button-newsletter-subscribe"
            >
              {subscribeMutation.isPending ? "..." : "S'abonner"}
            </Button>
          </div>
          {form.formState.errors.email && (
            <p className="text-red-200 text-sm mt-2">
              {form.formState.errors.email.message}
            </p>
          )}
          <p className="text-blue-200 text-sm mt-3" data-testid="text-newsletter-disclaimer">
            Pas de spam, désinscription possible à tout moment.
          </p>
        </form>
      </div>
    </section>
  );
}