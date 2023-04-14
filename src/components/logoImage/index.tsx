import LoginLogo from '../../assets/login-logo.svg';
import LoginPatternBottomEnd from '../../assets/login-pattern-be.svg';
import LoginPatternBottomStart from '../../assets/login-pattern-bs.svg';
import LoginPatternUpEnd from '../../assets/login-pattern-ue.svg';
import LoginPatternUpStart from '../../assets/login-pattern-us.svg';
import { BottomPatternBox, Container, LogoBox, UpPatternBox } from './styles';

const LogoImage = () => (
  <Container>
    <UpPatternBox>
      <img src={LoginPatternUpStart} />
      <img src={LoginPatternUpEnd} />
    </UpPatternBox>

    <LogoBox>
      <img src={LoginLogo} alt="Super Monitoria" />
    </LogoBox>

    <BottomPatternBox>
      <img src={LoginPatternBottomStart} />
      <img src={LoginPatternBottomEnd} />
    </BottomPatternBox>
  </Container>
);

export default LogoImage;
