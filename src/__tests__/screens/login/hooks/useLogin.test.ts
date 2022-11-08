import { renderHook } from '@testing-library/react';
import React from 'react';
import * as Navigation from 'react-router-dom';
import { act } from 'react-test-renderer';
import useLogin from '../../../../screens/login/hooks/useLogin';
import * as useLoginRequest from '../../../../service/requests/useLoginRequest';
import { SCREENS } from '../../../../utils/screens';
import { useLoginRequestDefaultMockReturn } from '../../../service/requests/__mocks__/useLoginRequest.mock';

jest.mock('react-router-dom');
const NavigationMock = Navigation as jest.Mocked<typeof Navigation>;

jest.mock('../../../../service/requests/useLoginRequest');
const useLoginRequestMock = useLoginRequest as jest.Mocked<
  typeof useLoginRequest
>;

describe('Test login hook', () => {
  const navigateMock = jest.fn();

  beforeEach(() => {
    jest.resetAllMocks();
    NavigationMock.useNavigate.mockReturnValue(navigateMock);
    useLoginRequestMock.default.mockReturnValue(
      useLoginRequestDefaultMockReturn
    );
  });

  it('should return the initial state', () => {
    const { result } = renderHook(() => useLogin());

    expect(document.title).toBe('Entrar');
    expect(result.current.email).toBe('');
    expect(result.current.password).toBe('');
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.showPassword).toBeFalsy();
    expect(result.current.isInvalidEmail).toBeFalsy();
    expect(result.current.isInvalidPassword).toBeFalsy();
    expect(result.current.error).toBeUndefined();
  });

  it('should navigate to register screen with register click', () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.handleRegisterClick();
    });

    expect(navigateMock).toBeCalledWith(SCREENS.REGISTER);
  });

  it('should change password when user types something', () => {
    const { result } = renderHook(() => useLogin());
    const newPassword = 'newpass';
    const event = {
      target: {
        value: newPassword,
      },
    };

    act(() => {
      result.current.handlePasswordChange(
        event as React.ChangeEvent<HTMLInputElement>
      );
    });

    expect(result.current.password).toBe(newPassword);
  });

  it('should change email when user types something', () => {
    const { result } = renderHook(() => useLogin());
    const newEmail = 'newemail';
    const event = {
      target: {
        value: newEmail,
      },
    };

    act(() => {
      result.current.handleEmailChange(
        event as React.ChangeEvent<HTMLInputElement>
      );
    });

    expect(result.current.email).toBe(newEmail);
  });

  it('should now show password by default', () => {
    const { result } = renderHook(() => useLogin());
    const event = {
      preventDefault: jest.fn() as () => undefined,
    };

    act(() => {
      result.current.handleMouseDownPassword(
        event as React.MouseEvent<HTMLButtonElement>
      );
    });

    expect(event.preventDefault).toBeCalled();
  });

  it('should show and hide password', () => {
    const { result } = renderHook(() => useLogin());

    act(() => {
      result.current.handleClickShowPassword();
    });

    expect(result.current.showPassword).toBeTruthy();

    act(() => {
      result.current.handleClickShowPassword();
    });

    expect(result.current.showPassword).toBeFalsy();
  });

  it('should login successfuly', () => {
    const { result } = renderHook(() => useLogin());
    const event = {
      preventDefault: jest.fn() as () => undefined,
    };
    const email = 'email@icomp.ufam.edu.br';
    const password = '12345678';

    act(() => {
      result.current.handleEmailChange({
        target: {
          value: email,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handlePasswordChange({
        target: {
          value: password,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleLoginClick(
        event as React.SyntheticEvent<EventTarget>
      );
    });

    expect(result.current.isInvalidEmail).toBeFalsy();
    expect(result.current.isInvalidPassword).toBeFalsy();
    expect(event.preventDefault).toBeCalled();
    expect(useLoginRequestDefaultMockReturn.login).toBeCalledWith(
      email,
      password
    );
  });

  it('should not login due to invalid e-mail', () => {
    const { result } = renderHook(() => useLogin());
    const event = {
      preventDefault: jest.fn() as () => undefined,
    };
    const email = 'email';

    act(() => {
      result.current.handleEmailChange({
        target: {
          value: email,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleLoginClick(
        event as React.SyntheticEvent<EventTarget>
      );
    });

    expect(result.current.isInvalidEmail).toBeTruthy();
    expect(result.current.isInvalidPassword).toBeFalsy();
    expect(event.preventDefault).toBeCalled();
    expect(useLoginRequestDefaultMockReturn.login).not.toBeCalled();
  });

  it('should not login due to empty e-mail', () => {
    const { result } = renderHook(() => useLogin());
    const event = {
      preventDefault: jest.fn() as () => undefined,
    };

    act(() => {
      result.current.handleLoginClick(
        event as React.SyntheticEvent<EventTarget>
      );
    });

    expect(result.current.isInvalidEmail).toBeTruthy();
    expect(result.current.isInvalidPassword).toBeFalsy();
    expect(event.preventDefault).toBeCalled();
    expect(useLoginRequestDefaultMockReturn.login).not.toBeCalled();
  });

  it('should not login due to empty password', () => {
    const { result } = renderHook(() => useLogin());
    const event = {
      preventDefault: jest.fn() as () => undefined,
    };
    const email = 'email@icomp.ufam.edu.br';

    act(() => {
      result.current.handleEmailChange({
        target: {
          value: email,
        },
      } as React.ChangeEvent<HTMLInputElement>);
    });

    act(() => {
      result.current.handleLoginClick(
        event as React.SyntheticEvent<EventTarget>
      );
    });

    expect(result.current.isInvalidEmail).toBeFalsy();
    expect(result.current.isInvalidPassword).toBeTruthy();
    expect(event.preventDefault).toBeCalled();
    expect(useLoginRequestDefaultMockReturn.login).not.toBeCalled();
  });
});
