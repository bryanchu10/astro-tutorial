import { ui, defaultLang, showDefaultLang } from './ui';

export function getLangFromUrl(url: URL) {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as keyof typeof ui;
  return defaultLang;
}

export function useTranslations(lang: keyof typeof ui) {
  return function t(key: keyof typeof ui[typeof defaultLang]) {
    return ui[lang][key] || ui[defaultLang][key];
  }
}

export function usePathWithoutLang(lang: keyof typeof ui) {
  return function pathWithoutLang(path: string) {
    return (!showDefaultLang && lang === defaultLang) ? path : path.replace(`/${lang}`, '');
  }
}

export function useTranslatedPath(lang: keyof typeof ui) {
  return function tranlatePath(path: string, l: string = lang) {
    return (!showDefaultLang && l === defaultLang) ? path : `/${l}${path}`;
  }
}
