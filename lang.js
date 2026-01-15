const translations = {
  it: {
    nav: { app: "L'App", features: "Funzionalità", screenshots: "Screenshot", help: "Help" },
    hero: {
      tagline: "Giorno Giuliano & Codici Lotto",
      description: "L'app definitiva per calcolare il Giorno Giuliano dell'anno. Essenziale per produzione, logistica e tracciamento lotti.",
      brand: "by teothxproject",
      appStore: "Download su<br><strong>App Store</strong>",
      playStore: "Disponibile su<br><strong>Play Store</strong>"
    },
    appInfo: {
      title: "Perché JulianCal?",
      intro: "JulianCal è lo strumento indispensabile per professionisti che lavorano con date e tracciamento prodotti. Calcola instantaneamente il giorno giuliano e genera codici lotto personalizzati."
    },
    features: {
      title: "Funzionalità",
      cards: [
        { icon: "📅", title: "Giorno Giuliano in Tempo Reale", desc: "Visualizza il giorno giuliano dell'anno (1-365/366) con aggiornamento automatico ogni minuto." },
        { icon: "🏷️", title: "Codice Lotto", desc: "Genera codici lotto automatici con prefisso personalizzato e formato a 2 o 3 cifre." },
        { icon: "🔄", title: "Convertitore", desc: "Converti istantaneamente da giorno giuliano a data calendario e viceversa." },
        { icon: "📆", title: "Calendario Interattivo", desc: "Visualizza il calendario con giorno giuliano per ogni data. Seleziona qualsiasi data per i dettagli." },
        { icon: "📊", title: "Progresso Annuale", desc: "Visualizza la percentuale dell'anno trascorsa con barra di progresso animata." },
        { icon: "📈", title: "Statistiche Dettagliate", desc: "Numero settimana, trimestre corrente, giorni rimanenti e Julian Day Number completo." }
      ]
    },
    screenshots: { title: "Screenshot" },
    useCases: { title: "A Chi è Destinata" },
    help: {
      title: "Supporto & Help",
      intro: "Hai domande o problemi con JulianCal? Il nostro team è qui per aiutarti.",
      emailTitle: "Email di Supporto",
      emailDesc: "Scrivici per qualsiasi domanda, suggerimento o problema tecnico.",
      privacyTitle: "Privacy Policy",
      privacyDesc: "Leggi come gestiamo i tuoi dati nel rispetto della tua privacy."
    },
    footer: {
      brandDesc: "Sviluppiamo app utili e intuitive per semplificare il tuo lavoro quotidiano.",
      links: { app: "L'App", features: "Funzionalità", help: "Supporto", privacy: "Privacy Policy" },
      copyright: "© 2025 teothxproject. Tutti i diritti riservati."
    },
    screenshotCaptions: ["Home - Giorno Giuliano principale", "Convertitore Giorno ↔ Data", "Calendario Interattivo", "Impostazioni e Lingua"],
    useCasesList: ["🏭 Produzione & Manifattura", "🚚 Logistica & Spedizioni", "🌾 Agricoltura", "📋 Project Management", "🔬 Scienza & Ricerca"]
  },
  en: {
    nav: { app: "The App", features: "Features", screenshots: "Screenshots", help: "Help" },
    hero: {
      tagline: "Julian Day & Batch Codes",
      description: "The ultimate app for calculating the Julian Day of the year. Essential for production, logistics, and batch tracking.",
      brand: "by teothxproject",
      appStore: "Download on<br><strong>App Store</strong>",
      playStore: "Get it on<br><strong>Play Store</strong>"
    },
    appInfo: {
      title: "Why JulianCal?",
      intro: "JulianCal is the essential tool for professionals working with dates and product tracking. Instantly calculate the Julian Day and generate custom batch codes."
    },
    features: {
      title: "Features",
      cards: [
        { icon: "📅", title: "Real-Time Julian Day", desc: "Display the Julian Day of the year (1-365/366) with automatic updates every minute." },
        { icon: "🏷️", title: "Batch Code", desc: "Generate automatic batch codes with custom prefix and 2 or 3-digit format." },
        { icon: "🔄", title: "Converter", desc: "Instantly convert from Julian Day to calendar date and vice versa." },
        { icon: "📆", title: "Interactive Calendar", desc: "View calendar with Julian Day for each date. Select any date for details." },
        { icon: "📊", title: "Year Progress", desc: "Visualize the percentage of the year passed with animated progress bar." },
        { icon: "📈", title: "Detailed Statistics", desc: "Week number, current quarter, days remaining, and complete Julian Day Number." }
      ]
    },
    screenshots: { title: "Screenshots" },
    useCases: { title: "Who It's For" },
    help: {
      title: "Support & Help",
      intro: "Have questions or issues with JulianCal? Our team is here to help.",
      emailTitle: "Support Email",
      emailDesc: "Write to us for any questions, suggestions, or technical issues.",
      privacyTitle: "Privacy Policy",
      privacyDesc: "Read how we handle your data respecting your privacy."
    },
    footer: {
      brandDesc: "We develop useful and intuitive apps to simplify your daily work.",
      links: { app: "The App", features: "Features", help: "Support", privacy: "Privacy Policy" },
      copyright: "© 2025 teothxproject. All rights reserved."
    },
    screenshotCaptions: ["Home - Main Julian Day", "Julian Day ↔ Date Converter", "Interactive Calendar", "Settings & Language"],
    useCasesList: ["🏭 Production & Manufacturing", "🚚 Logistics & Shipping", "🌾 Agriculture", "📋 Project Management", "🔬 Science & Research"]
  }
};

