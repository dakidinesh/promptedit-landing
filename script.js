document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear().toString();
  }

  const navToggle = document.querySelector(".nav__mobile-toggle");
  const mobileMenu = document.querySelector(".nav__mobile-menu");

  if (navToggle && mobileMenu) {
    navToggle.addEventListener("click", () => {
      const isOpen = navToggle.classList.toggle("is-open");
      mobileMenu.classList.toggle("is-open", isOpen);
      mobileMenu.setAttribute("aria-hidden", (!isOpen).toString());
    });

    mobileMenu.addEventListener("click", (event) => {
      const target = event.target;
      if (target instanceof HTMLElement && target.matches("a.nav__mobile-link")) {
        navToggle.classList.remove("is-open");
        mobileMenu.classList.remove("is-open");
        mobileMenu.setAttribute("aria-hidden", "true");
      }
    });
  }

  const tabsRoot = document.querySelector("[data-tabs]");
  if (tabsRoot) {
    const tabButtons = Array.from(
      tabsRoot.querySelectorAll("[data-tab-target]")
    );
    const panels = Array.from(
      tabsRoot.querySelectorAll("[data-tab-panel]")
    );

    tabButtons.forEach((btn) => {
      btn.addEventListener("click", () => {
        const target = btn.getAttribute("data-tab-target");
        if (!target) return;

        tabButtons.forEach((b) => {
          b.classList.remove("is-active");
          b.setAttribute("aria-selected", "false");
        });

        panels.forEach((panel) => {
          const panelId = panel.getAttribute("data-tab-panel");
          panel.classList.toggle("is-active", panelId === target);
        });

        btn.classList.add("is-active");
        btn.setAttribute("aria-selected", "true");
      });
    });
  }

  const faqRoot = document.querySelector("[data-accordion]");
  if (faqRoot) {
    const items = Array.from(
      faqRoot.querySelectorAll(".faq-item")
    );

    items.forEach((item) => {
      item.addEventListener("click", () => {
        const isOpen = item.classList.contains("is-open");

        items.forEach((i) => i.classList.remove("is-open"));

        if (!isOpen) {
          item.classList.add("is-open");
        }
      });
    });
  }

  const internalLinks = document.querySelectorAll(
    'a[href^="#"]:not([href="#"])'
  );

  internalLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const href = link.getAttribute("href");
      if (!href || href.length < 2) return;

      const targetId = href.slice(1);
      const targetEl = document.getElementById(targetId);
      if (!targetEl) return;

      event.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  });
});

