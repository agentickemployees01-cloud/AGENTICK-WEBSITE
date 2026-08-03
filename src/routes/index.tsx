import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero, TrustBar } from "@/components/site/Hero";
import { Services, Process } from "@/components/site/Services";
import { Work, Testimonials, Faq } from "@/components/site/Work";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

const title = "Agentick Employees — Custom AI Agent Workflows for Business";
const description =
  "We build custom AI agents and automations for D2C brands, hotels and service businesses. Concierge chatbots, workflow automation, integrations and ops reporting.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <Process />
        <Work />
        <Testimonials />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
