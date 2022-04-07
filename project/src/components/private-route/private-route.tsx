import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {checkAuthAction} from '../../store/api-actions';
import {useEffect} from 'react';
import {getAuth} from '../../store/user-reducer/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
  authorizationStatus?: string;
  page?: AppRoute;
  bars?: string;
}

function PrivateRoute({
  children,
  authorizationStatus = AuthorizationStatus.AUTH,
  page = AppRoute.LOGIN, bars,
}: PrivateRouteProps): JSX.Element {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthAction());
  });
  const auth = useAppSelector(getAuth);
  console.log('auth ', auth);
  return (
    auth === authorizationStatus
      ? children
      : <Navigate to={page} />
  );
}

export default PrivateRoute;
