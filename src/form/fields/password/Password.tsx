import { Controller } from 'react-hook-form';

import { Input } from 'ui';
import { useLocale } from 'hooks';
import { usePasswordValidation } from 'form/validators/hooks/usePasswordValidation';
import { PasswordProps } from './Password.types';

export const Password = ({ control }: PasswordProps) => {
  const { formatMessage } = useLocale();

  const type = 'password';

  return (
    <Controller
      name={type}
      control={control}
      defaultValue=""
      rules={usePasswordValidation()}
      render={({ field }) => (
        <Input
          label={formatMessage({ id: `login.${type}` })}
          type={type}
          autocomplete="current-password"
          id={type}
          options={{ ...field }}
        />
      )}
    />
  );
};
