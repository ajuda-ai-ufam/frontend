import { renderHook } from '@testing-library/react';
import * as Navigation from 'react-router-dom';
import { act } from 'react-test-renderer';
import useConfirmedEmail from '../../../../screens/codeVerification/hooks/useConfirmedEmail';
import { SCREENS } from '../../../../utils/screens';

jest.mock('react-router-dom');
const NavigationMock = Navigation as jest.Mocked<typeof Navigation>;

describe('Test confirmed e-mail hook', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    NavigationMock.useNavigate.mockReturnValue(navigateMock);
  });

  it('should return initial state', () => {
    const { result } = renderHook(() => useConfirmedEmail());

    expect(result.current.handleGoToLoginClick).not.toBeUndefined();
  });

  it('should navigate to login due to handleGoToLoginClick call', async () => {
    const { result } = renderHook(() => useConfirmedEmail());

    await act(() => {
      result.current.handleGoToLoginClick();
    });

    expect(navigateMock).toBeCalledWith(SCREENS.LOGIN);
  });
});
