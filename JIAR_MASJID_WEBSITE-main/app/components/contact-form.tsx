"use client";

import { useState, type FormEvent } from "react";
import { formatPhoneDisplay, formatPhoneLink, siteConfig } from "@/app/lib/site-config";

type FormState = {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  budget: string;
  message: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "General Inquiry",
  budget: "Not sure",
  message: "",
  website: "",
};

const inputClass = "input";

export function ContactForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await res.json();
      if (!res.ok) {
        setErrorMessage(data.error ?? "Something went wrong.");
        setStatus("error");
        return;
      }
      setForm(initialState);
      setStatus("success");
    } catch {
      setErrorMessage("Network error. Please try again.");
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="region region-tint">
      <div className="jiar-container max-w-[720px]">
        <div className="section-head">
          <h2>Contact</h2>
          <p className="section-description">
            Send us a message and we&apos;ll get back to you.
          </p>
        </div>

        {siteConfig.phone && (
          <p className="body-secondary mb-6">
            Or call{" "}
            <a href={formatPhoneLink(siteConfig.phone)} className="tabular">
              {formatPhoneDisplay(siteConfig.phone)}
            </a>
          </p>
        )}

        <form onSubmit={handleSubmit} className="card space-y-4">
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" required>
              <input type="text" required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} />
            </Field>
            <Field label="Email" required>
              <input type="email" required value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} />
            </Field>
            <Field label="Phone">
              <input type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} />
            </Field>
            <Field label="Company">
              <input type="text" value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className={inputClass} />
            </Field>
            <Field label="Service" required>
              <select required value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} className={inputClass}>
                <option>General Inquiry</option>
                <option>Service One</option>
                <option>Service Two</option>
                <option>Other</option>
              </select>
            </Field>
            <Field label="Budget" required>
              <select required value={form.budget} onChange={(e) => setForm({ ...form, budget: e.target.value })} className={inputClass}>
                <option>Under $500</option>
                <option>$500–$2k</option>
                <option>$2k–$5k</option>
                <option>$5k+</option>
                <option>Not sure</option>
              </select>
            </Field>
          </div>
          <Field label="Message" required>
            <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={inputClass} />
          </Field>
          <input type="text" name="website" value={form.website} onChange={(e) => setForm({ ...form, website: e.target.value })} className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          {status === "success" && (
            <p className="form-note">Message sent. We&apos;ll be in touch soon.</p>
          )}
          {status === "error" && (
            <p className="form-note form-note-error">{errorMessage}</p>
          )}
          <button
            type="submit"
            disabled={status === "loading"}
            className="btn btn-primary disabled:opacity-60"
          >
            {status === "loading" ? "Sending…" : "Send message"}
          </button>
        </form>
      </div>
    </section>
  );
}

function Field({ label, required, children }: { label: string; required?: boolean; children: React.ReactNode }) {
  return (
    <div>
      <label className="field-label">{label}{required && " *"}</label>
      {children}
    </div>
  );
}
