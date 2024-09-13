import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { remixDevTools } from "remix-development-tools";
import {vercelPreset} from '@vercel/remix/vite'

export default defineConfig({
	plugins: [remixDevTools(), remix({
		presets: [vercelPreset()]
	}), tsconfigPaths()],
	server: {
		port: 50000,
		host: "0.0.0.0",
	},
});
