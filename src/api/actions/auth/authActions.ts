import { Action } from '../../types';
import { LoginPayload } from './auth.types';

export const createLoginAction = (values: LoginPayload): Action => ({
  method: 'POST',
  url: '/auth',
  data: values,
});

export const createCheckIsLoggedInAction = (): Action => ({
  method: 'GET',
  url: '/auth',
});
