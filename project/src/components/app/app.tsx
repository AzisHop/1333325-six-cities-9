import MainPage from '../pages/main/main';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../types/types';
import Login from '../pages/login/login';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-router/history-router';
import Room from '../pages/room/room';
import PrivateRoute from '../private-route/private-route';
import Favorites from '../pages/favorites/favorites';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {checkAuthAction} from '../../store/api-actions';
import {getAuth} from '../../store/user-reducer/selectors';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  dispatch(checkAuthAction());
  const auth = useAppSelector(getAuth);
  return (
    <HistoryRouter history={browserHistory}>
      <Routes>
        <Route
          path={AppRoute.ROOT}
          element={<MainPage />}
        />
        <Route
          path={AppRoute.LOGIN}
          element={<Login />}
        />
        <Route
          path={AppRoute.FAVORITES}
          element={
            <PrivateRoute authorizationStatus={auth}>
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
      </Routes>
    </HistoryRouter>
  );
}

export default App;
