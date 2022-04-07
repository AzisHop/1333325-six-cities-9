import {Navigate} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../types/types';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {checkAuthAction} from '../../store/api-actions';
import {useEffect} from 'react';
import {getAuth} from '../../store/user-reducer/selectors';

type PrivateRouteProps = {
  children: JSX.Element;
}

function PrivateRoute(props: PrivateRouteProps): JSX.Element {
  const {children} = props;
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(checkAuthAction());
  });
  const auth = useAppSelector(getAuth);
  return (
    auth === AuthorizationStatus.AUTH
      ? children
      : <Navigate to={AppRoute.LOGIN} />
  );
}

export default PrivateRoute;
