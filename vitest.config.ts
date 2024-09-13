import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
	plugins: [tsconfigPaths()],
	test: {
		api: {
			host: "0.0.0.0",
			port: 50002,
		},
		globals: true,
		environment: "happy-dom",
		include: ["app/**/*.test.{ts,tsx}"],
		setupFiles: ["./vitest.setup.ts"],
		reporters: ["default", "html"],
		coverage: {
			enabled: true,
			include: ["app/**/*.{ts,tsx}"],
			exclude: ["app/**/*.stories.{ts,tsx}"],
		},
	},
});
