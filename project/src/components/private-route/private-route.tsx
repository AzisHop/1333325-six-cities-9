import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../types/types';
import {useAppSelector} from '../../hooks';
import {getAuth} from '../../store/user-reducer/selectors';
import LoadingScreen from '../loading-screen/loading-screen';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus?: string;
  page?: AppRoute;
}

function PrivateRoute({
  children,
  authorizationStatus = AuthorizationStatus.AUTH,
  page = AppRoute.LOGIN,
}: PrivateRouteProps): JSX.Element {
  const auth = useAppSelector(getAuth);
  if (auth === AuthorizationStatus.UNKNOWN) {
    return <LoadingScreen />;
  }

  return (
    auth === authorizationStatus
      ? children
      : <Navigate to={page} />
  );
}

export default PrivateRoute;
