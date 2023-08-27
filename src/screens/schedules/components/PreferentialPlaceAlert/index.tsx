import { Alert } from '@mui/material';
import { TPreferentialPlaceProperties } from '../../hooks/types';

const PreferentialPlaceAlert = ({
  isWarning,
  message,
  preferentialPlace,
}: TPreferentialPlaceProperties) => (
  <Alert severity={isWarning ? 'warning' : 'success'}>
    {message} <strong>{preferentialPlace}</strong>
  </Alert>
);

export default PreferentialPlaceAlert;
