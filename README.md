# StudyBuddy

StudyBuddy je mobilna aplikacija za študente, ki želijo organizirati učenje v skupinah in zbrati študijske informacije na enem mestu. Projekt razvijamo pri predmetu **Razvoj vseprisotnih informacijskih rešitev (RVIR)** v študijskem letu 2026/2027.

## Problem in cilj

Gradiva, dogovori in roki so pogosto razpršeni po različnih kanalih. StudyBuddy študentom pomaga najti skupino za predmet, sodelovati pri objavah in gradivih ter spremljati skupne študijske obveznosti.

## Začetni obseg

- registracija, prijava in študentski profil;
- ustvarjanje, iskanje in pridruževanje študijskim skupinam;
- skupinske objave, vprašanja in deljenje gradiv;
- skupni dogodki in koledar;
- obvestila za dogodke, objave in gradiva.

Pomodoro, zasebna sporočila, tutorji, mednarodne sobe in dodatna orodja za skupine so razširitve. Interaktivni prototip že prikazuje del teh idej; njegova pokritost ne pomeni, da so funkcije implementirane v končnem sistemu.

## Prototipa

- [Prvotni prototip](prototip/index.html)
- [Alternativni vizualni prototip](prototip/alternativa.html)

Obe različici odprite v brskalniku. Alternativna različica ohranja iste tokove in interakcije ter prinaša drugo barvno paleto in oblikovalski slog. Prototipa za uporabo ne potrebujeta strežnika.

## Tehnologije

Načrtovane tehnologije: Expo, React Native in TypeScript za mobilni odjemalec; Node.js, Express in TypeScript za REST API; PostgreSQL in Prisma ORM za podatke. GitHub Actions bo preverjal spremembe. CI za začetno fazo preverja prototip in obvezne dokumentacijske datoteke; po vzpostavitvi aplikacije in API-ja se bodo dodali gradnja, lint in testi.

## Struktura repozitorija

```text
.
├── .github/
│   ├── ISSUE_TEMPLATE/
│   └── workflows/ci.yml
├── scripts/check-prototype.mjs
├── dokumentacija/
│   ├── diagram-primerov-uporabe.drawio
│   ├── nacrt.md
│   ├── arhitektura-in-model.md
│   ├── razvoj-in-odgovornosti.md
│   └── mockupi.md
└── prototip/
    ├── index.html
    └── alternativa.html
```

## Dokumentacija

- [Projektni načrt](dokumentacija/nacrt.md)
- [Diagram primerov uporabe](dokumentacija/diagram-primerov-uporabe.drawio)
- [Mockupi in navigacija](dokumentacija/mockupi.md)
- [Arhitektura in podatkovni model](dokumentacija/arhitektura-in-model.md)
- [Načrt razvoja in odgovornosti](dokumentacija/razvoj-in-odgovornosti.md)

## Delo na projektu

Naloge so za začetni vnos pripravljene v [načrtu razvoja in odgovornosti](dokumentacija/razvoj-in-odgovornosti.md). Predlagane prioritete uporabljajo oznake `P0`, `P1` in `P2`; ko so Issues ustvarjeni, jih spremljamo na [GitHubu](https://github.com/blagicavideva/StudyBuddy/issues).
