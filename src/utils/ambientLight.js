export function syncAmbientLight() {
  const glow = document.getElementById("ambient-glow");
  if (!glow) return;

  const moon = document.getElementById("hero-moon-orb");
  const sun = document.getElementById("hero-sun-orb");
  const moonVisible = moon?.dataset.visible === "true";
  const sunVisible = sun?.dataset.visible === "true";
  const source = moonVisible && moon?.dataset.phase === "night"
    ? moon
    : sunVisible
      ? sun
      : moonVisible
        ? moon
        : null;

  glow.dataset.active = source ? "true" : "false";
  glow.dataset.source = source === sun ? "sun" : source === moon ? "moon" : "none";
  glow.dataset.phase = source?.dataset.phase ?? "none";
}
