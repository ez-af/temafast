// const lightness = 0.8;
// const chroma = 0.8;
// const hueOffset = 120; // degrees apart in hue circle (triadic colors)

// function updateAccentColor() {
//   const now = Date.now();
//   const seconds = now / 1000;

//   // Cycle hue over 60 seconds
//   const hue = (seconds * 60) % 360; // 6 deg/sec

//   const color = `oklch(${lightness} ${chroma} ${hue})`;
//   document.documentElement.style.setProperty('--accent-color', color);

//   requestAnimationFrame(updateAccentColor);
// }

// updateAccentColor();


// function updateAccentGradient() {
//   const now = Date.now();
//   const seconds = now / 1000;

//   const hue1 = (seconds * 6) % 360;
//   const hue2 = (hue1 + hueOffset) % 360;

//   const color1 = `oklch(${lightness} ${chroma} ${hue1})`;
//   const color2 = `oklch(${lightness} ${chroma} ${hue2})`;

//   const gradient = `linear-gradient(to right, ${color1}, ${color2})`;
//   document.documentElement.style.setProperty('--accent-gradient', gradient);

//   requestAnimationFrame(updateAccentGradient);
// }

// updateAccentGradient();