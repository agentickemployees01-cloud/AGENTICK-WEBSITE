import { ArrowRight, Bot, Workflow, Plug, Database } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden hero-glow">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-20 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:py-28">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 rounded-full bg-accent" />
            AI automation agency
          </span>
          <h1 className="mt-6 text-4xl leading-[1.08] font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Hire AI employees that run your business operations
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            We build custom AI agents and automations that handle support, operations, and
            everything in between — quietly removing hours of manual work every week, for any
            business.
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Button variant="accent" size="xl" asChild>
              <a href="#contact">
                Book a Call <ArrowRight />
              </a>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <a href="#work">See our work</a>
            </Button>
          </div>
          <p className="mt-5 text-xs text-muted-foreground">
            Free 30-minute automation audit · No commitment
          </p>
        </div>

        <div className="relative">
          <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-lift)]">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium">Agent workflow</p>
              <span className="rounded-full bg-accent/10 px-2.5 py-1 text-[0.7rem] font-medium text-accent">
                Live
              </span>
            </div>
            <ol className="mt-6 space-y-3">
              {[
                { icon: Bot, title: "Inbound message", meta: "WhatsApp · Instagram · Email" },
                { icon: Workflow, title: "Agent triages intent", meta: "Classify → route → reply" },
                { icon: Plug, title: "Systems updated", meta: "CRM · Shopify · PMS" },
                { icon: Database, title: "Report generated", meta: "Daily ops digest" },
              ].map(({ icon: Icon, title, meta }, i) => (
                <li
                  key={title}
                  className="flex items-center gap-3 rounded-xl border border-border bg-surface px-4 py-3"
                  style={{ animation: `fade-in 0.6s ease ${i * 0.12}s both` }}
                >
                  <span className="inline-flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
                    <Icon className="size-4" />
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate text-sm font-medium">{title}</span>
                    <span className="block truncate text-xs text-muted-foreground">{meta}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-6 flex items-center justify-between rounded-xl bg-primary px-4 py-3 text-primary-foreground">
              <span className="text-xs">Avg. handling time</span>
              <span className="text-sm font-semibold">-73%</span>
            </div>
          </div>
          <div className="absolute -top-8 -right-6 -z-10 size-40 rounded-full bg-accent/20 blur-3xl" />
        </div>
      </div>
    </section>
  );
}

export function TrustBar() {
  const stats = [
    { value: "120+", label: "Workflows deployed" },
    { value: "18k", label: "Hours saved for clients" },
    { value: "40+", label: "Businesses automated" },
    { value: "24/7", label: "Agent uptime" },
  ];

  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-12 sm:px-6">
        <p className="text-center text-xs font-medium tracking-[0.18em] text-muted-foreground uppercase">
          Trusted by teams across e-commerce, hospitality and services
        </p>
        <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd>
                <span className="block text-3xl font-semibold tracking-tight">{s.value}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{s.label}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
