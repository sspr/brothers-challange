import { Box, Modal, Typography } from '@mui/material';

import { useLocale } from 'hooks';
import { styles } from './AddActivityModal.styles';
import { AddActivityModalProps } from './AddActivityModal.types';
import { AddActivityForm } from './addActivityForm/AddActivityForm';

export const AddActivityModal = ({ isOpened, onModalClose }: AddActivityModalProps) => {
  const { formatMessage } = useLocale();

  return (
    <Modal
      open={isOpened}
      onClose={onModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={styles.modal}>
        <Typography variant="h6" sx={styles.header}>
          {formatMessage({ id: 'profile.addActivity' })}
        </Typography>
        <AddActivityForm onSubmit={(data) => console.log(data)} />
      </Box>
    </Modal>
  );
};
