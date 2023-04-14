import Typography from '@mui/material/Typography';

type CopyrightProps = {
  mt?: number;
  mb?: number;
};

const SuperMonitoria = ({ mt, mb }: CopyrightProps) => {
  return (
    <Typography
      variant="caption"
      color="text.secondary"
      align="center"
      sx={{ mt: mt, mb: mb }}
    >
      {'Super Monitoria, '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default SuperMonitoria;
