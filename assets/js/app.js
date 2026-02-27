/* Simulazione INVALSI Italiano – app.js
   - Nessuna libreria esterna
   - Salvataggio in localStorage
   - Calcolo punteggio (MC + risposta breve con controllo parole-chiave)
*/

const TEACHER_EMAIL = "gb.prof.69@gmail.com";

/* Opzionale: URL endpoint che accetta POST JSON (risultati).
   Lascia vuoto per disabilitare invio automatico.
   Esempio (da creare): Google Apps Script / Formspree.
*/
const ENDPOINT_URL = ""; // e.g. "https://example.com/collect"

const STORAGE_KEY = "invalsi_ita_sim_v1";

const BANK = {"narrative": {"title": "Il biglietto sotto il banco", "meta": "Racconto breve (circa 650 parole)", "passage": "Quando Marco entrò in aula, l’odore di gesso gli sembrò più forte del solito, come se la lavagna avesse deciso di parlare prima di tutti. Posò lo zaino, si sedette e, senza pensarci, infilò la mano nel vano del banco. Sentì carta.\n\nNon era un foglio qualsiasi: era piegato in quattro, con una piega precisa, quasi ostinata. Marco lo aprì piano, come si apre una lettera che non si vuole davvero leggere. C’era una frase sola, scritta a penna nera: “Non far finta di niente.”\n\nSi guardò attorno. La classe era rumorosa, ma non nel modo allegro delle prime ore: un rumore nervoso, fatto di sedie trascinate e di parole a metà. La professoressa non era ancora arrivata. Giulia, due banchi più avanti, rideva con le amiche, ma le mani erano ferme e le unghie mordicchiate. Stefano, vicino alla finestra, fissava il cellulare senza toccarlo, come se fosse un oggetto pericoloso.\n\nMarco ripiegò il biglietto e lo tenne nel palmo. Gli venne in mente l’ultima settimana: le battute su Ahmed, il nuovo compagno; gli zaini spostati di nascosto; il video girato di nascosto durante l’interrogazione; la risata generale, sempre “per scherzo”. Anche Marco aveva sorriso. Non aveva detto nulla. E, a forza di non dire nulla, era diventato parte di quel rumore.\n\nIl campanello suonò. La professoressa entrò con un fascicolo in mano. “Ragazzi, oggi niente programma: dobbiamo parlare.” Si fermò, li guardò uno a uno, e in quel silenzio improvviso Marco sentì che il biglietto pesava più del quaderno.\n\n“Ho saputo,” disse la professoressa. Non spiegò cosa. Non serviva. La classe si irrigidì come un corpo colto in fallo. “Qui dentro si può sbagliare, ma non si può far finta di niente.”\n\nMarco abbassò gli occhi sul banco. Nel vano, la carta era rimasta ruvida, come se aspettasse una risposta. Pensò ad Ahmed: alla sua voce bassa, al modo in cui si sedeva sempre un po’ più indietro, come per chiedere permesso. Pensò al video. Pensò al proprio sorriso.\n\nLa professoressa appoggiò il fascicolo sulla cattedra. “Ognuno scriverà una pagina: non su Ahmed, non su chi ha fatto cosa. Su voi stessi. Su cosa avete visto e su cosa avete scelto di non vedere.”\n\nMarco sentì un calore salire in faccia: non vergogna, non rabbia, ma qualcosa di più difficile da nominare. Aprì il quaderno. Prima di iniziare, infilò il biglietto tra le pagine, come si mette un segnalibro in un punto che non si vuole perdere.\n\nScrisse la prima riga lentamente: “Io c’ero.” E capì che quella frase, da sola, poteva essere una condanna o un inizio.", "questions": [{"id": "N1", "type": "mc", "prompt": "Nel testo, il biglietto con la frase “Non far finta di niente” serve soprattutto a…", "options": ["ricordare a Marco un compito scolastico", "anticipare un evento misterioso senza legami con la classe", "mettere Marco di fronte a una responsabilità personale", "rivelare che la professoressa lo sta spiando"], "answer": 2}, {"id": "N2", "type": "mc", "prompt": "Che cosa indica l’espressione “un rumore nervoso, fatto di sedie trascinate e di parole a metà”?", "options": ["un’atmosfera di festa prima dell’arrivo della professoressa", "un clima di tensione e di attesa", "l’abitudine della classe a fare confusione", "la presenza di un guasto nell’edificio"], "answer": 1}, {"id": "N3", "type": "mc", "prompt": "Qual è la principale evoluzione interiore di Marco nel corso del brano?", "options": ["passa dall’indifferenza alla presa di coscienza", "passa dalla paura alla vendetta", "passa dalla gioia alla tristezza per un voto basso", "passa dalla curiosità al disinteresse"], "answer": 0}, {"id": "N4", "type": "mc", "prompt": "La frase “a forza di non dire nulla, era diventato parte di quel rumore” significa che Marco…", "options": ["era fisicamente rumoroso e distraeva i compagni", "ha contribuito al problema con il suo silenzio", "non riusciva a parlare per timidezza patologica", "ha registrato il rumore con il cellulare"], "answer": 1}, {"id": "N5", "type": "mc", "prompt": "Perché la professoressa dice “Ho saputo” senza spiegare?", "options": ["perché non conosce i dettagli", "perché vuole che la classe capisca da sé di cosa si tratta", "perché vuole cambiare argomento", "perché Ahmed non esiste davvero"], "answer": 1}, {"id": "N6", "type": "mc", "prompt": "Quando Marco infila il biglietto nel quaderno “come si mette un segnalibro”, l’immagine suggerisce che…", "options": ["vuole dimenticare subito l’accaduto", "vuole conservare quel richiamo come punto decisivo", "ha paura che qualcuno gli rubi il biglietto", "sta preparando uno scherzo"], "answer": 1}, {"id": "N7", "type": "short", "prompt": "Scrivi in 2–3 righe che cosa intende la professoressa con “non si può far finta di niente”. (Risposta breve)", "keywords": ["responsabilità", "riconoscere", "silenzio", "complicità", "vedere", "scegliere"]}, {"id": "N8", "type": "mc", "prompt": "Il testo suggerisce che il comportamento verso Ahmed è stato percepito come…", "options": ["un gioco innocuo senza conseguenze", "un insieme di azioni “per scherzo” che però feriscono", "un rito di accoglienza tradizionale", "un conflitto fisico tra gruppi"], "answer": 1}, {"id": "N9", "type": "mc", "prompt": "Nell’ultima frase (“condanna o un inizio”), l’autore contrappone…", "options": ["due luoghi della scuola", "due interpretazioni della stessa presa di responsabilità", "due personaggi che si sfidano", "due materie scolastiche"], "answer": 1}, {"id": "N10", "type": "mc", "prompt": "Quale titolo alternativo sarebbe più coerente con il significato del brano?", "options": ["La gita annullata", "Il prezzo del silenzio", "Il nuovo registro elettronico", "Un giorno qualunque"], "answer": 1}]}, "expository": {"title": "La lettura profonda nell’epoca degli schermi", "meta": "Testo espositivo-argomentativo (circa 700 parole)", "passage": "Negli ultimi anni si è diffusa una sensazione comune: leggiamo di più, ma capiamo meno. Non perché siamo diventati improvvisamente “stupidi”, ma perché l’ambiente in cui leggiamo cambia il nostro modo di leggere. Lo schermo invita alla velocità: scorrere, saltare, cercare parole-chiave, accumulare frammenti. È una lettura utile quando dobbiamo orientarci in fretta, ma rischiosa quando pretendiamo comprensione profonda.\n\nLa lettura profonda non è un gesto naturale e automatico: è un’abilità. Richiede attenzione sostenuta, memoria di lavoro, capacità di collegare idee lontane tra loro. In pratica, chiede al lettore di costruire un “modello mentale” del testo: non solo cosa dice, ma perché lo dice, come lo organizza, quali implicazioni lascia intendere. Chi ha sperimentato un romanzo complesso o un saggio ben scritto conosce quella sensazione: a un certo punto non stai più leggendo parole, stai pensando dentro la struttura del testo.\n\nQui nasce il problema contemporaneo. L’ecosistema digitale premia l’urgenza: notifiche, messaggi, link, video brevi. Ogni interruzione sembra piccola, ma moltiplicata nel tempo addestra la mente a restare sempre in superficie. Inoltre, la logica dei feed produce un effetto particolare: offre continuamente novità, ma non chiede continuità. Il risultato è una competenza paradossale: diventiamo bravi a “trovare” informazioni, ma meno bravi a “formarle” in conoscenza.\n\nQualcuno obietta: anche in passato si leggevano testi leggeri e distrazioni non mancavano. È vero. Ma oggi la distrazione è incorporata nello strumento stesso. Lo smartphone è insieme libro, televisione, sala giochi, conversazione, lavoro. La differenza è che la scelta non è più tra leggere o non leggere: è tra leggere con una mente intera o leggere con una mente che si spezza ogni due minuti.\n\nChe fare, allora, a scuola e fuori? Primo: riconoscere che la lettura profonda va allenata, come un muscolo. Non bastano “compiti”: serve un contesto che protegga l’attenzione. Secondo: insegnare strategie esplicite. Per esempio, imparare a segnare i passaggi-chiave, ricostruire in poche righe la tesi, distinguere tra esempio e argomento, fare domande al testo (“cosa implica?”, “cosa esclude?”). Terzo: alternare velocità e lentezza. La lettura veloce è utile, ma deve essere subordinata a momenti di lentezza vera, in cui il lettore si concede di non sapere subito, di tornare indietro, di lasciare maturare un’idea.\n\nLa posta in gioco non è la nostalgia per il libro di carta. È qualcosa di più concreto: senza lettura profonda, anche la cittadinanza si indebolisce. Una società che non sa seguire un ragionamento lungo è più facile da manipolare: si aggrappa a slogan, a paure, a semplificazioni. Per questo la lettura profonda non è solo una competenza scolastica: è una competenza civile.", "questions": [{"id": "E1", "type": "mc", "prompt": "Qual è la tesi centrale del testo?", "options": ["Lo schermo rende impossibile leggere", "Leggiamo di più ma comprendiamo meno perché cambia l’ambiente di lettura", "La carta è sempre superiore al digitale", "Le notifiche migliorano la memoria"], "answer": 1}, {"id": "E2", "type": "mc", "prompt": "Che cosa significa “costruire un modello mentale del testo”?", "options": ["memorizzare tutte le parole", "capire struttura, scopo e implicazioni del testo", "leggere solo i titoli e i paragrafi", "copiare il testo sul quaderno"], "answer": 1}, {"id": "E3", "type": "mc", "prompt": "Secondo l’autore, l’ecosistema digitale premia soprattutto…", "options": ["la continuità dell’attenzione", "l’urgenza e la novità", "la lentezza riflessiva", "la riscrittura manuale"], "answer": 1}, {"id": "E4", "type": "mc", "prompt": "Il paragrafo “Qualcuno obietta…” serve a…", "options": ["cambiare argomento", "confutare un’obiezione riconoscendo una parte di verità", "dimostrare che il passato era perfetto", "fare un esempio personale"], "answer": 1}, {"id": "E5", "type": "mc", "prompt": "Quando l’autore dice che la distrazione è “incorporata nello strumento”, intende che…", "options": ["lo smartphone è progettato per interrompere continuamente", "gli studenti non vogliono studiare", "i libri hanno troppi capitoli", "la scuola non ha biblioteche"], "answer": 0}, {"id": "E6", "type": "mc", "prompt": "Quale relazione c’è tra “trovare informazioni” e “formarle in conoscenza”?", "options": ["sono la stessa cosa", "trovare è inutile, contano solo le opinioni", "trovare è più facile oggi, ma trasformare richiede continuità e lavoro mentale", "formare conoscenza dipende solo dalla memoria fotografica"], "answer": 2}, {"id": "E7", "type": "mc", "prompt": "Quale delle seguenti è una strategia esplicita suggerita dall’autore?", "options": ["leggere solo i riassunti online", "segnare passaggi-chiave e ricostruire la tesi", "guardare video brevi prima di dormire", "non tornare mai indietro nel testo"], "answer": 1}, {"id": "E8", "type": "short", "prompt": "In 2–4 righe spiega perché, secondo l’autore, la lettura profonda è anche una competenza civile.", "keywords": ["cittadinanza", "manipolare", "ragionamento", "slogan", "semplificazioni", "critico"]}, {"id": "E9", "type": "mc", "prompt": "Qual è il tono complessivo del testo?", "options": ["satirico e comico", "allarmistico senza argomenti", "argomentativo e propositivo", "poetico e lirico"], "answer": 2}, {"id": "E10", "type": "mc", "prompt": "Quale conclusione è coerente con l’ultima parte del testo?", "options": ["La lettura profonda riguarda solo gli studenti migliori", "La lettura profonda è inutile in una democrazia", "Senza ragionamenti lunghi la società è più esposta a semplificazioni e manipolazione", "I social eliminano ogni forma di cultura"], "answer": 2}]}, "regulative": {"title": "Regolamento per una prova computer-based", "meta": "Testo regolativo + quesiti di lingua (circa 520 parole)", "passage": "ISTRUZIONI PER LA PROVA (CBT)\n\n1) Accesso e avvio\n- Inserisci nome, cognome e classe. Controlla i dati prima di iniziare.\n- Avvia il timer solo quando l’insegnante dà il via.\n- Se devi uscire dall’aula, alza la mano e attendi l’autorizzazione.\n\n2) Lettura dei testi\n- Leggi prima il testo completo, senza rispondere subito.\n- Rileggi i passaggi che ti sembrano importanti.\n- Non basarti su “impressioni”: ogni risposta deve essere sostenuta dal testo.\n\n3) Risposte ai quesiti\n- Per le domande a scelta multipla seleziona una sola opzione.\n- Per le risposte brevi scrivi frasi complete e chiare (2–4 righe).\n- Se non sei sicuro, elimina le opzioni sicuramente sbagliate e poi scegli la migliore.\n\n4) Gestione del tempo\n- Non fermarti troppo su una sola domanda: se necessario, segna e torna dopo.\n- Riserva gli ultimi 10 minuti al controllo finale.\n- Evita di cambiare risposte “a caso”: cambia solo se trovi un motivo nel testo.\n\n5) Comportamenti vietati\nÈ vietato:\n- aprire altre schede o applicazioni;\n- consultare appunti, manuali o dispositivi esterni;\n- comunicare con altri candidati;\n- fotografare o registrare i contenuti.\n\n6) In caso di problemi\n- Se il computer si blocca o la connessione cade, non spegnere il dispositivo.\n- Avvisa subito l’insegnante: la prova potrà essere ripresa secondo le indicazioni ricevute.\n\n7) Consegna\n- Termina la prova solo quando hai risposto a tutte le domande.\n- Verifica che il sistema abbia registrato le risposte.\n- Attendi la comunicazione dell’insegnante prima di chiudere la sessione.", "questions": [{"id": "R1", "type": "mc", "prompt": "Qual è lo scopo principale del testo?", "options": ["intrattenere con un racconto", "dare istruzioni e regole per svolgere una prova CBT", "spiegare un evento storico", "convincere a leggere di più"], "answer": 1}, {"id": "R2", "type": "mc", "prompt": "Nel punto 2, perché si consiglia di leggere prima il testo completo senza rispondere subito?", "options": ["per perdere tempo e rilassarsi", "per costruire un’idea generale e poi rispondere con più precisione", "per evitare di rispondere a tutte le domande", "perché le domande non sono importanti"], "answer": 1}, {"id": "R3", "type": "mc", "prompt": "Quale comportamento è esplicitamente vietato?", "options": ["alzare la mano per uscire", "rileggere i passaggi importanti", "aprire altre schede o applicazioni", "riservare 10 minuti al controllo finale"], "answer": 2}, {"id": "R4", "type": "mc", "prompt": "Nel punto 4, l’espressione “se necessario, segna e torna dopo” indica una strategia di…", "options": ["organizzazione del tempo e priorità", "memorizzazione di definizioni", "scrittura creativa", "ricerca su internet"], "answer": 0}, {"id": "R5", "type": "mc", "prompt": "Nel testo, i due punti (:) dopo “È vietato” servono a…", "options": ["introdurre un elenco di divieti", "concludere il discorso", "segnalare una citazione", "indicare un errore"], "answer": 0}, {"id": "R6", "type": "mc", "prompt": "Quale connettivo logico è presente e che valore esprime?", "options": ["“solo se” = condizione", "“perché” = concessione", "“inoltre” = opposizione", "“tuttavia” = causa"], "answer": 0}, {"id": "R7", "type": "mc", "prompt": "La frase “Evita di cambiare risposte ‘a caso’” contiene le virgolette per…", "options": ["citare un autore", "mettere in evidenza un’espressione e prenderne le distanze", "indicare un titolo di libro", "segnare un discorso diretto"], "answer": 1}, {"id": "R8", "type": "short", "prompt": "Riscrivi in modo più formale (1 frase) questa istruzione: “Se devi uscire dall’aula, alza la mano e attendi l’autorizzazione.”", "keywords": ["qualora", "necessità", "lasciare", "aula", "alzare", "attendere", "autorizzazione"]}, {"id": "R9", "type": "mc", "prompt": "In “la prova potrà essere ripresa”, la forma verbale esprime…", "options": ["certezza assoluta", "possibilità (valore potenziale)", "ordine perentorio", "azione passata"], "answer": 1}, {"id": "R10", "type": "mc", "prompt": "Quale caratteristica di coesione è tipica del testo regolativo?", "options": ["metafore e immagini poetiche", "uso di punti numerati e imperativi/istruzioni", "dialoghi tra personaggi", "rime e assonanze"], "answer": 1}]}};

