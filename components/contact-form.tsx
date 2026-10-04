"use client";

import { useRef, useState } from "react";

type Errors = Partial<Record<"name" | "email" | "message" | "form", string>>;

const field =
  "w-full rounded-xs border bg-surface px-3 py-2.5 text-base text-ink " +
  "transition-colors placeholder:text-ink-3 focus:border-crest-700 focus:outline-none";

export function ContactForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSending(true);
    setErrors({});
    const data = Object.fromEntries(new FormData(e.currentTarget));
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json().catch(() => ({}));
      if (res.ok) {
        setSent(true);
        formRef.current?.reset();
      } else {
        setErrors(json.errors ?? { form: json.error ?? "That didn't send. Try again?" });
      }
    } catch {
      setErrors({ form: "That didn't send — check your connection, or email instead." });
    } finally {
      setSending(false);
    }
  }

  if (sent) {
    return (
      <div className="rounded-xs border border-crest-200 bg-crest-50 p-6" role="status">
        <p className="font-display text-h2 tracking-tight text-ink">Thanks — that&rsquo;s sent.</p>
        <p className="mt-2 text-ink-2">
          I read every note myself, so you&rsquo;ll hear back from me in a day or two.
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-mid text-crest-700 underline underline-offset-4"
        >
          Send another
        </button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={onSubmit} noValidate className="flex flex-col gap-5">
      {errors.form && (
        <p role="alert" className="rounded-xs border border-rule bg-surface px-3 py-2.5 text-mid text-ink-2">
          {errors.form}
        </p>
      )}

      <div className="flex flex-col gap-1.5">
        <label htmlFor="name" className="text-mid font-medium">Your name</label>
        <input
          id="name" name="name" autoComplete="name" required
          aria-invalid={!!errors.name}
          aria-describedby={errors.name ? "name-error" : undefined}
          className={`${field} ${errors.name ? "border-danger" : "border-rule"}`}
        />
        {errors.name && <p id="name-error" className="text-mid text-danger">{errors.name}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="email" className="text-mid font-medium">Email</label>
        <input
          id="email" name="email" type="email" autoComplete="email" required
          aria-invalid={!!errors.email}
          aria-describedby={errors.email ? "email-error" : undefined}
          className={`${field} ${errors.email ? "border-danger" : "border-rule"}`}
        />
        {errors.email && <p id="email-error" className="text-mid text-danger">{errors.email}</p>}
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-mid font-medium">About the project</label>
        <textarea
          id="message" name="message" rows={6} required
          placeholder="What you're making, roughly when you need it, and anything else that helps."
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${field} resize-y ${errors.message ? "border-danger" : "border-rule"}`}
        />
        {errors.message && <p id="message-error" className="text-mid text-danger">{errors.message}</p>}
      </div>

      {/* Honeypot — hidden from people, irresistible to bots. */}
      <div aria-hidden="true" className="absolute left-[-9999px]">
        <label htmlFor="company">Company</label>
        <input id="company" name="company" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={sending}
          className="rounded-xs bg-crest-700 px-5 py-2.5 text-base font-medium text-white transition-colors hover:bg-crest-800 disabled:opacity-60"
        >
          {sending ? "Sending…" : "Send"}
        </button>
        <span aria-live="polite" className="text-mid text-ink-3">
          {sending ? "One moment" : ""}
        </span>
      </div>
    </form>
  );
}
