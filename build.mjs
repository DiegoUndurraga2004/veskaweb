import { cpSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { resolve } from "node:path";
import { renderPage } from "./src/template.mjs";

const root = resolve(import.meta.dirname);
const out = resolve(root, "dist");
const cleanUrl = (value = "") => value.trim().replace(/\/$/, "");
const config = {
  siteUrl: cleanUrl(process.env.PUBLIC_SITE_URL),
  formEndpoint: process.env.PUBLIC_FORM_ENDPOINT?.trim() || "",
  contactEmail: process.env.PUBLIC_CONTACT_EMAIL?.trim() || "",
  instagramUrl: process.env.PUBLIC_INSTAGRAM_URL?.trim() || "",
  analyticsId: process.env.PUBLIC_ANALYTICS_ID?.trim() || "",
};

rmSync(out, { recursive: true, force: true });
mkdirSync(resolve(out, "assets"), { recursive: true });
cpSync(resolve(root, "public"), out, { recursive: true });
writeFileSync(resolve(out, "index.html"), renderPage(config));
writeFileSync(resolve(out, "assets/styles.css"), readFileSync(resolve(root, "src/styles.css")));
writeFileSync(resolve(out, "assets/app.js"), readFileSync(resolve(root, "src/app.js")));

const robots = config.siteUrl
  ? `User-agent: *\nAllow: /\n\nSitemap: ${config.siteUrl}/sitemap.xml\n`
  : "User-agent: *\nAllow: /\n";
writeFileSync(resolve(out, "robots.txt"), robots);

if (config.siteUrl) {
  writeFileSync(resolve(out, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>${config.siteUrl}</loc></url></urlset>\n`);
} else if (existsSync(resolve(out, "sitemap.xml"))) {
  rmSync(resolve(out, "sitemap.xml"));
}

console.log(`Built Veska to ${out}`);
