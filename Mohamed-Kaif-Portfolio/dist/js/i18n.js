(function () {
  const browserLang = (navigator.language || navigator.userLanguage || 'en').toLowerCase();
  const lang = 'en';
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  window.__I18N_LANG = lang;

  window.getCharHTML = function (ch) {
    if (ch === ' ') return '&nbsp;';
    if (ch === '🡲' || ch === '🡺') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></svg>';
    if (ch === '🡼') return '<svg style="width: 1.25em; height: 1.25em; vertical-align: -0.25em;" viewBox="0 0 84 85" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g transform="rotate(-135 42 42.5)"><path d="M11 38H54L37 21H51L73 43L51 65H37L54 48H11Z"/></g></svg>';
    if (ch === '🞣') return '<svg style="width: 0.9em; height: 0.9em; vertical-align: -0.1em; transform: translateY(-0.1em);" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C12 7.5 16.5 12 22 12C16.5 12 12 16.5 12 22C12 16.5 7.5 12 2 12C7.5 12 12 7.5 12 2Z"/></svg>';
    return ch;
  };

  if (lang === 'fr') {
    window.__t = function (key) { return null; };
    return;
  }

  const T = {
  "meta.description": "Mohamed Kaif S A — Computer Science Engineering student at LICET, Chennai. Building practical systems through AI, Web3 and software development.",
  "index.title": "Mohamed Kaif — System Builder",
  "index.h1": "Mohamed Kaif S A — System Builder, Computer Science Engineering student at LICET, Chennai.",
  "index.hero.tagline": "Curious builder, <span class=\"other-accent\">turning ideas into systems</span>,<br>through code, curiosity and purpose.",
  "index.about.text": "I build<span class=\"other-accent\"> practical systems</span>, connecting software, AI and Web3 with problems that <span class=\"other-accent\">matter</span>.",
  "index.about.sub": "I’m Mohamed Kaif S A, a Computer Science Engineering student at LICET, Chennai (2024–2028). I learn by building, competing in hackathons and bringing people together through EICON, MAD Club and NSS.",
  "index.cg.phrase": "Every project starts with a <span class=\"other-accent\">question</span>, grows through <span class=\"other-accent\">experimentation</span> and teaches me something new.",
  "index.skills.subtitle": "Skills",
  "index.skills.text": "From web applications to AI and blockchain, these are the tools and ideas I work with through projects and hands-on learning.",
  "index.skills.frontend": "Frontend",
  "index.skills.animation": "AI & Machine Learning",
  "index.skills.backend": "Backend & Languages",
  "index.skills.database": "Databases",
  "index.skills.devops": "Developer Tools",
  "index.skills.security": "Blockchain & Web3",
  "index.skills.design": "Design",
  "index.contact.title": "Contact",
  "index.contact.dispo1": "Let’s connect over <span class=\"other-accent\">software, AI and Web3</span>. I’m interested in internships, challenging projects and teams that learn by building.",
  "index.contact.dispo2": "Have a <span class=\"other-accent\">hackathon idea</span>, a product to explore or a <span class=\"other-accent\">community initiative</span>? I’d like to hear about it.",
  "index.proj.label": "Preview",
  "index.detail.visit": "EXPLORE 🡲",
  "index.detail.back": "🡼BACK",
  "info.title": "Info — Mohamed Kaif",
  "info.eyebrow": "About",
  "info.role": "Computer Science Engineering student at LICET. System builder, hackathon participant and community contributor.",
  "info.desc": "I’m Mohamed Kaif S A, pursuing B.E. CSE at LICET (2024–2028), with an 8.63/10 CGPA through semester 3. My work spans AI, Web3 and practical software. Beyond code, I’ve served as EICON Director of Media, MAD Club Secretary and XPLORE’26 Overall Student Coordinator, and volunteer with NSS.",
  "info.meta.based": "Based in",
  "info.meta.status": "Education",
  "info.meta.based.value": "Chennai, India",
  "info.meta.status.value": "B.E. CSE · LICET · 2024–2028",
  "info.skills.frontend": "Frontend",
  "info.skills.animation": "AI & Web3",
  "info.skills.backend": "Backend",
  "info.skills.security": "Tools & Design",
  "contact.title": "Contact — Mohamed Kaif",
  "contact.panel.title": "Let’s build something useful.",
  "contact.panel.copy": "For project collaborations, hackathon teams, internship opportunities or student-community initiatives, send me a message.",
  "contact.meta.base": "Based in",
  "contact.meta.status": "Focus",
  "contact.meta.delay": "Education",
  "contact.meta.base.value": "Chennai, India",
  "contact.meta.status.value": "Software · AI · Web3",
  "contact.meta.delay.value": "LICET · CSE · 2024–2028",
  "contact.eyebrow": "Contact",
  "contact.role": "Computer Science Engineering student, exploring practical software, AI and blockchain systems.",
  "contact.desc": "Got a problem worth solving? Tell me what you’re building, where you’re stuck and how we could work together. I enjoy learning alongside people who turn ideas into working products.",
  "contact.shortcuts": "Find me",
  "contact.brief": "Tell me about",
  "contact.maildirect": "Email me",
  "contact.brief.product": "Your idea or problem",
  "contact.brief.deadline": "Your timeline",
  "contact.brief.stack": "Your tech stack",
  "contact.brief.deliverables": "How I can contribute",
  "works.title": "Work — Mohamed Kaif",
  "works.h1": "Projects by Mohamed Kaif S A — AI, blockchain and practical software systems.",
  "common.aria.back": "Back to home",
  "common.aria.menu": "Main navigation",
  "common.aria.social": "Social links",
  "common.aria.footer": "Footer navigation",
  "404.title": "404 — Mohamed Kaif",
  "404.subtitle": "This page could not be found.",
  "404.ticker": "— PAGE NOT FOUND — ",
  "404.aria.back": "Back to home"
};

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    const key = el.getAttribute('data-i18n');
    if (T[key] != null) el.innerHTML = T[key];
  });

  document.querySelectorAll('[data-i18n-attr]').forEach(function (el) {
    el.getAttribute('data-i18n-attr').split('|').forEach(function (pair) {
      const idx = pair.indexOf(':');
      if (idx < 0) return;
      const attr = pair.slice(0, idx).trim();
      const key = pair.slice(idx + 1).trim();
      if (T[key] != null) el.setAttribute(attr, T[key]);
    });
  });

  const titleKey = document.documentElement.getAttribute('data-i18n-title');
  if (titleKey && T[titleKey]) document.title = T[titleKey];

  const descMeta = document.querySelector('meta[name="description"]');
  if (descMeta && T['meta.description']) descMeta.setAttribute('content', T['meta.description']);

  window.__t = function (key) { return T[key]; };
})();
