import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

const isDev = process.env.NODE_ENV !== "production";

// https://vite.dev/config/
export default defineConfig({
	base: "/portfolio-of-chris/",
	plugins: [
		isDev ? (await import("@react-router/dev/vite")).reactRouter() : null,
		tailwindcss(),
		react(),
	].filter(Boolean),
});
