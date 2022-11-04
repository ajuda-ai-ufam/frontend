import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

type CopyrightProps = {
  mt?: number;
  mb?: number;
};

const Copyright = ({ mt, mb }: CopyrightProps) => {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      sx={{ mt: mt, mb: mb }}
    >
      {'Super Monitoria©. '}
      <Link color="inherit" href="https://mui.com/">
        Todos os Direitos Reservados
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
};

export default Copyright;
