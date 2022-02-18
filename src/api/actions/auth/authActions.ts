import { Action } from '../../types';
import { CheckIsLoggedInPayload, LoginPayload } from './auth.types';

export const loginAction = (values: LoginPayload): Action => ({
  method: 'POST',
  url: '/auth',
  data: values,
});

export const checkIsLoggedInAction = (header: CheckIsLoggedInPayload): Action => ({
  method: 'GET',
  url: '/auth',
  headers: { Authorization: `Bearer ${header}` },
});
