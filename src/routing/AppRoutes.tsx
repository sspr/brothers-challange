import { Route, Routes } from 'react-router-dom';

import { DashboardContainer } from 'app/dashboard/DashboardContainer';
import { Login } from 'app/login/Login';
import { AppRoute } from './AppRoute.enum';
import { PageNotFound } from 'ui';
import { useLocale } from 'hooks';

export const AppRoutes = () => {
  const { formatMessage } = useLocale();

  return (
    <Routes>
      <Route path={AppRoute.home} element={<DashboardContainer />} />
      <Route path={AppRoute.login} element={<Login />} />
      <Route
        path="*"
        element={<PageNotFound linkTarget={AppRoute.home} linkText={formatMessage({ id: 'pageNotFound.homepage' })} />}
      />
    </Routes>
  );
};
