export const languages = {
  de: 'Deutsch',
  en: 'English',
} as const;

export type Lang = keyof typeof languages;

export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'de';

/**
 * Every page on the site, with its URL slug per language.
 * Adding a page: add an entry here, plus its texts in de.ts / en.ts.
 */
export const routes = {
  home: { de: '', en: '' },
  news: { de: 'news', en: 'news' },
  about: { de: 'ueber-uns', en: 'about' },
  rules: { de: 'regeln', en: 'rules' },
  pastWinners: { de: 'bisherige-sieger', en: 'past-winners' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;
export type PageRouteKey = Exclude<RouteKey, 'home'>;

/** Order of the main navigation. */
export const navRoutes: RouteKey[] = ['home', 'news', 'about', 'rules', 'pastWinners'];

export const pageRoutes = (Object.keys(routes) as RouteKey[]).filter(
  (route): route is PageRouteKey => route !== 'home',
);

/** URL of a page in a given language, e.g. getPath('de', 'rules') → '/de/regeln/'. */
export function getPath(lang: Lang, route: RouteKey = 'home'): string {
  const slug = routes[route][lang];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}
