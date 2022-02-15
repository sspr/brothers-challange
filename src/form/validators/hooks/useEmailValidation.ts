import { useLocale } from 'hooks';

export const useEmailValidation = () => {
  const { formatMessage } = useLocale();

  const maxLength = 30;

  return {
    maxLength: {
      value: maxLength,
      message: `${formatMessage({ id: 'login.email.error.maxLength' })} ${maxLength}`,
    },
    required: {
      value: true,
      message: formatMessage({ id: 'login.email.error.required' }),
    },
    pattern: {
      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
      message: formatMessage({ id: 'login.email.error.pattern' }),
    },
  };
};
