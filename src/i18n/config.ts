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
  livestream: { de: 'live-stream', en: 'live-stream' },
  registration: { de: 'anmeldung', en: 'registration' },
  rules: { de: 'regeln', en: 'rules' },
  pastEvents: { de: 'vergangene-anlaesse', en: 'past-events' },
  sponsors: { de: 'sponsoren', en: 'sponsors' },
  about: { de: 'ueber-uns', en: 'about' },
  faq: { de: 'faq', en: 'faq' },
} as const satisfies Record<string, Record<Lang, string>>;

export type RouteKey = keyof typeof routes;
export type PageRouteKey = Exclude<RouteKey, 'home'>;

/** Order of the main navigation. */
export const navRoutes: RouteKey[] = [
  'home',
  'news',
  'livestream',
  'registration',
  'rules',
  'pastEvents',
  'sponsors',
  'about',
  'faq',
];

export const pageRoutes = (Object.keys(routes) as RouteKey[]).filter(
  (route): route is PageRouteKey => route !== 'home',
);

/** URL of a page in a given language, e.g. getPath('de', 'rules') → '/de/regeln/'. */
export function getPath(lang: Lang, route: RouteKey = 'home'): string {
  const slug = routes[route][lang];
  return slug ? `/${lang}/${slug}/` : `/${lang}/`;
}

/** Where registrations (and questions) are sent. */
export const contactEmail = 'schmelzmeister@mail.ch';

/** Link to the registration form (file in /public/downloads). Empty: the page shows a "coming soon" note. */
export const registrationFormUrl = '/downloads/anmeldeformular.pdf';

/**
 * The four flyer versions (public/images/flyer-<color>.jpg) with their background color;
 * one is picked at random per page load. Keep the colors in sync with styles/global.css.
 */
export const flyerColors = {
  orange: '#d26f2e',
  yellow: '#e7b629',
  green: '#6bbb96',
  pink: '#d92c6e',
};
