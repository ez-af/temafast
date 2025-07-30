const lightness = 0.5;
const chroma = 0.8;
const hueOffset = 120; // degrees apart in hue circle (triadic colors)

function updateAccentColor() {
  const now = Date.now();
  const seconds = now / 1000;

  // Cycle hue over 60 seconds
  const hue = (seconds * 15) % 360; // 15 deg/sec

  const color = `oklch(${lightness} ${chroma} ${hue})`;
  document.documentElement.style.setProperty('--accent-color', color);

  requestAnimationFrame(updateAccentColor);
}

updateAccentColor();