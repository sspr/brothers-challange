import { UseMutationResult } from 'react-query';

import { LoginPayload } from 'api/types';

export type LoginProps = Pick<
  UseMutationResult<unknown, unknown, LoginPayload, unknown>,
  'mutate' | 'data' | 'isLoading' | 'isError'
>;
