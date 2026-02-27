# Simulazione INVALSI Italiano – Quinta superiore (web app)

Questa è una simulazione didattica (non ufficiale) strutturata con:
- 3 tipologie di testo: narrativo, espositivo-argomentativo, regolativo
- quesiti misti (scelta multipla + risposta breve)
- timer 120 minuti
- salvataggio automatico in localStorage
- esportazione risultati in JSON
- invio al docente tramite **mailto** (apre il client email dell'utente)

## Per pubblicare su GitHub Pages
1. Carica la cartella nel tuo repo (o crea un repo nuovo).
2. In GitHub: Settings → Pages → Source: `Deploy from a branch` → Branch: `main` → Folder: `/ (root)`.
3. Apri l'URL di GitHub Pages.

## Inviare risultati “automaticamente” (senza mailto)
Per inviare davvero i risultati senza far aprire il client email serve un endpoint.
Opzioni semplici:
- **Google Apps Script** che riceve un POST e inoltra una email
- **Formspree / Getform** (servizi esterni) con un form POST

Nel file `assets/js/app.js` trovi un blocco `ENDPOINT_URL`:
- se lo lasci vuoto, l'app usa solo mailto + download JSON
- se inserisci una URL valida che accetta POST JSON, puoi abilitare l'invio automatico

> Nota: per ragioni di sicurezza il browser non può inviare email “dirette” senza un servizio lato server.

## Personalizzazione rapida
- Email docente: in `assets/js/app.js` (costante `TEACHER_EMAIL`)
- Domande e testi: in `assets/js/app.js` (oggetto `BANK`)