const state = {
  meta: {
    name: "",
    class: "",
    school: "",
    email: "",
    startedAt: null,
    finishedAt: null,
    durationSeconds: 120*60,
    remainingSeconds: 120*60,
    timerRunning: false
  },
  answers: {
    // questionId: value
  },
  lastScore: null
};

function $(id){ return document.getElementById(id); }

function clamp(n, a, b){ return Math.max(a, Math.min(b, n)); }

function formatTime(seconds){
  const s = clamp(Math.floor(seconds), 0, 99*3600);
  const m = Math.floor(s/60);
  const ss = s%60;
  const mm = String(m).padStart(2,'0');
  const sss = String(ss).padStart(2,'0');
  return `${mm}:${sss}`;
}

function save(){
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (e) {}
}

function load(){
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if(!raw) return;
    const parsed = JSON.parse(raw);
    if(parsed && typeof parsed === "object") {
      // merge cautiously
      state.meta = {...state.meta, ...(parsed.meta||{})};
      state.answers = parsed.answers || {};
      state.lastScore = parsed.lastScore || null;
    }
  } catch (e) {}
}

function resetAll(){
  if(!confirm("Vuoi azzerare risposte, timer e dati?")) return;
  localStorage.removeItem(STORAGE_KEY);
  location.reload();
}

