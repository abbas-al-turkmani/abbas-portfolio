import { SocialGlyph } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { portfolio } from "@/data/portfolio";
import { ArrowRight, MessageCircle } from "lucide-react";

export function Hero() {
  const { personal, socials } = portfolio;
  const [firstName, ...lastName] = personal.name.split(" ");

  return (
    <section id="home" className="hero-section relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(20,184,166,0.18),transparent_40%),radial-gradient(circle_at_bottom_left,rgba(13,148,136,0.12),transparent_35%)]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10 lg:px-8 lg:py-24">
        <div className="hero-content">
          <Reveal>
            <p className="hero-greeting">
              <span className="hero-status-dot" />
              Available for Opportunities
            </p>
            <h1 className="hero-name">
              {firstName}
              <br />
              <span className="hero-gradient-text">{lastName.join(" ")}</span>
            </h1>
            <p className="hero-role">
              Flutter Specialist <span>&amp;</span>{" "}
              <strong>Cross-Platform Dev</strong>
            </p>
            <p className="hero-description">{personal.summary}</p>
            <div className="hero-actions">
              <a href="#projects" className="hero-button hero-button-primary">
                View My Work <ArrowRight size={16} />
              </a>
              <a href="#contact" className="hero-button hero-button-outline">
                <MessageCircle size={16} /> Get In Touch
              </a>
            </div>
            <div className="hero-stats" aria-label="Career highlights">
              {[["3+", "Years Exp."]].map(([value, label]) => (
                <div key={label} className="hero-stat">
                  <strong>{value}</strong>
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </Reveal>
          <ul
            className="mt-8 flex items-center gap-3"
            aria-label="Social links"
          >
            {socials.map((social) => (
              <li key={social.name}>
                <a
                  href={social.href}
                  target={social.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    social.href.startsWith("http")
                      ? "noreferrer noopener"
                      : undefined
                  }
                  aria-label={social.ariaLabel}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-700 shadow-sm transition hover:border-teal-400 hover:text-teal-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 dark:hover:text-teal-300"
                >
                  <SocialGlyph name={social.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        <Reveal delay={0.12} className="hero-visual">
          <div className="hero-orb hero-orb-one" />
          <div className="hero-orb hero-orb-two" />
          <div className="hero-orb hero-orb-three" />
          <div className="hero-profile-ring" />
          <div className="hero-phone">
            <div className="hero-phone-notch" />
            <div className="hero-phone-screen">
              <div className="hero-app-mark">◆</div>
              {["bar", "row", "bar", "row"].map((type, index) => (
                <div key={index} className={`hero-mini-card ${type}`}>
                  {type === "row" ? (
                    <>
                      <span className="hero-mini-dot" />
                      <span className="hero-mini-lines" />
                    </>
                  ) : (
                    <>
                      <span />
                      <span className="short" />
                      <span className="shorter" />
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
          {["Flutter", "iOS", "Android", "Firebase"].map((label, index) => (
            <div
              key={label}
              className={`hero-tech-bubble hero-tech-bubble-${index + 1}`}
            >
              <span className="hero-tech-icon">
                {["◆", "●", "▣", "✦"][index]}
              </span>
              {label}
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
