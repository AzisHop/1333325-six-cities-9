import {favoritesPage} from '../../../mock/favorites-mock';
import cn from 'classnames';

import FavoritesPlaces from '../../favorites-places/favorites-places';
import FavoritesEmpty from './favorites-empty';

export default function Favorites(): JSX.Element {
  const data = favoritesPage; // ToDo заменить данными с сервера
  const isEmpty = !data.length;
  const pageClass = cn({
    'page': true,
    'page--favorites-empty': isEmpty,
  });
  const mainClass = cn({
    'page__main': true,
    'page__main--favorites': true,
    'page__main--favorites-empty': isEmpty,
  });
  const sectionClass = cn({
    'favorites': true,
    'favorites--empty': isEmpty,
  });
  return (
    <div className={pageClass}>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__left">
              <a className="header__logo-link" href="main.html">
                <img className="header__logo" src="img/logo.svg" alt="6 cities logo" width="81" height="41"/>
              </a>
            </div>
            <nav className="header__nav">
              <ul className="header__nav-list">
                <li className="header__nav-item user">
                  <a className="header__nav-link header__nav-link--profile" href="#">
                    <div className="header__avatar-wrapper user__avatar-wrapper">
                    </div>
                    <span className="header__user-name user__name">{'Oliver.conner@gmail.com'}</span>
                  </a>
                </li>
                <li className="header__nav-item">
                  <a className="header__nav-link" href="#">
                    <span className="header__signout">{'Sign out'}</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      <main className={mainClass}>
        <div className="page__favorites-container container">
          <section className={sectionClass}>
            {isEmpty ? (<FavoritesEmpty/>) : (<FavoritesPlaces favoritesPlaces={data}/>)}
          </section>
        </div>
      </main>
      <footer className="footer container">
        <a className="footer__logo-link" href="main.html">
          <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33"/>
        </a>
      </footer>
    </div>
  );
}