function setTheme(theme){
  if(theme === "light") {
    document.documentElement.setAttribute("data-theme","light");
  } else {
    document.documentElement.removeAttribute("data-theme");
  }
  try{ localStorage.setItem("invalsi_theme", theme); }catch(e){}
}
function toggleTheme(){
  const cur = document.documentElement.getAttribute("data-theme") === "light" ? "light" : "dark";
  setTheme(cur === "light" ? "dark" : "light");
}

function initTheme(){
  try {
    const saved = localStorage.getItem("invalsi_theme");
    if(saved) setTheme(saved);
  } catch (e) {}
}

function mountSection(mountId, sectionKey){
  const mount = $(mountId);
  const sec = BANK[sectionKey];
  if(!mount || !sec) return;

  const wrapper = document.createElement("div");

  // passage
  const passage = document.createElement("div");
  passage.className = "passage";
  const head = document.createElement("div");
  head.className = "passage-title";
  head.innerHTML = `<div class="pt">${sec.title}</div><div class="pm">${sec.meta}</div>`;
  const body = document.createElement("div");
  body.textContent = sec.passage;
  passage.appendChild(head);
  passage.appendChild(body);
  wrapper.appendChild(passage);

  // questions
  sec.questions.forEach((q, idx) => {
    const qb = document.createElement("div");
    qb.className = "qblock";

    const qhead = document.createElement("div");
    qhead.className = "qhead";
    qhead.innerHTML = `<div class="qnum">Q${idx+1} · <span class="muted">${q.id}</span></div>
                       <div class="qtype">${q.type === "mc" ? "Scelta multipla" : "Risposta breve"}</div>`;
    qb.appendChild(qhead);

    const qt = document.createElement("div");
    qt.className = "qtext";
    qt.textContent = q.prompt;
    qb.appendChild(qt);

    if(q.type === "mc") {
      const opts = document.createElement("div");
      opts.className = "options";
      q.options.forEach((opt, oi) => {
        const row = document.createElement("label");
        row.className = "option";
        const input = document.createElement("input");
        input.type = "radio";
        input.name = q.id;
        input.value = String(oi);
        input.checked = state.answers[q.id] === oi;
        input.addEventListener("change", () => {
          state.answers[q.id] = oi;
          save();
        });
        const span = document.createElement("div");
        span.textContent = opt;
        row.appendChild(input);
        row.appendChild(span);
        opts.appendChild(row);
      });
      qb.appendChild(opts);
    } else {
      const sa = document.createElement("div");
      sa.className = "short-answer";
      const inp = document.createElement("input");
      inp.type = "text";
      inp.placeholder = "Scrivi qui (2–4 righe nel quaderno; qui basta una sintesi)";
      inp.value = typeof state.answers[q.id] === "string" ? state.answers[q.id] : "";
      inp.addEventListener("input", () => {
        state.answers[q.id] = inp.value;
        save();
      });
      sa.appendChild(inp);
      qb.appendChild(sa);

      const hint = document.createElement("div");
      hint.className = "muted";
      hint.style.marginTop = "8px";
      hint.style.fontSize = "12px";
      hint.textContent = "Suggerimento: rispondi richiamando il testo. Valutazione automatica semplificata (parole-chiave).";
      qb.appendChild(hint);
    }

    wrapper.appendChild(qb);
  });

  mount.innerHTML = "";
  mount.appendChild(wrapper);
}

