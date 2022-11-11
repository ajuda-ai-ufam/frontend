import renderer, { act } from 'react-test-renderer';
import CodeVerificationScreen from '../../../screens/codeVerification';
import * as useCodeVerification from '../../../screens/codeVerification/hooks/useCodeVerification';
import * as useConfirmedEmail from '../../../screens/codeVerification/hooks/useConfirmedEmail';
import AppProvider from '../../../utils/AppProvider';
import testId from '../../../utils/testId';
import {
  useCodeVerificationDefaultMockReturn,
  useCodeVerificationGenerateEnabledMockReturn,
  useCodeVerificationInvalidCodeMockReturn,
  useCodeVerificationLoadingGenerateMockReturn,
  useCodeVerificationLoadingVerifyMockReturn,
  useCodeVerificationSuccessMockReturn,
} from './__mocks__/useCodeVerification.mock';
import { useConfirmedEmailDefaultMockReturn } from './__mocks__/useConfirmedEmail.mock';

jest.mock('../../../screens/codeVerification/hooks/useCodeVerification');
const useCodeVerificationMock = useCodeVerification as jest.Mocked<
  typeof useCodeVerification
>;

jest.mock('../../../screens/codeVerification/hooks/useConfirmedEmail');
const useConfirmedEmailMock = useConfirmedEmail as jest.Mocked<
  typeof useConfirmedEmail
>;

const renderScreen = () =>
  renderer.create(
    <AppProvider>
      <CodeVerificationScreen />
    </AppProvider>
  );

describe('Test Code Verification screen', () => {
  describe('snapshot tests', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      useConfirmedEmailMock.default.mockReturnValue(
        useConfirmedEmailDefaultMockReturn
      );
    });

    it('should render screen', () => {
      useCodeVerificationMock.default.mockReturnValue(
        useCodeVerificationDefaultMockReturn
      );

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });

    it('should render invalid code error', () => {
      useCodeVerificationMock.default.mockReturnValue(
        useCodeVerificationInvalidCodeMockReturn
      );

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });

    it('should render loading verify', () => {
      useCodeVerificationMock.default.mockReturnValue(
        useCodeVerificationLoadingVerifyMockReturn
      );

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });

    it('should load code generation', () => {
      useCodeVerificationMock.default.mockReturnValue(
        useCodeVerificationLoadingGenerateMockReturn
      );

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });

    it('should render code verified screen', () => {
      useCodeVerificationMock.default.mockReturnValue(
        useCodeVerificationSuccessMockReturn
      );

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });

    it('should render code generate button enabled', () => {
      useCodeVerificationMock.default.mockReturnValue(
        useCodeVerificationGenerateEnabledMockReturn
      );

      const screen = renderScreen();

      expect(screen).toMatchSnapshot();
    });
  });

  describe('unit tests', () => {
    beforeEach(() => {
      jest.resetAllMocks();
      useCodeVerificationMock.default.mockReturnValue(
        useCodeVerificationDefaultMockReturn
      );
      useConfirmedEmailMock.default.mockReturnValue(
        useConfirmedEmailDefaultMockReturn
      );
    });

    it('should type a new code', () => {
      const screen = renderScreen();
      const code = '123456';
      const event = {
        target: {
          value: code,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      const codeInput = screen.root.findByProps({
        id: testId.codeVerification.codeInput,
      });
      expect(codeInput).not.toBeUndefined();

      act(() => {
        codeInput.props.onChange(event);
      });

      expect(
        useCodeVerificationDefaultMockReturn.handleCodeChange
      ).toBeCalledWith(event);
    });

    it('should click verify code', () => {
      const screen = renderScreen();
      const codeForm = screen.root.findByProps({
        id: testId.codeVerification.codeForm,
      });
      expect(codeForm).not.toBeUndefined();

      act(() => {
        codeForm.props.onSubmit();
      });

      expect(useCodeVerificationDefaultMockReturn.handleSubmit).toBeCalled();
    });

    it('should click resend code', () => {
      const screen = renderScreen();
      const resendCodeButton = screen.root.findByProps({
        id: testId.codeVerification.resendCodeButton,
      });
      expect(resendCodeButton).not.toBeUndefined();

      act(() => {
        resendCodeButton.props.onClick();
      });

      expect(
        useCodeVerificationDefaultMockReturn.handleResendCodeClick
      ).toBeCalled();
    });

    it('should click go to login button', () => {
      useCodeVerificationMock.default.mockReturnValue(
        useCodeVerificationSuccessMockReturn
      );

      const screen = renderScreen();
      const loginButton = screen.root.findByProps({
        id: testId.codeVerification.loginButton,
      });
      expect(loginButton).not.toBeUndefined();

      act(() => {
        loginButton.props.onClick();
      });

      expect(
        useConfirmedEmailDefaultMockReturn.handleGoToLoginClick
      ).toBeCalled();
    });
  });
});
