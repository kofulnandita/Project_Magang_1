// @ts-check
import { defineConfig } from "astro/config";

// Konfigurasi agar hasil output kode HTML tetap rapi vertikal (tidak dijadikan 1 baris memanjang)
export default defineConfig({
  compressHTML: false,
});