function normalizeText(s){
  return (s||"")
    .toString()
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function scoreShortAnswer(userText, keywords){
  const t = normalizeText(userText);
  if(!t) return {points:0, max:1, hit:[]};
  const hits = [];
  (keywords||[]).forEach(k => {
    const kk = normalizeText(k);
    if(kk && t.includes(kk)) hits.push(k);
  });
  // scoring: at least 2 keyword hits -> full point; 1 hit -> half
  if(hits.length >= 2) return {points:1, max:1, hit:hits};
  if(hits.length === 1) return {points:0.5, max:1, hit:hits};
  return {points:0, max:1, hit:hits};
}

function computeScore(){
  const sections = [
    {key:"narrative", label:"Narrativo"},
    {key:"expository", label:"Espositivo-argomentativo"},
    {key:"regulative", label:"Regolativo + lingua"}
  ];

  const details = [];
  let total = 0;
  let totalMax = 0;

  for(const s of sections){
    const sec = BANK[s.key];
    let secPoints = 0;
    let secMax = 0;

    sec.questions.forEach(q => {
      if(q.type === "mc") {
        secMax += 1; totalMax += 1;
        const ans = state.answers[q.id];
        if(typeof ans === "number" && ans === q.answer) { secPoints += 1; total += 1; }
      } else {
        secMax += 1; totalMax += 1;
        const res = scoreShortAnswer(state.answers[q.id], q.keywords);
        secPoints += res.points;
        total += res.points;
      }
    });

    details.push({
      key: s.key,
      label: s.label,
      points: secPoints,
      max: secMax
    });
  }

  // percent
  const percent = totalMax > 0 ? Math.round((total/totalMax)*100) : 0;

  // simple level mapping (didactic, not official INVALSI)
  let level = "—";
  if(percent < 40) level = "1";
  else if(percent < 55) level = "2";
  else if(percent < 70) level = "3";
  else if(percent < 85) level = "4";
  else level = "5";

  return {
    total, totalMax, percent, level, details
  };
}

function buildSummary(score){
  const now = new Date();
  const started = state.meta.startedAt ? new Date(state.meta.startedAt) : null;
  const finished = state.meta.finishedAt ? new Date(state.meta.finishedAt) : null;

  const lines = [];
  lines.push("SIMULAZIONE INVALSI ITALIANO – RISULTATI");
  lines.push("--------------------------------------");
  lines.push(`Studente: ${state.meta.name || "—"}`);
  lines.push(`Classe:   ${state.meta.class || "—"}`);
  if(state.meta.school) lines.push(`Scuola:   ${state.meta.school}`);
  if(state.meta.email) lines.push(`Email:    ${state.meta.email}`);
  lines.push("");
  if(started) lines.push(`Avvio:    ${started.toLocaleString()}`);
  if(finished) lines.push(`Fine:     ${finished.toLocaleString()}`);
  lines.push(`Timer residuo: ${formatTime(state.meta.remainingSeconds)}`);
  lines.push("");
  lines.push(`Punteggio: ${score.total} / ${score.totalMax}  (${score.percent}%)`);
  lines.push(`Livello (didattico): ${score.level}`);
  lines.push("");
  lines.push("Dettaglio per sezione:");
  score.details.forEach(d => {
    lines.push(`- ${d.label}: ${d.points} / ${d.max}`);
  });
  lines.push("");
  lines.push("Nota: le risposte brevi sono valutate automaticamente con parole-chiave (stima).");
  lines.push("Per una valutazione reale serve correzione docente.");
  return lines.join("\n");
}

function downloadJSON(obj, filename){
  const blob = new Blob([JSON.stringify(obj, null, 2)], {type:"application/json"});
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 5000);
}

