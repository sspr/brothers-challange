import { Action } from '../../types';
import { LoginPayload } from './auth.types';

export const loginAction = (values: LoginPayload): Action => ({
  method: 'POST',
  url: '/auth',
  data: values,
});

export const checkIsLoggedInAction = (): Action => ({
  method: 'GET',
  url: '/auth',
});
