import { Box, Modal, Typography } from '@mui/material';

import { useLocale } from 'hooks';
import { styles } from './AddActivityModal.styles';
import { AddActivityModalProps } from './AddActivityModal.types';
import { AddActivityFormContainer } from './addActivityForm/AddActivityFormContainer';

export const AddActivityModal = ({ isOpened, onModalClose, name }: AddActivityModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal open={isOpened} onClose={onModalClose} aria-labelledby="modal-add-activity">
      <Box sx={styles.modal}>
        <Typography variant="h6" sx={styles.header}>
          {formatMessage({ id: 'profile.addActivity' })}
        </Typography>
        <AddActivityFormContainer name={name} onModalClose={onModalClose} />
      </Box>
    </Modal>
  );
};
