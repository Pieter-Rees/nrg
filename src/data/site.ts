export type NavItem = {
  href: string;
  label: string;
};

export type PhotoItem = {
  alt: string;
  caption: string;
  src: string;
};

export type ServiceItem = {
  body: string;
  photo: PhotoItem;
  title: string;
};

export const site = {
  email: "talk@nrg.pet",
  facebookUrl: "https://www.facebook.com/NRGAudioandVisuals/",
  location: "Oostzaan",
  name: "NRG Audio and Visuals",
  shortName: "NRG",
  tagline:
    "Waar geluid en beeld veranderen in energie, en energie in sfeer en ambiance",
};

export const copy = {
  book: "Plan een datum",
  menuClose: "Sluiten",
  menuOpen: "Menu",
  menuToggle: "Menu openen of sluiten",
  seeWork: "Bekijk het werk",
  skipLink: "Ga naar inhoud",
};

export const navItems: NavItem[] = [
  { href: "/werk", label: "Werk" },
  { href: "/diensten", label: "Diensten" },
  { href: "/over", label: "Over" },
  { href: "/contact", label: "Contact" },
];

export const photos = {
  dansvloer: {
    alt: "Dansende gasten onder paars en blauw licht in een tent op Manii Beach, Zandvoort",
    caption: "Dansvloer, Manii Beach Zandvoort",
    src: "/photos/dansvloer.jpg",
  },
  djBooth: {
    alt: "Traktor DJ-set en mixer onder een tent, met zicht op het strand van Zandvoort",
    caption: "DJ-booth aan zee, Zandvoort",
    src: "/photos/licht.jpg",
  },
  licht: {
    alt: "Lichttruss met spots boven de dansvloer in een strandtent",
    caption: "Lichtset in de tent, Zandvoort aan Zee",
    src: "/photos/set.jpg",
  },
  podium: {
    alt: "Rekordbox DJ-set met microfoon en spots, uitzicht op het strand",
    caption: "Podiumset, Zandvoort aan Zee",
    src: "/photos/podium.jpg",
  },
  publiek: {
    alt: "DJ en publiek onder neonlicht bij Club Two Lovers",
    caption: "Club Two Lovers",
    src: "/photos/publiek.jpg",
  },
  strand: {
    alt: "Speakers, spots en DJ-booth op een strandpaviljoen in de duinen van Zandvoort",
    caption: "Geluid en licht, Zandvoort aan Zee",
    src: "/photos/strand.jpg",
  },
} as const satisfies Record<string, PhotoItem>;

export const galleryPhotos: PhotoItem[] = [
  photos.dansvloer,
  photos.publiek,
  photos.strand,
  photos.licht,
  photos.djBooth,
  photos.podium,
];

export const homePhotos: PhotoItem[] = [
  photos.dansvloer,
  photos.publiek,
  photos.strand,
  photos.licht,
];

export const services: ServiceItem[] = [
  {
    title: "Audio",
    body: "Live geluid dat de ruimte vult zonder ertegenin te gaan. Mix, playback en systemen voor feesten, podia en podiumkunsten.",
    photo: photos.strand,
  },
  {
    title: "Visuals",
    body: "Licht en podiumlooks die meebewegen met de muziek. Kleur, haze en focus, zodat de nacht een vorm krijgt die blijft hangen.",
    photo: photos.licht,
  },
  {
    title: "Sfeer",
    body: "Geluid en licht als één energie. Wij maken van de techniek de ambiance die je voelt zodra je binnenkomt.",
    photo: photos.dansvloer,
  },
];
