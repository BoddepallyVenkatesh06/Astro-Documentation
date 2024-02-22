---
layout: ~/layouts/MainLayout.astro
title: Introduktion
description: En grundlæggende introduktion til Astro.
---

Astro er en moderne statisk side bygger. Lær hvad Astro handler om på [vores hjemmeside](https://astro.build/) eller [vores udgivelsesmeddelelser](https://astro.build/blog/introducing-astro). Denne side er et overblik over Astro-dokumentationen og alle relaterede ressourcer.

## Prøv Astro

Den nemmeste måde at prøve Astro på er ved at køre `npm create astro@latest` i en ny mappe på din maskine. Vores CLI-guide vil hjælpe dig med at starte et nyt Astro projekt.

Besøg vores [Hurtigstartsguide](/da/install/auto/) for at komme i gang med Astro i 5 hurtige og nemme trin.

Alternativt kan du læse vores [Installationsguide](/da/install/manual/) for en fuld gennemgang af hvordan du sætter Astro op.

### Eksempelprojekter

Hvis du foretrækker at lære Astro ved hjælp af eksempler, kan du tjekke vores [fulde bibliotek af eksempler](https://github.com/withastro/astro/tree/main/examples) på GitHub.

Du kan tjekke alle disse eksempler på din lokale maskine ved at køre `npm create astro@latest` med CLI-flaget `--template`. Flaget `--template` understøtter også tredjeparts-skabeloner lavet af fællesskabet.

```bash
# Kør init-guiden og brug denne officielle skabelon
npm create astro@latest -- --template [OFFICIEL_EKSEMPEL_NAVN]
# yarn
yarn create astro --template [OFFICIEL_EKSEMPEL_NAVN]
# pnpm
pnpm create astro -- --template [OFFICIEL_EKSEMPEL_NAVN]
# Kør init-guiden og brug denne skabelon lavet af fællesskabet
npm create astro@latest -- --template [GITHUB_BRUGER]/[REPO_NAVN]
npm create astro@latest -- --template [GITHUB_BRUGER]/[REPO_NAVN]/sti/til/eksempel
```

### Online Legepladser

Hvis du er interesseret i at lege med Astro i browseren, kan du straks starte et nyt Astro projekt med vores brugerflade på [astro.new](https://astro.new/).

Du kan prøve Astro i online kodeeditorer som Stackblitz, CodeSandbox, Gitpod eller GitHub Codespaces. Klik på "Open in Stackblitz" linket i et af eksemplerne i vores [liste af eksempler](https://github.com/withastro/astro/tree/main/examples). Eller, [klik her](https://stackblitz.com/fork/astro) for at starte et nyt projekt i [Stackblitz](https://stackblitz.com/fork/astro).

## Lær Astro

Alle slags mennesker kommer til Astro fra forskellige baggrunde og medbringer forskellige læringsstile. Uanset om du foretrækker en mere teoretisk eller praktisk tilgang, håber vi at du finder dette afsnit nyttigt.

- Hvis du foretrækker at **lære ved at gøre**, kan du starte med vores [liste af eksempler](https://github.com/withastro/astro/tree/main/examples).
- Hvis du foretrækker at **lære koncepter trin for trin**, kan du starte med vores [grundlæggende koncepter og vejledninger](/da/core-concepts/project-structure/).

Som enhver anden ukendt teknologi har Astro en lille indlæringskurve. Men med øvelse og lidt tålmodighed, ved vi at du _vil_ få styr på det på ingen tid.

### Lær `.astro` Syntaks

Når du begynder at lære Astro, vil du se mange filer med filtypen `.astro`. Dette er **Astros Komponent Syntaks**: et specielt HTML-lignende filformat som Astro bruger til templating. Det er designet til at føles bekendt for alle med HTML- eller JSX-erfaring

Vores nyttige guide om [Astro-komponenter](/da/core-concepts/astro-components/) introducerer dig til Astro-syntaksen, og er den bedste måde at lære på.

### API Reference

Dette dokumentationsafsnit er nyttigt når du vil lære flere detaljer om en bestemt Astro API. F.eks. indeholder [Konfigurationsreference](/da/reference/configuration-reference/) en liste over alle tilgængelige konfigurationsmuligheder. [Indbyggede komponenter-reference](/da/reference/api-reference/#built-in-components) indeholder en liste over alle tilgængelige kernekomponenter, såsom `<Markdown />` og `<Code />`.

### Versioneret dokumentation

Denne dokumentation afspejler altid den seneste stabile version af Astro. Når vi når v1.0-milepælen, vil vi tilføje muligheden for at se versioneret dokumentation.

## Hold dig orienteret

Twitter-kontoen [@astrodotbuild](https://twitter.com/astrodotbuild) er den officielle kilde til opdateringer fra Astro-teamet.

Vi sender også udgivelsesmeddelelser til vores [Discord-fællesskab](https://astro.build/chat) i #announcements kanalen.

Ikke hver Astro udgivelse fortjener sit eget blogindlæg, men du kan finde en detaljeret ændringsliste for hver udgivelse i [`CHANGELOG.md` filen i Astro-repositoriet](https://github.com/withastro/astro/blob/main/packages/astro/CHANGELOG.md).

## Mangler der noget?

Hvis der mangler noget i dokumentationen, eller hvis du synes, at en del er forvirrende, skal du [indsende et Issue om dokumentationen](https://github.com/withastro/astro/issues/new/choose) med dit forslag til forbedringer, eller tweet på [@astrodotbuild](https://twitter.com/astrodotbuild) Twitter-kontoen. Vi elsker at høre fra dig!

## Kredit

Denne startvejledning var oprindeligt baseret på [React’s](https://reactjs.org/) startvejledning.
