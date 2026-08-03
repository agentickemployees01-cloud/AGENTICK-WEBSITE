import { Linkedin, Twitter, Instagram, Mail } from "lucide-react";
import logo from "@/assets/IMG-20260801-WA0001.jpg";

const nav = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-6">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-2.5">
              {/* Changed logo.url to logo directly */}
              <img src={logo} alt="Agentick Employees logo" className="h-9 w-auto rounded-md object-contain" />
              <span className="font-semibold tracking-tight">Agentick Employees</span>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              We design, build, and deploy custom AI agents and automation systems — from lead
              capture and customer support to internal workflows and data pipelines — for businesses
              across industries.
            </p>
            <a
              href="mailto:agentickemployees01@gmail.com"
              className="mt-4 inline-flex items-center gap-2 text-sm text-foreground transition-colors hover:text-accent"
            >
              <Mail className="size-4" />
              agentickemployees01@gmail.com
            </a>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:gap-16">
            <div>
              <h3 className="text-sm font-semibold">Navigate</h3>
              <ul className="mt-4 space-y-2.5">
                {nav.map((item) => (
                  <li key={item.href}>
                    <a
                      href={item.href}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold">Follow</h3>
              <div className="mt-4 flex gap-3">
                {[
                  {
                    icon: Linkedin,
                    label: "LinkedIn",
                    href: "https://www.linkedin.com/company/agentick-employees/about/?viewAsMember=true",
                  },
                  { icon: Twitter, label: "X", href: "https://x.com/agentickemp" },
                  {
                    icon: Instagram,
                    label: "Instagram",
                    href: "https://www.instagram.com/agentickemployees/",
                  },
                ].map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="inline-flex size-9 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors hover:border-accent/50 hover:text-accent"
                  >
                    <Icon className="size-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-6 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Agentick Employees. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
