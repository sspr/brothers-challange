import { Box, Modal, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { focusManager } from 'react-query';

import { useLocale, useSnackbar } from 'hooks';
import { styles } from './AddActivityModal.styles';
import { AddActivityModalProps } from './AddActivityModal.types';
import { AddActivityFormContainer } from './addActivityForm/AddActivityFormContainer';

export const AddActivityModal = ({ isOpened, onModalClose, name }: AddActivityModalProps) => {
  const [shouldCloseModal, setShouldCloseModal] = useState(false);
  const { formatMessage } = useLocale();
  const { showSnackbar } = useSnackbar();

  useEffect(() => {
    if (shouldCloseModal) {
      showSnackbar(formatMessage({ id: 'addActivity.success' }));
      onModalClose();
      setShouldCloseModal(false);
      focusManager.setFocused(true);
    }
  }, [shouldCloseModal]);

  return (
    <Modal open={isOpened} onClose={onModalClose} aria-labelledby="modal-add-activity">
      <Box sx={styles.modal}>
        <Typography variant="h6" sx={styles.header}>
          {formatMessage({ id: 'profile.addActivity' })}
        </Typography>
        <AddActivityFormContainer name={name} onFormSubmission={() => setShouldCloseModal((prevState) => !prevState)} />
      </Box>
    </Modal>
  );
};
