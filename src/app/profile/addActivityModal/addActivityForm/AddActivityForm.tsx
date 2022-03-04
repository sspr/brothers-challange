import { Box, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';

import { useLocale, useSnackbar } from 'hooks';
import { InputField, SelectField, DatePickerField } from 'form/fields';
import { requiredValidation, maxLengthValidation, maxValueValidation, minValueValidation } from 'form/validators';
import { Button } from 'ui';
import { AddActivityFields, AddActivityFormProps } from './AddActivityForm.types';
import { styles } from './AddActivityForm.styles';
import { Discipline, Disciplines } from 'api/types';

const defaultValues: AddActivityFields = {
  discipline: 'bike',
  date: new Date(),
  value: '',
  elevation: '',
  description: '',
};

const maxPossibleValuesMap: Record<Disciplines, number> = {
  bike: 1008,
  running: 100,
  swimming: 5000,
  walking: 100,
  elevation: 8848,
  other: 50,
  pushUps: 512,
};

export const AddActivityForm = ({
  onSubmit,
  error,
  isLoading,
  currentMonth,
  setCurrentMonth,
  isFromSubmittedSuccessfully,
}: AddActivityFormProps) => {
  const { formatMessage } = useLocale();
  const { control, handleSubmit, watch } = useForm<AddActivityFields>({ defaultValues });
  const { showSnackbar } = useSnackbar();

  const disciplines = Object.values(Discipline)
    .filter((discipline) => discipline !== Discipline.ELEVATION)
    .map((discipline) => ({
      label: formatMessage({ id: `rankingTable.${discipline}` }),
      value: discipline,
    }));

  useEffect(() => {
    if (currentMonth !== watch('date').getMonth()) {
      setCurrentMonth(watch('date').getMonth());
    }
  }, [watch('date')]);

  useEffect(() => {
    if (isFromSubmittedSuccessfully) {
      showSnackbar(formatMessage({ id: 'addActivity.success' }));
    }
  }, [isFromSubmittedSuccessfully]);

  return (
    <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={styles.fromWrapper}>
      <SelectField
        control={control}
        name="discipline"
        options={disciplines}
        labelId="select-discipline"
        id="select"
        fullWidth
        label={formatMessage({ id: `profile.discipline` })}
        rules={[requiredValidation()]}
      />
      <DatePickerField
        minDate={new Date(Number(process.env.REACT_APP_YEAR), 0, 1)}
        maxDate={new Date()}
        control={control}
        name="date"
        label={formatMessage({ id: `addActivity.date` })}
      />
      <InputField
        control={control}
        name="value"
        type="number"
        fullWidth
        label={formatMessage({ id: `addActivity.${watch('discipline')}` })}
        rules={[
          requiredValidation(),
          minValueValidation(1),
          maxValueValidation(maxPossibleValuesMap[watch('discipline')]),
        ]}
      />
      {watch('discipline') === Discipline.WALKING && (
        <InputField
          control={control}
          name="elevation"
          type="number"
          fullWidth
          label={formatMessage({ id: `addActivity.elevation` })}
          rules={[minValueValidation(0), maxValueValidation(maxPossibleValuesMap.elevation)]}
        />
      )}
      {watch('discipline') === Discipline.OTHER && (
        <InputField
          control={control}
          name="description"
          type="text"
          fullWidth
          label={formatMessage({ id: 'addActivity.description' })}
          rules={[requiredValidation(), maxLengthValidation(30)]}
        />
      )}
      <Button sx={styles.button} size="large" isLoading={isLoading}>
        {formatMessage({ id: 'addActivity.button' })}
      </Button>
      {error !== 'null' && error !== '' && <Typography color="error">{formatMessage({ id: 'error' })}</Typography>}
    </Box>
  );
};
