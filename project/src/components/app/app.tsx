import MainPage from '../pages/main/main';
import {Route, Routes} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../types/types';
import Login from '../pages/login/login';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-router/history-router';
import Room from '../pages/room/room';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../pages/favorites/favorites';
import NotFoundScreen from '../not-found-screen/not-found-screen';

function App(): JSX.Element {
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.LOGIN}
          element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NO_AUTH} page={AppRoute.ROOT}>
              <Login />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.FAVORITES}
          element={
            <PrivateRoute>
              <Favorites />
            </PrivateRoute>
          }
        />
        <Route
          path={AppRoute.ROOM}
          element={<Room />}
        >
          <Route
            path=':id'
            element={<Room />}
          />
        </Route>
        <Route
          path="*"
          element={<NotFoundScreen />}
        />
      </Routes>
    </HistoryRouter>
  );
}

export default App;
