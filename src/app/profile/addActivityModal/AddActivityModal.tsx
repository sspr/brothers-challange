import { Box, Modal, Typography } from '@mui/material';

import { AddActivityModalProps } from './AddActivityModal.types';

export const AddActivityModal = ({ isOpened, onModalClose }: AddActivityModalProps) => {
  return (
    <Modal
      open={isOpened}
      onClose={onModalClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Text in a modal
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
        </Typography>
      </Box>
    </Modal>
  );
};
