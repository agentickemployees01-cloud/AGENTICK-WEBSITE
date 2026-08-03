import { ArrowUpRight, Quote } from "lucide-react";

const projects = [
  {
    initials: "NV",
    company: "Nova Skincare",
    industry: "D2C beauty",
    summary:
      "AI support concierge handling order tracking, returns and product matching across email and Instagram DMs.",
    result: "68% of tickets resolved without a human",
  },
  {
    initials: "HR",
    company: "Harbour Rooms",
    industry: "Boutique hotel group",
    summary:
      "Multilingual booking and upsell agent connected to the property management system and payment links.",
    result: "+22% direct bookings in 90 days",
  },
  {
    initials: "PL",
    company: "Pipeline Legal",
    industry: "Professional services",
    summary:
      "Intake automation that qualifies leads, drafts engagement docs and syncs everything into the CRM.",
    result: "11 hours saved per week per associate",
  },
];

export function Work() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">Selected work</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Automations already earning their keep
        </h2>
      </div>

      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.company}
            className="card-lift flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
          >
            <div className="flex items-center justify-between">
              <span className="inline-flex size-11 items-center justify-center rounded-xl bg-primary text-sm font-semibold text-primary-foreground">
                {p.initials}
              </span>
              <ArrowUpRight className="size-4 text-muted-foreground" />
            </div>
            <h3 className="mt-5 text-lg font-semibold">{p.company}</h3>
            <p className="text-xs text-muted-foreground">{p.industry}</p>
            <p className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">{p.summary}</p>
            <p className="mt-6 rounded-xl bg-accent/10 px-4 py-3 text-sm font-medium text-accent">
              {p.result}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

const testimonials = [
  {
    quote:
      "They replaced our patchwork of manual checks with one agent that just works. Support response time went from hours to seconds.",
    name: "Marta Ruiz",
    role: "Head of CX",
    company: "Nova Skincare",
  },
  {
    quote:
      "The booking agent speaks four languages and never misses a follow-up. It's the most consistent team member we have.",
    name: "Daniel Osei",
    role: "General Manager",
    company: "Harbour Rooms",
  },
  {
    quote:
      "Clear scoping, fast delivery, and they stayed on after launch to tune it. Rare for an agency.",
    name: "Priya Nair",
    role: "Managing Partner",
    company: "Pipeline Legal",
  },
];

export function Testimonials() {
  return (
    <section className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-28">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          What clients say after go-live
        </h2>
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="card-lift flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <Quote className="size-5 text-accent" />
              <blockquote className="mt-4 flex-1 text-sm leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-6 border-t border-border pt-5">
                <span className="block text-sm font-medium">{t.name}</span>
                <span className="block text-xs text-muted-foreground">
                  {t.role}, {t.company}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "How much does an engagement cost?",
    a: "Most first projects land between $4k and $15k depending on scope, with a fixed monthly retainer for ongoing monitoring and new workflows. You get a fixed quote after the discovery session.",
  },
  {
    q: "How long until something is live?",
    a: "A focused first workflow is typically live in 2–4 weeks. Larger multi-system automations run 6–10 weeks, delivered in testable increments.",
  },
  {
    q: "Which industries do you work with?",
    a: "We specialise in Real estate, D2C brands, Hospitality groups, and Professional services such as Financial Firms.",
  },
  {
    q: "How does it actually work?",
    a: "We map your process, connect your existing tools, and deploy AI agents that handle defined tasks with clear guardrails and human escalation whenever confidence is low.",
  },
  {
    q: "Do you need a technical team?",
    a: "No. We handle the build, hosting and integrations. Your team only needs to review outputs during rollout and tell us where the edge cases are.",
  },
  {
    q: "Is our data safe?",
    a: "Yes. We use least-privilege access, keep credentials in a secure vault, and can deploy inside your own cloud accounts if required.",
  },
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-5 py-20 sm:px-6 lg:py-28">
      <h2 className="text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
        Frequently asked questions
      </h2>
      <dl className="mt-10 divide-y divide-border border-y border-border">
        {faqs.map((item) => (
          <div key={item.q} className="py-6">
            <dt className="text-base font-medium">{item.q}</dt>
            <dd className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
