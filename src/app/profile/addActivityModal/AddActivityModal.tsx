import { Box, Modal, Typography } from '@mui/material';
import { focusManager } from 'react-query';

import { useLocale, useSnackbar } from 'hooks';
import { styles } from './AddActivityModal.styles';
import { AddActivityModalProps } from './AddActivityModal.types';
import { AddActivityFormContainer } from './addActivityForm/AddActivityFormContainer';

export const AddActivityModal = ({ isOpened, onModalClose, name }: AddActivityModalProps) => {
  const { formatMessage } = useLocale();
  const { showSnackbar } = useSnackbar();

  const handleSave = () => {
    showSnackbar(formatMessage({ id: 'addActivity.success' }));
    onModalClose();
    focusManager.setFocused(true);
  };

  return (
    <Modal open={isOpened} onClose={onModalClose} aria-labelledby="modal-add-activity">
      <Box sx={styles.modal}>
        <Typography variant="h6" sx={styles.header}>
          {formatMessage({ id: 'profile.addActivity' })}
        </Typography>
        <AddActivityFormContainer name={name} onSave={handleSave} />
      </Box>
    </Modal>
  );
};
