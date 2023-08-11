import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
import LoginPatternBottomEnd from '../../assets/login-pattern-be-small.svg';
import LoginPatternBottomStart from '../../assets/login-pattern-bs-small.svg';
import { SCREENS } from '../../utils/screens';
import theme from '../../utils/theme';
import SuperMonitoria from '../superMonitoria';
import { ContainerBottom, ContainerText, PatternBox } from './styles';

const BottomArea = () => {
  return (
    <ContainerBottom>
      <PatternBox>
        <img src={LoginPatternBottomEnd} />
      </PatternBox>

      <ContainerText>
        <SuperMonitoria mb={3} />

        <NavLink
          style={{
            textDecorationColor: theme.palette.secondary.main,
            marginBottom: '24px',
          }}
          to={SCREENS.LANDING_PAGE}
        >
          <Typography variant="caption" color="text.secondary" align="center">
            Conheça nosso trabalho.
          </Typography>
        </NavLink>
      </ContainerText>

      <PatternBox>
        <img src={LoginPatternBottomStart} />
      </PatternBox>
    </ContainerBottom>
  );
};

export default BottomArea;
