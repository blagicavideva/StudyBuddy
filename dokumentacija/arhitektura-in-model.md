# Arhitektura in podatkovni model

## Načrtovane tehnologije

| Plast | Tehnologija | Vloga |
|---|---|---|
| Mobilni odjemalec | Expo, React Native, TypeScript | Zasloni, navigacija in uporabniški tokovi |
| API | Node.js, Express, TypeScript | Avtentikacija, poslovna pravila in REST vmesnik |
| Baza | PostgreSQL | Trajna hramba uporabnikov, skupin in vsebine |
| Dostop do podatkov | Prisma ORM | Modeliranje, migracije in poizvedbe |
| Sodelovanje in CI | GitHub, GitHub Actions | Izvorna koda, Issues, pregled sprememb in avtomatska preverjanja |

To je začetni načrt na podlagi projektnega opisa. V repozitoriju še ni implementiranih odjemalca, API-ja ali baze.

## Začetna arhitektura

```mermaid
flowchart LR
  U[Študent / tutor] --> APP[Mobilna aplikacija<br/>Expo + React Native]
  APP -->|HTTPS REST/JSON| API[API<br/>Node.js + Express]
  API --> ORM[Prisma ORM]
  ORM --> DB[(PostgreSQL)]
  API -. pozneje .-> N[Obvestila]
  API -. pozneje .-> F[Shramba datotek]
```

Odjemalec kliče API prek HTTPS. API uveljavlja pravice dostopa, validira vnose in prek Prisma dostopa do PostgreSQL. Datoteke in push obvestila so zunanje integracije za poznejšo odločitev.

## Začetni domenski model

```mermaid
erDiagram
  USER ||--o{ MEMBERSHIP : joins
  STUDY_GROUP ||--o{ MEMBERSHIP : has
  SUBJECT ||--o{ STUDY_GROUP : organizes
  USER ||--o{ POST : writes
  STUDY_GROUP ||--o{ POST : contains
  POST ||--o{ MATERIAL : attaches
  USER ||--o{ EVENT : creates
  STUDY_GROUP o|--o{ EVENT : shares
  USER ||--o{ NOTIFICATION : receives

  USER {
    uuid id PK
    string email UK
    string display_name
    string role
    string faculty
    string programme
    string study_year
  }
  SUBJECT {
    uuid id PK
    string name
    string faculty
  }
  STUDY_GROUP {
    uuid id PK
    uuid subject_id FK
    uuid owner_id FK
    string name
    string join_code UK
    boolean is_open
  }
  MEMBERSHIP {
    uuid user_id PK,FK
    uuid group_id PK,FK
    string membership_role
    datetime joined_at
  }
  POST {
    uuid id PK
    uuid group_id FK
    uuid author_id FK
    string type
    string body
    datetime created_at
  }
  MATERIAL {
    uuid id PK
    uuid post_id FK
    string title
    string resource_url
    string media_type
  }
  EVENT {
    uuid id PK
    uuid creator_id FK
    uuid group_id FK
    string title
    datetime starts_at
    string location
  }
  NOTIFICATION {
    uuid id PK
    uuid user_id FK
    string type
    datetime read_at
  }
```

To je logični začetni model za MVP. Pred migracijami je treba še doreči pravila brisanja, zasebnost dogodkov, vloge v skupini, shranjevanje datotek in način prijave. Osebni dogodek ima `group_id = null`; skupni dogodek je povezan s skupino.
