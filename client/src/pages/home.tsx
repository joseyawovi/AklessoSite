import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import KeyStatistics from "@/components/key-statistics";
import BiographySection from "@/components/biography-section";
import VisionSection from "@/components/vision-section";
import ArticlesSection from "@/components/articles-section";
import MediaSection from "@/components/media-section";
import ProjectsSection from "@/components/projects-section";
import TestimonialsSection from "@/components/testimonials-section";
import AwardsSection from "@/components/awards-section";
import NewsletterSection from "@/components/newsletter-section";
import MentorshipSection from "@/components/mentorship-section";
import ContactSection from "@/components/contact-section";
import EnhancedFooter from "@/components/enhanced-footer";
import ScrollToTop from "@/components/scroll-to-top";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <KeyStatistics />
        <BiographySection />
        <VisionSection />
        <ArticlesSection />
        <MediaSection />
        <ProjectsSection />
        <TestimonialsSection />
        <AwardsSection />
        <NewsletterSection />
        <MentorshipSection />
        <ContactSection />
      </main>
      <EnhancedFooter />
      <ScrollToTop />
    </div>
  );
}
