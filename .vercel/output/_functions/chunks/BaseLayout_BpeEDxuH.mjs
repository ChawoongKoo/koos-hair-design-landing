import { f as createComponent, m as maybeRenderHead, l as renderScript, r as renderTemplate, h as addAttribute, e as createAstro, k as renderComponent, n as renderHead, o as renderSlot } from './astro/server_l4HcMftX.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Header = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="ticker-bar" data-astro-cid-3ef6ksr2> <div class="ticker-track" data-astro-cid-3ef6ksr2> <span data-astro-cid-3ef6ksr2>NOW HIRING FULL-TIME &amp; PART-TIME STYLISTS &nbsp;&#9733;&nbsp; VISIT OUR CAREERS PAGE FOR DETAILS AND TO APPLY &nbsp;&#9733;&nbsp; NOW HIRING FULL-TIME &amp; PART-TIME STYLISTS &nbsp;&#9733;&nbsp; VISIT OUR CAREERS PAGE FOR DETAILS AND TO APPLY &nbsp;&#9733;&nbsp; WE HAVE ROOMS FOR RENT &nbsp;&#9733;&nbsp;</span> </div> </div> <header class="header" data-astro-cid-3ef6ksr2> <a class="logo-link home-button" data-astro-cid-3ef6ksr2> <img src="/koo_salon.svg" alt="Koo's Wigs & Design logo" class="logo" data-astro-cid-3ef6ksr2> </a> <nav class="nav-links" data-astro-cid-3ef6ksr2> <a class="home-button" data-astro-cid-3ef6ksr2>Home</a> <a class="contact-button" data-astro-cid-3ef6ksr2>Contact</a> </nav> <div class="header-ctas" data-astro-cid-3ef6ksr2> <a class="cta-outline contact-button" data-astro-cid-3ef6ksr2>Contact Us</a> <a class="cta-filled book-button" href="/booking" data-astro-cid-3ef6ksr2>Book</a> </div> </header>  ${renderScript($$result, "/Users/michaelkoo/Documents/koos-hair-design-landing/src/components/Header.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/michaelkoo/Documents/koos-hair-design-landing/src/components/Header.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const address = "westfield wheaton maryland";
  const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
  return renderTemplate`${maybeRenderHead()}<footer class="footer" data-astro-cid-sz7xmlte> <div class="footer-inner" data-astro-cid-sz7xmlte> <div class="footer-brand" data-astro-cid-sz7xmlte> <img src="/koo_salon.svg" alt="Koo's Wigs & Design" class="footer-logo" data-astro-cid-sz7xmlte> <p class="footer-tagline" data-astro-cid-sz7xmlte>Beautiful & Quality.</p> <p class="footer-tagline-sub" data-astro-cid-sz7xmlte>Wheaton, MD</p> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <p class="footer-col-title" data-astro-cid-sz7xmlte>Visit Us</p> <a${addAttribute(mapsUrl, "href")} target="_blank" class="footer-link" data-astro-cid-sz7xmlte>
11160 Veirs Mill Rd<br data-astro-cid-sz7xmlte>
Wheaton, MD 20902
</a> <p class="footer-note" data-astro-cid-sz7xmlte>Inside Wheaton Mall<br data-astro-cid-sz7xmlte>Ground floor, next to Target</p> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <p class="footer-col-title" data-astro-cid-sz7xmlte>Contact</p> <a href="tel:3019334522" class="footer-link" data-astro-cid-sz7xmlte>(301) 933-4522</a> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <p class="footer-col-title" data-astro-cid-sz7xmlte>Hours</p> <table class="footer-hours" data-astro-cid-sz7xmlte> <tr data-astro-cid-sz7xmlte><td data-astro-cid-sz7xmlte>Mon – Thu</td><td data-astro-cid-sz7xmlte>10AM – 8PM</td></tr> <tr data-astro-cid-sz7xmlte><td data-astro-cid-sz7xmlte>Fri – Sat</td><td data-astro-cid-sz7xmlte>10AM – 9PM</td></tr> <tr data-astro-cid-sz7xmlte><td data-astro-cid-sz7xmlte>Sun</td><td data-astro-cid-sz7xmlte>11AM – 7PM</td></tr> </table> </div> <div class="footer-col" data-astro-cid-sz7xmlte> <p class="footer-col-title" data-astro-cid-sz7xmlte>Navigate</p> <nav class="footer-nav" data-astro-cid-sz7xmlte> <button class="footer-nav-link footer-nav-btn" id="footer-home-btn" data-astro-cid-sz7xmlte>Home</button> <button class="footer-nav-link footer-nav-btn" id="footer-contact-btn" data-astro-cid-sz7xmlte>Contact</button> </nav> </div> </div> <div class="footer-bottom" data-astro-cid-sz7xmlte> <p data-astro-cid-sz7xmlte>&copy; 2026 Koo's Wigs &amp; Design. All Rights Reserved.</p> </div> </footer>  ${renderScript($$result, "/Users/michaelkoo/Documents/koos-hair-design-landing/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/michaelkoo/Documents/koos-hair-design-landing/src/components/Footer.astro", void 0);

const $$Astro$2 = createAstro("https://koos-salon.com");
const $$Index$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Index$1;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-analytics", "vercel-analytics", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/michaelkoo/Documents/koos-hair-design-landing/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/michaelkoo/Documents/koos-hair-design-landing/node_modules/@vercel/analytics/dist/astro/index.astro", void 0);

const $$Astro$1 = createAstro("https://koos-salon.com");
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Index;
  const propsStr = JSON.stringify(Astro2.props);
  const paramsStr = JSON.stringify(Astro2.params);
  return renderTemplate`${renderComponent($$result, "vercel-speed-insights", "vercel-speed-insights", { "data-props": propsStr, "data-params": paramsStr, "data-pathname": Astro2.url.pathname })} ${renderScript($$result, "/Users/michaelkoo/Documents/koos-hair-design-landing/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/Users/michaelkoo/Documents/koos-hair-design-landing/node_modules/@vercel/speed-insights/dist/astro/index.astro", void 0);

const $$Astro = createAstro("https://koos-salon.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const { pageTitle } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="generator"${addAttribute(Astro2.generator, "content")}><meta name="description" content="Koo's Wigs & Design is a premier wig salon located in Wheaton, Maryland. We specialize in high-quality wigs, extensions, and professional styling services."><link rel="icon" type="image/svg+xml" href="/koo_salon.svg"><title>${pageTitle}</title>${renderScript($$result, "/Users/michaelkoo/Documents/koos-hair-design-landing/src/layouts/BaseLayout.astro?astro&type=script&index=0&lang.ts")}${renderHead()}</head> <body> ${renderComponent($$result, "Header", $$Header, {})} ${renderSlot($$result, $$slots["default"])} ${renderComponent($$result, "Footer", $$Footer, {})} ${renderComponent($$result, "Analytics", $$Index$1, {})} ${renderComponent($$result, "SpeedInsights", $$Index, {})} </body></html>`;
}, "/Users/michaelkoo/Documents/koos-hair-design-landing/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
