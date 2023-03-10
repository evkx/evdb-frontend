import { useTranslation } from 'react-i18next';
import { useQuery } from 'react-query';
import i18next from 'i18next';
import * as React from 'react';

interface Props {
  children: React.ReactNode;
}

const LoadLocalizations = ({ children }: Props) => {
  const { i18n } = useTranslation('common');
  const currentUri = window.location.href;
  let lang = 'en';
  if (currentUri.includes('nb/')) {
    lang = 'no_nb';
  }

  const baseUrl = import.meta.env.BASE_URL;
  const localizationsFilePath = `${baseUrl}public/localizations/${lang}.json`;
  const localizationsFileUrl = new URL(localizationsFilePath, import.meta.url).href;

  useQuery(
    'Localizations',
    async () => {
      const data = await fetch(localizationsFileUrl);
      const resource = await data.json();
      i18next.addResourceBundle(i18n.language, 'common', resource);
    },
    {
      staleTime: Infinity,
      suspense: true,
    },
  );

  return <>{children}</>;
};

export default LoadLocalizations;
