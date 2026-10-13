(() => {
  document.documentElement.classList.add("js");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const header = document.querySelector("[data-header]");
  const menu = document.querySelector("#mobile-menu");
  const menuToggle = document.querySelector(".menu-toggle");
  const menuClose = document.querySelector(".menu-close");
  let lastFocused = null;

  const setHeader = () => header?.classList.toggle("is-scrolled", window.scrollY > 48);
  setHeader();
  window.addEventListener("scroll", setHeader, { passive: true });

  if ("IntersectionObserver" in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    document.querySelectorAll("[data-reveal]").forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 3, 2) * 60}ms`;
      revealObserver.observe(element);
    });
  } else {
    document.querySelectorAll("[data-reveal]").forEach((element) => element.classList.add("is-visible"));
  }

  const menuFocusable = () => [...menu.querySelectorAll('a, button:not([disabled]), [tabindex]:not([tabindex="-1"])')];
  const closeMenu = () => {
    menu.classList.remove("is-open");
    menu.setAttribute("aria-hidden", "true");
    menuToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("menu-open");
    lastFocused?.focus();
  };
  const openMenu = () => {
    lastFocused = document.activeElement;
    menu.classList.add("is-open");
    menu.setAttribute("aria-hidden", "false");
    menuToggle.setAttribute("aria-expanded", "true");
    document.body.classList.add("menu-open");
    menuClose.focus();
  };
  menuToggle?.addEventListener("click", openMenu);
  menuClose?.addEventListener("click", closeMenu);
  menu?.querySelectorAll("a").forEach((link) => link.addEventListener("click", closeMenu));
  menu?.addEventListener("click", (event) => { if (event.target === menu) closeMenu(); });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && menu.classList.contains("is-open")) closeMenu();
    if (event.key !== "Tab" || !menu.classList.contains("is-open")) return;
    const focusable = menuFocusable();
    const first = focusable[0];
    const last = focusable.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });

  document.querySelectorAll(".faq-item button").forEach((button) => {
    button.addEventListener("click", () => {
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
    });
  });

  const form = document.querySelector("#lead-form");
  if (!form) return;
  const config = window.__VESKA_CONFIG__ || {};
  const status = form.querySelector(".form-status");
  const submit = form.querySelector(".submit-button");
  const submitText = submit.querySelector("span");
  const successPanel = document.querySelector(".success-panel");
  const fields = {
    name: form.elements.name,
    business: form.elements.business,
    link: form.elements.link,
    plan: form.elements.plan,
  };
  const messages = {
    name: "Escribe tu nombre para saber cómo llamarte.",
    business: "Cuéntanos brevemente qué negocio o proyecto tienes.",
    link: "Revisa el enlace. Puede ser una web o perfil de Instagram.",
    plan: "Selecciona un plan o elige “Aún no lo sé”.",
  };
  let attempted = false;
  let formStarted = false;

  const analytics = (eventName, properties = {}) => {
    if (!config.analyticsId || window.__VESKA_ANALYTICS_CONSENT__ !== true) return;
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push({ event: eventName, ...properties });
  };

  const normalizeUrl = (value) => {
    const trimmed = value.trim();
    if (!trimmed) return "";
    const candidate = /^https?:\/\//i.test(trimmed) ? trimmed : `https://${trimmed.replace(/^@/, "instagram.com/")}`;
    try {
      const parsed = new URL(candidate);
      return parsed.hostname.includes(".") ? parsed.href : "";
    } catch { return ""; }
  };

  const isValid = (name) => {
    const value = fields[name].value.trim();
    if (name === "name") return value.length >= 2 && value.length <= 80;
    if (name === "business") return value.length >= 2 && value.length <= 120;
    if (name === "link") return value.length <= 300 && Boolean(normalizeUrl(value));
    if (name === "plan") return Boolean(value);
    return true;
  };

  const showFieldState = (name) => {
    const field = fields[name];
    const error = document.querySelector(`#${name}-error`);
    const valid = isValid(name);
    if (valid) {
      field.removeAttribute("aria-invalid");
      field.removeAttribute("aria-describedby");
      error.textContent = "";
    } else {
      field.setAttribute("aria-invalid", "true");
      field.setAttribute("aria-describedby", `${name}-error`);
      error.textContent = messages[name];
    }
    return valid;
  };

  Object.entries(fields).forEach(([name, field]) => {
    field.addEventListener("blur", () => { if (attempted) showFieldState(name); });
    field.addEventListener("input", () => { if (attempted && field.getAttribute("aria-invalid") === "true") showFieldState(name); });
    field.addEventListener("change", () => { if (attempted) showFieldState(name); });
  });

  form.addEventListener("input", () => {
    if (formStarted) return;
    formStarted = true;
    analytics("form_start");
  }, { once: true });

  const setLoading = (loading) => {
    form.setAttribute("aria-busy", String(loading));
    submit.disabled = loading;
    submit.classList.toggle("is-loading", loading);
    submitText.textContent = loading ? "Enviando…" : "Enviar mi idea";
  };

  document.querySelectorAll("[data-plan]").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      fields.plan.value = button.dataset.plan;
      fields.plan.closest(".field").animate?.([{ outline: "2px solid transparent" }, { outline: "2px solid #a85f45" }, { outline: "2px solid transparent" }], { duration: reduceMotion ? 1 : 700 });
      analytics("plan_selected", { plan: button.dataset.plan });
      document.querySelector("#contacto").scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth" });
      window.setTimeout(() => fields.name.focus({ preventScroll: true }), reduceMotion ? 0 : 650);
    });
  });

  document.querySelectorAll('a[href="#contacto"], a[href="#planes"], a[href="#ejemplos"]').forEach((link) => {
    link.addEventListener("click", () => {
      const location = link.closest("header") ? "header" : link.closest(".hero") ? "hero" : "final";
      analytics("cta_click", { location });
    });
  });

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    attempted = true;
    status.textContent = "";
    status.className = "form-status";
    const invalid = Object.keys(fields).filter((name) => !showFieldState(name));
    if (invalid.length) {
      fields[invalid[0]].focus();
      return;
    }
    if (form.elements.company_website.value) return;

    if (!config.formEndpoint) {
      const contact = config.contactEmail ? ` Escríbenos directamente a ${config.contactEmail}.` : "";
      status.textContent = `El formulario aún no está conectado.${contact}`;
      status.classList.add("is-config");
      status.focus();
      analytics("form_submit_error", { reason: "configuration" });
      return;
    }

    const controller = new AbortController();
    const timeout = window.setTimeout(() => controller.abort(), 12000);
    setLoading(true);
    try {
      const response = await fetch(config.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fields.name.value.trim(),
          business: fields.business.value.trim(),
          link: normalizeUrl(fields.link.value),
          plan: fields.plan.value,
        }),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("request_failed");
      form.hidden = true;
      successPanel.hidden = false;
      successPanel.focus();
      analytics("form_submit_success");
    } catch {
      status.textContent = "No pudimos enviar tu consulta. Revisa tu conexión e inténtalo nuevamente.";
      submitText.textContent = "Intentar nuevamente";
      analytics("form_submit_error", { reason: "network" });
    } finally {
      window.clearTimeout(timeout);
      setLoading(false);
      if (status.textContent) submitText.textContent = "Intentar nuevamente";
    }
  });
})();