let currentLang = 'it';

function detectLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  if (browserLang.startsWith('en')) {
    return 'en';
  }
  return 'it';
}

function setLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  updateContent();
}

function updateContent() {
  const t = translations[currentLang];

  document.querySelectorAll('.nav-links a[href="#app"]').forEach(el => el.innerHTML = t.nav.app);
  document.querySelectorAll('.nav-links a[href="#features"]').forEach(el => el.innerHTML = t.nav.features);
  document.querySelectorAll('.nav-links a[href="#screenshots"]').forEach(el => el.innerHTML = t.nav.screenshots);
  document.querySelectorAll('.nav-links a[href="#help"]').forEach(el => el.innerHTML = t.nav.help);

  document.querySelector('.tagline').innerHTML = t.hero.tagline;
  document.querySelector('.description').textContent = t.hero.description;
  document.querySelector('.brand').textContent = t.hero.brand;
  document.querySelector('.app-store span').innerHTML = t.hero.appStore;
  document.querySelector('.play-store span').innerHTML = t.hero.playStore;

  document.querySelector('#app h2').textContent = t.appInfo.title;
  document.querySelector('.intro').textContent = t.appInfo.intro;

  document.querySelector('#features h2').textContent = t.features.title;
  t.features.cards.forEach((card, i) => {
    const cards = document.querySelectorAll('.feature-card');
    if (cards[i]) {
      cards[i].querySelector('.feature-icon').textContent = card.icon;
      cards[i].querySelector('h3').textContent = card.title;
      cards[i].querySelector('p').textContent = card.desc;
    }
  });

  document.querySelector('#screenshots h2').textContent = t.screenshots.title;
  document.querySelectorAll('.screenshot p').forEach((el, i) => {
    el.textContent = t.screenshotCaptions[i] || '';
  });

  document.querySelector('.use-cases h2').textContent = t.useCases.title;
  document.querySelectorAll('.use-case').forEach((el, i) => {
    el.textContent = t.useCasesList[i] || '';
  });

  document.querySelector('#help h2').textContent = t.help.title;
  document.querySelector('#help > .container > p').textContent = t.help.intro;
  const helpCards = document.querySelectorAll('.help-card');
  helpCards[0].querySelector('h3').textContent = t.help.emailTitle;
  helpCards[0].querySelector('p').textContent = t.help.emailDesc;
  helpCards[1].querySelector('h3').textContent = t.help.privacyTitle;
  helpCards[1].querySelector('p').textContent = t.help.privacyDesc;

  document.querySelector('.footer-brand p').textContent = t.footer.brandDesc;
  document.querySelectorAll('.footer-links a').forEach((el, i) => {
    const texts = [t.footer.links.app, t.footer.links.features, t.footer.links.help, t.footer.links.privacy];
    el.textContent = texts[i] || '';
  });
  document.querySelector('.footer-bottom p').textContent = t.footer.copyright;

  updateLangSwitcher();
}

function updateLangSwitcher() {
  const switcher = document.querySelector('.lang-switch');
  if (switcher) {
    switcher.textContent = currentLang === 'it' ? '🇬🇧 EN' : '🇮🇹 IT';
  }
}

function initLanguage() {
  const savedLang = localStorage.getItem('lang');
  if (savedLang) {
    setLanguage(savedLang);
  } else {
    setLanguage(detectLanguage());
  }

  document.querySelector('.nav-links').insertAdjacentHTML('afterend',
    '<button class="lang-switch" onclick="setLanguage(currentLang === \'it\' ? \'en\' : \'it\')">🇬🇧 EN</button>'
  );
}

document.addEventListener('DOMContentLoaded', initLanguage);
