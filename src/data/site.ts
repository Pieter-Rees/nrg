import { getCopy, type PhotoKey } from "./copy";
import type { Locale } from "./locale";

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
  ogImage: "/photos/publiek.jpg",
  shortName: "NRG",
  url: "https://nrg.pet",
};

const photoSrc = {
  dansvloer: "/photos/dansvloer.jpg",
  djBooth: "/photos/licht.jpg",
  licht: "/photos/set.jpg",
  podium: "/photos/podium.jpg",
  publiek: "/photos/publiek.jpg",
  strand: "/photos/strand.jpg",
} as const satisfies Record<PhotoKey, string>;

const galleryPhotoKeys = [
  "dansvloer",
  "publiek",
  "strand",
  "licht",
  "djBooth",
  "podium",
] as const satisfies PhotoKey[];

export function getPhotos(locale: Locale): Record<PhotoKey, PhotoItem> {
  const { photos } = getCopy(locale);
  return {
    dansvloer: { ...photos.dansvloer, src: photoSrc.dansvloer },
    djBooth: { ...photos.djBooth, src: photoSrc.djBooth },
    licht: { ...photos.licht, src: photoSrc.licht },
    podium: { ...photos.podium, src: photoSrc.podium },
    publiek: { ...photos.publiek, src: photoSrc.publiek },
    strand: { ...photos.strand, src: photoSrc.strand },
  };
}

export function getGalleryPhotos(locale: Locale): PhotoItem[] {
  const photos = getPhotos(locale);

  function toPhoto(key: PhotoKey): PhotoItem {
    return photos[key];
  }

  return galleryPhotoKeys.map(toPhoto);
}

export function getServices(locale: Locale): ServiceItem[] {
  const copy = getCopy(locale);
  const photos = getPhotos(locale);

  function toService(service: (typeof copy.services)[number]): ServiceItem {
    return {
      body: service.body,
      photo: photos[service.photo],
      title: service.title,
    };
  }

  return copy.services.map(toService);
}
