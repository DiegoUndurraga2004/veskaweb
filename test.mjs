import { readFileSync } from "node:fs";
import { resolve } from "node:path";

const html = readFileSync(resolve(import.meta.dirname, "dist/index.html"), "utf8");
const assertions = [
  ["one h1", (html.match(/<h1\b/g) || []).length === 1],
  ["required anchors", ["servicios", "ejemplos", "proceso", "planes", "contacto"].every((id) => html.includes(`id="${id}"`))],
  ["three plans", ["$150.000", "$220.000", "$300.000"].every((price) => html.includes(price))],
  ["concept disclosure", html.includes("No corresponden a clientes reales")],
  ["form fields", ["name", "business", "link", "plan", "company_website"].every((name) => html.includes(`name="${name}"`))],
  ["no visible placeholders", !html.includes("[CONTACT_EMAIL]") && !html.includes("[INSTAGRAM_URL]") && !html.includes("[SITE_URL]")],
  ["no fake links", !html.includes('href="#"')],
];

let failed = false;
for (const [name, pass] of assertions) {
  console.log(`${pass ? "✓" : "✗"} ${name}`);
  failed ||= !pass;
}
if (failed) process.exit(1);
