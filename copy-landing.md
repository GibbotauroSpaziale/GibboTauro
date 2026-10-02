# Copy & struttura landing — v1 bozza

> Sorgente della verità per il build. Ogni modifica di copy si fa prima qui, poi nel codice.
> Posizionamento: **crescita organica, in base alle esigenze del canale, creando un canale a misura del cliente.**
> Tono: diretto, colloquiale, zero fuffa. Italiano.

---

## 0. Header sticky (56px mobile / 72px desktop)

- Logo/testo: `[NOME BRANDING — placeholder]`
- 1 link ancora: **Candidati** (pill gialla `#FBBF24`, testo `#111827`)
- Niente menu multiplo

---

## 1. Hero

**H1 (max 2 righe, domanda-dolore — non autocelebrazione):**

> Il tuo canale YouTube è davvero *tuo*, o stai copiando quello di altri?

**Sottotitolo (1fr):**

> Crescita organica per canali italiani: parto dalle esigenze reali del tuo canale e costruisco con te una strategia a misura di pubblico, format e obiettivi. Niente formule preconfezionate, niente ads per forzare i numeri.

**Micro-proof:**

> 🎬 Canali seguiti: Gibbotauro Spaziale · Decodifica · [N canali clienti/colleghi]

**CTA primaria:** `Richiedi un'analisi del canale` → ancora a `#candidati`
**CTA secondaria (opzionale):** link a un video dimostrativo (proof-of-work)

**NOTE UX:** zero hero image decorativa; H1 clamp 2rem→3.5rem; padding 64px mobile / 120px desktop.

---

## 2. Prova sociale — "Dicono di me"

Griglia 3 card (1 col mobile / 3 desktop). Ogni card:
- citazione ≤120 caratteri (bold, è il vero contenuto)
- nome + ruolo/canale
- avatar o thumbnail canale

**3 slot da compilare (da colleghi):**

| # | Citazione | Nome | Ruolo |
|---|-----------|------|-------|
| 1 | `[TESTIMONIANZA 1 — da raccolta]` | `[nome]` | `[ruolo/canale]` |
| 2 | `[TESTIMONIANZA 2 — da raccolta]` | `[nome]` | `[ruolo/canale]` |
| 3 | `[TESTIMONIANZA 3 — da raccolta]` | `[nome]` | `[ruolo/canale]` |

*Se mancano testimonianze alla pubblicazione: rimpiazzare con 3 risultati numerici del proprio lavoro (views, CTR, iscritti) + disclaimer onesto.*

**H2:** `Chi mi ha già affidato il proprio canale`

---

## 3. Video performanti (proof)

**H2:** `Risultati che si vedono, non che si promettono`

Griglia/carosello 4-6 thumbnail YouTube 16:9 con **delta metrico visivo** (es. `+340% views vs media canale`).

| Slot | Video | Metrica |
|------|-------|---------|
| 1-6 | `[da selezionare: Gibbotauro Spaziale / Decodifica / lavori per colleghi]` | `[views o delta]` |

- Thumbnail = img.youtube.com, `loading="lazy"` tranne la prima
- Click → YouTube (target `_blank`, `rel="noopener"`)

---

## 4. Metodo (3 step numerati)

**H2:** `Come lavoriamo sul tuo canale`

Blocco unico, numeri grandi come ancore visive (NO 3 card con icone stock):

> **01 — Ascolto e diagnosi**
> Analizzo canale, pubblico, format e punti fermi. Capisco dove sei e dove ha senso arrivare — senza copiare la moda del mese.
>
> **02 — Strategia a misura**
> Definiamo insieme posizionamento, linee guida dei video e piano di pubblicazione costruiti sulle tue esigenze reali, non su un template universale.
>
> **03 — Esecuzione e correzione del tiro**
> Produce, pubblica, misura. Iteriamo sui dati (CTR, retention, iscritti) finché il canale non lavora per te in modo organico e sostenibile.

---

## 5. Chi sono

**H2:** `Chi c'è dall'altra parte`

- Foto reale (ritratto)
- 2 paragrafi max:
  1. Chi sono + canali che gestisco/creo (Gibbotauro Spaziale, Decodifica) — proof-of-work: "YouTube lo faccio sulla mia pelle"
  2. Come aiuto colleghi/creator/aziende — approccio, niente fuffa
- Loghi/link canali

**NOTE UX:** max ~50% altezza sezione — non un "about us" enorme.

---

## 6. CTA finale — form candidatura

**H2:** `Parliamo del tuo canale`
**Sotto-h2:** `Compila il form: ti rispondo con una prima lettura del canale, senza impegno.`

Blocco a piena larghezza, bg giallo `#FBBF24` (testo `#111827`).

Form 4-5 campi (label sempre visibili sopra gli input):

1. Nome e cognome * `[required]`
2. Email * `[required, type=email]`
3. Link al canale YouTube * `[required, type=url]`
4. Di cosa hai bisogno? * `[select: Crescita iscritti / Strategia format / Ottimizzazione video / Altro]`
5. Raccontami in 2 righe (textarea, opzionale)

**Submit:** `Invia candidatura`
**Post-submit:** messaggio inline di conferma (no redirect).

**Endpoint consigliato:** Web3Forms (gratuito, notifiche via email, nessun backend) — alternativa Formspree.
**Honeypot** anti-spam + `aria-describedby` sugli errori.

CTA ripetute: header, sotto hero, dopo sezione metodo, qui.

---

## 7. Footer

Minimale, padding 48px: © 2026 `[NOME]` · Privacy Policy · Cookie Policy (se servono) · link social (YouTube, LinkedIn) · email.

---

## Vincoli build (per fase 3)

- Mobile-first: breakpoint 640/1024/1280; touch target ≥44px; CTA full-width <480px
- A11y AA: giallo solo su bg scuro; focus ring 2px `#22D3EE`; `prefers-reduced-motion` rispettato
- Perf: ≤2 WOFF2 con `font-display: swap` + fallback system stack; WebP; LCP <2s; vanilla JS, zero librerie
- 1 sola H1, H2 per sezione, body 16-17px, line-height 1.6, max-width 65ch
