import mockAxios from 'jest-mock-axios';
import { renderHook } from '@testing-library/react';
import useLoginRequest from '../../../service/requests/useLoginRequest';
import { act } from 'react-test-renderer';
import {
  useLoginRequestErrorResponseMock,
  useLoginRequestSuccessResponseMock,
} from './__mocks__/useLoginRequest.mock';
import * as useSaveToken from '../../../service/storage/saveToken';

jest.mock('../../../service/storage/saveToken');
const useSaveTokenMock = useSaveToken as jest.Mocked<typeof useSaveToken>;

const LOGIN_URL = '/auth/login';

describe('Test login request hook', () => {
  beforeEach(() => {
    mockAxios.reset();
    jest.resetAllMocks();
    mockAxios.post.mockResolvedValue(useLoginRequestSuccessResponseMock);
    useSaveTokenMock.default.mockReturnValue(undefined);
  });

  it('should return initial state', () => {
    const { result } = renderHook(() => useLoginRequest());

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeFalsy();
    expect(result.current.error).toBeUndefined();
    expect(result.current.login).not.toBeUndefined();
  });

  it('should load while login is made', async () => {
    const { result } = renderHook(() => useLoginRequest());
    const email = 'usuario@icomp.ufam.edu.br';
    const password = '123456789';

    act(() => {
      result.current.login(email, password);
    });

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.isSuccess).toBeFalsy();
  });

  it('should login successfuly', async () => {
    const { result } = renderHook(() => useLoginRequest());
    const email = 'usuario@icomp.ufam.edu.br';
    const password = '123456789';

    await act(() => {
      result.current.login(email, password);
    });

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    expect(mockAxios.post).toBeCalledWith(LOGIN_URL, { email, password });
    expect(useSaveTokenMock.default).toBeCalledWith(
      useLoginRequestSuccessResponseMock.data.access_token
    );
  });

  it('should return error in login', async () => {
    mockAxios.post.mockRejectedValue(useLoginRequestErrorResponseMock);
    const { result } = renderHook(() => useLoginRequest());
    const email = 'usuario@icomp.ufam.edu.br';
    const password = '123456789';

    await act(() => {
      result.current.login(email, password);
    });

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeFalsy();
    expect(result.current.error).toBe(
      useLoginRequestErrorResponseMock.response.data.message
    );
    expect(mockAxios.post).toBeCalledWith(LOGIN_URL, { email, password });
    expect(useSaveTokenMock.default).not.toBeCalled();
  });

  it('should reset error', async () => {
    const { result } = renderHook(() => useLoginRequest());
    mockAxios.post.mockRejectedValue(useLoginRequestErrorResponseMock);
    const email = 'usuario@icomp.ufam.edu.br';
    const password = '123456789';

    await act(() => {
      result.current.login(email, password);
    });

    expect(result.current.error).toBe(
      useLoginRequestErrorResponseMock.response.data.message
    );

    await act(() => {
      result.current.resetError();
    });

    expect(result.current.error).toBeUndefined();
  });
});
