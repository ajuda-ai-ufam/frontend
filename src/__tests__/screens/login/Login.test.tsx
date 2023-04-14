import renderer, { act } from 'react-test-renderer';
import Login from '../../../screens/login';
import * as useLogin from '../../../screens/login/hooks/useLogin';
import AppProvider from '../../../utils/AppProvider';
import testId from '../../../utils/testId';
import {
  useLoginDefaultMockReturn,
  useLogindInvalidMockReturn,
  useLoginInvalidEmailMockReturn,
  useLoginInvalidPasswordMockReturn,
  useLoginLoadingMockReturn,
  useLoginShowPasswordMockReturn,
} from './__mocks__/useLogin.mock';

jest.mock('../../../screens/login/hooks/useLogin');
const useLoginMock = useLogin as jest.Mocked<typeof useLogin>;

const renderScreen = () =>
  renderer.create(
    <AppProvider>
      <Login />
    </AppProvider>
  );

describe('Test Login screen', () => {
  describe('snapshot tests', () => {
    it('should render screen', () => {
      useLoginMock.default.mockReturnValue(useLoginDefaultMockReturn);

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });

    it('should render screen with loading login', () => {
      useLoginMock.default.mockReturnValue(useLoginLoadingMockReturn);

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });

    it('should render screen with invalid e-mail', () => {
      useLoginMock.default.mockReturnValue(useLoginInvalidEmailMockReturn);

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });

    it('should render screen with invalid password', () => {
      useLoginMock.default.mockReturnValue(useLoginInvalidPasswordMockReturn);

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });

    it('should render screen with password shown', () => {
      useLoginMock.default.mockReturnValue(useLoginShowPasswordMockReturn);

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });

    it('should render screen with invalid login', () => {
      useLoginMock.default.mockReturnValue(useLogindInvalidMockReturn);

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });
  });

  describe('unit tests', () => {
    beforeAll(() => {
      useLoginMock.default.mockReturnValue(useLoginDefaultMockReturn);
    });

    it('should click login', () => {
      const screen = renderScreen();
      const loginForm = screen.root.findByProps({ id: testId.login.form });
      expect(loginForm).not.toBeUndefined();

      act(() => {
        loginForm.props.onSubmit();
      });

      expect(useLoginDefaultMockReturn.handleLoginClick).toBeCalled();
    });

    it('should click show password', () => {
      const screen = renderScreen();
      const showPasswordButton = screen.root.findByProps({
        id: testId.login.showPasswordButton,
      });
      expect(showPasswordButton).not.toBeUndefined();

      act(() => {
        showPasswordButton.props.onClick();
      });

      expect(useLoginDefaultMockReturn.handleClickShowPassword).toBeCalled();
    });

    it('should click register button', () => {
      const screen = renderScreen();
      const registerButton = screen.root.findByProps({
        id: testId.login.registerButton,
      });
      expect(registerButton).not.toBeUndefined();

      act(() => {
        registerButton.props.onClick();
      });

      expect(useLoginDefaultMockReturn.handleRegisterClick).toBeCalled();
    });
  });
});
