import MainPage from '../pages/main/main';
import {Route, Routes} from 'react-router-dom';
import {AppRoute} from '../../types/types';
import Login from '../pages/login/login';
import browserHistory from '../../browser-history';
import HistoryRouter from '../history-router/history-router';
import Room from '../pages/room/room';

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
          element={<Login />}
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
