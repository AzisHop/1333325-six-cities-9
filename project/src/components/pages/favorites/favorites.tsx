import cn from 'classnames';

import FavoritesPlaces from '../../favorites-places/favorites-places';
import FavoritesEmpty from './favorites-empty';
import {AuthorizationStatus} from '../../../types/types';
import Header from '../../header/header';
import {useAppDispatch, useAppSelector} from '../../../hooks';
import {getAuth} from '../../../store/user-reducer/selectors';
import {useEffect} from 'react';
import {fetchFavorites} from '../../../store/api-actions';
import {getFavoritePlaces} from '../../../store/main-reducer/selectors';

export default function Favorites(): JSX.Element {
  const dispatch = useAppDispatch();
  const auth = useAppSelector(getAuth);

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  const data = useAppSelector(getFavoritePlaces);
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
      <Header isAuth={auth === AuthorizationStatus.AUTH} />

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

