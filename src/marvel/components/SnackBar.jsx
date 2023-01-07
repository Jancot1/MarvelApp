import { forwardRef, useContext } from 'react';

import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import { SnackbarContext } from '../../context/SnackbarContext';

const Alert = forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const Snackbars = ({ type, message, isOpenSnack }) => {

  const { setIsOpenSnack } = useContext(SnackbarContext);

  const handleClose = () => {
    setIsOpenSnack(false);
  };

  return (
    <Stack spacing={2} sx={{ width: '100%' }}>
      <Snackbar open={isOpenSnack} autoHideDuration={1500} onClose={handleClose} anchorOrigin={{vertical: 'bottom', horizontal: 'center' }}>
        <Alert onClose={handleClose} severity={type} sx={{ width: '100%' }}>
          { message }
        </Alert>
      </Snackbar>
    </Stack>
  );
}