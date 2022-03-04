import { Box, Modal, Typography } from '@mui/material';
import { useState } from 'react';

import { useLocale } from 'hooks';
import { styles } from './AddActivityModal.styles';
import { AddActivityModalProps } from './AddActivityModal.types';
import { AddActivityFormContainer } from './addActivityForm/AddActivityFormContainer';

export const AddActivityModal = ({ isOpened, onModalClose, name }: AddActivityModalProps) => {
  const { formatMessage } = useLocale();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());

  return (
    <Modal open={isOpened} onClose={onModalClose} aria-labelledby="modal-add-activity">
      <Box sx={styles.modal}>
        <Typography variant="h6" sx={styles.header}>
          {formatMessage({ id: 'profile.addActivity' })}
        </Typography>
        <AddActivityFormContainer name={name} currentMonth={currentMonth} setCurrentMonth={setCurrentMonth} />
      </Box>
    </Modal>
  );
};
