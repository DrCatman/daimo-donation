import esbuild from "esbuild";
import { rmSync } from "node:fs";

const isWatch = process.argv.includes("--watch");

rmSync("dist", { recursive: true, force: true });

const common = {
  entryPoints: ["src/index.tsx"],
  outdir: "public/dist",
  bundle: true,
  splitting: true,
  outbase: "src",
  platform: "browser",
  format: "esm",
  sourcemap: true,
  target: ["es2022"],
  loader: { ".png": "file", ".svg": "file", ".css": "css" },
};

if (isWatch) {
  const ctx = await esbuild.context(common);
  await ctx.watch();
  const server = await ctx.serve({
    host: "localhost",
    port: 8000,
    servedir: "public",
  });
  console.log(`dev server http://localhost:${server.port}`);
} else {
  await esbuild.build(common);
}
