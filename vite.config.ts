import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    coverage: {
      provider: "v8",
      reporter: ["text", "html", "json-summary"],
      thresholds: {
        statements: 80,
        branches: 80,
        functions: 80,
        lines: 80,
      },
      exclude: [
        "node_modules/",
        "dist/",
        "coverage/",
        "**/*.config.*",
        "**/*.d.ts",
        "**/main.tsx",
      ],
    },
  },
});
