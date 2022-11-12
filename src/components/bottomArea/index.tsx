import Copyright from '../copyright';
import { ContainerBottom, PatternBox } from './styles';
import LoginPatternBottomEnd from '../../assets/login-pattern-be-small.svg';
import LoginPatternBottomStart from '../../assets/login-pattern-bs-small.svg';

const BottomArea = () => {
  return (
    <ContainerBottom>
      <PatternBox>
        <img src={LoginPatternBottomEnd} />
      </PatternBox>

      <Copyright mb={3} />

      <PatternBox>
        <img src={LoginPatternBottomStart} />
      </PatternBox>
    </ContainerBottom>
  );
};

export default BottomArea;