function openMailto(summary){
  const subject = encodeURIComponent("Risultati simulazione INVALSI Italiano");
  // mailto has length limits: keep it compact
  const body = encodeURIComponent(summary.slice(0, 6000));
  const href = `mailto:${TEACHER_EMAIL}?subject=${subject}&body=${body}`;
  window.location.href = href;
}

async function postToEndpoint(payload){
  if(!ENDPOINT_URL) return {ok:false, reason:"ENDPOINT_URL non impostato"};
  try {
    const res = await fetch(ENDPOINT_URL, {
      method:"POST",
      headers:{"Content-Type":"application/json"},
      body: JSON.stringify(payload)
    });
    if(!res.ok) return {ok:false, reason:`HTTP ${res.status}`};
    return {ok:true};
  } catch(e) {
    return {ok:false, reason:String(e)};
  }
}

function bindTabs(){
  document.querySelectorAll(".tab").forEach(btn => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-target");
      document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));
      document.querySelectorAll(".panel").forEach(p => p.classList.remove("active"));
      btn.classList.add("active");
      const panel = document.getElementById(target);
      if(panel) panel.classList.add("active");
    });
  });
}

let timerInterval = null;

function setTimerUI(){
  $("timerValue").textContent = formatTime(state.meta.remainingSeconds);
}

