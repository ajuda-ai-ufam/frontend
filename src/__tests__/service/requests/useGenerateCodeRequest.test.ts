import { renderHook } from '@testing-library/react';
import mockAxios from 'jest-mock-axios';
import { act } from 'react-test-renderer';
import useGenerateCodeRequest from '../../../service/requests/useGenerateCodeRequest';
import { CodeTypeEnum } from '../../../utils/constants';
import { useGenerateCodeRequestErrorResponseMock } from './__mocks__/useGenerateCodeRequest.mock';

const GENERATE_CODE_URL = '/code/generate';

describe('Test generate code request hook', () => {
  beforeEach(() => {
    mockAxios.reset();
    jest.resetAllMocks();
    mockAxios.post.mockResolvedValue({});
  });

  it('should return initial state', () => {
    const { result } = renderHook(() => useGenerateCodeRequest());

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeFalsy();
    expect(result.current.error).toBeUndefined();
    expect(result.current.generateCode).not.toBeUndefined();
  });

  it('should load while code is generated', async () => {
    const { result } = renderHook(() => useGenerateCodeRequest());
    const email = 'usuario@icomp.ufam.edu.br';

    act(() => {
      result.current.generateCode(email, CodeTypeEnum.EMAIL);
    });

    expect(result.current.isLoading).toBeTruthy();
    expect(result.current.isSuccess).toBeFalsy();
  });

  it('should generate code successfuly', async () => {
    const { result } = renderHook(() => useGenerateCodeRequest());
    const email = 'usuario@icomp.ufam.edu.br';

    await act(() => {
      result.current.generateCode(email, CodeTypeEnum.EMAIL);
    });

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeTruthy();
    expect(result.current.error).toBeUndefined();
    expect(mockAxios.post).toBeCalledWith(GENERATE_CODE_URL, {
      email,
      type_code: CodeTypeEnum.EMAIL,
    });
  });

  it('should return error in generate code', async () => {
    mockAxios.post.mockRejectedValue(useGenerateCodeRequestErrorResponseMock);
    const { result } = renderHook(() => useGenerateCodeRequest());
    const email = 'usuario@icomp.ufam.edu.br';

    await act(() => {
      result.current.generateCode(email, CodeTypeEnum.EMAIL);
    });

    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isSuccess).toBeFalsy();
    expect(result.current.error).toBe(
      useGenerateCodeRequestErrorResponseMock.response.data.message
    );
    expect(mockAxios.post).toBeCalledWith(GENERATE_CODE_URL, {
      email,
      type_code: CodeTypeEnum.EMAIL,
    });
  });
});
