---
title: "DataGundar"
date: 2019-01-01
tags: ["gun.js", "python", "automation"]
summary: "Simplifying the tangle of information gathering at Gunadarma University."
description: "A small suite of tools built to simplify the complex information gathering required while attending Gunadarma University."
link: "https://github.com/Rayhanga/datagundar-dapp"
links:
  - text: "Proxy"
    href: "https://github.com/Rayhanga/datagundar-proxy"
  - text: "Python client"
    href: "https://github.com/Rayhanga/datagundar-py"
---
Started around 2019, out of frustration with how scattered and manual
it was to gather information as a student at Gunadarma University.
DataGundar grew into three parts, each solving one piece of the
problem:

- **dapp** — a decentralized, offline-first frontend (SvelteKit,
  DaisyUI, Gun.js) that consolidates academic info without depending
  on a constant connection.
- **proxy** — a small Node.js/Axios backend that exists purely to get
  around CORS, so the dapp can actually reach the APIs it needs.
- **py** — the original Python module that scrapes and processes data
  straight from Gunadarma's website, usable as a CLI, a Flask REST
  API, or an importable library.
