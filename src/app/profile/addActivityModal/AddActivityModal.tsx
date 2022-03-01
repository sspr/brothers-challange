import { Box, Modal, Typography } from '@mui/material';

import { useLocale } from 'hooks';
import { styles } from './AddActivityModal.styles';
import { AddActivityModalProps } from './AddActivityModal.types';

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
        <Typography variant="h6">{formatMessage({ id: 'profile.addActivity' })}</Typography>
        <Typography sx={{ mt: 2 }}>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</Typography>
      </Box>
    </Modal>
  );
};
