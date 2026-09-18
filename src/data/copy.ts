import type { Locale } from "./locale";

export type PhotoKey =
  | "dansvloer"
  | "djBooth"
  | "licht"
  | "podium"
  | "publiek"
  | "strand";

export type NavPath = "contact" | "diensten" | "over" | "werk";

const nl = {
  allServices: "Alle diensten",
  book: "Plan een datum",
  contact: {
    description:
      "Neem contact op met NRG Audio and Visuals voor geluid, licht en sfeer op jouw avond.",
    heading: "Praat met ons",
    intro:
      "Vertel de datum, de ruimte en het gevoel dat je wilt. Wij komen terug met hoe audio en visuals dat kunnen dragen.",
    kicker: "Contact",
    mailDirect: "Of mail direct:",
    title: "Contact",
  },
  diensten: {
    description:
      "Audio, visuals en sfeer voor live avonden, feesten en podiumkunsten.",
    heading: "Geluid, licht, sfeer",
    intro:
      "Drie dingen, één energie. We zetten audio en visuals in zodat de avond niet alleen hoorbaar is, maar ook voelbaar.",
    kicker: "Diensten",
    title: "Diensten",
  },
  form: {
    email: "E-mail",
    eventName: "Evenement",
    idleNote: "Opent je e-mailprogramma met een bericht klaar voor {email}.",
    message: "Bericht",
    name: "Naam",
    sentNote: "Als je e-mailprogramma niet opent, mail ons op {email}.",
    subject: "NRG aanvraag van {name}",
    submit: "Verstuur aanvraag",
  },
  home: {
    heading: "De ruimte, de nacht, de energie",
    intro:
      "Live geluid, licht en sfeer voor nachten die energie nodig hebben. Gevestigd in {location}.",
    kicker: "Audio en visuals",
    readyBody:
      "Vertel de datum en de ruimte. Wij brengen audio en visuals die de sfeer dragen.",
    readyTitle: "Klaar voor de avond",
    spaceBody:
      "Van podiumlooks tot dansvloeren: NRG bouwt het geluid en licht waarmee een ruimte een gevoel wordt.",
    whatWeBring: "Wat we meenemen",
  },
  languageLabel: "Taal",
  menuClose: "Sluiten",
  menuOpen: "Menu",
  menuToggle: "Menu openen of sluiten",
  nav: [
    { label: "Werk", path: "werk" },
    { label: "Diensten", path: "diensten" },
    { label: "Over", path: "over" },
    { label: "Contact", path: "contact" },
  ] satisfies { label: string; path: NavPath }[],
  over: {
    basedIn: "Gevestigd in",
    body:
      "{name} is een eenmanszaak in {location} voor podiumkunsten en live events. Geluid en beeld zijn hier geen losse klussen: ze zijn één energie die sfeer wordt.",
    contact: "Contact",
    description:
      "NRG Audio and Visuals uit Oostzaan: geluid en beeld als energie voor live avonden.",
    kicker: "Over",
    social: "Social",
    title: "Over",
  },
  photos: {
    dansvloer: {
      alt: "Dansende gasten onder paars en blauw licht in een tent op Manii Beach, Zandvoort",
      caption: "Dansvloer, Manii Beach Zandvoort",
    },
    djBooth: {
      alt: "Traktor DJ-set en mixer onder een tent, met zicht op het strand van Zandvoort",
      caption: "DJ-booth aan zee, Zandvoort",
    },
    licht: {
      alt: "Lichttruss met spots boven de dansvloer in een strandtent",
      caption: "Lichtset in de tent, Zandvoort aan Zee",
    },
    podium: {
      alt: "Rekordbox DJ-set met microfoon en spots, uitzicht op het strand",
      caption: "Podiumset, Zandvoort aan Zee",
    },
    publiek: {
      alt: "DJ en publiek onder neonlicht bij Club Two Lovers",
      caption: "Club Two Lovers",
    },
    strand: {
      alt: "Speakers, spots en DJ-booth op een strandpaviljoen in de duinen van Zandvoort",
      caption: "Geluid en licht, Zandvoort aan Zee",
    },
  } satisfies Record<PhotoKey, { alt: string; caption: string }>,
  seeWork: "Bekijk het werk",
  services: [
    {
      body: "Live geluid dat de ruimte vult zonder ertegenin te gaan. Mix, playback en systemen voor feesten, podia en podiumkunsten.",
      photo: "strand",
      title: "Audio",
    },
    {
      body: "Licht en podiumlooks die meebewegen met de muziek. Kleur, haze en focus, zodat de nacht een vorm krijgt die blijft hangen.",
      photo: "licht",
      title: "Visuals",
    },
    {
      body: "Geluid en licht als één energie. Wij maken van de techniek de ambiance die je voelt zodra je binnenkomt.",
      photo: "dansvloer",
      title: "Sfeer",
    },
  ] satisfies { body: string; photo: PhotoKey; title: string }[],
  skipLink: "Ga naar inhoud",
  tagline:
    "Waar geluid en beeld veranderen in energie, en energie in sfeer en ambiance",
  werk: {
    description:
      "Foto's van avonden met NRG Audio and Visuals: geluid, licht en sfeer op locatie.",
    heading: "Nachten die je voelt",
    intro:
      "Beelden van avonden waar geluid en licht samen de sfeer maakten. Van strandtent tot club: de set staat, de ruimte leeft.",
    kicker: "Werk",
    title: "Werk",
  },
};

