// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
// SITE_URL & BASE_PATH diisi otomatis oleh GitHub Actions saat deploy ke GitHub Pages
// (mis. https://kofulnandita.github.io + /Project_Magang_1).
// Di lokal keduanya kosong, jadi `npm run dev` tetap jalan di http://localhost:4321/
export default defineConfig({
	site: process.env.SITE_URL || undefined,
	base: process.env.BASE_PATH || '/',
});