function setTimerButtons(){
  const running = state.meta.timerRunning;
  $("btnStart").disabled = !!state.meta.startedAt;
  $("btnPause").disabled = !running;
  $("btnResume").disabled = running || !state.meta.startedAt || !!state.meta.finishedAt;
  $("btnStop").disabled = !state.meta.startedAt || !!state.meta.finishedAt;
}

function stopTimer(finalize=false){
  if(timerInterval) clearInterval(timerInterval);
  timerInterval = null;
  state.meta.timerRunning = false;
  if(finalize) {
    state.meta.finishedAt = new Date().toISOString();
  }
  save();
  setTimerUI();
  setTimerButtons();
}

function startTimer(){
  if(state.meta.startedAt) return;
  state.meta.startedAt = new Date().toISOString();
  state.meta.timerRunning = true;
  save();
  setTimerButtons();
  tickLoop();
}

function pauseTimer(){
  state.meta.timerRunning = false;
  save();
  setTimerButtons();
}

function resumeTimer(){
  if(state.meta.finishedAt) return;
  state.meta.timerRunning = true;
  save();
  setTimerButtons();
}

function tickLoop(){
  if(timerInterval) clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    if(!state.meta.timerRunning) return;
    state.meta.remainingSeconds = Math.max(0, state.meta.remainingSeconds - 1);
    if(state.meta.remainingSeconds <= 0) {
      stopTimer(true);
      alert("Tempo scaduto. La prova è stata terminata.");
    }
    setTimerUI();
    save();
  }, 1000);
}

