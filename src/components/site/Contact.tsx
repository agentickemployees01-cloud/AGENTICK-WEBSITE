import LeadForm from "@/components/LeadForm.jsx";
import { Check } from "lucide-react";

const points = [
  "A free 30-minute automation audit of your current workflow",
  "A prioritised list of the tasks worth automating first",
  "A fixed-scope proposal — no open-ended retainers",
];

export function Contact() {
  return (
    <section id="contact" className="border-t border-border bg-surface">
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-6 lg:grid-cols-[0.85fr_1.15fr] lg:py-28">
        <div>
          <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase">Contact</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            Tell us what's slowing your team down
          </h2>
          <p className="mt-4 text-muted-foreground">
            Share a few details and we'll come back with concrete ideas for where AI agents fit in
            your business.
          </p>
          <ul className="mt-8 space-y-3">
            {points.map((point) => (
              <li key={point} className="flex gap-3 text-sm text-muted-foreground">
                <Check className="mt-0.5 size-4 shrink-0 text-accent" />
                {point}
              </li>
            ))}
          </ul>
        </div>
        <LeadForm />
      </div>
    </section>
  );
}
