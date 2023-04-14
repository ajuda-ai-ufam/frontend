import { renderHook } from '@testing-library/react';
import React from 'react';
import * as Navigation from 'react-router-dom';
import { act } from 'react-test-renderer';
import useCodeVerification from '../../../../screens/codeVerification/hooks/useCodeVerification';
import * as useGenerateCodeRequest from '../../../../service/requests/useGenerateCodeRequest';
import * as useVerifyCodeRequest from '../../../../service/requests/useVerifyCodeRequest';
import { CodeTypeEnum } from '../../../../utils/constants';
import { useGenerateCodeRequestDefaultMockReturn } from '../../../service/requests/__mocks__/useGenerateCodeRequest.mock';
import { useVerifyCodeRequestDefaultMockReturn } from '../../../service/requests/__mocks__/useVerifyCodeRequest.mock';

jest.mock('react-router-dom');
const NavigationMock = Navigation as jest.Mocked<typeof Navigation>;

jest.mock('../../../../service/requests/useVerifyCodeRequest');
const useVerifyCodeRequestMock = useVerifyCodeRequest as jest.Mocked<
  typeof useVerifyCodeRequest
>;

jest.mock('../../../../service/requests/useGenerateCodeRequest');
const useGenerateCodeRequestMock = useGenerateCodeRequest as jest.Mocked<
  typeof useGenerateCodeRequest
>;

describe('Test code verification hook', () => {
  const email = 'usuario@icomp.ufam.edu.br';
  const locationMock = {
    state: { email },
    key: '',
    pathname: '',
    search: '',
    hash: '',
  };

  beforeEach(() => {
    jest.resetAllMocks();
    NavigationMock.useLocation.mockReturnValue(locationMock);
    useVerifyCodeRequestMock.default.mockReturnValue(
      useVerifyCodeRequestDefaultMockReturn
    );
    useGenerateCodeRequestMock.default.mockReturnValue(
      useGenerateCodeRequestDefaultMockReturn
    );
  });

  it('should return initial state', () => {
    const { result } = renderHook(() => useCodeVerification());

    expect(result.current.code).toBe('');
    expect(result.current.errorMessage).toBe('');
    expect(result.current.timeToResendCode).toBe(60);
    expect(result.current.isGenerateCodeLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeFalsy();
    expect(result.current.isVerifyCodeLoading).toBeFalsy();
    expect(result.current.handleCodeChange).not.toBeUndefined();
    expect(result.current.handleResendCodeClick).not.toBeUndefined();
    expect(result.current.handleSubmit).not.toBeUndefined();
  });

  it('should send code in initialization', () => {
    const { result } = renderHook(() => useCodeVerification());

    expect(result.current.timeToResendCode).toBe(60);
    expect(document.title).toBe('Verificar código');
    expect(useGenerateCodeRequestDefaultMockReturn.generateCode).toBeCalledWith(
      email,
      CodeTypeEnum.EMAIL
    );
  });

  it('should update code due to handleCodeChange call', () => {
    const { result } = renderHook(() => useCodeVerification());
    const code = '123456';
    const event = {
      target: {
        value: code,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCodeChange(event);
    });

    expect(result.current.code).toBe(code);
  });

  it('should resend code due to handleResendCodeClick call', () => {
    const { result } = renderHook(() => useCodeVerification());

    act(() => {
      result.current.handleResendCodeClick();
    });

    expect(result.current.timeToResendCode).toBe(60);
    expect(result.current.errorMessage).toBe('');
    expect(useGenerateCodeRequestDefaultMockReturn.generateCode).toBeCalledWith(
      email,
      CodeTypeEnum.EMAIL
    );
  });

  it('should verify code successfuly', () => {
    const { result } = renderHook(() => useCodeVerification());
    const code = '123456';
    const submitEvent = {
      preventDefault: jest.fn() as () => undefined,
    } as React.SyntheticEvent<EventTarget>;
    const changeEvent = {
      target: {
        value: code,
      },
    } as React.ChangeEvent<HTMLInputElement>;

    act(() => {
      result.current.handleCodeChange(changeEvent);
    });

    act(() => {
      result.current.handleSubmit(submitEvent);
    });

    expect(result.current.timeToResendCode).toBe(60);
    expect(result.current.errorMessage).toBe('');
    expect(useVerifyCodeRequestDefaultMockReturn.verifyCode).toBeCalledWith(
      code,
      email,
      CodeTypeEnum.EMAIL
    );
    expect(submitEvent.preventDefault).toBeCalled();
  });

  it('should not verify code due to an empty e-mail', async () => {
    NavigationMock.useLocation.mockReturnValue({
      ...locationMock,
      state: { email: '' },
    });

    const { result } = renderHook(() => useCodeVerification());
    const event = {
      preventDefault: jest.fn() as () => undefined,
    } as React.SyntheticEvent<EventTarget>;

    await act(() => {
      result.current.handleSubmit(event);
    });

    expect(result.current.errorMessage).toBe(
      'E-mail inválido. Volte ao login e refaça o processo.'
    );
    expect(useVerifyCodeRequestDefaultMockReturn.verifyCode).not.toBeCalled();
    expect(event.preventDefault).toBeCalled();
  });

  it('should not verify code due to an invalid e-mail', async () => {
    NavigationMock.useLocation.mockReturnValue({
      ...locationMock,
      state: { email: 'invalid' },
    });

    const { result } = renderHook(() => useCodeVerification());
    const event = {
      preventDefault: jest.fn() as () => undefined,
    } as React.SyntheticEvent<EventTarget>;

    await act(() => {
      result.current.handleSubmit(event);
    });

    expect(result.current.errorMessage).toBe(
      'E-mail inválido. Volte ao login e refaça o processo.'
    );
    expect(useVerifyCodeRequestDefaultMockReturn.verifyCode).not.toBeCalled();
    expect(event.preventDefault).toBeCalled();
  });

  it('should not verify code due to an empty code', async () => {
    const { result } = renderHook(() => useCodeVerification());
    const event = {
      preventDefault: jest.fn() as () => undefined,
    } as React.SyntheticEvent<EventTarget>;

    await act(() => {
      result.current.handleSubmit(event);
    });

    expect(result.current.errorMessage).toBe('Informe um código.');
    expect(useVerifyCodeRequestDefaultMockReturn.verifyCode).not.toBeCalled();
    expect(event.preventDefault).toBeCalled();
  });
});
