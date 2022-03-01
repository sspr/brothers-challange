import { Route, Routes } from 'react-router-dom';

import { DashboardContainer } from 'app/dashboard/DashboardContainer';
import { AppRoute } from './AppRoute.enum';
import { PageNotFound } from 'ui';
import { useLocale } from 'hooks';
import { LoginContainer } from 'app/login/LoginContainer';
import { ProfileContainer } from 'app/profile/ProfileContainer';

export const AppRoutes = () => {
  const { formatMessage } = useLocale();

  return (
    <Routes>
      <Route path={AppRoute.HOME} element={<DashboardContainer />} />
      <Route path={AppRoute.LOGIN} element={<LoginContainer />} />
      <Route path={`${AppRoute.PROFILE}/:name`} element={<ProfileContainer />} />

      <Route
        path="*"
        element={<PageNotFound linkTarget={AppRoute.HOME} linkText={formatMessage({ id: 'pageNotFound.homepage' })} />}
      />
    </Routes>
  );
};
