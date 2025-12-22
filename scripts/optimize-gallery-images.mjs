/**
 * Image optimization script for gallery assets.
 *
 * - Reads images from:   public/assets
 * - Writes optimized to: public/assets/gallery
 * - Output format: WebP
 * - Generates multiple sizes per image for responsive srcSet usage
 *
 * Usage:
 *   node scripts/optimize-gallery-images.mjs
 *
 * Notes:
 * - Requires dev dependency: sharp
 * - This script intentionally skips known "team member" images and the logo.
 */

import fs from "node:fs";
import fsp from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const PROJECT_ROOT = process.cwd();

const INPUT_DIR = path.join(PROJECT_ROOT, "public", "assets");
const OUTPUT_DIR = path.join(PROJECT_ROOT, "public", "assets", "gallery");

// If you add more member photos later, put them here to ensure they are skipped.
const SKIP_FILENAMES = new Set([
  "logo.jpeg",
  "Samson Agube.png",
  "Ayeni Miracle.jpg",
  "Chukwuere Emmanuel Chima.jpg",
  "Echeta David Uzoroma.jpg",
  "Ekere Diepreye Philip.jpg",
  "Imarhiagbe Daniel Esosa.jpeg",
  "Kaibari Victor Zebulon.jpg",
  "Okorafor Samuel.jpg",
  "Onyeadi Dirichukwu John.jpg",
  "igboeche-johnfavour-ikenna.jpg",
]);

const ALLOWED_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);

// Widths used for responsive images. You can tweak these.
const TARGET_WIDTHS = [480, 768, 1024, 1440];

// WebP quality (0-100). Higher = better quality + larger file.
const WEBP_QUALITY = 78;

// Avoid upscaling small images. Keep original width as max.
const WITHOUT_ENLARGEMENT = true;

function slugifyFilename(filename) {
  // Keep it stable and URL-friendly; remove extension and normalize.
  const ext = path.extname(filename);
  const base = path.basename(filename, ext);

  return (
    base
      .trim()
      .toLowerCase()
      .replace(/[\s_]+/g, "-")
      .replace(/[^a-z0-9-]+/g, "")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "image"
  );
}

async function ensureDir(dir) {
  await fsp.mkdir(dir, { recursive: true });
}

async function listImages(inputDir) {
  const entries = await fsp.readdir(inputDir, { withFileTypes: true });
  return entries
    .filter((e) => e.isFile())
    .map((e) => e.name)
    .filter((name) => {
      if (SKIP_FILENAMES.has(name)) return false;
      const ext = path.extname(name).toLowerCase();
      return ALLOWED_EXTENSIONS.has(ext);
    })
    .sort((a, b) => a.localeCompare(b));
}

async function optimizeOne(inputPath, outputBaseName) {
  const image = sharp(inputPath, { failOn: "none" });

  // Read metadata once so we can avoid resizing above original width.
  const meta = await image.metadata();
  const originalWidth = typeof meta.width === "number" ? meta.width : null;

  const outputs = [];

  for (const w of TARGET_WIDTHS) {
    const targetWidth =
      originalWidth && WITHOUT_ENLARGEMENT ? Math.min(w, originalWidth) : w;

    // If original width is unknown, just proceed.
    // If target width collapses to 0/NaN, skip.
    if (!targetWidth || Number.isNaN(targetWidth)) continue;

    const outName = `${outputBaseName}-${targetWidth}.webp`;
    const outPath = path.join(OUTPUT_DIR, outName);

    // Create a fresh pipeline each loop to avoid reusing a consumed stream.
    const pipeline = sharp(inputPath, { failOn: "none" })
      .rotate() // respect EXIF orientation
      .resize({
        width: targetWidth,
        withoutEnlargement: WITHOUT_ENLARGEMENT,
        fit: "inside",
      })
      .webp({
        quality: WEBP_QUALITY,
        smartSubsample: true,
      });

    await pipeline.toFile(outPath);

    outputs.push({ width: targetWidth, filename: outName });
  }

  return {
    source: path.basename(inputPath),
    outputs,
    original: {
      width: originalWidth ?? undefined,
      height: typeof meta.height === "number" ? meta.height : undefined,
      format: meta.format ?? undefined,
    },
  };
}

async function main() {
  if (!fs.existsSync(INPUT_DIR)) {
    throw new Error(`Input directory not found: ${INPUT_DIR}`);
  }

  await ensureDir(OUTPUT_DIR);

  const candidates = await listImages(INPUT_DIR);

  if (candidates.length === 0) {
    console.log(
      `No candidate images found in ${INPUT_DIR}. (All images may be skipped, or none match extensions.)`,
    );
    return;
  }

  console.log(`Found ${candidates.length} candidate image(s).`);
  console.log(`Output directory: ${OUTPUT_DIR}`);
  console.log(`Generating WebP sizes: ${TARGET_WIDTHS.join(", ")}\n`);

  const manifest = {
    generatedAt: new Date().toISOString(),
    inputDir: "public/assets",
    outputDir: "public/assets/gallery",
    widths: TARGET_WIDTHS,
    webpQuality: WEBP_QUALITY,
    files: [],
  };

  // Process sequentially to keep memory usage predictable.
  for (const filename of candidates) {
    const inputPath = path.join(INPUT_DIR, filename);
    const base = slugifyFilename(filename);

    process.stdout.write(`Optimizing: ${filename} -> ${base}-*.webp ... `);

    try {
      const result = await optimizeOne(inputPath, base);
      manifest.files.push(result);
      console.log("OK");
    } catch (err) {
      console.log("FAILED");
      console.log(`  ${err?.stack ?? String(err)}`);
    }
  }

  const manifestPath = path.join(OUTPUT_DIR, "manifest.json");
  await fsp.writeFile(manifestPath, JSON.stringify(manifest, null, 2), "utf8");

  console.log(`\nDone. Manifest written to: ${manifestPath}`);
  console.log(
    `Next step: update the gallery to use /assets/gallery/* with srcSet/sizes for responsive loading.`,
  );
}

main().catch((err) => {
  console.error(err?.stack ?? String(err));
  process.exitCode = 1;
});
