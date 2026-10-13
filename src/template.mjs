import { site, services, concepts, craft, process, plans, comparison, faqs } from "./data.mjs";

const esc = (value = "") => String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#039;" })[char]);

const picture = ({ image, width, height, alt, eager = false, className = "" }) => `
  <picture class="${className}">
    <source srcset="/assets/images/${image}.avif" type="image/avif">
    <source srcset="/assets/images/${image}.webp" type="image/webp">
    <img src="/assets/images/${image}.jpg" width="${width}" height="${height}" alt="${esc(alt)}" ${eager ? 'fetchpriority="high"' : 'loading="lazy"'} decoding="async">
  </picture>`;

const arrow = `<svg viewBox="0 0 18 18" aria-hidden="true"><path d="M3 9h11M10 4l5 5-5 5"/></svg>`;
const check = `<svg viewBox="0 0 18 18" aria-hidden="true"><path d="m3 9 4 4 8-8"/></svg>`;

export function renderPage(config) {
  const canonical = config.siteUrl ? `<link rel="canonical" href="${esc(config.siteUrl)}">` : "";
  const socialMeta = config.siteUrl ? `
    <meta property="og:url" content="${esc(config.siteUrl)}">
    <meta property="og:image" content="${esc(config.siteUrl)}/assets/images/og-veska.jpg">
    <meta name="twitter:card" content="summary_large_image">` : "";
  const structured = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    name: site.name,
    areaServed: "CL",
    description: "Diseño y desarrollo de páginas web para profesionales, tiendas y negocios locales.",
    ...(config.siteUrl ? { url: config.siteUrl } : {}),
    ...(config.contactEmail ? { email: config.contactEmail } : {}),
  };
  const clientConfig = JSON.stringify({ formEndpoint: config.formEndpoint || "", contactEmail: config.contactEmail || "", analyticsId: config.analyticsId || "" }).replace(/</g, "\\u003c");

  return `<!doctype html>
<html lang="es-CL" class="no-js">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${site.title}</title>
  <meta name="description" content="${site.description}">
  <meta name="theme-color" content="#f4f0e8">
  <meta property="og:title" content="${site.title}">
  <meta property="og:description" content="${site.description}">
  <meta property="og:type" content="website">
  <meta property="og:locale" content="es_CL">${canonical}${socialMeta}
  <link rel="icon" href="/favicon.svg" type="image/svg+xml">
  <link rel="preload" href="/assets/images/hero.avif" as="image" type="image/avif">
  <link rel="stylesheet" href="/assets/styles.css">
  <script>window.__VESKA_CONFIG__=${clientConfig};</script>
  <script type="application/ld+json">${JSON.stringify(structured)}</script>
  <script src="/assets/app.js" defer></script>
</head>
<body>
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <header class="site-header" data-header>
    <div class="header-inner shell">
      <a class="wordmark" href="#top" aria-label="Veska, ir al inicio">veska<span>.</span></a>
      <nav class="desktop-nav" aria-label="Navegación principal">
        <a href="#servicios">Servicios</a><a href="#ejemplos">Ejemplos</a><a href="#proceso">Proceso</a><a href="#planes">Planes</a>
      </nav>
      <a class="button button-small header-cta" href="#contacto">Conversemos ${arrow}</a>
      <button class="menu-toggle" type="button" aria-expanded="false" aria-controls="mobile-menu"><span>Menú</span><span class="menu-icon" aria-hidden="true"></span></button>
    </div>
    <div class="mobile-menu" id="mobile-menu" aria-hidden="true">
      <div class="mobile-menu-inner shell">
        <div class="mobile-menu-top"><span class="wordmark" aria-hidden="true">veska<span>.</span></span><button class="menu-close" type="button" aria-label="Cerrar menú">Cerrar <span aria-hidden="true">×</span></button></div>
        <nav aria-label="Navegación móvil"><a href="#servicios"><span>01</span>Servicios</a><a href="#ejemplos"><span>02</span>Ejemplos</a><a href="#proceso"><span>03</span>Proceso</a><a href="#planes"><span>04</span>Planes</a><a href="#contacto"><span>05</span>Conversemos</a></nav>
        <p>Diseño y desarrollo web · Chile</p>
      </div>
    </div>
  </header>

  <main id="contenido">
    <section class="hero" id="top" aria-labelledby="hero-title">
      <div class="hero-grid shell">
        <div class="hero-copy">
          <p class="eyebrow hero-eyebrow">Diseño y desarrollo web · Chile</p>
          <h1 id="hero-title">Páginas web<br>para negocios <em>reales.</em></h1>
          <p class="hero-lede">Diseñamos sitios simples, lindos y pensados para convertir visitas en conversaciones.</p>
          <div class="hero-actions"><a class="button" href="#contacto">Cuéntanos tu idea ${arrow}</a><a class="text-link" href="#planes">Ver planes</a></div>
          <p class="hero-note"><span aria-hidden="true"></span> Proyectos desde $150.000 CLP</p>
        </div>
        <div class="hero-visual">
          ${picture({ image: "hero", width: 1024, height: 1536, alt: "Persona trabajando con muestras de papel en un estudio cálido y luminoso.", eager: true, className: "hero-picture" })}
          <div class="hero-stamp" aria-hidden="true"><span>Diseño con intención</span><b>→</b></div>
        </div>
      </div>
      <div class="marquee" aria-label="Capacidades"><div class="marquee-track"><span>Sitios de servicios · Catálogos · Portafolios · Reservas externas · WhatsApp · Diseño responsive · SEO básico ·</span><span aria-hidden="true">Sitios de servicios · Catálogos · Portafolios · Reservas externas · WhatsApp · Diseño responsive · SEO básico ·</span></div></div>
    </section>

    <section class="value section shell" aria-labelledby="value-title">
      <div class="section-kicker" data-reveal><p class="eyebrow">Lo esencial, bien hecho</p><span>01 — Enfoque</span></div>
      <div class="value-grid">
        <h2 id="value-title" data-reveal>Tu negocio ya existe.<br>Hagamos que se vea <em>como corresponde.</em></h2>
        <div class="value-copy" data-reveal><p>Una buena web no necesita complicarlo todo. Necesita explicar qué haces, mostrarlo bien y darle a la persona un camino claro para contactarte, reservar o comprar.</p>
          <ul class="check-list"><li>${check}Diseño a la medida de tu identidad.</li><li>${check}Perfecta en celular y computador.</li><li>${check}Contacto simple por formulario o WhatsApp.</li></ul>
        </div>
      </div>
    </section>

    <section class="services section section-stone" id="servicios" aria-labelledby="services-title">
      <div class="shell">
        <div class="section-kicker" data-reveal><p class="eyebrow">Hecho para negocios chicos</p><span>02 — Servicios</span></div>
        <div class="section-heading split-heading"><h2 id="services-title" data-reveal>Una web con la forma<br>de <em>tu negocio.</em></h2><p data-reveal>No todos necesitan lo mismo. Diseñamos la estructura y el recorrido según lo que tus clientes realmente vienen a buscar.</p></div>
        <div class="service-grid">${services.map((item) => `<article class="service-card" data-reveal><div class="card-number">${item.number}</div><div><h3>${item.title}</h3><p>${item.text}</p><p class="card-meta">${item.meta}</p></div></article>`).join("")}</div>
      </div>
    </section>

    <section class="concepts section" id="ejemplos" aria-labelledby="concepts-title">
      <div class="shell">
        <div class="section-kicker" data-reveal><p class="eyebrow">Conceptos Veska</p><span>03 — Ejemplos</span></div>
        <div class="section-heading concept-heading"><h2 id="concepts-title" data-reveal>Tres formas de mostrar bien <em>lo que haces.</em></h2><p class="concept-disclaimer" data-reveal>Estos son proyectos conceptuales creados para mostrar nuestro enfoque de diseño. No corresponden a clientes reales.</p></div>
        <div class="concept-list">${concepts.map((item, index) => `<article class="concept ${index % 2 ? "concept-reverse" : ""}" data-reveal>
          <div class="concept-image"><div class="image-frame">${picture(item)}</div><span>Concepto ${item.number}</span></div>
          <div class="concept-copy"><p class="concept-category">${item.category}</p><h3>${item.name}</h3><p>${item.description}</p><ul class="tag-list">${item.tags.map((tag) => `<li>${tag}</li>`).join("")}</ul></div>
        </article>`).join("")}</div>
      </div>
    </section>

    <section class="craft section" aria-labelledby="craft-title">
      <div class="shell craft-grid">
        <div class="craft-intro"><div class="section-kicker" data-reveal><p class="eyebrow">Cuidado en cada detalle</p><span>04 — Oficio</span></div><h2 id="craft-title" data-reveal>Se ve simple porque cada decisión tiene <em>un propósito.</em></h2><p data-reveal>Jerarquía clara, movimiento sutil, tiempos de carga cuidados y una experiencia que se adapta de verdad a cada pantalla.</p></div>
        <div class="craft-list">${craft.map(([title, text], i) => `<article class="craft-item" data-reveal><span>0${i + 1}</span><div><h3>${title}</h3><p>${text}</p></div><b aria-hidden="true">↗</b></article>`).join("")}</div>
      </div>
    </section>

    <section class="process section section-stone" id="proceso" aria-labelledby="process-title">
      <div class="shell">
        <div class="section-kicker" data-reveal><p class="eyebrow">Un proceso simple</p><span>05 — Proceso</span></div>
        <h2 id="process-title" class="process-title" data-reveal>De la primera conversación<br>a una web <em>lista para mostrar.</em></h2>
        <ol class="process-list">${process.map(([title, text], i) => `<li data-reveal><span>0${i + 1}</span><div class="process-dot" aria-hidden="true"></div><h3>${title}</h3><p>${text}</p></li>`).join("")}</ol>
        <p class="process-note" data-reveal><span>Una parte importante</span>Tú entregas textos, imágenes y datos del negocio. Nosotros los ordenamos y adaptamos para que funcionen bien en la web.</p>
      </div>
    </section>

    <section class="pricing section" id="planes" aria-labelledby="pricing-title">
      <div class="shell">
        <div class="section-kicker" data-reveal><p class="eyebrow">Planes claros</p><span>06 — Inversión</span></div>
        <div class="section-heading split-heading"><h2 id="pricing-title" data-reveal>Elige cuánto necesita contar <em>tu negocio.</em></h2><p data-reveal>Todos los planes incluyen diseño responsive, formulario de contacto, conexión con redes sociales, SEO técnico básico y publicación del sitio.</p></div>
        <div class="plan-grid">${plans.map((plan) => `<article class="plan-card ${plan.key === "business" ? "featured" : ""}" data-reveal>
          <div class="plan-top"><div><p class="plan-name">${plan.name}</p><p class="plan-price">${plan.price} <span>CLP</span></p></div>${plan.badge ? `<span class="plan-badge">${plan.badge}</span>` : ""}</div>
          <p class="plan-tagline">${plan.tagline}</p><p class="includes-label">Incluye</p><ul>${plan.includes.map((item) => `<li>${check}${item}</li>`).join("")}</ul>
          <div class="plan-bottom"><p><span>Ideal para</span>${plan.ideal}</p><a class="button plan-cta" href="#contacto" data-plan="${plan.key}">Me interesa ${plan.name} ${arrow}</a></div>
        </article>`).join("")}</div>
        <p class="pricing-note" data-reveal>Los valores corresponden al alcance descrito y consideran contenido entregado por el cliente. Dominio, hosting, redacción extensa, fotografía y servicios de terceros no están incluidos. E-commerce, pagos online, usuarios, inventario en tiempo real y funciones especiales se cotizan por separado.</p>
      </div>
    </section>

    <section class="comparison section section-light" aria-labelledby="comparison-title">
      <div class="shell"><div class="section-kicker" data-reveal><p class="eyebrow">Comparación y condiciones</p><span>07 — Detalle</span></div><h2 id="comparison-title" class="comparison-title" data-reveal>Lo que incluye cada plan, <em>sin letra chica.</em></h2>
        <div class="table-wrap" data-reveal><table><thead><tr><th>Característica</th><th>Esencial</th><th>Negocio</th><th>Pro</th></tr></thead><tbody>${comparison.map((row) => `<tr>${row.map((cell, i) => `<${i ? "td" : "th"}${i ? ` data-label="${plans[i - 1].name}"` : ""}>${cell}</${i ? "td" : "th"}>`).join("")}</tr>`).join("")}</tbody></table></div>
        <p class="comparison-note">Estos planes no incluyen panel interno. Los productos, servicios y novedades se entregan cargados inicialmente. Los cambios futuros pueden cotizarse por separado o mediante un plan de mantención.</p>
      </div>
    </section>

    <section class="faq section" aria-labelledby="faq-title"><div class="shell faq-grid"><div class="faq-intro"><div class="section-kicker" data-reveal><p class="eyebrow">Preguntas frecuentes</p><span>08 — Dudas</span></div><h2 id="faq-title" data-reveal>Antes de <em>empezar.</em></h2><p data-reveal>Lo importante, explicado sin vueltas.</p><p class="faq-instruction" id="faq-instruction" data-reveal>Selecciona una pregunta para leer la respuesta. Solo se mantendrá una abierta a la vez.</p></div>
      <div class="faq-list" aria-describedby="faq-instruction">${faqs.map(([question, answer], i) => `<article class="faq-item ${i === 0 ? "is-open" : ""}" data-reveal><h3><button type="button" aria-expanded="${i === 0 ? "true" : "false"}" aria-controls="faq-${i}" id="faq-button-${i}"><span>${question}</span><b aria-hidden="true">+</b></button></h3><div class="faq-answer" id="faq-${i}" role="region" aria-labelledby="faq-button-${i}"><p>${answer}</p></div></article>`).join("")}</div>
    </div></section>

    <section class="contact section" id="contacto" aria-labelledby="contact-title">
      <div class="shell contact-grid"><div class="contact-copy"><p class="eyebrow" data-reveal>Hablemos de tu web</p><h2 id="contact-title" data-reveal>Cuéntanos qué tienes <em>en mente.</em></h2><p data-reveal>No necesitas llegar con todo resuelto. Envíanos lo básico y te respondemos con el siguiente paso.</p><div class="contact-mark" aria-hidden="true">v.</div></div>
      <div class="form-panel" data-reveal>
        <form id="lead-form" novalidate>
          <div class="form-row"><div class="field"><label for="name">Tu nombre <span aria-hidden="true">*</span></label><input id="name" name="name" type="text" placeholder="Ej. Camila" minlength="2" maxlength="80" autocomplete="name" required><p class="field-error" id="name-error"></p></div><div class="field"><label for="business">Nombre o tipo de negocio <span aria-hidden="true">*</span></label><input id="business" name="business" type="text" placeholder="Ej. Estudio de uñas en Providencia" minlength="2" maxlength="120" autocomplete="organization" required><p class="field-error" id="business-error"></p></div></div>
          <div class="field"><label for="link">Web, Instagram o red de tu negocio <span aria-hidden="true">*</span></label><input id="link" name="link" type="text" placeholder="instagram.com/tu-negocio" maxlength="300" inputmode="url" autocomplete="url" required><p class="field-error" id="link-error"></p></div>
          <div class="field"><label for="plan">Plan que te interesa <span aria-hidden="true">*</span></label><div class="select-wrap"><select id="plan" name="plan" required><option value="">Selecciona una opción</option><option value="unsure">Aún no lo sé</option><option value="essential">Esencial — $150.000</option><option value="business">Negocio — $220.000</option><option value="pro">Pro — $300.000</option></select><span aria-hidden="true">⌄</span></div><p class="field-error" id="plan-error"></p></div>
          <div class="honeypot" aria-hidden="true"><label for="company_website">No completar</label><input id="company_website" name="company_website" type="text" tabindex="-1" autocomplete="off"></div>
          <div class="form-actions"><button class="button submit-button" type="submit"><span>Enviar mi idea</span>${arrow}</button><p>Usaremos estos datos solo para responder tu consulta.</p></div>
          <div class="form-status" role="status" aria-live="polite" tabindex="-1"></div>
        </form>
        <div class="success-panel" tabindex="-1" hidden><svg viewBox="0 0 54 54" aria-hidden="true"><circle cx="27" cy="27" r="25"/><path d="m16 27 7 7 15-16"/></svg><p class="eyebrow">Mensaje recibido</p><h3>Gracias, recibimos tu idea.</h3><p>Te responderemos por el canal que tengamos disponible en tu enlace o mediante los datos de contacto configurados en el formulario.</p></div>
      </div></div>
    </section>
  </main>

  <footer class="site-footer"><div class="shell footer-grid"><div><a class="wordmark footer-wordmark" href="#top">veska<span>.</span></a><p>Webs simples, lindas y pensadas<br>para negocios reales.</p></div><div class="footer-links"><p>Enlaces</p><a href="#servicios">Servicios</a><a href="#ejemplos">Ejemplos</a><a href="#planes">Planes</a><a href="#contacto">Conversemos</a></div><div class="footer-links"><p>Contacto</p>${config.instagramUrl ? `<a href="${esc(config.instagramUrl)}" target="_blank" rel="noopener noreferrer">Instagram ↗</a>` : ""}${config.contactEmail ? `<a href="mailto:${esc(config.contactEmail)}">${esc(config.contactEmail)}</a>` : ""}<a href="#top">Volver arriba ↑</a></div></div><div class="shell footer-bottom"><span>© ${site.year} Veska. Todos los derechos reservados.</span><span>Diseño y desarrollo web · Chile</span></div></footer>
</body>
</html>`;
}
