import esbuild from "esbuild";
import { rmSync } from "node:fs";

const isWatch = process.argv.includes("--watch");

rmSync("dist", { recursive: true, force: true });

const common = {
  entryPoints: ["src/index.tsx"],
  outdir: "dist",
  bundle: true,
  platform: "browser",
  format: "esm",
  sourcemap: true,
  target: ["es2022"],
  loader: { ".png": "file", ".svg": "file" },
};

if (isWatch) {
  const ctx = await esbuild.context(common);
  await ctx.watch();
  const server = await ctx.serve({
    host: "localhost",
    port: 5173,
    servedir: ".",
  });
  console.log(`dev server http://${server.host}:${server.port}`);
} else {
  await esbuild.build(common);
}
