import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/types';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch} from '../../hooks';
import browserHistory from '../../browser-history';

interface HeaderProps {
  isAuth: boolean;
  email: string;
  page?: string;
  avatarUrl?: string;
}

export default function Header({isAuth, email, page = AppRoute.ROOT, avatarUrl = ''}: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const handleClickSign = () => {
    dispatch(logoutAction());
  };
  const handleClickEmail = () => {
    if (!isAuth) {
      browserHistory.push(AppRoute.LOGIN);
    }
  };
  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className="header__logo-link" to={AppRoute.ROOT}>
              <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
            </Link>
          </div>
          <nav className="header__nav">
            <ul className="header__nav-list">
              {
                isAuth ?
                  (
                    <>
                      <li className="header__nav-item user">
                        <Link className="header__nav-link header__nav-link--profile" to={AppRoute.FAVORITES} onClick={handleClickEmail}>
                          <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${avatarUrl})`}}>
                          </div>
                          <span className="header__user-name user__name">{email}</span>
                        </Link>
                      </li>


                      <li className="header__nav-item">
                        <Link className="header__nav-link" to={page} onClick={handleClickSign}>
                          <span className="header__signout">Sign out</span>
                        </Link>
                      </li>
                    </>
                  ) :
                  (
                    <li className="header__nav-item user">
                      <Link className="header__nav-link header__nav-link--profile" to={AppRoute.LOGIN}>
                        <div className="header__avatar-wrapper user__avatar-wrapper">
                        </div>
                        <span className="header__login">Sign in</span>
                      </Link>
                    </li>
                  )
              }
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
