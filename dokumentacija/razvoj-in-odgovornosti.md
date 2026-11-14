# Razvoj in odgovornosti

Razdelitev spodaj je predlog za začetno iteracijo; prilagodita jo glede na predznanje in dogovor ekipe.

## Predlagana razdelitev dela

| Področje | Odgovorni | Naloge |
|---|---|---|
| Mobilni odjemalec in prototip | Blagica Videva | Expo/React Native ogrodje, navigacija, zasloni, dostopnost |
| API in podatkovna plast | Gjorgji Kamčev | Express API, Prisma, PostgreSQL, sheme in migracije |
| Integracija in izdaja | Oba člana | Dogovor API-ja, pregled sprememb, integracijsko preverjanje in predstavitev |

## Začetni razvojni načrt

| Iteracija | Rezultat | Prioriteta |
|---|---|---|
| 0. Načrtovanje | Opis, scenariji, mockup, arhitektura, model, GitHub in CI | P0 |
| 1. Osnova | Expo aplikacija, navigacija, Express strežnik, konfiguracija okolij | P0 |
| 2. Računi in skupine | Profil, predmeti, ustvarjanje/iskanje skupin, članstvo | P0 |
| 3. Vsebina in koledar | Objave, gradiva, vprašanja, skupni dogodki | P1 |
| 4. Uporabnost in stabilnost | Obvestila, dostopnost, napake, dokumentacija in predstavitev | P1 |
| 5. Razširitve | Pomodoro, tutorji, zasebna sporočila in napredne skupinske funkcije | P2 |


## GitHub Issues

Začetne naloge so opisane v repozitoriju kot Issues. Vsaka naj ima jasen rezultat, odgovorno osebo in prioriteto `P0` (blokira osnovo), `P1` (naslednji obseg) ali `P2` (razširitev).

1. **P0 – Potrditi MVP in uporabniške tokove** — Blagica: pregled scenarijev, mockupov in meja obsega.
2. **P0 – Vzpostaviti ogrodje mobilne aplikacije** — Blagica: Expo, TypeScript, navigacija in zagonski zaslon.
3. **P0 – Vzpostaviti API in podatkovni model** — Gjorgji: Express, Prisma, PostgreSQL in začetna migracija.
4. **P0 – Implementirati profile in študijske skupine** — Oba: povezava odjemalca z API-jem in osnovna pravila članstva.
5. **P1 – Dodati objave in gradiva** — Gjorgji: API in podatkovna shema; Blagica: zasloni in uporabniški tok.
6. **P1 – Dodati skupni koledar** — Oba: model dogodka, pregled rokov in dodajanje termina.
7. **P1 – Nastaviti CI za aplikacijo in API** — Gjorgji: lint, tipizacija, testi in gradnja, ko bosta modula ustvarjena.
8. **P2 – Oceniti razširitve prototipa** — Oba: Pomodoro, tutorji, klepet in osebne funkcije po prioritetah.

## Način dela

Nalogo odprite kot Issue z merili sprejema in oznako prioritete. Uporabite vejo `feature/<kratko-ime>` ali `fix/<kratko-ime>`, nato Pull Request z navedbo `Closes #<številka>`. Vsaj drugi član pregleda spremembo. Združite jo po uspešnem CI in pregledu.
