import { Route, Routes } from 'react-router-dom';

import { DashboardContainer } from 'app/dashboard/DashboardContainer';
import { Login } from 'app/login/Login';
import { AppRoute } from './AppRoute.enum';
import { PageNotFound } from 'ui';
import { useLocale } from 'hooks';
import { ProfileContainer } from 'app/profile/ProfileContainer';

export const AppRoutes = () => {
  const { formatMessage } = useLocale();

  return (
    <Routes>
      <Route path={AppRoute.HOME} element={<DashboardContainer />} />
      <Route path={AppRoute.LOGIN} element={<Login />} />
      {[AppRoute.PROFILE1, AppRoute.PROFILE2].map((route) => (
        <Route key={route} path={encodeURIComponent(route)} element={<ProfileContainer />} />
      ))}
      <Route
        path="*"
        element={<PageNotFound linkTarget={AppRoute.HOME} linkText={formatMessage({ id: 'pageNotFound.homepage' })} />}
      />
    </Routes>
  );
};
