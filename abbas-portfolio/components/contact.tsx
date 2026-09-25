"use client";

import { FormEvent, useState } from "react";
import { MapPinIcon, SocialGlyph } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { portfolio } from "@/data/portfolio";

export function Contact() {
  const { personal, socials } = portfolio;
  const [status, setStatus] = useState("");

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const name = String(form.get("name") ?? "").trim();
    const email = String(form.get("email") ?? "").trim();
    const message = String(form.get("message") ?? "").trim();

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:${personal.email}?subject=${subject}&body=${body}`;
    setStatus("Opening your email client…");
  }

  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something useful"
          description="Reach out by form, email, or phone. The form opens your mail app with the message filled in."
        />
        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <Reveal>
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <p className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-300">
                <MapPinIcon className="h-5 w-5 text-teal-700 dark:text-teal-300" />
                {personal.location}
              </p>
              <ul className="mt-6 space-y-3">
                {socials.map((social) => (
                  <li key={social.name}>
                    <a
                      href={social.href}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer noopener" : undefined}
                      className="inline-flex items-center gap-3 text-sm font-medium text-slate-700 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:text-slate-200 dark:hover:text-teal-300"
                    >
                      <SocialGlyph name={social.icon} className="h-5 w-5" />
                      {social.name === "Email"
                        ? personal.email
                        : social.name === "Phone"
                          ? personal.phone
                          : social.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={0.08}>
            <form
              onSubmit={onSubmit}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-800 dark:bg-slate-900"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Name
                  <input
                    required
                    name="name"
                    type="text"
                    autoComplete="name"
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-teal-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>
                <label className="block text-sm font-medium text-slate-700 dark:text-slate-200">
                  Email
                  <input
                    required
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-teal-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                  />
                </label>
              </div>
              <label className="mt-4 block text-sm font-medium text-slate-700 dark:text-slate-200">
                Message
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="mt-1 w-full rounded-xl border border-slate-300 bg-white px-3 py-2.5 text-slate-900 outline-none ring-teal-500 transition focus:ring-2 dark:border-slate-700 dark:bg-slate-950 dark:text-white"
                />
              </label>
              <button
                type="submit"
                className="mt-5 inline-flex items-center justify-center rounded-full bg-teal-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-teal-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500"
              >
                Send message
              </button>
              {status ? (
                <p className="mt-3 text-sm text-slate-600 dark:text-slate-300" role="status">
                  {status}
                </p>
              ) : null}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
