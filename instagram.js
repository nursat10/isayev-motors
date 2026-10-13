// Вставьте ссылки на Reels по порядку карточек. Пустая строка оставляет заглушку.
// Также можно вставить код встраивания Instagram как строку: из него извлекается только ссылка.
const DELIVERY_REELS = [
  "https://www.instagram.com/reel/DYj7WcHS4-Y/",
  "https://www.instagram.com/reel/DZqM71sMqL4/",
  "https://www.instagram.com/reel/DY_-OanhAf5/",
];

function normalizeReelUrl(value) {
  if (typeof value !== "string" || !value.trim()) return null;
  try {
    const permalink = value.match(
      /data-instgrm-permalink\s*=\s*["']([^"']+)["']/i,
    );
    const url = new URL((permalink ? permalink[1] : value).trim());
    if (
      url.protocol !== "https:" ||
      !["instagram.com", "www.instagram.com"].includes(url.hostname)
    )
      return null;
    const match = url.pathname.match(/^\/reel\/([A-Za-z0-9_-]+)\/?$/);
    if (!match || url.username || url.password || url.port) return null;
    return `https://www.instagram.com/reel/${match[1]}/`;
  } catch {
    return null;
  }
}

function initializeDeliveryReels() {
  let hasReels = false;
  document.querySelectorAll("[data-reel-slot]").forEach((slot, index) => {
    const url = normalizeReelUrl(DELIVERY_REELS[index]);
    if (!url) return;
    const embed = document.createElement("blockquote");
    embed.className = "instagram-media";
    embed.setAttribute("data-instgrm-permalink", url);
    embed.setAttribute("data-instgrm-version", "14");
    const embedLink = document.createElement("a");
    embedLink.href = url;
    embedLink.textContent = "Instagram Reels";
    embedLink.target = "_blank";
    embedLink.rel = "noopener noreferrer";
    embed.append(embedLink);
    slot.replaceChildren(embed);
    slot.classList.add("has-reel");
    // Ссылка остаётся доступной, даже если Instagram не загрузит плеер.
    const fallback = slot.parentElement.querySelector(".delivery-reel-link");
    fallback.href = url;
    fallback.hidden = false;
    hasReels = true;
  });
  // Не загружаем Instagram, пока ни одна ссылка не заполнена.
  if (!hasReels) return;
  if (window.instgrm?.Embeds) {
    window.instgrm.Embeds.process();
    return;
  }
  const loader = document.createElement("script");
  loader.src = "https://www.instagram.com/embed.js";
  loader.async = true;
  loader.onload = () => window.instgrm?.Embeds?.process();
  document.body.append(loader);
}

initializeDeliveryReels();