function bindMetaInputs(){
  const fields = [
    ["studentName","name"],
    ["studentClass","class"],
    ["studentSchool","school"],
    ["studentEmail","email"]
  ];
  fields.forEach(([id, key]) => {
    const el = $(id);
    el.value = state.meta[key] || "";
    el.addEventListener("input", () => {
      state.meta[key] = el.value.trim();
      save();
    });
  });
}

function bindHeaderActions(){
  $("btnToggleTheme").addEventListener("click", toggleTheme);
  $("btnReset").addEventListener("click", resetAll);
}

function bindTimerControls(){
  $("btnStart").addEventListener("click", () => {
    if(!state.meta.name || !state.meta.class) {
      alert("Inserisci almeno Nome e Classe prima di avviare.");
      return;
    }
    startTimer();
  });
  $("btnPause").addEventListener("click", pauseTimer);
  $("btnResume").addEventListener("click", resumeTimer);
  $("btnStop").addEventListener("click", () => {
    if(!confirm("Terminare la prova?")) return;
    stopTimer(true);
  });
}

function bindResultsActions(){
  $("teacherEmail").textContent = TEACHER_EMAIL;

  $("btnScore").addEventListener("click", async () => {
    if(!state.meta.startedAt) {
      alert("Avvia prima la prova (timer).");
      return;
    }
    if(!state.meta.finishedAt) {
      if(confirm("La prova non risulta terminata. Vuoi terminarla ora?")) {
        stopTimer(true);
      }
    }

    const score = computeScore();
    state.lastScore = {
      ...score,
      computedAt: new Date().toISOString()
    };
    save();

    // UI
    $("scoreTotal").textContent = `${score.total} / ${score.totalMax}`;
    $("scoreMeta").textContent = `${score.percent}% · Livello (didattico) ${score.level}`;
    $("scoreBySection").textContent = score.details.map(d => `• ${d.label}: ${d.points} / ${d.max}`).join("\n");

    const summary = buildSummary(score);
    $("resultsText").value = summary;

    $("btnDownload").disabled = false;
    $("btnCopy").disabled = false;
    $("btnMailto").disabled = false;

    // optional endpoint
    if(ENDPOINT_URL) {
      const payload = buildPayload(score);
      const res = await postToEndpoint(payload);
      if(!res.ok) {
        console.warn("Invio endpoint fallito:", res.reason);
      }
    }
  });

  $("btnDownload").addEventListener("click", () => {
    if(!state.lastScore) return;
    const payload = buildPayload(state.lastScore);
    const safeName = (state.meta.name || "studente").replace(/[^a-z0-9]+/gi,"_").slice(0,40);
    const filename = `risultati_invalsi_italiano_${safeName}.json`;
    downloadJSON(payload, filename);
  });

  $("btnCopy").addEventListener("click", async () => {
    const txt = $("resultsText").value || "";
    try {
      await navigator.clipboard.writeText(txt);
      alert("Riepilogo copiato.");
    } catch(e) {
      $("resultsText").focus();
      $("resultsText").select();
      alert("Copia non disponibile: seleziona e copia manualmente.");
    }
  });

  $("btnMailto").addEventListener("click", () => {
    const txt = $("resultsText").value || "";
    if(!txt) return;
    openMailto(txt);
  });
}

