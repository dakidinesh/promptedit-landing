import React, { useEffect, useState } from "react";

type TabId = "templates" | "ai" | "extensions";

type HeroModel = {
  name: string;
  description: string;
};

const App: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<TabId>("templates");
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const heroModels: HeroModel[] = [
    {
      name: "VEO 3.1 Fast",
      description:
        "Fast, high‑quality generations tuned for social edits, client previews and rapid concept testing."
    },
    {
      name: "Sora 2",
      description:
        "Cinematic, story‑driven shots when you need hero moments that feel like they were filmed on set."
    },
    {
      name: "Nano Banana",
      description:
        "Lightweight, cost‑efficient generations for thumbnails, style frames and look exploration."
    },
    {
      name: "Nano Banana Pro",
      description:
        "Brand‑ready images with stronger detail and consistency for campaigns, pitches and decks."
    },
    {
      name: "Kling 2.6",
      description:
        "Smooth, controlled motion with built‑in sound for complex transitions and technical sequences."
    },
    {
      name: "Kling 2.5 Turbo",
      description:
        "Turbo‑speed iterations for exploring multiple directions and batch concepts with clients."
    }
  ];
  const ASSET_BASE = import.meta.env.BASE_URL || "/";

  const [activeHeroModel, setActiveHeroModel] = useState<HeroModel>(heroModels[0]);
  const [activeAiCard, setActiveAiCard] = useState<string>("VEO 3.1 Fast");
  const templateVideos = [
    {
      id: "tpl-1",
      title: "YouTube channel starter pack",
      description:
        "Intro, lower thirds and transitions wired for long‑form storytelling.",
      file: `${ASSET_BASE}1.mp4`,
      label: "YouTube templates"
    },
    {
      id: "tpl-2",
      title: "Short‑form hooks system",
      description:
        "9:16 hooks, caption layouts and punchy cuts tuned for Shorts & Reels.",
      file: `${ASSET_BASE}2.mp4`,
      label: "Short‑form series"
    },
    {
      id: "tpl-3",
      title: "Client hand‑off kit",
      description:
        "Reusable brand frames, product shots and CTA end‑cards for campaigns.",
      file: `${ASSET_BASE}3.mp4`,
      label: "Client campaigns"
    },
    {
      id: "tpl-4",
      title: "Product spotlight edit",
      description:
        "Snappy, close‑up product shots with motion accents and CTA frames.",
      file: `${ASSET_BASE}4.mp4`,
      label: "Product promos"
    },
    {
      id: "tpl-5",
      title: "Talking‑head coach system",
      description:
        "Clean framing, animated bullets and chapter cards for experts & course creators.",
      file: `${ASSET_BASE}5.mp4`,
      label: "Talking‑head"
    },
    {
      id: "tpl-6",
      title: "Podcast clipper",
      description:
        "Side‑by‑side layouts, waveform overlays and captions for podcast repurposing.",
      file: `${ASSET_BASE}6.mp4`,
      label: "Podcasts"
    },
    {
      id: "tpl-7",
      title: "Ad creative sandbox",
      description:
        "A/B‑test hooks, offers and CTAs fast with flexible ad‑ready layouts.",
      file: `${ASSET_BASE}7.mp4`,
      label: "Paid ads"
    },
    {
      id: "tpl-8",
      title: "Cinematic b‑roll timeline",
      description:
        "Layered b‑roll sequences with speed‑ramps and light leaks baked in.",
      file: `${ASSET_BASE}8.mp4`,
      label: "Cinematic b‑roll"
    },
    {
      id: "tpl-9",
      title: "Event recap reel",
      description:
        "Beat‑synced transitions and crowd shots optimized for quick turnaround recaps.",
      file: `${ASSET_BASE}9.mp4`,
      label: "Events"
    },
    {
      id: "tpl-10",
      title: "Logo sting collection",
      description:
        "Multiple logo reveals you can swap in across channels and clients.",
      file: `${ASSET_BASE}10.mp4`,
      label: "Logo stings"
    },
    {
      id: "tpl-11",
      title: "Brand explainer sequence",
      description:
        "Storyboarded, text‑driven layout for concise brand or feature explainers.",
      file: `${ASSET_BASE}11.mp4`,
      label: "Explainers"
    },
    {
      id: "tpl-12",
      title: "Social proof carousel",
      description:
        "Testimonials, social screenshots and stats presented in a looping carousel.",
      file: `${ASSET_BASE}12.mp4`,
      label: "Social proof"
    }
  ];

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      if (!target) return;
      if (target.closest("a[href^='#']")) {
        const anchor = target.closest("a[href^='#']") as HTMLAnchorElement;
        const href = anchor.getAttribute("href");
        if (!href || href === "#" || href.length < 2) return;
        const id = href.slice(1);
        const el = document.getElementById(id);
        if (!el) return;
        event.preventDefault();
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        setMobileOpen(false);
      }
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    const yearSpan = document.getElementById("year");
    if (yearSpan) {
      yearSpan.textContent = new Date().getFullYear().toString();
    }
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(
      "[data-animate='fade-up']"
    );
    if (!elements.length || !("IntersectionObserver" in window)) {
      elements.forEach((el) => el.classList.add("animate-fade-up-soft"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-up-soft");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.18 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-pe-bg text-slate-100 relative">
      <div className="pointer-events-none fixed inset-0 opacity-80">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_0%_0%,rgba(56,189,248,0.4),transparent_60%),radial-gradient(circle_at_100%_0%,rgba(37,99,235,0.35),transparent_60%),radial-gradient(circle_at_50%_100%,rgba(15,23,42,0.85),transparent_70%)] animate-bg-orbit" />
      </div>

      <header className="sticky top-0 z-40 backdrop-blur-xl bg-gradient-to-b from-[#02020b_f8] via-[#02020bcc] to-transparent">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-4 px-6 py-3 lg:px-10">
          <a href="#hero" className="inline-flex items-center gap-2">
            <span className="h-[22px] w-[22px] rounded-lg bg-[conic-gradient(from_210deg,#ffd15c,#ff8f3c,#ff2f8e,#7c4dff,#ffd15c)] shadow-[0_0_18px_rgba(255,159,89,0.8)]" />
            <span className="text-sm font-semibold tracking-tight">
              PromptEdit
            </span>
          </a>

          <nav className="hidden items-center gap-4 text-[0.86rem] text-slate-300 md:flex">
            <a className="transition-colors hover:text-white" href="#templates">
              Templates
            </a>
            <a className="transition-colors hover:text-white" href="#ai-tools">
              AI Tools
            </a>
            <a className="transition-colors hover:text-white" href="#how-it-works">
              How it works
            </a>
            <a className="transition-colors hover:text-white" href="#for-creators">
              For creators
            </a>
            <a className="transition-colors hover:text-white" href="#extensions">
              Extensions
            </a>
            <a className="transition-colors hover:text-white" href="#pricing">
              Pricing
            </a>
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#faq"
              className="text-[0.85rem] font-medium text-slate-300 transition-colors hover:text-white"
            >
              FAQ
            </a>
            <button className="rounded-full border border-white/25 px-4 py-1.5 text-[0.85rem] font-medium text-slate-50 shadow-sm transition-colors hover:border-white/50 hover:bg-white/5">
              Sign In
            </button>
            <a
              href="#hero"
              className="rounded-full bg-gradient-to-tr from-[#ffd15c] to-[#ff8f3c] px-4 py-1.5 text-[0.85rem] font-semibold text-[#08030f] shadow-[0_10px_26px_rgba(255,159,89,0.55)] transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-[0_16px_36px_rgba(255,159,89,0.7)]"
            >
              Join the marketplace
            </a>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex h-9 w-9 items-center justify-center gap-1 rounded-full border border-white/30 bg-black/70 md:hidden"
            aria-label="Toggle navigation"
          >
            <span
              className={`h-[1.5px] w-4 rounded-full bg-white transition-transform ${
                mobileOpen ? "translate-y-[3px] rotate-45" : ""
              }`}
            />
            <span
              className={`h-[1.5px] w-4 rounded-full bg-white transition-transform ${
                mobileOpen ? "-translate-y-[3px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>

        {mobileOpen && (
          <div className="mx-auto flex max-w-5xl flex-col gap-1 border-t border-white/10 bg-[#050510] px-5 pb-4 pt-2 text-sm md:hidden">
            <a className="py-1.5" href="#templates">
              Templates
            </a>
            <a className="py-1.5" href="#ai-tools">
              AI Tools
            </a>
            <a className="py-1.5" href="#how-it-works">
              How it works
            </a>
            <a className="py-1.5" href="#for-creators">
              For creators
            </a>
            <a className="py-1.5" href="#extensions">
              Extensions
            </a>
            <a className="py-1.5" href="#pricing">
              Pricing
            </a>
            <hr className="my-1 border-white/10" />
            <button
              type="button"
              className="py-1.5 text-slate-400"
            >
              Sign In
            </button>
            <a
              href="#hero"
              className="mt-1 inline-flex w-fit rounded-full bg-gradient-to-tr from-[#ffd15c] to-[#ff8f3c] px-4 py-1.5 text-[0.9rem] font-semibold text-[#08030f]"
            >
              Join the marketplace
            </a>
          </div>
        )}
      </header>

      <main className="relative z-10">
        <section
          id="hero"
          className="relative overflow-hidden border-b border-white/5 bg-black/90"
        >
          <div className="absolute inset-0">
            {/* Background video – uses /public/video.mp4 */}
            <video
              className="absolute inset-0 h-full w-full object-cover"
              autoPlay
              loop
              muted
              playsInline
              src={`${ASSET_BASE}video.mp4`}
            />
            {/* Neutral dark overlay (no extra color tint) */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/25 to-black/60" />
          </div>

          <div className="relative mx-auto flex min-h-[70vh] w-full max-w-7xl flex-col items-center justify-center px-6 pb-16 pt-14 text-center md:pb-20 lg:px-10">
            <div
              className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/40 px-3 py-1 text-[0.7rem] uppercase tracking-[0.18em] text-slate-200"
              data-animate="fade-up"
            >
              <span className="rounded-full bg-white/10 px-2 py-0.5 text-[0.65rem] font-semibold text-amber-200">
                New
              </span>
              <span className="text-[0.68rem] font-medium normal-case tracking-normal text-slate-200/90">
                Marketplace of time‑saving templates &amp; pay‑per‑use AI tools
              </span>
            </div>

            <div className="mt-6 max-w-2xl space-y-4" data-animate="fade-up">
              <h1 className="text-3xl font-semibold leading-tight tracking-[-0.06em] text-slate-50 sm:text-4xl md:text-[2.8rem]">
                Ship edits{" "}
                <span className="bg-gradient-to-r from-amber-100 via-white to-amber-200 bg-clip-text text-transparent">
                  10× faster
                </span>{" "}
                with PromptEdit.
              </h1>
              <p className="text-[0.97rem] leading-relaxed text-slate-100/90">
                PromptEdit is where editors find plug‑and‑play video templates and
                pay‑per‑use AI models like VEO 3.1 Fast and Sora 2—inside one
                intuitive workspace.
              </p>
            </div>

            <div
              className="mt-6 flex flex-wrap items-center justify-center gap-3"
              data-animate="fade-up"
            >
              <a
                href="#pricing"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-[#ffd15c] to-[#ff8f3c] px-7 py-2.5 text-[0.95rem] font-semibold text-[#08030f] shadow-[0_14px_30px_rgba(255,159,89,0.6)] transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(255,159,89,0.9)]"
              >
                Join the marketplace
              </a>
              <a
                href="#templates"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-tr from-[#ffd15c] to-[#ff8f3c] px-7 py-2.5 text-[0.95rem] font-semibold text-[#08030f] shadow-[0_14px_30px_rgba(255,159,89,0.6)] transition-transform transition-shadow hover:-translate-y-0.5 hover:shadow-[0_22px_44px_rgba(255,159,89,0.9)]"
              >
                Browse templates
              </a>
            </div>

            <div
              className="mt-6 flex flex-wrap items-center justify-center gap-3 text-[0.8rem]"
              data-animate="fade-up"
            >
              <div className="rounded-full border border-white/20 bg-black/60 px-4 py-1.5 text-slate-100/90 shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),rgba(3,7,18,0.98))] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.9),0_0_26px_rgba(255,159,89,0.7)] hover:animate-glow-soft">
                Designed for editors in DaVinci Resolve &amp; Premiere Pro
              </div>
              <div className="rounded-full border border-white/15 bg-black/50 px-4 py-1.5 text-slate-200/90 shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),rgba(3,7,18,0.98))] hover:-translate-y-0.5 hover:shadow-[0_16px_40px_rgba(0,0,0,0.9),0_0_26px_rgba(255,159,89,0.7)] hover:animate-glow-soft">
                Built for templates, AI workflows &amp; fast delivery
              </div>
            </div>

            <div
              className="pointer-events-auto mt-10 w-full max-w-3xl rounded-3xl border border-white/20 bg-black/60 px-4 py-4 text-[0.8rem] shadow-[0_18px_40px_rgba(0,0,0,0.9)] backdrop-blur-xl"
              data-animate="fade-up"
            >
              <div className="flex flex-wrap items-center justify-between gap-3 text-slate-200">
                <span className="text-[0.7rem] uppercase tracking-[0.18em] text-slate-300">
                  AI models available in PromptEdit
                </span>
                <span className="hidden text-[0.7rem] text-slate-400 sm:inline">
                  Hover or tap a model to see how it fits your workflow.
                </span>
              </div>
              <div className="mt-3 flex flex-wrap justify-center gap-1.5 text-[0.78rem]">
                {heroModels.map((tool) => {
                  const isActive = activeHeroModel.name === tool.name;
                  const activate = () => setActiveHeroModel(tool);
                  return (
                    <button
                      key={tool.name}
                      type="button"
                      onClick={activate}
                      onMouseEnter={activate}
                      className={`rounded-full border px-2.5 py-0.5 transition-colors ${
                        isActive
                          ? "border-amber-300 bg-amber-200/20 text-amber-100"
                          : "border-white/18 bg-white/5 text-slate-50 hover:bg-white/15"
                      }`}
                    >
                      {tool.name}
                    </button>
                  );
                })}
              </div>
              <div className="mt-3 rounded-2xl border border-white/10 bg-black/50 px-3 py-2 text-left text-slate-200">
                <p className="text-[0.82rem] font-semibold text-slate-100">
                  {activeHeroModel.name}
                </p>
                <p className="mt-1 text-[0.86rem] leading-relaxed text-slate-200/95">
                  {activeHeroModel.description}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="ai-tools"
          className="relative border-t border-white/5 bg-transparent py-12"
        >
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div
              className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
              data-animate="fade-up"
            >
              <div>
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  AI Tools
                </p>
                <h2 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.04em]">
                  The right AI model, right where you edit
                </h2>
                <p className="mt-2 max-w-xl text-[1rem] leading-relaxed text-slate-200/90">
                  Send frames, clips or prompts to different video models without
                  ever leaving your editing flow. Pay only when you generate,
                  keep full creative control.
                </p>
                <p className="mt-2 max-w-xl text-[0.92rem] leading-relaxed text-slate-200">
                  Today PromptEdit connects you to{" "}
                  <span className="font-semibold text-slate-100">
                    VEO 3.1 Fast, Sora 2, Nano Banana, Nano Banana Pro, Kling 2.6
                    and Kling 2.5 Turbo
                  </span>
                  &nbsp;— curated for real production use instead of endless
                  model lists.
                </p>
              </div>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[0.9rem] font-medium text-slate-50"
              >
                See how AI fits your workflow
              </a>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {[
                {
                  title: "VEO 3.1 Fast",
                  pill: "Flagship",
                  desc: "Fast, high‑quality generations tuned for social edits and campaigns that need to ship today.",
                  meta: ["Video", "Speed + quality"]
                },
                {
                  title: "Sora 2",
                  desc: "Ultra‑realistic, story‑driven generations for hero shots and flagship campaigns.",
                  meta: ["Cinematic", "Lifelike motion"]
                },
                {
                  title: "Nano Banana",
                  desc: "Rapid explorations for thumbnails, concept frames and look development on a budget.",
                  meta: ["Images", "Cost‑effective"]
                },
                {
                  title: "Nano Banana Pro",
                  desc: "Higher fidelity images when you need brand‑safe key art and polished visuals.",
                  meta: ["Images", "High detail"]
                },
                {
                  title: "Kling 2.6",
                  desc: "Smooth, cinematic motion with built‑in sound for scroll‑stopping edits.",
                  meta: ["Video", "Fluid motion"]
                },
                {
                  title: "Kling 2.5 Turbo",
                  desc: "Turbo‑charged generations when you want to iterate through dozens of ideas before locking the final.",
                  meta: ["Video", "Rapid exploration"]
                }
              ].map((card) => {
                const isActive = activeAiCard === card.title;
                return (
                  <article
                    key={card.title}
                    data-animate="fade-up"
                    onMouseEnter={() => setActiveAiCard(card.title)}
                    onFocus={() => setActiveAiCard(card.title)}
                    className={`group relative overflow-hidden rounded-2xl border bg-black/70 p-4 text-sm shadow-soft-glow transition-transform transition-shadow duration-200 hover:-translate-y-1 ${
                      isActive
                        ? "border-amber-200/80 bg-[radial-gradient(circle_at_top_left,rgba(255,196,120,0.35),rgba(9,9,18,0.98))] shadow-[0_24px_50px_rgba(0,0,0,0.9),0_0_45px_rgba(255,159,89,0.7)] hover:animate-glow-soft"
                        : "border-white/10 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),rgba(2,6,23,0.98))] hover:shadow-[0_24px_50px_rgba(0,0,0,0.9),0_0_45px_rgba(255,159,89,0.6)] hover:animate-glow-soft"
                    }`}
                  >
                    {card.pill && (
                      <div className="mb-2 inline-flex rounded-full bg-white/10 px-3 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.18em] text-slate-50">
                        {card.pill}
                      </div>
                    )}
                    <h3 className="text-[1rem] font-semibold">{card.title}</h3>
                    <p className="mt-1.5 text-[0.9rem] leading-relaxed text-slate-200/90">
                      {card.desc}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[0.75rem] text-slate-300">
                      {card.meta.map((m) => (
                        <span
                          key={m}
                          className="rounded-full border border-white/15 bg-white/5 px-2 py-0.5"
                        >
                          {m}
                        </span>
                      ))}
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="how-it-works"
          className="border-t border-white/5 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.06),transparent_60%),rgba(4,4,10,0.98)] py-12"
        >
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="mb-6 text-center" data-animate="fade-up">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                How PromptEdit fits your day
              </p>
              <h2 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.04em]">
                Templates, AI and extensions in one flow
              </h2>
            </div>

            <div
              className="rounded-3xl border border-white/15 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.8),rgba(3,7,18,0.98))] p-5 shadow-[0_26px_64px_rgba(0,0,0,0.9)]"
              data-animate="fade-up"
            >
              <div className="inline-flex rounded-full border border-white/15 bg-black/80 p-1 text-[0.85rem]">
                {[
                  { id: "templates", label: "Templates" },
                  { id: "ai", label: "AI Tools" },
                  { id: "extensions", label: "Extensions" }
                ].map((tab) => {
                  const isActive = activeTab === tab.id;
                  const activate = () => setActiveTab(tab.id as TabId);
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={activate}
                      onMouseEnter={activate}
                      className={`rounded-full px-4 py-1.5 font-medium transition-colors transition-shadow ${
                        isActive
                          ? "bg-gradient-to-tr from-[#ffd15c] to-[#ff8f3c] text-[#08030f] shadow-[0_12px_26px_rgba(255,159,89,0.7)]"
                          : "border border-transparent text-slate-300 hover:text-slate-50 hover:bg-white/10 hover:shadow-[0_10px_24px_rgba(15,23,42,0.9)]"
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 grid gap-8 md:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)] md:items-center">
                {activeTab === "templates" && (
                  <>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-50">
                        Start with a template, not a blank timeline
                      </h3>
                      <p className="mt-2 text-[0.98rem] leading-relaxed text-slate-200">
                        Browse a marketplace of ready‑to‑use video editing
                        templates built for YouTube, TikTok, Reels, client work
                        and more. Every template is designed to drop into your
                        project and save hours.
                      </p>
                      <ul className="mt-4 space-y-2 text-[0.94rem] text-slate-100">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                          <span>Transitions, title packs, LUTs and full project files</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                          <span>Search by editor, style, platform and duration</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                          <span>Keep your own project structure and workflow</span>
                        </li>
                      </ul>
                      <a
                        href="#templates"
                        className="mt-4 inline-flex items-center rounded-full border border-amber-300/70 bg-transparent px-4 py-1.5 text-[0.9rem] font-medium text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.35)] transition hover:bg-amber-300/15"
                      >
                        Explore templates
                        <span className="ml-1 text-sm">→</span>
                      </a>
                    </div>
                    <div className="h-52 rounded-2xl bg-[radial-gradient(circle_at_0_0,rgba(56,189,248,0.7),transparent_55%),radial-gradient(circle_at_100%_100%,rgba(30,64,175,0.85),transparent_60%),linear-gradient(145deg,#020617,#020617)] p-3 shadow-[0_20px_50px_rgba(15,23,42,0.9)]">
                      <div className="flex flex-wrap gap-2 text-[0.8rem] text-slate-100">
                        {[
                          "YouTube edits",
                          "Short‑form hooks",
                          "Client templates",
                          "Title packs"
                        ].map((label) => (
                          <span
                            key={label}
                            className="rounded-full border border-cyan-200/80 bg-black/70 px-2.5 py-1 transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,211,238,0.9)] hover:animate-glow-soft"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                {activeTab === "ai" && (
                  <>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-50">
                        Trigger the right AI model at the right moment
                      </h3>
                      <p className="mt-2 text-[0.98rem] leading-relaxed text-slate-200">
                        Send frames, clips or prompts to VEO 3.1 Fast, Sora 2,
                        Nano Banana, Nano Banana Pro, Kling 2.6 or Kling 2.5
                        Turbo directly from your editing flow.
                      </p>
                      <ul className="mt-4 space-y-2 text-[0.94rem] text-slate-100">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                          <span>Route prompts to different models in one UI</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                          <span>Pay only for what you generate, no bloated plans</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                          <span>Keep full rights to your AI outputs</span>
                        </li>
                      </ul>
                      <a
                        href="#ai-tools"
                        className="mt-4 inline-flex items-center rounded-full border border-amber-300/70 bg-transparent px-4 py-1.5 text-[0.9rem] font-medium text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.35)] transition hover:bg-amber-300/15"
                      >
                        Explore AI tools
                        <span className="ml-1 text-sm">→</span>
                      </a>
                    </div>
                    <div className="h-52 rounded-2xl bg-[radial-gradient(circle_at_0_100%,rgba(45,212,191,0.7),transparent_55%),radial-gradient(circle_at_100%_0,rgba(129,140,248,0.7),transparent_55%),linear-gradient(145deg,#020617,#020617)] p-3 shadow-[0_20px_50px_rgba(15,23,42,0.9)]">
                      <div className="flex flex-wrap gap-2 text-[0.8rem] text-slate-100">
                        {[
                          "VEO 3.1 Fast",
                          "Sora 2",
                          "Nano Banana / Pro",
                          "Kling 2.6 / 2.5 Turbo"
                        ].map((label) => (
                          <span
                            key={label}
                            className="rounded-full border border-cyan-200/80 bg-black/70 px-2.5 py-1 transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,211,238,0.9)] hover:animate-glow-soft"
                          >
                            {label}
                          </span>
                        ))}
                      </div>
                    </div>
                  </>
                )}
                {activeTab === "extensions" && (
                  <>
                    <div>
                      <h3 className="text-xl font-semibold text-slate-50">
                        Stay in DaVinci Resolve &amp; Premiere Pro
                      </h3>
                      <p className="mt-2 text-[0.98rem] leading-relaxed text-slate-200">
                        Use PromptEdit’s extensions to browse templates and
                        trigger AI tools without leaving your editing software.
                        Fewer context switches, more finished timelines.
                      </p>
                      <ul className="mt-4 space-y-2 text-[0.94rem] text-slate-100">
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                          <span>DaVinci Resolve and Adobe Premiere Pro extensions</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                          <span>Built with React and Tailwind, optimized for speed</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="mt-1 inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
                          <span>Designs that feel native to your editor</span>
                        </li>
                      </ul>
                      <a
                        href="#extensions"
                        className="mt-4 inline-flex items-center rounded-full border border-amber-300/70 bg-transparent px-4 py-1.5 text-[0.9rem] font-medium text-amber-200 shadow-[0_0_20px_rgba(251,191,36,0.35)] transition hover:bg-amber-300/15"
                      >
                        See extensions
                        <span className="ml-1 text-sm">→</span>
                      </a>
                    </div>
                    <div className="h-52 rounded-2xl bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.75),transparent_55%),linear-gradient(145deg,#020617,#020617)] p-3 shadow-[0_20px_50px_rgba(15,23,42,0.9)]">
                      <div className="flex flex-wrap gap-2 text-[0.8rem] text-slate-100">
                        {["DaVinci Resolve", "Premiere Pro", "In‑editor AI tools"].map(
                          (label) => (
                            <span
                              key={label}
                              className="rounded-full border border-cyan-200/80 bg-black/70 px-2.5 py-1 transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_20px_rgba(34,211,238,0.9)] hover:animate-glow-soft"
                            >
                              {label}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </section>

        <section
          id="templates"
          className="border-t border-white/5 bg-transparent py-12"
        >
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="mb-8 text-center" data-animate="fade-up">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                A marketplace built for editors
              </p>
              <h2 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.04em]">
                Time‑saving templates for every cut
              </h2>
            </div>

            <div
              className="grid gap-4 md:grid-cols-3"
              data-animate="fade-up"
            >
              <article className="rounded-2xl border border-white/12 bg-black/80 p-4 text-[0.93rem] leading-relaxed text-slate-200/95 shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),rgba(2,6,23,0.98))] hover:shadow-[0_22px_52px_rgba(0,0,0,0.95),0_0_40px_rgba(255,159,89,0.7)] hover:-translate-y-1 hover:animate-glow-soft">
                <h3 className="mb-2 text-[1.02rem] font-semibold">
                  Designed by working editors
                </h3>
                <p>
                  The creators on PromptEdit are editors first. Templates feel
                  like something you’d build yourself on your best day.
                </p>
              </article>
              <article className="rounded-2xl border border-white/12 bg-black/80 p-4 text-[0.93rem] leading-relaxed text-slate-200/95 shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),rgba(2,6,23,0.98))] hover:shadow-[0_22px_52px_rgba(0,0,0,0.95),0_0_40px_rgba(255,159,89,0.7)] hover:-translate-y-1 hover:animate-glow-soft">
                <h3 className="mb-2 text-[1.02rem] font-semibold">
                  Optimized for modern platforms
                </h3>
                <p>
                  Systems for YouTube, TikTok, Reels, ads and client work. Hooks,
                  pacing and layout tuned for each platform.
                </p>
              </article>
              <article className="rounded-2xl border border-white/12 bg-black/80 p-4 text-[0.93rem] leading-relaxed text-slate-200/95 shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),rgba(2,6,23,0.98))] hover:shadow-[0_22px_52px_rgba(0,0,0,0.95),0_0_40px_rgba(255,159,89,0.7)] hover:-translate-y-1 hover:animate-glow-soft">
                <h3 className="mb-2 text-[1.02rem] font-semibold">
                  Stack with AI, not against it
                </h3>
                <p>
                  Templates are built to work with AI shots and generations, not
                  fight them. Drop in AI clips and keep moving.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="template-previews"
          className="border-t border-white/5 bg-transparent py-12"
        >
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="mb-6 text-center" data-animate="fade-up">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Template previews
              </p>
              <h2 className="mt-2 text-[2.1rem] font-semibold tracking-[-0.04em] sm:text-[2.3rem]">
                Hover to preview video templates
              </h2>
              <p className="mx-auto mt-2 max-w-2xl text-[0.95rem] leading-relaxed text-slate-200">
                Move your cursor over a template card to see it in motion. Each preview
                is a real timeline setup you can drop into DaVinci Resolve or Premiere Pro.
              </p>
            </div>

            <div
              className="mt-6 grid gap-6 text-slate-200 md:grid-cols-2"
              data-animate="fade-up"
            >
              {templateVideos.map((tpl) => (
                <article
                  key={tpl.id}
                  className="group flex h-full flex-col rounded-2xl border border-white/15 bg-black/80 p-4 text-[0.93rem] leading-relaxed text-slate-200 shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),rgba(3,7,18,0.98))] hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(0,0,0,0.95),0_0_40px_rgba(255,159,89,0.7)] hover:animate-glow-soft"
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/12 bg-black/80">
                    <video
                      className="w-full aspect-video object-cover transition-transform duration-200 group-hover:scale-[1.03]"
                      src={tpl.file}
                      muted
                      playsInline
                      loop
                      onMouseEnter={(e) => {
                        const v = e.currentTarget;
                        try {
                          void v.play();
                        } catch {
                          // ignore autoplay errors
                        }
                      }}
                      onMouseLeave={(e) => {
                        const v = e.currentTarget;
                        v.pause();
                        v.currentTime = 0;
                      }}
                    />
                    <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                    <span className="pointer-events-none absolute left-3 top-3 inline-flex items-center rounded-full border border-white/30 bg-black/60 px-2 py-0.5 text-[0.7rem] font-semibold uppercase tracking-[0.16em] text-slate-100">
                      {tpl.label}
                    </span>
                  </div>
                  <div className="mt-4">
                    <h3 className="text-[1.05rem] font-semibold text-slate-50">
                      {tpl.title}
                    </h3>
                    <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-300">
                      {tpl.description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="for-creators"
          className="border-t border-white/5 bg-transparent py-12"
        >
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="text-center">
              <p className="text-[0.8rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                For template creators &amp; motion designers
              </p>
              <h2 className="mt-3 text-[2rem] font-semibold tracking-[-0.05em] text-slate-50 md:text-[2.2rem]">
                Turn your systems into tools editors rely on every day.
              </h2>
              <p className="mx-auto mt-3 max-w-2xl text-[1rem] leading-relaxed text-slate-200">
                You design the motion and structure. PromptEdit helps you reach
                editors, creators and teams that want to plug your work directly
                into their workflow.
              </p>
            </div>

            <div className="mt-8 grid gap-4 text-slate-200 md:grid-cols-3">
              <article className="rounded-2xl border border-white/12 bg-black/70 p-5 text-left shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),rgba(2,6,23,0.98))] hover:shadow-[0_22px_52px_rgba(0,0,0,0.95),0_0_40px_rgba(255,159,89,0.7)] hover:-translate-y-1 hover:animate-glow-soft">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#ffd15c] to-[#ff8f3c] text-[0.8rem] font-semibold text-[#05030a] shadow-[0_0_18px_rgba(255,159,89,0.7)]">
                  1
                </div>
                <h3 className="mt-3 text-[1.02rem] font-semibold">
                  List templates built for real production use
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-300">
                  Focus on clarity, controls and performance. We care deeply
                  about how it feels to work with your template inside a busy
                  timeline.
                </p>
              </article>

              <article className="rounded-2xl border border-white/12 bg-black/70 p-5 text-left shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),rgba(2,6,23,0.98))] hover:shadow-[0_22px_52px_rgba(0,0,0,0.95),0_0_40px_rgba(255,159,89,0.7)] hover:-translate-y-1 hover:animate-glow-soft">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#ffd15c] to-[#ff8f3c] text-[0.8rem] font-semibold text-[#05030a] shadow-[0_0_18px_rgba(255,159,89,0.7)]">
                  2
                </div>
                <h3 className="mt-3 text-[1.02rem] font-semibold">
                  Tap into creators using AI every day
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-300">
                  Your templates can be combined with PromptEdit’s AI tools,
                  making them more valuable for editors who want to move fast
                  without losing quality.
                </p>
              </article>

              <article className="rounded-2xl border border-white/12 bg-black/70 p-5 text-left shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.22),rgba(2,6,23,0.98))] hover:shadow-[0_22px_52px_rgba(0,0,0,0.95),0_0_40px_rgba(255,159,89,0.7)] hover:-translate-y-1 hover:animate-glow-soft">
                <div className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-tr from-[#ffd15c] to-[#ff8f3c] text-[0.8rem] font-semibold text-[#05030a] shadow-[0_0_18px_rgba(255,159,89,0.7)]">
                  3
                </div>
                <h3 className="mt-3 text-[1.02rem] font-semibold">
                  Earn when your work saves time
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-slate-300">
                  Build a catalog of templates that generate revenue as creators
                  and teams use them across projects, channels and campaigns.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          id="extensions"
          className="border-t border-white/5 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_60%),rgba(4,4,10,0.98)] py-12"
        >
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div
              className="mb-8 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between"
              data-animate="fade-up"
            >
              <div>
                <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                  Works where you edit
                </p>
                <h2 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.04em]">
                  Extensions that feel native
                </h2>
                <p className="mt-2 max-w-xl text-[0.95rem] leading-relaxed text-slate-200/90">
                  PromptEdit connects your browser, DaVinci Resolve and Premiere
                  Pro so your templates and AI tools follow you everywhere.
                </p>
              </div>
            </div>

            <div
              className="grid gap-4 md:grid-cols-4"
              data-animate="fade-up"
            >
              {[
                {
                  label: "Browser",
                  body: "Plan, preview and manage your templates and AI credits in a clean, fast web dashboard.",
                  cta: "Preview dashboard →"
                },
                {
                  label: "DaVinci Resolve",
                  body: "Quickly drop templates onto your timeline and trigger AI generations directly from Resolve.",
                  cta: "See Resolve extension →"
                },
                {
                  label: "Premiere Pro",
                  body: "Browse PromptEdit, insert templates and trigger AI tools in panels that feel native to Premiere.",
                  cta: "See Premiere extension →"
                },
                {
                  label: "Future tools",
                  body: "We’re rapidly expanding our AI and template tooling based on what working editors ask for.",
                  cta: "Join the journey →"
                }
              ].map((card) => (
                <article
                  key={card.label}
                  className="flex h-full flex-col justify-between rounded-2xl border border-white/15 bg-[radial-gradient(circle_at_top_left,rgba(15,23,42,0.9),rgba(3,7,18,0.98))] p-4 text-[0.93rem] leading-relaxed text-slate-100 shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),rgba(3,7,18,0.98))] hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(0,0,0,0.95),0_0_40px_rgba(255,159,89,0.7)] hover:animate-glow-soft"
                >
                  <div>
                    <div className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                      {card.label}
                    </div>
                    <p className="mt-2 text-slate-200/90">{card.body}</p>
                  </div>
                  <button
                    type="button"
                    className="mt-3 text-left text-[0.9rem] text-amber-300"
                  >
                    {card.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section
          id="pricing"
          className="border-t border-white/5 bg-transparent py-12"
        >
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
            <div className="mb-8 text-center" data-animate="fade-up">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Join the PromptEdit marketplace
              </p>
              <h2 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.04em]">
                Plans for creators and pros
              </h2>
            </div>

            <div
              className="grid gap-4 md:grid-cols-2"
              data-animate="fade-up"
            >
              <article className="flex h-full flex-col rounded-2xl border border-white/16 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),rgba(12,12,22,0.98))] p-5 text-[0.95rem] leading-relaxed text-slate-100 shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.18),rgba(12,12,22,0.98))] hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(0,0,0,0.95),0_0_40px_rgba(255,159,89,0.7)] hover:animate-glow-soft">
                <h3 className="text-[1.02rem] font-semibold">
                  Creator
                </h3>
                <p className="mt-1 text-2xl font-semibold text-slate-50">
                  $29
                  <span className="text-sm font-normal text-slate-300">
                    &nbsp;/&nbsp;monthly
                  </span>
                </p>
                <p className="mt-2 text-slate-200/90">
                  For individual editors and creators who want a faster way to
                  ship content every week.
                </p>
                <ul className="mt-3 space-y-1.5 pb-3 text-[0.92rem]">
                  <li>
                    ✓ Unlimited downloads
                  </li>
                  <li>
                    ✓ Access to all assets
                  </li>
                  <li>✓ 10 new assets added every single week</li>
                  <li>✓ Request the assets you need</li>
                  <li>
                    ✓ Licensed for all personal and commercial usage
                  </li>
                </ul>
                <button
                  type="button"
                  className="mt-auto mt-6 w-full rounded-full bg-gradient-to-tr from-[#ffd15c] to-[#ff8f3c] px-4 py-2.5 text-[0.95rem] font-semibold text-[#08030f] shadow-[0_14px_30px_rgba(255,159,89,0.6)] transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(255,159,89,0.8)]"
                >
                  Create Account
                </button>
              </article>

              <article className="flex h-full flex-col rounded-2xl border border-white/16 bg-black/90 p-5 text-[0.95rem] leading-relaxed text-slate-100 shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.14),rgba(12,12,22,0.98))] hover:-translate-y-1 hover:shadow-[0_24px_56px_rgba(0,0,0,0.95),0_0_40px_rgba(255,159,89,0.7)] hover:animate-glow-soft">
                <h3 className="text-[1.02rem] font-semibold">
                  Pro
                </h3>
                <p className="mt-1 text-2xl font-semibold text-slate-50">
                  $299
                  <span className="text-sm font-normal text-slate-300">
                    &nbsp;/&nbsp;yearly
                  </span>
                </p>
                <p className="mt-2 text-slate-200/90">
                  For power users and teams who want predictable pricing and a
                  yearly plan.
                </p>
                <ul className="mt-3 space-y-1.5 pb-3 text-[0.92rem]">
                  <li>✓ Unlimited downloads</li>
                  <li>✓ Access to all assets</li>
                  <li>✓ 10 new assets added every single week</li>
                  <li>✓ Request the assets you need</li>
                  <li>
                    ✓ Licensed for all personal and commercial usage
                  </li>
                </ul>
                <button
                  type="button"
                  className="mt-auto mt-6 w-full rounded-full bg-gradient-to-tr from-[#ffd15c] to-[#ff8f3c] px-4 py-2.5 text-[0.95rem] font-semibold text-[#08030f] shadow-[0_14px_30px_rgba(255,159,89,0.6)] transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_20px_40px_rgba(255,159,89,0.8)]"
                >
                  Create Account
                </button>
              </article>
            </div>

            <div className="mt-12 flex justify-center">
              <a
                href="#hero"
                className="inline-flex min-w-[320px] items-center justify-center rounded-full bg-gradient-to-tr from-[#ffd15c] to-[#ff8f3c] px-16 py-4 text-[1.2rem] font-semibold text-[#08030f] shadow-[0_26px_60px_rgba(255,159,89,0.8)] transition-transform transition-shadow duration-200 hover:-translate-y-0.5 hover:shadow-[0_34px_80px_rgba(255,159,89,1)] hover:animate-glow-soft"
              >
                Join the marketplace
              </a>
            </div>
          </div>
        </section>

        <section
          id="faq"
          className="border-t border-white/5 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.07),transparent_60%),rgba(4,4,10,0.98)] py-10"
        >
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <div className="mb-6 text-center" data-animate="fade-up">
              <p className="text-[0.75rem] font-semibold uppercase tracking-[0.18em] text-slate-300">
                Frequently asked questions
              </p>
              <h2 className="mt-2 text-[1.9rem] font-semibold tracking-[-0.04em]">
                Answers for editors &amp; creators
              </h2>
            </div>

            <div className="space-y-3">
              {[
                {
                  q: "What is this project?",
                  a: "This is a concept homepage for PromptEdit that reimagines how the marketplace could present time‑saving templates and pay‑per‑use AI tools to editors."
                },
                {
                  q: "Is this connected to the live promptedit.com site?",
                  a: "No. This page is a standalone front‑end concept. It doesn’t include real authentication, billing or API integrations."
                },
                {
                  q: "Can this design be integrated into the real product?",
                  a: "Yes. The page is built with React, TypeScript and Tailwind, so it can be adapted into Vue, Inertia or Laravel layouts as needed."
                },
                {
                  q: "How do I run this locally and customize it?",
                  a: "Install dependencies with `npm install`, run `npm run dev`, and open the local URL Vite prints. From there you can tweak Tailwind classes or break the page into smaller components."
                }
              ].map((item, idx) => {
                const open = openFaq === idx;
                return (
                  <button
                    key={item.q}
                    type="button"
                    onClick={() => setOpenFaq(open ? null : idx)}
                    className="flex w-full flex-col rounded-2xl border border-white/15 bg-black/90 px-4 py-3 text-left text-[0.95rem] text-slate-100 shadow-soft-glow transition-transform transition-shadow duration-200 hover:border-amber-200/80 hover:bg-[radial-gradient(circle_at_top_left,rgba(251,191,36,0.16),rgba(3,7,18,0.98))] hover:-translate-y-1 hover:shadow-[0_22px_52px_rgba(0,0,0,0.95),0_0_40px_rgba(255,159,89,0.7)] hover:animate-glow-soft"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <h3 className="text-[0.98rem] font-medium">{item.q}</h3>
                      <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/40 text-xs">
                        {open ? "−" : "+"}
                      </span>
                    </div>
                    <div
                      className={`mt-2 text-[0.9rem] text-slate-200/90 transition-[max-height,opacity] duration-200 ${
                        open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      } overflow-hidden`}
                    >
                      {item.a}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/10 bg-[#03030a_f5] py-4">
        <div className="mx-auto grid max-w-6xl gap-y-1 gap-x-4 px-6 text-[0.85rem] text-slate-300 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:px-10">
          <div>
            <div className="inline-flex items-center gap-2">
              <span className="h-[18px] w-[18px] rounded-lg bg-[conic-gradient(from_210deg,#ffd15c,#ff8f3c,#ff2f8e,#7c4dff,#ffd15c)] shadow-[0_0_14px_rgba(255,159,89,0.7)]" />
              <span className="text-[0.9rem] font-semibold tracking-tight">
                PromptEdit
              </span>
            </div>
            <p className="mt-1 max-w-md leading-relaxed text-slate-300/90">
              Homepage concept for PromptEdit’s marketplace of time‑saving
              templates and pay‑per‑use AI tools.
            </p>
          </div>
          <div className="flex gap-6 md:justify-end">
            <div>
              <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-slate-200">
                Product
              </h4>
              <a
                href="#templates"
                className="mt-1 block transition-colors hover:text-white"
              >
                Templates
              </a>
              <a
                href="#ai-tools"
                className="mt-1 block transition-colors hover:text-white"
              >
                AI Tools
              </a>
              <a
                href="#pricing"
                className="mt-1 block transition-colors hover:text-white"
              >
                Pricing
              </a>
            </div>
            <div>
              <h4 className="text-[0.78rem] font-semibold uppercase tracking-[0.18em] text-slate-200">
                Company
              </h4>
              <a
                href="#extensions"
                className="mt-1 block transition-colors hover:text-white"
              >
                Extensions
              </a>
              <a
                href="#faq"
                className="mt-1 block transition-colors hover:text-white"
              >
                FAQ
              </a>
            </div>
          </div>
          <div className="col-span-full mt-0 text-[0.8rem] text-slate-500">
            © <span id="year" /> PromptEdit UI concept for demo purposes.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;

