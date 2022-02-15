import { useLocale } from 'hooks';

export const usePasswordValidation = () => {
  const { formatMessage } = useLocale();

  const maxLength = 30;

  return {
    maxLength: {
      value: maxLength,
      message: `${formatMessage({ id: 'login.password.error.maxLength' })} ${maxLength}`,
    },
    required: {
      value: true,
      message: formatMessage({ id: 'login.password.error.required' }),
    },
  };
};
