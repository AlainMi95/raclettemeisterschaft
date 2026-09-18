import type { Lang } from './config';
import de, { type Dictionary } from './de';
import en from './en';

const dictionaries: Record<Lang, Dictionary> = { de, en };

/** All UI texts for one language. */
export function useTranslations(lang: Lang): Dictionary {
  return dictionaries[lang];
}

export * from './config';
export type { Dictionary };
