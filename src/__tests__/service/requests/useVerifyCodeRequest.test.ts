import { renderHook } from '@testing-library/react';
import mockAxios from 'jest-mock-axios';
import { act } from 'react-test-renderer';
import useVerifyCodeRequest from '../../../service/requests/useVerifyCodeRequest';
import { CodeTypeEnum } from '../../../utils/constants';
import { useVerifyCodeRequestErrorResponseMock } from './__mocks__/useVerifyCodeRequest.mock';

const VERIFY_CODE_URL = '/code/verify';

describe('Test verify code request hook', () => {
  beforeEach(() => {
    mockAxios.reset();
    jest.resetAllMocks();
    mockAxios.post.mockResolvedValue({});
  });

  it('should return initial state', () => {
    const { result } = renderHook(() => useVerifyCodeRequest());

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeFalsy();
    expect(result.current.error).toBeUndefined();
    expect(result.current.verifyCode).not.toBeUndefined();
  });

  it('should load while code is verified', async () => {
    const { result } = renderHook(() => useVerifyCodeRequest());
    const code = '123456';
    const email = 'usuario@icomp.ufam.edu.br';

    act(() => {
      result.current.verifyCode(code, email, CodeTypeEnum.EMAIL);
    });

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.isSuccess).toBeFalsy();
  });

  it('should verify code successfuly', async () => {
    const { result } = renderHook(() => useVerifyCodeRequest());
    const code = '123456';
    const email = 'usuario@icomp.ufam.edu.br';

    await act(() => {
      result.current.verifyCode(code, email, CodeTypeEnum.EMAIL);
    });

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    expect(mockAxios.post).toBeCalledWith(VERIFY_CODE_URL, {
      code,
      email,
      type_code: CodeTypeEnum.EMAIL,
    });
  });

  it('should return error in verify code', async () => {
    mockAxios.post.mockRejectedValue(useVerifyCodeRequestErrorResponseMock);
    const { result } = renderHook(() => useVerifyCodeRequest());
    const code = '123456';
    const email = 'usuario@icomp.ufam.edu.br';

    await act(() => {
      result.current.verifyCode(code, email, CodeTypeEnum.EMAIL);
    });

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeFalsy();
    expect(result.current.error).toBe(
      useVerifyCodeRequestErrorResponseMock.response.data.message
    );
    expect(mockAxios.post).toBeCalledWith(VERIFY_CODE_URL, {
      code,
      email,
      type_code: CodeTypeEnum.EMAIL,
    });
  });
});
