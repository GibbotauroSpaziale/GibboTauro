# sito-gibbotauro (repo unica) — gibbotauro.com

Sito statico di **Gibbotauro Spaziale**: una repo sola, sotto-cartelle per pagina. Identità visiva unica (cyberpunk HUD + palette YouTube dark), design system condiviso in `css/`.

## Struttura (una repo = un dominio GitHub Pages)

```
/                    gibbotauro.com/            consulenza YouTube (hero, form candidatura)
/canale/             gibbotauro.com/canale/     (da confermare — pagina canale)
/sponsor/            gibbotauro.com/sponsor/    media kit per collaborazioni (KPI reali canale)
/linktree/           gibbotauro.com/linktree/   link-in-bio: NOINDEX, mai linkata dal sito
CNAME                gibbotauro.com
```

## Stato attuale

- Landing v2 visual + bottoni outline v3.5 (bordo 2-3px uniforme sull'angolo tagliato — `--ci = cut − bt·(2−√2)`; testo sopra base via `z-index:-1` + `isolation:isolate`)
- Decisioni cliente (2026-10-02): dominio **gibbotauro.com**, niente blog, pagine Consulenza + Sponsor (linktree su sottodominio via redirect)
- Linktree: pagina creata in `linktree/` con link YouTube / Consulenza / Sponsor (altri social da confermare)
- **Stack**: HTML/CSS/JS statico, hosting GitHub Pages, nessun CMS
- Canale di riferimento: @GibbotauroSpaziale (42.4K sub, 4.81M views, 206 video — dati vidiq per /sponsor/)

## Deploy

1. `git init` su questa repo (main), push su GitHub, Pages dal branch `main`
2. Custom domain `gibbotauro.com` nelle Pages settings + `CNAME` già nel root
3. DNS registrar: apex → A record GitHub Pages (`185.199.108.153` … `185.199.111.153`), `www` → CNAME `gibbotauro` verso `<utente>.github.io` (o CNAME a seconda del registrar)
4. Sottodominio linktree: **redirect del registrar** `linktree.gibbotauro.com` → `https://gibbotauro.com/linktree/` (NON serve altra repo)

## Fasi CSS (split design system)

- `css/base.css` — tokens, reset, tipografia, utilità
- `css/consulenza.css` — stili pagina root (eredita da style.css attuale)
- `css/layout.css` — header/nav condiviso, footer
- `css/stats.css` — griglia KPI per /sponsor/ (priorità 1)
- `linktree/css/style.css` — già autonomo (tokens duplicati di proposito, pagina noindex)

## CTA

Form candidatura on-page (no Google Form): Web3Forms o Formspree come endpoint gratuito.

## Referenza

Schema persuasivo da theyoutubefellini.com (dolore → promessa → prova sociale → video → CTA), design e copy originali. Direzione UX: Netmoda Techwear Store (Behance).

## Blocca il build finale

1. Endpoint form + email notifiche
2. 3-5 testimonianze da colleghi
3. Selezione video per sezione proof
4. Foto "chi sono"
5. Lista completa link social per /linktree/ + username GitHub per DNS
6. Conferma se la pagina `/canale/` serve