import { useSnackbar } from 'notistack';

export const useSnackBar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showErrorSnackBar = (error: string) => {
    enqueueSnackbar(error, { variant: 'error' });
  };

  const showSuccessSnackBar = (msg: string) => {
    enqueueSnackbar(msg, { variant: 'success' });
  };

  const handleClose = () => {
    closeSnackbar();
  };

  return {
    showErrorSnackBar,
    showSuccessSnackBar,
    handleClose,
  };
};
