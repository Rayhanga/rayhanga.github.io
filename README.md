# rayhanga.github.io

Personal site, built with Hugo + Tailwind CSS v4. Theme code lives in a
separate repo, [minimalist-manifesto](https://github.com/Rayhanga/minimalist-manifesto),
vendored here as a git submodule at `themes/minimalist-manifesto`.

## Setup

```bash
git clone --recurse-submodules git@github.com:Rayhanga/rayhanga.github.io.git
cd rayhanga.github.io
npm install
```

Already cloned without `--recurse-submodules`? Run:

```bash
git submodule update --init
```

## Developing

```bash
npm run dev    # hugo server, via build.js --dev
npm run build  # production build, via build.js
```

## Editing the theme

Edit directly inside `themes/minimalist-manifesto/` — it's a full git
checkout of the theme's own repo. Commit and push there first, then come
back to this repo and commit the bumped submodule pointer:

```bash
cd themes/minimalist-manifesto
git add -A && git commit -m "..." && git push
cd ../..
git add themes/minimalist-manifesto
git commit -m "chore: bump minimalist-manifesto submodule"
```
