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
    heroTitle: '<span class="hero-title-line"><span class="hero-red">神</span>ちゃまたちが案内</span><span class="hero-title-line">神様と神社の物語。</span>'
  },
  en: {
    brandName: "Yaoyorozu no Kamichama",
    brandSub: "Kami Trivia Channel",
    navCharacters: "Kamichama",
    navEncyclopedia: "Kami Guide",
    navLine: "LINE Stickers",
    heroTitle: "Stories of kami and shrines,\nguided by the Kamichama.",
    heroLead: "From torii gates and shrine etiquette to goshuin and the origins of kami, this channel shares kami trivia in a friendly, upbeat way.",
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

    amateruName: "Amateru-chan",
    amateruKami: "Amaterasu Omikami",
    amateruDesc: "A bright central character like the sun, guiding viewers through shrine basics and myths of light.",
    amateruRole: "Good luck, shrine basics",
    amateruLike: "Sunrise, mirrors, sparkling things",
    amateruKamiDesc: "The kami behind Amateru-chan, symbolizing the sun and light.",

    ichiName: "Ichi-chan",
    ichiKami: "Ichikishimahime no Mikoto",
    ichiDesc: "An elegant character connected to water and the performing arts, also comfortable with Benzaiten topics.",
    ichiRole: "Arts, water beliefs",
    ichiLike: "Biwa, lakes, white flowers",
    ichiKamiDesc: "The kami behind Ichi-chan, deeply connected to water and the arts.",

    ukaName: "Uka-chan",
    ukaKami: "Ukanomitama no Kami",
    ukaDesc: "A guide to prosperity who treasures rice ears and shares trivia about Inari shrines and vermilion torii.",
    ukaRole: "Business prosperity, abundant harvests",
    ukaLike: "Rice ears, vermilion torii",
    ukaKamiDesc: "The kami behind Uka-chan, connected to Inari faith and abundant harvests.",

    uzumeName: "Uzume-chan",
    uzumeKami: "Ame no Uzume no Mikoto",
    uzumeDesc: "A mood-maker who brightens the scene with dance and laughter, introducing kagura and performing arts.",
    uzumeRole: "Arts, kagura, laughter",
    uzumeLike: "Bells, stages, applause",
    uzumeKamiDesc: "The kami behind Uzume-chan, connected to dance, laughter, and the arts.",

    ookuniName: "Okuninushi",
    ookuniKami: "Okuninushi no Mikoto",
    ookuniDesc: "A reliable elder-brother type who knows about matchmaking and nation-building.",
    ookuniRole: "Matchmaking, nation-building",
    ookuniLike: "Izumo, white rabbits, knots",

    kamoName: "Kamo-chan",
    kamoKami: "Kamo Wakeikazuchi no Okami",
    kamoDesc: "An energetic Kyoto-loving character tied to thunder, protection, and purification.",
    kamoRole: "Protection, thunder beliefs",
    kamoLike: "Aoi leaves, clear streams, thunder",

    kukurinName: "Kukurin",
    kukurinKami: "Kukurihime",
    kukurinDesc: "A gentle listener who quietly ties relationships and reconciliation together.",
    kukurinRole: "Matchmaking, harmony",
    kukurinLike: "Hakusan, knots, quiet snow",

    sakuName: "Saku-chan",
    sakuKami: "Konohanasakuya-hime no Mikoto",
    sakuDesc: "A flower-like mountain princess character who shares stories of Mt. Fuji, blossoms, and safe birth.",
    sakuRole: "Mountains, flowers, safe birth",
    sakuLike: "Cherry blossoms, Mt. Fuji, spring breeze",

    sukuName: "Suku-chan",
    sukuKami: "Sukunahikona no Mikoto",
    sukuDesc: "A tiny but wise character guiding viewers through medicine, hot springs, and mysterious shrines.",
    sukuRole: "Medicine, hot springs, wisdom",
    sukuLike: "Medicinal herbs, hot springs, travel gear",

    susaName: "Susa-kun",
    susaKami: "Susanoo no Mikoto",
    susaDesc: "A passionate character who powerfully introduces protection, victory, and dramatic kami stories.",
    susaRole: "Protection, victory",
    susaLike: "Taiko drums, strong winds, sword stories",

    seoName: "????",
    seoKami: "????",
    seoDesc: "A secret water-themed character wrapped in clear flowing energy.",
    seoRole: "Purification, water, cleansing",
    seoLike: "River sounds, waterfalls, white cloth",

    tsukuName: "Tsuku-chan",
    tsukuKami: "Tsukuyomi no Mikoto",
    tsukuDesc: "A calm storyteller who loves the moon and quiet nights, explaining myths of calendars and night skies.",
    tsukuRole: "Moon, calendars, night myths",
    tsukuLike: "Moonlight, quiet shrine paths",

    hikoName: "Hiko-chan",
    hikoKami: "Sarutahiko Okami",
    hikoDesc: "A guide who is great at opening the way, supporting travel, traffic safety, and new beginnings.",
    hikoRole: "Way-opening, traffic safety",
    hikoLike: "Road signs, travel maps, morning departures",

    yamaName: "Yama-chan",
    yamaKami: "Oyamakui no Kami",
    yamaDesc: "A gentle guardian of mountains and land, introducing Hiyoshi and Hie shrines and mountain faith.",
    yamaRole: "Mountain guardianship, land beliefs",
    yamaLike: "Mountain paths, clear water, sunlight through trees",

    encyclopediaTitle: "Kami Guide",
    encyclopediaLead: "A guide to the kami who inspired the Kamichama characters.",
    viewEncyclopedia: "View Guide Page",
    luckTag: "Good Luck",
    artsTag: "Arts",
    businessTag: "Business",
    youtubeTitle: "Latest Video",
    youtubeLead: "Replace the video ID with the official one to show the embedded video.",
    lineTitle: "Kamichama LINE Stickers",
    lineLead: "A sticker area for gentle shrine-themed phrases you can use every day.",
    stamp1: "Blessings",
    stamp2: "Good work",
    stamp3: "Good luck",
    stamp4: "See you",
    footerText: "Official website of the kami trivia YouTube channel"
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

setLanguage("ja");
