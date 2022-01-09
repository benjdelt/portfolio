import { useRouter } from 'next/router';

export function useLanguageSwitcher() {

  const languageLabels = {fr: "Français", en: "English"};
  
  // Using the router hook to switch locale without changing the current page
  const router = useRouter();
  const { pathname, asPath, query, locale } = router;

  const switchValue = locale === 'en' ? 'fr' : 'en';

  const routerPush = loc => router.push({ pathname, query }, asPath, { locale: loc, scroll: false });

  return {
    switchFr: () => routerPush('fr'),
    switchEn: () => routerPush('en'),
    switchLocale: () => routerPush(switchValue),
    switchLabel: languageLabels[switchValue],
  }
}
