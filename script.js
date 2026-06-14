const navToggle = document.querySelector(".nav-toggle");
const siteNav = document.querySelector(".site-nav");

navToggle?.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  navToggle.setAttribute("aria-expanded", String(isOpen));
});

siteNav?.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    siteNav.classList.remove("open");
    navToggle?.setAttribute("aria-expanded", "false");
  }
});

const filters = document.querySelectorAll(".filter");
const kamiCards = document.querySelectorAll(".kami-card");

filters.forEach((filter) => {
  filter.addEventListener("click", () => {
    const category = filter.dataset.filter;

    filters.forEach((button) => button.classList.remove("active"));
    filter.classList.add("active");

    kamiCards.forEach((card) => {
      card.hidden = category !== "all" && card.dataset.category !== category;
    });
  });
});

const originalText = new Map();

document.querySelectorAll("[data-i18n]").forEach((element) => {
  originalText.set(element.dataset.i18n, element.innerHTML);
});

const translations = {
  ja: {
    brandSub: "神様雑学チャンネル",
    heroTitle: "神ちゃまたちが案内する、\n神様と神社の物語。"
  },
  en: {
    brandName: "Yaoyorozu no Kamichama",
    brandSub: "Kami Trivia Channel",
    navCharacters: "Kamichama",
    navEncyclopedia: "Kami Guide",
    navLine: "LINE Stickers",
    heroTitle: "Stories of kami and shrines,\nguided by the Kamichama.",
    heroLead: "From torii gates and shrine etiquette to goshuin and the origins of kami, this channel shares shrine trivia in a friendly, upbeat way.",
    watchVideo: "Watch Videos",
    goEncyclopedia: "Open Kami Guide",
    intro1Title: "Shrine Etiquette",
    intro1Text: "Short, friendly basics to know before visiting a shrine.",
    intro2Title: "Stories of Kami",
    intro2Text: "An approachable gateway to mythology, folklore, and local beliefs.",
    intro3Title: "Visit Trivia",
    intro3Text: "Tips and small discoveries that make shrine walks more fun.",
    charactersTitle: "Kamichama Profiles",
    roleLabel: "Role",
    likeLabel: "Likes",
    detailLabel: "Details",
    encyclopediaTitle: "Kami Guide",
    encyclopediaLead: "A guide to the kami who inspired the Kamichama characters.",
    viewEncyclopedia: "View Guide Page",
    youtubeTitle: "Latest Video",
    youtubeLead: "Replace the video ID with the official one to show the embedded video.",
    lineTitle: "Kamichama LINE Stickers",
    lineLead: "A sticker area for gentle shrine-themed phrases you can use every day.",
    footerText: "Official website of the kami trivia YouTube channel",
    luckTag: "Good Luck",
    artsTag: "Arts",
    businessTag: "Business",
    stamp1: "Blessings",
    stamp2: "Good work",
    stamp3: "Good luck",
    stamp4: "See you"
  }
};

function renderTranslation(element, value) {
  element.innerHTML = value.replace(/\n/g, "<br>");
}

function setLanguage(lang) {
  const dictionary = translations[lang] || translations.ja;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const value = dictionary[key] ?? originalText.get(key);

    if (value) {
      renderTranslation(element, value);
    }
  });

  document.querySelectorAll(".lang-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.lang === lang);
  });

  document.documentElement.lang = lang;
}

document.querySelectorAll(".lang-button").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

document.querySelectorAll("a[download]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    window.location.href = link.href;
  });
});

setLanguage("ja");
