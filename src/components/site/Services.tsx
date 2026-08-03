import { Bot, Workflow, Plug, Database } from "lucide-react";

const services = [
  {
    icon: Bot,
    title: "AI Chatbots & Concierge Agents",
    description:
      "Always-on agents that answer guests and customers across WhatsApp, web chat and Instagram — booking, upselling and escalating exactly like your best rep.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Order flows, lead routing, onboarding and follow-ups run themselves. We map the process, then let agents handle the repetitive middle.",
  },
  {
    icon: Plug,
    title: "Custom Integrations",
    description:
      "Shopify, HubSpot, Slack, property management systems, spreadsheets and internal APIs — connected into one reliable automation layer.",
  },
  {
    icon: Database,
    title: "Data & Ops Automation",
    description:
      "Automated reporting, inventory checks, reconciliation and daily digests, so your team makes decisions with fresh numbers instead of chasing them.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-28">
      <div className="max-w-2xl">
        <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">Services</p>
        <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
          Agents built around your operation, not a template
        </h2>
        <p className="mt-4 text-muted-foreground">
          Every engagement starts with your real workflow. We ship the automation that removes the
          most hours first.
        </p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2">
        {services.map(({ icon: Icon, title, description }) => (
          <article
            key={title}
            className="card-lift rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
          >
            <span className="inline-flex size-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
              <Icon className="size-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold">{title}</h3>
            <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

const steps = [
  {
    title: "Discover",
    description:
      "A working session to map your processes, tools and bottlenecks. You leave with a prioritised automation roadmap.",
  },
  {
    title: "Build",
    description:
      "We design and build the agents and integrations in short cycles, with a demo environment you can test from week one.",
  },
  {
    title: "Deploy",
    description:
      "Guardrails, escalation paths and team training. We roll out gradually so nothing breaks in your live operation.",
  },
  {
    title: "Support",
    description:
      "Ongoing monitoring, tuning and new workflows as you grow. Your agents get better every month.",
  },
];

export function Process() {
  return (
    <section id="about" className="border-y border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-6 lg:py-28">
        <div className="max-w-2xl">
          <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">How we work</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Four steps from messy process to running agent
          </h2>
        </div>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li
              key={step.title}
              className="card-lift rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-soft)]"
            >
              <span className="inline-flex size-9 items-center justify-center rounded-lg bg-primary text-sm font-semibold text-primary-foreground">
                {String(index + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-5 text-base font-semibold">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {step.description}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
