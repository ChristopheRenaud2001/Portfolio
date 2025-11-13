import { defineConfig } from "vite";
import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
	base: '/ChristopheRenaud2001/Portfolio/',
	plugins: [reactRouter(), tailwindcss()],
});