function buildPayload(score){
  return {
    meta: {
      name: state.meta.name,
      class: state.meta.class,
      school: state.meta.school,
      email: state.meta.email,
      startedAt: state.meta.startedAt,
      finishedAt: state.meta.finishedAt,
      remainingSeconds: state.meta.remainingSeconds
    },
    score,
    answers: state.answers
  };
}

function init(){
  initTheme();
  load();
  bindHeaderActions();
  bindTabs();
  bindMetaInputs();
  bindTimerControls();
  bindResultsActions();

  // mount sections
  mountSection("narrativeMount", "narrative");
  mountSection("expositoryMount", "expository");
  mountSection("regulativeMount", "regulative");

  setTimerUI();
  setTimerButtons();

  // If timer was running, resume loop
  if(state.meta.timerRunning && state.meta.startedAt && !state.meta.finishedAt) {
    tickLoop();
  }

  // If last score exists, show it in UI
  if(state.lastScore) {
    const score = state.lastScore;
    $("scoreTotal").textContent = `${score.total} / ${score.totalMax}`;
    $("scoreMeta").textContent = `${score.percent}% · Livello (didattico) ${score.level}`;
    $("scoreBySection").textContent = score.details.map(d => `• ${d.label}: ${d.points} / ${d.max}`).join("\n");
    $("resultsText").value = buildSummary(score);
    $("btnDownload").disabled = false;
    $("btnCopy").disabled = false;
    $("btnMailto").disabled = false;
  }
}

document.addEventListener("DOMContentLoaded", init);
