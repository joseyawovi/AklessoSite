import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";
import { insertMessageSchema } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import type { InsertMessage } from "@shared/schema";
import { z } from "zod";

const contactFormSchema = insertMessageSchema.extend({
  sujet: z.string().optional(),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      nom: "",
      email: "",
      sujet: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: ContactFormData) => {
      const response = await apiRequest("POST", "/api/messages", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message envoyé !",
        description: "Votre message a été envoyé avec succès. Nous vous répondrons dans les plus brefs délais.",
      });
      form.reset();
      queryClient.invalidateQueries({ queryKey: ["/api/messages"] });
    },
    onError: () => {
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite lors de l'envoi de votre message. Veuillez réessayer.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: ContactFormData) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="py-20 bg-light-gray dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-charcoal dark:text-white mb-4" data-testid="text-contact-title">
            Contact
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400" data-testid="text-contact-subtitle">
            Échangeons sur vos projets et collaborations
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg" data-testid="card-contact-info">
              <h3 className="text-xl font-semibold text-primary mb-4">
                <i className="fas fa-building mr-3"></i>Groupe ZENER
              </h3>
              <div className="space-y-3 text-gray-600 dark:text-gray-400">
                <p className="flex items-center" data-testid="text-contact-location">
                  <i className="fas fa-map-marker-alt w-5 mr-3 text-secondary"></i>
                  Lomé, Togo
                </p>
                <p className="flex items-center" data-testid="text-contact-phone">
                  <i className="fas fa-phone w-5 mr-3 text-secondary"></i>
                  +228 XX XX XX XX
                </p>
                <p className="flex items-center" data-testid="text-contact-email">
                  <i className="fas fa-envelope w-5 mr-3 text-secondary"></i>
                  contact@zenergroup.com
                </p>
              </div>
            </div>
            
            <div className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-lg" data-testid="card-collaboration">
              <h3 className="text-xl font-semibold text-primary mb-4">
                <i className="fas fa-handshake mr-3"></i>Collaboration
              </h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                Intéressé par une collaboration ou un partenariat ? 
                N'hésitez pas à me contacter pour explorer ensemble 
                les opportunités de développement énergétique en Afrique.
              </p>
            </div>
            
            <div className="flex space-x-4">
              <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-800 transition-colors" data-testid="link-linkedin">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-800 transition-colors" data-testid="link-twitter">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="bg-primary text-white p-3 rounded-full hover:bg-blue-800 transition-colors" data-testid="link-youtube">
                <i className="fab fa-youtube"></i>
              </a>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-lg">
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-charcoal dark:text-white mb-2">Nom complet *</label>
                <Input 
                  type="text" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  {...form.register("nom")}
                  data-testid="input-contact-nom"
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
                  data-testid="input-contact-email"
                />
                {form.formState.errors.email && (
                  <p className="text-red-600 text-sm mt-1">
                    {form.formState.errors.email.message}
                  </p>
                )}
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal dark:text-white mb-2">Sujet</label>
                <Select onValueChange={(value) => form.setValue("sujet", value)}>
                  <SelectTrigger className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" data-testid="select-contact-sujet">
                    <SelectValue placeholder="Sélectionnez un sujet" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="collaboration">Collaboration</SelectItem>
                    <SelectItem value="partenariat">Partenariat</SelectItem>
                    <SelectItem value="media">Demande média</SelectItem>
                    <SelectItem value="conseil">Conseil</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-charcoal dark:text-white mb-2">Message *</label>
                <Textarea 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary h-32"
                  placeholder="Décrivez votre demande ou votre projet..."
                  {...form.register("message")}
                  data-testid="textarea-contact-message"
                />
                {form.formState.errors.message && (
                  <p className="text-red-600 text-sm mt-1">
                    {form.formState.errors.message.message}
                  </p>
                )}
              </div>
              
              <Button 
                type="submit" 
                disabled={contactMutation.isPending}
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition-colors"
                data-testid="button-contact-submit"
              >
                {contactMutation.isPending ? "Envoi en cours..." : "Envoyer le message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}