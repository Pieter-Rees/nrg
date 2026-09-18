export const defaultLocale = "nl";
export const locales = ["nl", "en"] as const;

export type Locale = (typeof locales)[number];

export function getLocale(value: string | undefined): Locale {
  return value === "en" ? "en" : defaultLocale;
}

export function getUnprefixedPath(pathname: string): string {
  const segments = pathname.split("/").filter(Boolean);
  if (segments[0] === "en") {
    return segments.slice(1).join("/");
  }
  return segments.join("/");
}
