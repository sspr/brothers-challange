import { ReactNode } from 'react';

export type AuthenticatedProps = {
  shouldAuthenticate: boolean;
  children: ReactNode;
};
