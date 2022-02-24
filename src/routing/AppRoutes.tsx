import { Route, Routes } from 'react-router-dom';

import { DashboardContainer } from 'app/dashboard/DashboardContainer';
import { AppRoute } from './AppRoute.enum';
import { PageNotFound } from 'ui';
import { useLocale } from 'hooks';
import { LoginContainer } from 'app/login/LoginContainer';

export const AppRoutes = () => {
  const { formatMessage } = useLocale();

  return (
    <Routes>
      <Route path={AppRoute.home} element={<DashboardContainer />} />
      <Route path={AppRoute.login} element={<LoginContainer />} />
      <Route
        path="*"
        element={<PageNotFound linkTarget={AppRoute.home} linkText={formatMessage({ id: 'pageNotFound.homepage' })} />}
      />
    </Routes>
  );
};
