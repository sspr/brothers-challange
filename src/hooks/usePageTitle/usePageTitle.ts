import { useEffect } from 'react';
import { useIntl } from 'react-intl';

export const usePageTitle = () => {
  const { formatMessage } = useIntl();

  useEffect(() => {
    const translatedPageTitle = formatMessage({ id: 'header.title' });

    if (document.title !== translatedPageTitle) {
      document.title = translatedPageTitle;
      document
        .querySelector('meta[name="description"]')
        ?.setAttribute('content', formatMessage({ id: 'page.description' }));
    }
  }, []);
};
