import { Controller } from 'react-hook-form';

import { Input } from 'ui';
import { useEmailValidation } from 'form/validators/hooks/useEmailValidation';
import { useLocale } from 'hooks';
import { EmailProps } from './Email.types';

export const Email = ({ control }: EmailProps) => {
  const { formatMessage } = useLocale();

  const type = 'email';

  return (
    <Controller
      name={type}
      control={control}
      defaultValue=""
      rules={useEmailValidation()}
      render={({ field }) => (
        <Input
          label={formatMessage({ id: `login.${type}` })}
          type={type}
          id={type}
          options={{ ...field, autoFocus: true }}
        />
      )}
    />
  );
};
