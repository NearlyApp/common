import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts", "src/schemas/**/*.ts", "src/types/**/*.ts"],
  format: ["cjs", "esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  minify: true,
  outExtension: ({ format }) => ({
    js: format === "cjs" ? ".cjs" : ".mjs",
  }),
  target: "esnext",
});
