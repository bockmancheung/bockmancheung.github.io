import { ui, defaultLang, type Lang } from "./ui";

// Routes (in their default-locale, unprefixed form) that have a French
// translation. Blog writings and their tag/archive listings aren't
// translated, so they're intentionally left out.
const TRANSLATED_ROUTES = ["/", "/about", "/tags", "/archives", "/search", "/books"];

export function getLangFromUrl(url: URL): Lang {
  return url.pathname.startsWith("/fr") ? "fr" : (defaultLang as Lang);
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

export function getTargetLang(lang: Lang): Lang {
  return lang === "en" ? "fr" : "en";
}

/** Strips a leading "/fr" prefix and trailing slashes, e.g. "/fr/tags/" -> "/tags". */
export function stripLocale(pathname: string): string {
  const withoutLocale = pathname.startsWith("/fr")
    ? pathname.slice(3) || "/"
    : pathname;
  return withoutLocale.replace(/\/+$/, "") || "/";
}

/** Given the current pathname and its language, returns the href for the
 * equivalent page in the other language — falling back to that language's
 * homepage when the current route has no translation. */
export function getAlternatePath(pathname: string, lang: Lang): string {
  const normalized = stripLocale(pathname);
  const hasTranslation = TRANSLATED_ROUTES.includes(normalized);
  const targetPath = hasTranslation ? normalized : "/";
  const targetLang = getTargetLang(lang);

  if (targetLang === "fr") {
    return targetPath === "/" ? "/fr" : `/fr${targetPath}`;
  }
  return targetPath;
}
