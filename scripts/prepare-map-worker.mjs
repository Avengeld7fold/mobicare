import { copyFile, mkdir } from "node:fs/promises";

// Keep the same-origin module worker and shared chunk matched to the renderer.
const destination = new URL("../public/maps/worker/", import.meta.url);
await mkdir(destination, { recursive: true });
for (const file of ["maplibre-gl-worker.mjs", "maplibre-gl-shared.mjs"]) {
  await copyFile(new URL(`../node_modules/maplibre-gl/dist/${file}`, import.meta.url), new URL(file, destination));
}
