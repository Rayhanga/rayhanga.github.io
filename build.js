#!/usr/bin/env node
// Priming pass + real build/dev, cross-platform (no rm -rf / shell redirects,
// so this works the same under Windows' default npm script shell as under
// bash).
//
// Why the priming pass exists: the theme's Tailwind entry point detects
// used CSS classes via `@source "hugo_stats.json"` (see
// ../minimalist-manifesto/assets/css/main.css). Hugo only writes
// hugo_stats.json *after* rendering all pages, so the very first build
// after a clean checkout (or after deleting hugo_stats.json) sees an
// empty/missing stats file when Tailwind's transform runs, and compiles
// zero utility classes -- silently, with no error or warning. Running a
// throwaway build first (output discarded) seeds a fresh, complete
// hugo_stats.json that the real build/dev-server run then reads
// correctly.
const { spawnSync } = require("child_process");
const fs = require("fs");

const isDev = process.argv.includes("--dev");

spawnSync("hugo", ["--gc", "--minify"], { stdio: "ignore", shell: true });
fs.rmSync("public", { recursive: true, force: true });

const realArgs = isDev ? ["server", "-D"] : ["--gc", "--minify"];
const result = spawnSync("hugo", realArgs, { stdio: "inherit", shell: true });
process.exit(result.status ?? 1);
