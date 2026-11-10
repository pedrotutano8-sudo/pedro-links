// ===== CONFIG =====
// WhatsApp com DDI + DDD, só dígitos
const WHATSAPP = "5519996589990";
// Preencha quando tiver os IDs (deixe vazio para desligar)
const GA4_ID = "";          // ex.: "G-XXXXXXXXXX"  (Google Analytics 4)
const META_PIXEL_ID = "";   // ex.: "123456789012345" (Pixel do Meta)

// ===== Google Analytics 4 =====
if (GA4_ID) {
  const s = document.createElement("script");
  s.async = true; s.src = "https://www.googletagmanager.com/gtag/js?id=" + GA4_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag("js", new Date()); gtag("config", GA4_ID);
}

// ===== Pixel do Meta =====
if (META_PIXEL_ID) {
  !function(f,b,e,v,n,t,s){if(f.fbq)return;n=f.fbq=function(){n.callMethod?
  n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!f._fbq)f._fbq=n;
  n.push=n;n.loaded=!0;n.version='2.0';n.queue=[];t=b.createElement(e);t.async=!0;
  t.src=v;s=b.getElementsByTagName(e)[0];s.parentNode.insertBefore(t,s)}(window,
  document,'script','https://connect.facebook.net/en_US/fbevents.js');
  fbq("init", META_PIXEL_ID); fbq("track", "PageView");
}

// ===== Links de WhatsApp + evento de clique =====
document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page || "menu";
  document.querySelectorAll("[data-wa]").forEach((a, i) => {
    a.href = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(a.dataset.wa);
    a.addEventListener("click", () => {
      const botao = (a.textContent || "").trim().slice(0, 60);
      if (window.gtag) gtag("event", "clique_whatsapp", { pagina: page, botao: botao, posicao: i + 1 });
      if (window.fbq) fbq("track", "Contact", { content_name: page });
    });
  });
});
