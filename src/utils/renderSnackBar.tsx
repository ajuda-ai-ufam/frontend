import { useSnackbar } from 'notistack';

export const useSnackBar = () => {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const showErrorSnackBar = (error: string) => {
    enqueueSnackbar(error, { variant: 'error' });
  };

  const showSuccessSnackBar = (msg: string) => {
    enqueueSnackbar(msg, { variant: 'success' });
  };

  const showInfoSnackBar = (msg: string) => {
    enqueueSnackbar(msg, { variant: 'info' });
  };

  const showDefaultSnackBar = (msg: string) => {
    enqueueSnackbar(msg);
  };

  const handleClose = () => {
    closeSnackbar();
  };

  return {
    showDefaultSnackBar,
    showErrorSnackBar,
    showInfoSnackBar,
    showSuccessSnackBar,
    handleClose,
  };
};
