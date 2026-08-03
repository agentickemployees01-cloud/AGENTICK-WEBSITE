const MAKE_WEBHOOK_URL = "https://hook.eu1.make.com/qk8uoshvtoo5ar28t2wsdh1p1k6kb8n2";

import { useState } from "react";
import { CheckCircle2, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const initialData = {
  name: "",
  email: "",
  brandName: "",
  teamSize: "",
  message: "",
};

export default function LeadForm() {
  const [formData, setFormData] = useState(initialData);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const payload = {
      name: formData.name,
      email: formData.email,
      brand_name: formData.brandName,
      team_size: Number(formData.teamSize),
      message: formData.message,
    };

    try {
      const response = await fetch(MAKE_WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setStatus("success");
      setFormData(initialData);
    } catch (error) {
      setStatus("error");
      setErrorMessage(
        error instanceof Error && error.message
          ? "We couldn't send your request. Please try again or email us directly."
          : "Something went wrong. Please try again.",
      );
    }
  };

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-border bg-card p-10 text-center shadow-[var(--shadow-soft)]">
        <CheckCircle2 className="mx-auto size-12 text-accent" strokeWidth={1.5} />
        <h3 className="mt-5 text-xl font-semibold">Thanks, we'll be in touch within 24 hours</h3>
        <p className="mt-2 text-sm text-muted-foreground">
          One of our automation architects will review your requirements and reach out with next
          steps.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setStatus("idle")}>
          Send another request
        </Button>
      </div>
    );
  }

  const isLoading = status === "loading";

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] sm:p-8"
      noValidate={false}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Jane Doe"
            required
            maxLength={100}
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="jane@brand.com"
            required
            maxLength={255}
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="brandName">Brand name</Label>
          <Input
            id="brandName"
            name="brandName"
            value={formData.brandName}
            onChange={handleChange}
            placeholder="Acme Co."
            required
            maxLength={120}
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="teamSize">Team size</Label>
          <Input
            id="teamSize"
            name="teamSize"
            type="number"
            min="1"
            step="1"
            value={formData.teamSize}
            onChange={handleChange}
            placeholder="12"
            required
            disabled={isLoading}
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Describe your requirements or problems</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            maxLength={2000}
            placeholder="We handle 400+ support tickets a week and want an AI concierge to triage them..."
            required
            disabled={isLoading}
          />
        </div>
      </div>

      {status === "error" ? (
        <p className="mt-5 flex items-start gap-2 rounded-lg border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" />
          {errorMessage}
        </p>
      ) : null}

      <Button type="submit" variant="accent" size="lg" className="mt-6 w-full" disabled={isLoading}>
        {isLoading ? (
          <>
            <Loader2 className="animate-spin" />
            Sending...
          </>
        ) : (
          "Request your automation audit"
        )}
      </Button>
      <p className="mt-3 text-center text-xs text-muted-foreground">
        No spam. We reply within one business day.
      </p>
    </form>
  );
}
