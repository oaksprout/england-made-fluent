/**
 * Build-time social card generation. Renders brand SVG templates to PNG with
 * sharp so the static export ships real Open Graph images with no runtime.
 *
 * Output: public/og/primary.png, public/og/secondary.png (1200x630).
 */
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const OUT_DIR = path.join(process.cwd(), "public", "og");

const FONT = `font-family="DejaVu Sans, Arial, Helvetica, sans-serif"`;

/**
 * Abstract brand motif: intersecting tactical routes over a simplified,
 * off-centre St George's Cross. Deliberately unlike the official crest.
 */
function brandMotif(x, y, scale = 1) {
  return `
  <g transform="translate(${x} ${y}) scale(${scale})">
    <rect x="54" y="0" width="12" height="120" fill="#c8102e"/>
    <rect x="0" y="54" width="120" height="12" fill="#c8102e"/>
    <path d="M 8 112 C 40 80, 52 44, 96 16" fill="none" stroke="#faf6ef" stroke-width="5" stroke-linecap="round"/>
    <path d="M 14 20 C 44 52, 78 62, 108 100" fill="none" stroke="#faf6ef" stroke-width="5" stroke-linecap="round" stroke-dasharray="1 10"/>
    <circle cx="96" cy="16" r="7" fill="#faf6ef"/>
    <circle cx="108" cy="100" r="7" fill="none" stroke="#faf6ef" stroke-width="4"/>
  </g>`;
}

function pitchLines() {
  return `
  <g stroke="#faf6ef" stroke-opacity="0.08" stroke-width="2" fill="none">
    <circle cx="600" cy="315" r="180"/>
    <line x1="600" y1="0" x2="600" y2="630"/>
    <rect x="0" y="135" width="220" height="360"/>
    <rect x="980" y="135" width="220" height="360"/>
  </g>`;
}

function card({ headline, sub }) {
  return `<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#0c1f3d"/>
  ${pitchLines()}
  ${brandMotif(80, 80, 1)}
  <text x="80" y="330" ${FONT} font-size="64" font-weight="bold" fill="#faf6ef">${headline[0]}</text>
  <text x="80" y="410" ${FONT} font-size="64" font-weight="bold" fill="#faf6ef">${headline[1] ?? ""}</text>
  <text x="80" y="486" ${FONT} font-size="30" fill="#c8d2e4">${sub}</text>
  <rect x="80" y="530" width="64" height="8" fill="#c8102e"/>
  <text x="164" y="540" ${FONT} font-size="24" font-weight="bold" fill="#faf6ef" letter-spacing="2">ENGLAND, MADE FLUENT</text>
</svg>`;
}

const cards = [
  {
    file: "primary.png",
    svg: card({
      headline: ["England's diversity should", "be its advantage."],
      sub: "An independent case for collective fluency in the England men's team",
    }),
  },
  {
    file: "secondary.png",
    svg: card({
      headline: ["England should", "industrialise adaptability."],
      sub: "Structured adaptability: one language, several ways to play",
    }),
  },
];

await mkdir(OUT_DIR, { recursive: true });
for (const { file, svg } of cards) {
  const png = await sharp(Buffer.from(svg)).png().toBuffer();
  await writeFile(path.join(OUT_DIR, file), png);
  console.log(`generated public/og/${file} (${png.length} bytes)`);
}
