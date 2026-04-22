import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { prerender } from "vite-plugin-prerender-static";

export default defineConfig({
  plugins: [
    react(),
    prerender({
      routes: [
        "/",
        "/about",
        "/news",
        "/blog",
        "/features",
        "/partners",
        "/developers",
        "/enterprise",
        "/contact",
        "/faq",
        "/how-it-works",
        "/privacy",
        "/terms",
        "/sitemap"
      ]
    })
  ]
});