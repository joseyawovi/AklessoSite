import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import KeyMetrics from "@/components/key-metrics";
import BiographySection from "@/components/biography-section";
import BusinessVision from "@/components/business-vision";
import ArticlesSection from "@/components/articles-section";
import MediaSection from "@/components/media-section";
import ProjectsSection from "@/components/projects-section";
import NewsletterSection from "@/components/newsletter-section";
import MentorshipSection from "@/components/mentorship-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <KeyMetrics />
        <BiographySection />
        <BusinessVision />
        <ArticlesSection />
        <MediaSection />
        <ProjectsSection />
        <NewsletterSection />
        <MentorshipSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