const en: typeof nl = {
  allServices: "All services",
  book: "Book a date",
  contact: {
    description:
      "Get in touch with NRG Audio and Visuals for sound, light and atmosphere on your night.",
    heading: "Talk to us",
    intro:
      "Tell us the date, the space and the feeling you want. We will come back with how audio and visuals can carry that.",
    kicker: "Contact",
    mailDirect: "Or email directly:",
    title: "Contact",
  },
  diensten: {
    description:
      "Audio, visuals and atmosphere for live nights, parties and performing arts.",
    heading: "Sound, light, atmosphere",
    intro:
      "Three things, one energy. We use audio and visuals so the night is not only heard, but felt.",
    kicker: "Services",
    title: "Services",
  },
  form: {
    email: "Email",
    eventName: "Event",
    idleNote: "Opens your email app with a message ready for {email}.",
    message: "Message",
    name: "Name",
    sentNote: "If your email app does not open, mail us at {email}.",
    subject: "NRG request from {name}",
    submit: "Send request",
  },
  home: {
    heading: "The room, the night, the energy",
    intro:
      "Live sound, light and atmosphere for nights that need energy. Based in {location}.",
    kicker: "Audio and visuals",
    readyBody:
      "Tell us the date and the space. We bring audio and visuals that carry the atmosphere.",
    readyTitle: "Ready for the night",
    spaceBody:
      "From stage looks to dance floors: NRG builds the sound and light that turn a space into a feeling.",
    whatWeBring: "What we bring",
  },
  languageLabel: "Language",
  menuClose: "Close",
  menuOpen: "Menu",
  menuToggle: "Open or close menu",
  nav: [
    { label: "Work", path: "werk" },
    { label: "Services", path: "diensten" },
    { label: "About", path: "over" },
    { label: "Contact", path: "contact" },
  ],
  over: {
    basedIn: "Based in",
    body: "{name} is a one-person company in {location} for performing arts and live events. Sound and image are not separate jobs here: they are one energy that becomes atmosphere.",
    contact: "Contact",
    description:
      "NRG Audio and Visuals from Oostzaan: sound and image as energy for live nights.",
    kicker: "About",
    social: "Social",
    title: "About",
  },
  photos: {
    dansvloer: {
      alt: "Dancing guests under purple and blue light in a tent at Manii Beach, Zandvoort",
      caption: "Dance floor, Manii Beach Zandvoort",
    },
    djBooth: {
      alt: "Traktor DJ set and mixer under a tent, looking out over Zandvoort beach",
      caption: "DJ booth by the sea, Zandvoort",
    },
    licht: {
      alt: "Lighting truss with spots above the dance floor in a beach tent",
      caption: "Light set in the tent, Zandvoort aan Zee",
    },
    podium: {
      alt: "Rekordbox DJ set with microphone and spots, view of the beach",
      caption: "Stage set, Zandvoort aan Zee",
    },
    publiek: {
      alt: "DJ and crowd under neon light at Club Two Lovers",
      caption: "Club Two Lovers",
    },
    strand: {
      alt: "Speakers, spots and DJ booth on a beach pavilion in the dunes of Zandvoort",
      caption: "Sound and light, Zandvoort aan Zee",
    },
  },
  seeWork: "See the work",
  services: [
    {
      body: "Live sound that fills the room without fighting it. Mix, playback and systems for parties, stages and performing arts.",
      photo: "strand",
      title: "Audio",
    },
    {
      body: "Light and stage looks that move with the music. Color, haze and focus, so the night takes a shape that stays with you.",
      photo: "licht",
      title: "Visuals",
    },
    {
      body: "Sound and light as one energy. We turn the tech into the ambiance you feel as soon as you walk in.",
      photo: "dansvloer",
      title: "Atmosphere",
    },
  ],
  skipLink: "Skip to content",
  tagline:
    "Where sound and image turn into energy, and energy into atmosphere",
  werk: {
    description:
      "Photos from nights with NRG Audio and Visuals: sound, light and atmosphere on location.",
    heading: "Nights you can feel",
    intro:
      "Pictures from nights where sound and light made the atmosphere together. From beach tent to club: the set is up, the room is alive.",
    kicker: "Work",
    title: "Work",
  },
};

export const copyByLocale = { en, nl } as const;

export type SiteCopy = typeof nl;

export function getCopy(locale: Locale): SiteCopy {
  return copyByLocale[locale];
}

export function fillTemplate(
  template: string,
  values: Record<string, string>,
): string {
  function replace(_match: string, key: string): string {
    return values[key] ?? "";
  }

  return template.replace(/\{(\w+)\}/g, replace);
}
