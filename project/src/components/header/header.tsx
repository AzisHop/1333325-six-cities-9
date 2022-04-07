import {Link} from 'react-router-dom';
import {AppRoute} from '../../types/types';
import {logoutAction} from '../../store/api-actions';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {getAvatarUrl, getEmail} from '../../store/user-reducer/selectors';

interface HeaderProps {
  isAuth: boolean;
  page?: string;
}

export default function Header({isAuth, page = AppRoute.ROOT}: HeaderProps): JSX.Element {
  const dispatch = useAppDispatch();
  const email = useAppSelector(getEmail);
  const avatarUrl =useAppSelector(getAvatarUrl);
  const handleSignClick = () => {
    dispatch(logoutAction());
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
                        <Link className="header__nav-link header__nav-link--profile" to={isAuth ? AppRoute.FAVORITES : AppRoute.LOGIN}>
                          <div className="header__avatar-wrapper user__avatar-wrapper" style={{backgroundImage: `url(${avatarUrl})`}}>
                          </div>
                          <span className="header__user-name user__name">{email}</span>
                        </Link>
                      </li>


                      <li className="header__nav-item" onClick={handleSignClick}>
                        <Link className="header__nav-link" to={page}>
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
