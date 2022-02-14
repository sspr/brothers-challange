import { Route, Routes } from 'react-router-dom';

import { DashboardContainer } from 'app/dashboard/DashboardContainer';
import { Login } from 'app/login/Login';
import { AppRoute } from './AppRoute.enum';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.home} element={<DashboardContainer />} />
    <Route path={AppRoute.login} element={<Login />} />
    <Route path={AppRoute.home} element={<DashboardContainer />} />
  </Routes>
);
